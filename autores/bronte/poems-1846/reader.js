/* Edición Viva · Brontë 1846: 61 poemas, índice sin alteraciones. */
(()=>{
'use strict';
const poems=window.BRONTE_POEMS_1846||[];
if(poems.length!==61){document.querySelector('#overview').textContent='No se pudo cargar el corpus completo.';return;}
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const getNum=()=>{const n=Number(new URLSearchParams(location.search).get('poem'));return Number.isInteger(n)&&n>=1&&n<=poems.length?n:0};
let current=getNum(), filter='all';
const readKey='ed-bronte-1846-read-v1';
let readIds=new Set();
try {
 const stored=JSON.parse(localStorage.getItem(readKey)||'[]');
 if(Array.isArray(stored))readIds=new Set(stored.filter(n=>Number.isInteger(n)&&n>=1&&n<=61));
} catch {}
const readCount=$('#read-progress-count');
function updateReadUI(){
 if(readCount)readCount.textContent=readIds.size+' de '+poems.length+' leídos';
 document.querySelectorAll('[data-poem-number]').forEach(a=>{
  const n=Number(a.dataset.poemNumber);
  a.classList.toggle('is-read',readIds.has(n));
  a.setAttribute('aria-label',poems[n-1].title+(readIds.has(n)?', leído':', pendiente'));
 });
 const button=$('#toggle-poem-read');
 if(button&&current){
  const read=readIds.has(current);
  button.textContent=read?'✓ Leído · marcar pendiente':'○ Marcar como leído';
  button.setAttribute('aria-pressed',String(read));
 }
}
function markRead(n){
 if(readIds.has(n))readIds.delete(n);else readIds.add(n);
 try {localStorage.setItem(readKey,JSON.stringify([...readIds].sort((a,b)=>a-b)));}catch{}
 updateReadUI();
}
$('#toggle-poem-read')?.addEventListener('click',()=>{if(current)markRead(current)});

/* El ancho del poema se personaliza sin alterar texto, traducciones ni índice. */
const widthControl=$('#reader-width-slider'),widthLabel=$('#reader-width-value'),widthReset=$('#reader-width-reset');
const widthKey='edicion-viva:bronte:poem-width:v1';
const widthDefault=1120,widthMin=720,widthMax=1520,widthStep=80;
let poemWidth=widthDefault;
try {
 const saved=Number(localStorage.getItem(widthKey));
 if(Number.isFinite(saved)&&saved>=widthMin&&saved<=widthMax&&(saved-widthMin)%widthStep===0)poemWidth=saved;
} catch { /* Almacenamiento no disponible: la preferencia dura esta página. */ }
function applyPoemWidth(value){
 poemWidth=value;
 document.documentElement.style.setProperty('--poem-width',value+'px');
 widthControl.value=String(value);
 const percentage=Math.round(value/widthDefault*100);
 widthLabel.textContent=percentage+'%';
 widthControl.setAttribute('aria-valuetext',percentage+' por ciento del ancho original');
 widthReset.disabled=value===widthDefault;
 try { localStorage.setItem(widthKey,String(value)); } catch { /* sin almacenamiento persistente */ }
}
widthControl.addEventListener('input',()=>applyPoemWidth(Number(widthControl.value)));
widthReset.addEventListener('click',()=>applyPoemWidth(widthDefault));
applyPoemWidth(poemWidth);
const link=n=>n?'?poem='+n:'./';
const authorInitial=name=>name.startsWith('Charlotte')?'C':name.startsWith('Emily')?'E':'A';
function buildIndex(){
 const nav=$('#poem-nav'), overview=$('#overview-index');
 nav.replaceChildren();overview.replaceChildren();
 for(const p of poems){
  const a=document.createElement('a');a.href=link(p.n);a.dataset.author=p.author;a.dataset.poemNumber=String(p.n);
  if(p.n===current)a.setAttribute('aria-current','page');
  a.innerHTML='<span class="n">'+String(p.n).padStart(2,'0')+'</span><span>'+esc(p.title)+'<small>'+esc(p.penName)+' · p. '+p.page+'</small></span>';
  nav.append(a);
  const item=document.createElement('a');item.href=link(p.n);item.dataset.poemNumber=String(p.n);
  item.innerHTML='<span class="num">'+String(p.n).padStart(2,'0')+'</span><span class="name">'+esc(p.title)+'</span><span class="author-letter">'+authorInitial(p.author)+'</span>';
  overview.append(item);
 }
 updateReadUI();
 $('#progress-fill').style.width=(current/61*100)+'%';
 $('#current-position').textContent=current?'Poema '+current+' de 61':'Índice · 61 poemas';
}
function setFilter(author){
 filter=author;
 document.querySelectorAll('.filter').forEach(b=>{const active=b.dataset.author===author;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
 document.querySelectorAll('#poem-nav a').forEach(a=>{a.hidden=author!=='all'&&a.dataset.author!==author});
 $('#filter-description').textContent=author==='all'?'Orden original · 61 poemas':author+' · '+poems.filter(p=>p.author===author).length+' poemas';
}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>setFilter(b.dataset.author)));
$('#toggle-index').addEventListener('click',()=>{const opened=document.body.classList.toggle('nav-open');$('#toggle-index').setAttribute('aria-expanded',String(opened));if(opened)requestAnimationFrame(centerSelectedPoem)});
/* Se anotan solo referencias y dificultades relevantes, no cada palabra inglesa. */
const notes=window.BRONTE_READING_NOTES_1846||{};
const scholarship=window.BRONTE_SCHOLARSHIP_1846||{};
for(const [poemNo,dossier] of Object.entries(scholarship)){
  if(!notes[poemNo])notes[poemNo]={};
  for(const item of dossier.notes||[]){
    if(!item.phrase||notes[poemNo][item.line])continue;
    const primary=item.sources?.[0];
    notes[poemNo][item.line]={
      phrase:item.phrase,label:item.title,explanation:item.body,
      url:primary?.url||null,linkText:primary?.label||"Ver fuente"
    };
  }
}
const commentaries=window.BRONTE_COMMENTARIES_1846||[];
const popup=$('#word-popup');
function showNote(note,node){
 $('#word-label').textContent=note.label;
 $('#word-explanation').textContent=note.explanation;
 const a=$('#word-lookup');
 if(note.url){a.hidden=false;a.href=note.url;a.textContent=(note.linkText||'Ver fuente')+' ↗';}
 else {a.hidden=true;a.removeAttribute('href');}
 popup.hidden=false;
 const bounds=node.getBoundingClientRect(),w=295;
 popup.style.left=Math.max(12,Math.min(innerWidth-w-12,bounds.left))+'px';
 popup.style.top=Math.max(12,Math.min(innerHeight-220,bounds.bottom+10))+'px';
}
$('#close-word-popup').addEventListener('click',()=>popup.hidden=true);
window.addEventListener('keydown',e=>{if(e.key==='Escape'){popup.hidden=true;document.body.classList.remove('nav-open')}});
document.addEventListener('pointerdown',e=>{if(!popup.hidden&&!popup.contains(e.target)&&!e.target.closest('.note-anchor'))popup.hidden=true});
function renderOriginal(text,line,pNo,lineNo){
 const note=notes[pNo]?.[lineNo],idx=note?text.indexOf(note.phrase):-1;
 if(!note||idx<0){line.textContent=text;return;}
 line.append(document.createTextNode(text.slice(0,idx)));
 const trigger=document.createElement('button');trigger.type='button';trigger.className='note-anchor';trigger.textContent=note.phrase;
 trigger.setAttribute('aria-label','Nota: '+note.label);
 trigger.addEventListener('click',()=>showNote(note,trigger));
 line.append(trigger,document.createTextNode(text.slice(idx+note.phrase.length)));
}
function renderCommentary(p){
 const box=$('#poem-commentary'),body=$('#poem-commentary-body'),links=$('#poem-commentary-links');
 const comment=commentaries[p.n-1];
 if(!comment){box.hidden=true;return;}
 box.hidden=false;body.textContent=comment.body;links.replaceChildren();
 for(const item of comment.links||[]){
   const a=document.createElement('a');a.href=item.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=item.label+' ↗';links.append(a);
 }
}
function renderScholarship(p){
 const panel=$('#poem-scholarship'),intro=$('#scholarship-intro'),list=$('#scholarship-notes');
 const dossier=scholarship[p.n];
 list.replaceChildren();
 if(!dossier?.notes?.length){panel.hidden=true;return;}
 panel.hidden=false;
 intro.textContent=dossier.intro||'Notas de lectura y fuentes contrastadas.';
 for(const item of dossier.notes){
   const li=document.createElement('li');li.className='scholarly-note';li.id='bronte-p'+p.n+'-note-'+item.line;
   const head=document.createElement('div');head.className='scholarly-note-head';
   const verse=document.createElement('a');verse.className='scholarly-note-line';verse.href='#bronte-p'+p.n+'-v'+item.line;verse.textContent='v. '+item.line+' ↑';verse.title='Ir al verso '+item.line;
   const kind=document.createElement('span');kind.className='scholarly-note-kind';kind.textContent=item.kind||'Nota';
   const title=document.createElement('h3');title.textContent=item.title;
   const body=document.createElement('p');body.textContent=item.body;
   const sources=document.createElement('div');sources.className='scholarly-sources';
   for(const source of item.sources||[]){
     if(!source.url||!source.label)continue;
     const a=document.createElement('a');a.href=source.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=source.label+' ↗';
     sources.append(a);
   }
   head.append(verse,kind);li.append(head,title,body,sources);list.append(li);
 }
}
function renderPoem(p){
 $('#overview').hidden=true;$('#poem-view').hidden=false;
 document.title=p.title+' · Brontë 1846 — Edición Viva';
 $('#poem-number').textContent='POEMA '+String(p.n).padStart(2,'0')+' / 61';
 $('#poem-title').textContent=p.title;
 $('#poem-byline').textContent=p.penName+' — '+p.author;
 $('#poem-original-page').textContent='Edición de 1846 · p. '+p.page;
 const total=p.stanzas.flat().length,tr=p.translatedLines?.length||0;
 $('#poem-status').textContent='Original: '+total+' líneas · Traducción: '+(tr===0?'pendiente':(tr===total?'completa':'parcial ('+tr+'/'+total+' líneas)'));
 const root=$('#poem-content');root.replaceChildren();const reader=$('#reader');
 reader.classList.toggle('no-translation',!tr);
 const tButton=$('#toggle-translation');tButton.disabled=!tr;tButton.setAttribute('aria-pressed',String(!!tr));
 $('#toggle-layout').disabled=!tr;let n=0;
 for(const [index,stanza] of p.stanzas.entries()){
   const block=document.createElement('section');block.className='stanza';block.setAttribute('aria-label','Estrofa '+(index+1));
   for(const original of stanza){
    n++;const row=document.createElement('div');row.className='verse';row.id='bronte-p'+p.n+'-v'+n;
    const number=document.createElement('span');number.className='number';number.textContent=(n===1||n%5===0)?String(n):'';
    const en=document.createElement('div');en.className='latin';en.lang='en';renderOriginal(original,en,p.n,n);
    const es=document.createElement('div');es.className='spanish';es.lang='es';es.textContent=p.translatedLines?.[n-1]||'';
    if(p.translatedLines?.[n-1])row.classList.add('has-translation');
    if(/^([IVX]+\.|A FRAGMENT\.)/.test(original))row.classList.add('subheading-verse');
    row.append(number,en,es);block.append(row);
   }
   root.append(block);
 }
 renderCommentary(p);
 renderScholarship(p);
 const note=$('#editorial-note');
 note.textContent='Transcripción inicial: '+(p.sourceType==='wikisource-1846'?'Wikisource, testimonio de 1846.':'GITenberg / Project Gutenberg, comparada con el índice del volumen de 1846.')+' El cotejo de variantes gráficas, puntuación y lecturas con el ejemplar original está pendiente. Traducción española completa para los 61 poemas; aparato crítico en elaboración por tandas, con fuentes identificadas.';
 const prev=$('#poem-prev'),next=$('#poem-next');
 prev.href=link(p.n>1?p.n-1:0);
 prev.innerHTML='<small>← '+(p.n>1?'ANTERIOR':'VOLVER AL ÍNDICE')+'</small>'+esc(p.n>1?poems[p.n-2].title:'Los 61 poemas');
 next.href=link(p.n<61?p.n+1:0);
 next.innerHTML='<small>'+(p.n<61?'SIGUIENTE':'VOLVER AL ÍNDICE')+' →</small>'+esc(p.n<61?poems[p.n].title:'Los 61 poemas');
}
$('#toggle-translation').addEventListener('click',()=>{
 const el=$('#reader');const hidden=el.classList.toggle('hide-translation');$('#toggle-translation').setAttribute('aria-pressed',String(!hidden));
});
function centerSelectedPoem(){
  if(!current)return;
  const nav=$('#poem-nav'), active=nav?.querySelector('a[aria-current="page"]');
  if(!nav||!active||active.hidden)return;
  // Scroll only the INNER navigation, never the document, and center when possible.
  const navBox=nav.getBoundingClientRect(),activeBox=active.getBoundingClientRect();
  const desired=nav.scrollTop+(activeBox.top-navBox.top)-(nav.clientHeight-activeBox.height)/2;
  nav.scrollTop=Math.max(0,Math.min(nav.scrollHeight-nav.clientHeight,desired));
}
buildIndex();setFilter('all');if(current)renderPoem(poems[current-1]);
requestAnimationFrame(centerSelectedPoem);
window.addEventListener('pageshow',centerSelectedPoem);
document.fonts?.ready.then(centerSelectedPoem);
})();