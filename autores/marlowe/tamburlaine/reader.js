/* Tamburlaine I · lector bilingüe incremental de Edición Viva. */
(() => {
'use strict';
const E=window.TAMBURLAINE_EDITION;if(!E)return;
const $=s=>document.querySelector(s);
const targetPro=$('#prologue-verses'),targetScene=$('#scene-verses'),targetScene2=$('#scene2-verses'),act2Targets=[1,2,3,4,5,6,7].map(n=>$('#act2-scene'+n+'-verses')),act3Targets=[1,2,3].map(n=>$('#act3-scene'+n+'-verses')),act4Targets=[1,2].map(n=>$('#act4-scene'+n+'-verses'));
const lex=E.lex||{},noteMap=E.notes||{},wordPanel=$('#word-panel'),notePanel=$('#note-panel'),drawer=$('#side-drawer');
const STORE='edicion-viva:dictionary:en:v1',POS='edicion-viva:marlowe-tamburlaine:position';
let current=null,notesEnabled=true;
function keyOf(w){return w.toLowerCase();}
function readSaved(){try{const x=JSON.parse(localStorage.getItem(STORE)||'[]');return Array.isArray(x)?x:[]}catch{return []}}
function writeSaved(x){try{localStorage.setItem(STORE,JSON.stringify(x));return true}catch{return false}}
function hidePopups(){wordPanel.hidden=true;notePanel.hidden=true;document.querySelectorAll('.token[aria-pressed]').forEach(x=>x.removeAttribute('aria-pressed'));}
function place(panel,anchor){panel.hidden=false;const b=anchor.getBoundingClientRect(),r=panel.getBoundingClientRect(),pad=12;panel.style.left=Math.max(pad,Math.min(window.innerWidth-r.width-pad,b.left))+'px';panel.style.top=(b.bottom+12+r.height+pad<window.innerHeight?b.bottom+8:Math.max(pad,b.top-r.height-8))+'px';}
function refreshSave(){if(!current)return;const ok=readSaved().some(x=>x.lemma===current.lemma&&x.form===current.form);$('#save-word').textContent=ok?'✓ Guardada en mi diccionario':'+ Guardar en mi diccionario';$('#save-word').setAttribute('aria-pressed',String(ok));}
function showLex(form,anchor){hidePopups();const entry=lex[keyOf(form)];if(!entry)return;current={form:form,lemma:entry[0],analysis:entry[1],gloss:entry[2],source:'marlowe-tamburlaine-1'};
$('#word-form').textContent=form;$('#word-lemma').textContent=current.lemma;$('#word-morphology').textContent=current.analysis;$('#word-gloss').textContent=current.gloss;
$('#word-paradigm').href='https://en.wiktionary.org/wiki/'+encodeURIComponent(current.lemma)+'#English';
anchor.setAttribute('aria-pressed','true');place(wordPanel,anchor);refreshSave();}
function renderWords(str,node){
const re=/[\p{L}\p{M}]+(?:[’'-][\p{L}\p{M}]+)*/gu;let last=0;
for(const m of str.matchAll(re)){const i=m.index,w=m[0];if(i>last)node.append(document.createTextNode(str.slice(last,i)));
if(lex[keyOf(w)]){const b=document.createElement('button');b.type='button';b.className='token';b.textContent=w;b.setAttribute('aria-label','Consultar '+w);b.addEventListener('click',()=>showLex(w,b));node.append(b);}
else node.append(document.createTextNode(w));last=i+w.length;}
if(last<str.length)node.append(document.createTextNode(str.slice(last)));
}
function renderLine(d,part){
const row=document.createElement('div');row.className='verse';row.id=part==='P'?'mar-pro-'+d.number:part==='II'?'mar-i2-'+d.number:part.startsWith('A2-')?'mar-ii'+part.slice(3)+'-'+d.number:part.startsWith('A3-')?'mar-iii'+part.slice(3)+'-'+d.number:part.startsWith('A4-')?'mar-iv'+part.slice(3)+'-'+d.number:'mar-i1-'+d.number;row.dataset.sceneId=part==='P'?'marlowe-tamburlaine-prologue':part==='II'?'marlowe-tamburlaine-1-2':part.startsWith('A2-')?'marlowe-tamburlaine-2-'+part.slice(3):part.startsWith('A3-')?'marlowe-tamburlaine-3-'+part.slice(3):part.startsWith('A4-')?'marlowe-tamburlaine-4-'+part.slice(3):'marlowe-tamburlaine-1-1';
const number=document.createElement('span');number.className='number';number.textContent=d.number;
const speech=document.createElement('div');speech.className='speech';speech.lang='en';
if(d.speaker){const who=document.createElement('span');who.className='speaker';who.textContent=d.speaker;speech.append(who);}
const en=document.createElement('p');en.className='latin';en.lang='en';renderWords(d.en,en);speech.append(en);
const n=noteMap[part==='P'?'P'+d.number:part==='II'?'I2-'+d.number:part.startsWith('A2-')?'II'+part.slice(3)+'-'+d.number:part.startsWith('A3-')?'III'+part.slice(3)+'-'+d.number:part.startsWith('A4-')?'IV'+part.slice(3)+'-'+d.number:String(d.number)];
if(n){const b=document.createElement('button');b.className='note-anchor';b.type='button';b.textContent='nota';b.setAttribute('aria-label','Nota filológica al verso '+d.number);b.addEventListener('click',()=>{hidePopups();$('#note-heading').textContent=n[0];$('#note-content').textContent=n[1];place(notePanel,b);});speech.append(b);}
const es=document.createElement('p');es.className='spanish';es.lang='es';es.textContent=d.es;row.append(number,speech,es);return row;
}
function stageDirections(container,act,scene,afterLine) {
 for(const d of E.stageDirections||[]) {
  if((d.act||1)!==act||d.scene!==scene||d.afterLine!==afterLine)continue;
  const p=document.createElement('p');p.className='stage-direction inline-direction';
  const en=document.createElement('span');en.lang='en';en.textContent=d.en;
  const es=document.createElement('span');es.lang='es';es.textContent=d.es;
  p.append(en,es);container.append(p);
 }
}
function publishScene(verses,container,act,scene,part) {
 if(!container)return;
 stageDirections(container,act,scene,0);
 for(const d of verses){container.append(renderLine(d,part));stageDirections(container,act,scene,d.number);}
}
E.prologue.forEach(d=>targetPro.append(renderLine(d,'P')));
publishScene(E.scene,targetScene,1,1,'I');
publishScene(E.scene2||[],targetScene2,1,2,'II');
[1,2,3,4,5,6,7].forEach(n=>publishScene(E.act2Scenes?.[String(n)]||[],act2Targets[n-1],2,n,'A2-'+n));
[1,2,3].forEach(n=>publishScene(E.act3Scenes?.[String(n)]||[],act3Targets[n-1],3,n,'A3-'+n));
[1,2].forEach(n=>publishScene(E.act4Scenes?.[String(n)]||[],act4Targets[n-1],4,n,'A4-'+n));
function listSaved(){const data=readSaved();$('#saved-count').textContent=data.length;const list=$('#dictionary-list');list.replaceChildren();if(!data.length){const p=document.createElement('p');p.className='storage-note';p.textContent='Todavía no guardaste palabras.';list.append(p);return;}
data.sort((a,b)=>a.form.localeCompare(b.form,'en')).forEach(d=>{const div=document.createElement('div');div.className='dict-record';const strong=document.createElement('strong');strong.textContent=d.form;const small=document.createElement('small');small.textContent=d.lemma+' · '+d.gloss;const del=document.createElement('button');del.type='button';del.textContent='Eliminar';del.addEventListener('click',()=>{writeSaved(readSaved().filter(x=>!(x.form===d.form&&x.lemma===d.lemma)));listSaved();refreshSave();});div.append(strong,small,del);list.append(div);});}
$('#save-word').addEventListener('click',()=>{if(!current)return;const data=readSaved();if(!data.some(x=>x.form===current.form&&x.lemma===current.lemma))data.push(current);if(writeSaved(data)){refreshSave();listSaved();}else $('#dictionary-feedback').textContent='No se pudo guardar en este navegador.';});
function openDrawer(){drawer.hidden=false;listSaved();}function closeDrawer(){drawer.hidden=true;}
$('#open-dictionary').addEventListener('click',openDrawer);$('#mobile-dictionary').addEventListener('click',openDrawer);$('#close-drawer').addEventListener('click',closeDrawer);
$('#export-dictionary').addEventListener('click',()=>{const b=new Blob([JSON.stringify({language:'en',entries:readSaved()},null,2)],{type:'application/json'});const u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='edicion-viva-diccionario-ingles.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);});
$('#close-word').addEventListener('click',hidePopups);$('#close-note').addEventListener('click',hidePopups);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePopups();closeDrawer();}});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.popover-card,.token,.note-anchor'))hidePopups();});
$('#toggle-notes').addEventListener('click',()=>{notesEnabled=!notesEnabled;document.querySelectorAll('.note-anchor').forEach(x=>x.hidden=!notesEnabled);$('#toggle-notes').textContent='Notas: '+(notesEnabled?'sí':'no');$('#toggle-notes').setAttribute('aria-pressed',String(notesEnabled));});
const search=$('#search-input');search.addEventListener('input',()=>{const q=search.value.toLocaleLowerCase('es').trim();let visible=0;document.querySelectorAll('.verse').forEach(r=>{const match=!q||r.textContent.toLocaleLowerCase('es').includes(q);r.hidden=!match;if(match)visible++;});$('#empty-results').hidden=!!visible;document.querySelectorAll('.passage-heading').forEach(h=>{const section=h.closest('.text-section');h.hidden=!!q&&!section.querySelector('.verse:not([hidden])');});});
const nav=$('#sidebar'),rail=$('#character-rail'),shell=$('#app-shell');
function toggleNav(){if(window.matchMedia('(max-width:860px)').matches){nav.classList.toggle('open');$('#mobile-nav').setAttribute('aria-expanded',String(nav.classList.contains('open')));}else shell.classList.toggle('nav-collapsed');}
$('#mobile-nav').addEventListener('click',toggleNav);$('#nav-panel-toggle').addEventListener('click',toggleNav);
$('#characters-panel-toggle').addEventListener('click',()=>{if(window.matchMedia('(max-width:1160px)').matches)rail.classList.toggle('open');else shell.classList.toggle('characters-collapsed');});
$('#mobile-characters').addEventListener('click',()=>rail.classList.toggle('open'));
document.querySelectorAll('.scene-index a[href^="#"]').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const resume=$('#resume-reading');
resume.addEventListener('click',()=>{try{const saved=localStorage.getItem(POS),node=saved&&document.getElementById(saved);if(node)node.scrollIntoView({behavior:'smooth'});}catch{}});
try{const saved=localStorage.getItem(POS);if(saved&&document.getElementById(saved))resume.disabled=false;}catch{}
let lastId='';
const observer=new IntersectionObserver(entries=>{const xs=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(!xs.length)return;const row=xs[0].target;if(row.id===lastId)return;lastId=row.id;try{localStorage.setItem(POS,lastId);}catch{}resume.disabled=false;
$('#current-position').textContent=row.id.startsWith('mar-pro-')?'Prólogo · v. '+row.querySelector('.number').textContent:row.id.startsWith('mar-iv')?'Acto IV · Escena '+row.id.match(/^mar-iv(\d+)/)?.[1]+' · v. '+row.querySelector('.number').textContent:row.id.startsWith('mar-iii')?'Acto III · Escena '+row.id.match(/^mar-iii(\d+)/)?.[1]+' · v. '+row.querySelector('.number').textContent:row.id.startsWith('mar-ii')?'Acto II · Escena '+row.id.match(/^mar-ii(\d+)/)?.[1]+' · v. '+row.querySelector('.number').textContent:row.id.startsWith('mar-i2-')?'Acto I · Escena 2 · v. '+row.querySelector('.number').textContent:'Acto I · Escena 1 · v. '+row.querySelector('.number').textContent;
const active=row.closest('.text-section')?.id;document.querySelectorAll('.scene-index a[data-section]').forEach(a=>{if(a.dataset.section===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});},{rootMargin:'-80px 0px -45% 0px',threshold:0});
document.querySelectorAll('.verse').forEach(row=>observer.observe(row));
listSaved();
})();