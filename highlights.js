/* Edición Viva · resaltados personales de fragmentos.
   La lectura no requiere cuenta; las cuentas sincronizan por Supabase.
   Los rangos usan identificadores de verso/intervención y offsets de caracteres.
*/
(() => {
  'use strict';
  const STORAGE = 'edicion-viva:highlights:v1';
  const workId = document.body.dataset.readingId || '';
  const workTitle = document.body.dataset.readingTitle || document.title;
  const workLinks = {
    'plauto-aulularia': '/edicion-viva/autores/plauto/aulularia/',
    'evangelios-marcos': '/edicion-viva/autores/evangelios/marcos/',
    'shakespeare-coriolanus': '/shakespeare-edicion-viva/'
  };
  const isReader = !!workId;
  const read = () => {
    try {
      const v = JSON.parse(localStorage.getItem(STORAGE) || '[]');
      return Array.isArray(v) ? v.filter(x => x && typeof x.id === 'string' &&
        Array.isArray(x.segments) && typeof x.workId === 'string') : [];
    } catch { return []; }
  };
  function store(values) {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(values));
      window.dispatchEvent(new Event('edicion-viva:highlights-updated'));
    } catch { announce('No se pudo guardar en este navegador.'); }
  }
  const el = (tag, cls, label) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (label !== undefined) n.textContent = label;
    return n;
  };
  let toolbar, panel, listing, pending, refreshTimer, observer;
  const supported = '.verse .latin, .verse > .spanish, .speech-row .speech-cell.english .speech-text, .speech-row .speech-cell.spanish .speech-text';
  const announce = message => {
    const s = document.querySelector('#ev-highlights-message');
    if (s) s.textContent = message;
  };
  function initTargets() {
    const result = new Map();
    for (const t of document.querySelectorAll(supported)) {
      const row = t.closest('.verse, .speech-row');
      if (!row?.id) continue;
      const role = t.closest('.spanish') ? 'translation' : 'original';
      const key = row.id + '|' + role;
      if (t.dataset.evHighlightKey !== key) t.dataset.evHighlightKey = key;
      result.set(key, t);
    }
    return result;
  }
  function charPoint(target, offset) {
    const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);
    let node, left = offset, last = null;
    while ((node = walker.nextNode())) {
      last = node;
      if (left <= node.length) return { node, offset: left };
      left -= node.length;
    }
    return last ? { node:last, offset:last.length } : null;
  }
  function spanRange(target, start, end) {
    if (start < 0 || end <= start || end > target.textContent.length) return null;
    const a = charPoint(target,start), b = charPoint(target,end);
    if (!a || !b) return null;
    const range = document.createRange();
    range.setStart(a.node,a.offset);
    range.setEnd(b.node,b.offset);
    return range;
  }
  function locateSegment(target, seg) {
    const text = target.textContent;
    const from = Number(seg.start), to = Number(seg.end);
    if (Number.isInteger(from) && Number.isInteger(to) &&
      text.slice(from,to) === seg.text) return [from,to];
    // Re-anchor if a punctuation or editorial correction changed offsets.
    if (typeof seg.text === 'string' && seg.text.length > 0) {
      let i = text.indexOf(seg.text), best = i, distance = Math.abs(i-from);
      while (i >= 0) {
        if (Math.abs(i-from) < distance) { best=i; distance=Math.abs(i-from); }
        i = text.indexOf(seg.text,i+1);
      }
      if (best >= 0) return [best,best+seg.text.length];
    }
    return null;
  }
  function refreshMarks() {
    if (!isReader) return;
    const targets = initTargets();
    const ranges = [];
    document.querySelectorAll('.ev-highlight-fallback').forEach(t=>t.classList.remove('ev-highlight-fallback'));
    for (const item of read().filter(x=>x.workId===workId)) {
      for (const seg of item.segments) {
        const target = targets.get(seg.key);
        if (!target) continue;
        const offsets = locateSegment(target,seg);
        if (!offsets) continue;
        const r = spanRange(target,...offsets);
        if (r) ranges.push(r);
        if (!window.CSS?.highlights || !window.Highlight) target.classList.add('ev-highlight-fallback');
      }
    }
    if (window.CSS?.highlights && window.Highlight) {
      if (ranges.length) window.CSS.highlights.set('edicion-viva-highlights', new window.Highlight(...ranges));
      else window.CSS.highlights.delete('edicion-viva-highlights');
    }
  }
  function scheduleRefresh() {
    if (refreshTimer) return;
    refreshTimer = setTimeout(()=>{
      refreshTimer=null;
      refreshMarks();
      renderLists();
    },100);
  }
  function selectionDetails() {
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount !== 1 ||
      !sel.toString().trim()) return null;
    const range = sel.getRangeAt(0);
    const targets = initTargets();
    const segments = [];
    for (const [key,target] of targets) {
      if (!range.intersectsNode(target)) continue;
      const total = target.textContent.length;
      let start=0,end=total;
      if (target.contains(range.startContainer)) {
        const prefix=document.createRange();
        prefix.selectNodeContents(target);
        prefix.setEnd(range.startContainer,range.startOffset);
        start=prefix.toString().length;
      }
      if (target.contains(range.endContainer)) {
        const prefix=document.createRange();
        prefix.selectNodeContents(target);
        prefix.setEnd(range.endContainer,range.endOffset);
        end=prefix.toString().length;
      }
      if (end <= start) continue;
      const part = target.textContent.slice(start,end);
      if (!part.trim()) continue;
      segments.push({key,start,end,text:part});
    }
    if (!segments.length || segments.length > 100) return null;
    const excerpt=segments.map(x=>x.text.trim()).join(' … ').slice(0,4000);
    if (excerpt.length < 2) return null;
    const lines=segments.map(x=>x.key.split('|')[0]);
    const first=lines[0],last=lines[lines.length-1];
    const label= first===last ? first.replace(/^v/,'v. ').replace(/^speech-/,'') :
      first.replace(/^v/,'v. ').replace(/^speech-/,'')+' – '+last.replace(/^v/,'v. ').replace(/^speech-/,'');
    return { excerpt, segments, locationLabel:label, bounds:range.getBoundingClientRect() };
  }
  function hideToolbar() {
    if (toolbar) toolbar.hidden=true;
    pending=null;
  }
  function showSelectionButton() {
    if (!toolbar || panel?.hidden===false) return;
    const found=selectionDetails();
    if (!found) {hideToolbar();return;}
    pending=found;
    toolbar.hidden=false;
    const w=toolbar.offsetWidth || 160, h=toolbar.offsetHeight || 40;
    toolbar.style.left=Math.max(12,Math.min(innerWidth-w-12,found.bounds.left))+'px';
    toolbar.style.top=Math.max(12,Math.min(innerHeight-h-12,found.bounds.top-h-10>=12?found.bounds.top-h-10:found.bounds.bottom+10))+'px';
  }
  function saveSelection() {
    const data=pending;
    hideToolbar();
    if (!data) return;
    const now=new Date().toISOString();
    const item={
      id:crypto.randomUUID(),
      workId,workTitle, excerpt:data.excerpt,
      segments:data.segments, locationLabel:data.locationLabel,
      createdAt:now,updatedAt:now
    };
    store([item,...read()]);
    window.getSelection()?.removeAllRanges();
    announce('Resaltado guardado.');
  }
  function jumpTo(item) {
    if (!isReader || item.workId!==workId) {
      location.href=workLinks[item.workId] || './index.html';
      return;
    }
    const key=item.segments[0]?.key || '';
    const id=key.split('|')[0];
    const row=document.getElementById(id);
    if (row) {
      row.scrollIntoView({behavior:'smooth',block:'center'});
      panel.hidden=true;
    } else announce('Este fragmento está en otra escena. Elegila en el índice de la obra.');
  }
  function deleteItem(id) {
    store(read().filter(x=>x.id!==id));
    announce('Resaltado eliminado.');
  }
  function buildCard(item, navigate=true) {
    const card=el('article','ev-highlight-card');
    const meta=el('div','ev-highlight-meta',item.workTitle+' · '+(item.locationLabel||'Pasaje'));
    const quote=el('blockquote','',item.excerpt);
    const actions=el('div','ev-highlight-actions');
    if (navigate) {
      const go=el('button','ev-highlight-open','Ir al pasaje');
      go.type='button';
      go.addEventListener('click',()=>jumpTo(item));
      actions.append(go);
    }
    const remove=el('button','ev-highlight-remove','Eliminar');
    remove.type='button';
    remove.addEventListener('click',()=>deleteItem(item.id));
    actions.append(remove);
    card.append(meta,quote,actions);
    return card;
  }
  function renderLists() {
    const items=read().sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
    if (listing) {
      listing.replaceChildren();
      const mine=items.filter(x=>x.workId===workId);
      if (!mine.length) listing.append(el('p','ev-highlight-empty','Todavía no guardaste pasajes de esta obra. Seleccioná unas palabras para resaltarlas.'));
      else mine.forEach(x=>listing.append(buildCard(x)));
    }
    const global=document.querySelector('#highlights-collection');
    if (global) {
      const filter=document.querySelector('#highlight-work-filter');
      const selected=filter?.value||'all';
      if (filter) {
        const previous=filter.value;
        filter.replaceChildren(new Option('Todas las obras','all'));
        const names=new Map(items.map(x=>[x.workId,x.workTitle]));
        for (const [id,title] of names) filter.add(new Option(title,id));
        if ([...filter.options].some(x=>x.value===previous)) filter.value=previous;
      }
      global.replaceChildren();
      const subset=items.filter(x=>selected==='all'||x.workId===selected);
      if (!subset.length) global.append(el('p','ev-highlight-empty','Todavía no hay pasajes resaltados.'));
      else subset.forEach(item=>{
        const card=buildCard(item,false);
        const link=el('a','ev-highlight-open','Abrir obra ↗');
        const rowId=item.segments[0]?.key?.split('|')[0] || '';
        const base=workLinks[item.workId]||'./index.html';
        // Direct anchors are stable for Plautus and Mark. Shakespeare renders
        // scenes dynamically and therefore opens its reader at the work level.
        link.href=base + (rowId && item.workId!=='shakespeare-coriolanus' ?
          '#' + encodeURIComponent(rowId) : '');
        card.querySelector('.ev-highlight-actions').prepend(link);
        global.append(card);
      });
      const total=document.querySelector('#highlight-total');
      if (total) total.textContent=items.length+' resaltado'+(items.length===1?'':'s');
    }
  }
  function initReader() {
    const actions=document.querySelector('.topbar-actions')||document.querySelector('.home-topbar');
    if (actions) {
      const btn=el('button','ev-highlights-nav','Resaltados');
      btn.type='button';
      btn.title='Ver resaltados de esta obra';
      btn.addEventListener('click',()=>{
        panel.hidden=false;
        hideToolbar();
        renderLists();
        panel.querySelector('.ev-highlights-close').focus();
      });
      actions.prepend(btn);
    }
    panel=el('aside','ev-highlights-panel');
    panel.hidden=true;
    panel.setAttribute('aria-label','Resaltados de esta obra');
    const top=el('div','ev-highlights-heading');
    top.append(el('h2','', 'Resaltados · '+workTitle));
    const close=el('button','ev-highlights-close','×');
    close.type='button';
    close.setAttribute('aria-label','Cerrar resaltados');
    close.addEventListener('click',()=>{panel.hidden=true;});
    top.append(close);
    listing=el('div','ev-highlights-list');
    const all=el('a','ev-highlights-all','Ver mis highlights de todas las obras ↗');
    all.href=location.pathname.includes('/shakespeare-edicion-viva/')?
      '../edicion-viva/mis-highlights.html':'../../../mis-highlights.html';
    panel.append(top,el('p','ev-highlights-hint','Seleccioná un pasaje del original o de la traducción para guardarlo.'),listing,all);
    const msg=el('p','ev-highlights-status');
    msg.id='ev-highlights-message';
    msg.setAttribute('role','status');
    panel.append(msg);
    document.body.append(panel);
    toolbar=el('button','ev-highlight-toolbar','Resaltar pasaje');
    toolbar.hidden=true;
    toolbar.type='button';
    toolbar.addEventListener('pointerdown',e=>e.preventDefault());
    toolbar.addEventListener('click',saveSelection);
    document.body.append(toolbar);
    document.addEventListener('pointerup',()=>setTimeout(showSelectionButton,100));
    document.addEventListener('keyup',e=>{
      if (e.key==='Shift'||e.key.startsWith('Arrow')) setTimeout(showSelectionButton,0);
    });
    document.addEventListener('selectionchange',()=>{
      if (toolbar?.hidden===false) return;
      setTimeout(showSelectionButton,180);
    });
    document.addEventListener('keydown',e=>{
      if (e.key==='Escape') {panel.hidden=true;hideToolbar();}
    });
    document.addEventListener('pointerdown',e=>{
      if (!toolbar.hidden && e.target!==toolbar) hideToolbar();
    },true);
    const root=document.querySelector('#dialogue-container') ||
      document.querySelector('#reader') || document.querySelector('#texto');
    if (root) {
      observer=new MutationObserver(scheduleRefresh);
      observer.observe(root,{childList:true,subtree:true});
    }
    scheduleRefresh();
  }
  window.addEventListener('edicion-viva:highlights-updated',scheduleRefresh);
  window.addEventListener('storage',event=>{
    if(event.key===STORAGE) scheduleRefresh();
  });
  window.EdicionVivaHighlights={read,add:item=>store([item,...read()]),remove:deleteItem,refresh:scheduleRefresh};
  if (isReader) initReader();
  else {
    const filter=document.querySelector('#highlight-work-filter');
    if(filter) filter.addEventListener('change',renderLists);
    renderLists();
  }
})();
