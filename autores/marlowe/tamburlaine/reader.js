/* Tamburlaine · lector bilingüe por escena, con notas integradas en el texto. */
(() => {
'use strict';
const E=window.TAMBURLAINE_EDITION;if(!E)return;
const $=s=>document.querySelector(s);
const targetPro=$('#prologue-verses'),part2ProTarget=$('#parte2-prologo-verses'),targetScene=$('#scene-verses'),targetScene2=$('#scene2-verses'),act2Targets=[1,2,3,4,5,6,7].map(n=>$('#act2-scene'+n+'-verses')),act3Targets=[1,2,3].map(n=>$('#act3-scene'+n+'-verses')),act4Targets=[1,2,3,4].map(n=>$('#act4-scene'+n+'-verses')),act5Target=$('#act5-scene1-verses'),part2Targets=[1,2,3].map(n=>$('#parte2-acto1-escena'+n+'-verses')),part2Act2Targets=[1,2,3,4].map(n=>$('#parte2-acto2-escena'+n+'-verses')),part2Act3Targets=[1,2,3,4,5].map(n=>$('#parte2-acto3-escena'+n+'-verses')),part2Act4Targets=[1,2,3].map(n=>$('#parte2-acto4-escena'+n+'-verses')),part2Act5Targets=[1,2,3].map(n=>$('#parte2-acto5-escena'+n+'-verses'));
const lex=E.lex||{},noteMap=E.notes||{},wordPanel=$('#word-panel'),notePanel=$('#note-panel'),drawer=$('#side-drawer');
const STORE='edicion-viva:dictionary:en:v1',POS='edicion-viva:marlowe-tamburlaine:position';
let current=null,notesEnabled=true;
let activeScene=null,positionObserver=null;
const sections=Array.from(document.querySelectorAll('.text-section'));

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
const NOTE_TERMS={
  P1:'jigging veins',P4:'Scythian Tamburlaine',P7:'tragic glass',
  '1':'Brother Cosroe','6':'Unhappy Persia','10':'sun dares scarce appear',
  '13':'Cynthia with Saturn','15':'[their] influence','18':'I see your meaning well enough'
};
// Las notas son fragmentos subrayados del texto, sin iconos ni llamadas sueltas.
function renderAnnotatedText(line,target,note,key){
  if(!note){renderWords(line,target);return;}
  const wanted=NOTE_TERMS[key]||'';
  const found=wanted?line.toLocaleLowerCase('en').indexOf(wanted.toLocaleLowerCase('en')):-1;
  if(found<0){ // Mantener accesible una nota antigua si su ancla necesita revisión.
    const button=document.createElement('button');button.type='button';button.className='note-inline';
    button.textContent=line;button.setAttribute('aria-label','Nota: '+note[0]);button.title=note[0];
    button.addEventListener('click',()=>openNote(button,note));target.append(button);return;
  }
  renderWords(line.slice(0,found),target);
  const button=document.createElement('button');button.type='button';button.className='note-inline';
  button.textContent=line.slice(found,found+wanted.length);
  button.setAttribute('aria-label','Nota: '+note[0]);button.title=note[0];
  button.addEventListener('click',()=>openNote(button,note));target.append(button);
  renderWords(line.slice(found+wanted.length),target);
}
function openNote(anchor,note){
  if(!notesEnabled)return;
  const alreadyOpen=!notePanel.hidden&&notePanel.dataset.anchorId===anchor.closest('.verse')?.id;
  hidePopups();
  if(alreadyOpen)return;
  $('#note-heading').textContent=note[0];
  $('#note-content').textContent=note[1];
  notePanel.dataset.anchorId=anchor.closest('.verse')?.id||'';
  place(notePanel,anchor);
}
function renderLine(d,part){
const row=document.createElement('div');row.className='verse';row.id=part==='P'?'mar-pro-'+d.number:part==='B2-P'?'mar-p2-pro-'+d.number:part==='II'?'mar-i2-'+d.number:part.startsWith('A2-')?'mar-ii'+part.slice(3)+'-'+d.number:part.startsWith('A3-')?'mar-iii'+part.slice(3)+'-'+d.number:part.startsWith('A4-')?'mar-iv'+part.slice(3)+'-'+d.number:part==='A5-1'?'mar-v1-'+d.number:part.startsWith('B2-1-')?'mar-p2-i'+part.slice(5)+'-'+d.number:part.startsWith('B2-2-')?'mar-p2-ii'+part.slice(5)+'-'+d.number:part.startsWith('B2-3-')?'mar-p2-iii'+part.slice(5)+'-'+d.number:part.startsWith('B2-4-')?'mar-p2-iv'+part.slice(5)+'-'+d.number:part.startsWith('B2-5-')?'mar-p2-v'+part.slice(5)+'-'+d.number:'mar-i1-'+d.number;row.dataset.sceneId=part==='P'?'marlowe-tamburlaine-prologue':part==='B2-P'?'marlowe-tamburlaine-part2-prologue':part==='II'?'marlowe-tamburlaine-1-2':part.startsWith('A2-')?'marlowe-tamburlaine-2-'+part.slice(3):part.startsWith('A3-')?'marlowe-tamburlaine-3-'+part.slice(3):part.startsWith('A4-')?'marlowe-tamburlaine-4-'+part.slice(3):part==='A5-1'?'marlowe-tamburlaine-5-1':part.startsWith('B2-1-')?'marlowe-tamburlaine-part2-1-'+part.slice(5):part.startsWith('B2-2-')?'marlowe-tamburlaine-part2-2-'+part.slice(5):part.startsWith('B2-3-')?'marlowe-tamburlaine-part2-3-'+part.slice(5):part.startsWith('B2-4-')?'marlowe-tamburlaine-part2-4-'+part.slice(5):part.startsWith('B2-5-')?'marlowe-tamburlaine-part2-5-'+part.slice(5):'marlowe-tamburlaine-1-1';
const number=document.createElement('span');number.className='number';number.textContent=d.number;
const speech=document.createElement('div');speech.className='speech';speech.lang='en';
if(d.speaker){const who=document.createElement('span');who.className='speaker';who.textContent=d.speaker;speech.append(who);}
const en=document.createElement('p');en.className='latin';en.lang='en';
const key=part==='P'?'P'+d.number:part==='B2-P'?'P2-P'+d.number:part==='II'?'I2-'+d.number:part.startsWith('A2-')?'II'+part.slice(3)+'-'+d.number:part.startsWith('A3-')?'III'+part.slice(3)+'-'+d.number:part.startsWith('A4-')?'IV'+part.slice(3)+'-'+d.number:part==='A5-1'?'V1-'+d.number:part.startsWith('B2-1-')?'P2-I'+part.slice(5)+'-'+d.number:part.startsWith('B2-2-')?'P2-II'+part.slice(5)+'-'+d.number:part.startsWith('B2-3-')?'P2-III'+part.slice(5)+'-'+d.number:part.startsWith('B2-4-')?'P2-IV'+part.slice(5)+'-'+d.number:part.startsWith('B2-5-')?'P2-V'+part.slice(5)+'-'+d.number:String(d.number);
renderAnnotatedText(d.en,en,noteMap[key],key);speech.append(en);
const es=document.createElement('p');es.className='spanish';es.lang='es';es.textContent=d.es;row.append(number,speech,es);return row;
}
function stageDirections(container,act,scene,afterLine,volume=1) {
 const stageList=volume===2?(E.part2StageDirections||[]):(E.stageDirections||[]);
 for(const d of stageList) {
  if((d.act||1)!==act||d.scene!==scene||d.afterLine!==afterLine)continue;
  const p=document.createElement('p');p.className='stage-direction inline-direction';
  const en=document.createElement('span');en.lang='en';en.textContent=d.en;
  const es=document.createElement('span');es.lang='es';es.textContent=d.es;
  p.append(en,es);container.append(p);
 }
}
function publishScene(verses,container,act,scene,part,volume=1) {
 if(!container)return;
 stageDirections(container,act,scene,0,volume);
 for(const d of verses){container.append(renderLine(d,part));stageDirections(container,act,scene,d.number,volume);}
}
// Los datos siguen completos en text.js, pero el DOM contiene solo la escena visible.
function sourceFor(id){
  if(id==='prologo')return {verses:E.prologue||[],part:'P',volume:1,act:0,scene:0};
  if(id==='parte2-prologo')return {verses:E.part2Prologue||[],part:'B2-P',volume:2,act:0,scene:0};
  let m=id.match(/^acto(\d+)-escena(\d+)$/);
  if(m){
    const act=Number(m[1]),scene=Number(m[2]);
    const verses=act===1?(scene===1?E.scene:E.scene2):act===2?E.act2Scenes?.[String(scene)]:act===3?E.act3Scenes?.[String(scene)]:act===4?E.act4Scenes?.[String(scene)]:E.act5Scenes?.[String(scene)];
    return {verses:verses||[],part:act===1?(scene===1?'I':'II'):'A'+act+'-'+scene,volume:1,act,scene};
  }
  m=id.match(/^parte2-acto(\d+)-escena(\d+)$/);
  if(m){
    const act=Number(m[1]),scene=Number(m[2]);
    return {verses:E.part2Scenes?.[String(act)]?.[String(scene)]||[],part:'B2-'+act+'-'+scene,volume:2,act,scene};
  }
  return null;
}
const sceneList=sections.map(section=>({id:section.id,section,container:section.querySelector('.verses'),...sourceFor(section.id)})).filter(d=>d.part&&d.container);
const sceneById=new Map(sceneList.map(s=>[s.id,s]));
const sectionOfLine=new Map();
// Mantener enlaces existentes a renglones y compatibilidad con el marcador.
for(const scene of sceneList)for(const d of scene.verses){
  const p=scene.part;
  const lineId=p==='P'?'mar-pro-'+d.number:p==='B2-P'?'mar-p2-pro-'+d.number:p==='I'?'mar-i1-'+d.number:p==='II'?'mar-i2-'+d.number:p.startsWith('A2-')?'mar-ii'+p.slice(3)+'-'+d.number:p.startsWith('A3-')?'mar-iii'+p.slice(3)+'-'+d.number:p.startsWith('A4-')?'mar-iv'+p.slice(3)+'-'+d.number:p==='A5-1'?'mar-v1-'+d.number:p.startsWith('B2-1-')?'mar-p2-i'+p.slice(5)+'-'+d.number:p.startsWith('B2-2-')?'mar-p2-ii'+p.slice(5)+'-'+d.number:p.startsWith('B2-3-')?'mar-p2-iii'+p.slice(5)+'-'+d.number:p.startsWith('B2-4-')?'mar-p2-iv'+p.slice(5)+'-'+d.number:p.startsWith('B2-5-')?'mar-p2-v'+p.slice(5)+'-'+d.number:null;
  if(lineId)sectionOfLine.set(lineId,scene.id);
}
function sceneTitle(scene){
  if(scene.act===0)return scene.volume===2?'Parte II · Prólogo':'Parte I · Prólogo';
  return 'Parte '+(scene.volume===2?'II':'I')+' · Acto '+['','I','II','III','IV','V'][scene.act]+' · Escena '+scene.scene;
}
function renderScene(scene){
  const fragment=document.createDocumentFragment();
  if(scene.act>0){
    stageDirections(fragment,scene.act,scene.scene,0,scene.volume);
  }
  for(const d of scene.verses){
    fragment.append(renderLine(d,scene.part));
    if(scene.act>0)stageDirections(fragment,scene.act,scene.scene,d.number,scene.volume);
  }
  scene.container.replaceChildren(fragment);
}
function resetSearch(){
  const field=$('#search-input');field.value='';
  $('#empty-results').hidden=true;
}
function observeSceneRows(){
  if(positionObserver)positionObserver.disconnect();
  let lastId='';
  positionObserver=new IntersectionObserver(entries=>{
    const rows=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
    if(!rows.length)return;
    const row=rows[0].target;
    if(row.id===lastId)return;lastId=row.id;
    try{localStorage.setItem(POS,row.id);}catch{}
    $('#resume-reading').disabled=false;
    $('#current-position').textContent=sceneTitle(activeScene)+' · r. '+row.querySelector('.number').textContent;
  },{rootMargin:'-80px 0px -45% 0px',threshold:0});
  activeScene.container.querySelectorAll('.verse').forEach(row=>positionObserver.observe(row));
}
function setActiveScene(scene,{scroll=true,lineId=null}={}){
  if(!scene)return;
  hidePopups();
  resetSearch();
  if(activeScene&&activeScene!==scene)activeScene.container.replaceChildren();
  sections.forEach(section=>{section.hidden=section!==scene.section;});
  activeScene=scene;
  renderScene(scene);
  document.querySelectorAll('.scene-index a[data-section]').forEach(a=>{
    if(a.dataset.section===scene.id)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
  });
  document.querySelector('.chapter-title').textContent=sceneTitle(scene).toUpperCase();
  document.querySelector('.heading-place').textContent=scene.verses.length+' RENGLONES · LECTURA BILINGÜE';
  document.querySelector('.act-ornament').textContent=scene.act?String(scene.act):'P';
  document.querySelector('.scene-introduction').textContent='Una escena por vez, con el original inglés y la traducción española alineados. Navegá desde el índice o con los controles anterior y siguiente.';
  const i=sceneList.indexOf(scene),prev=sceneList[i-1],next=sceneList[i+1];
  const before=$('#previous-scene'),after=$('#next-scene');
  before.hidden=!prev;after.hidden=!next;
  if(prev){before.textContent='← '+sceneTitle(prev);before.dataset.target=prev.id;}
  if(next){after.textContent=sceneTitle(next)+' →';after.dataset.target=next.id;}
  $('#reader-end-label').textContent=sceneTitle(scene)+' · fin';
  document.title='Marlowe · '+sceneTitle(scene)+' — Edición Viva';
  if(notesEnabled===false)document.body.classList.add('notes-off');
  observeSceneRows();
  $('#sidebar').classList.remove('open');
  $('#mobile-nav').setAttribute('aria-expanded','false');
  if(scroll){
    const target=lineId?document.getElementById(lineId):scene.section;
    (target||scene.section).scrollIntoView({block:lineId?'center':'start',behavior:'auto'});
  }
}
function navigateFromHash({scroll=true}={}){
  // Si no hay enlace directo, reabrir la última posición, como en Coriolanus.
  const raw=decodeURIComponent(window.location.hash.slice(1))||savedPosition();
  const lineId=sectionOfLine.has(raw)?raw:null;
  const scene=sceneById.get(raw)||sceneById.get(sectionOfLine.get(raw))||sceneList[0];
  setActiveScene(scene,{scroll,lineId});
}
window.addEventListener('hashchange',()=>navigateFromHash());
function listSaved(){const data=readSaved();$('#saved-count').textContent=data.length;const list=$('#dictionary-list');list.replaceChildren();if(!data.length){const p=document.createElement('p');p.className='storage-note';p.textContent='Todavía no guardaste palabras.';list.append(p);return;}
data.sort((a,b)=>a.form.localeCompare(b.form,'en')).forEach(d=>{const div=document.createElement('div');div.className='dict-record';const strong=document.createElement('strong');strong.textContent=d.form;const small=document.createElement('small');small.textContent=d.lemma+' · '+d.gloss;const del=document.createElement('button');del.type='button';del.textContent='Eliminar';del.addEventListener('click',()=>{writeSaved(readSaved().filter(x=>!(x.form===d.form&&x.lemma===d.lemma)));listSaved();refreshSave();});div.append(strong,small,del);list.append(div);});}
$('#save-word').addEventListener('click',()=>{if(!current)return;const data=readSaved();if(!data.some(x=>x.form===current.form&&x.lemma===current.lemma))data.push(current);if(writeSaved(data)){refreshSave();listSaved();}else $('#dictionary-feedback').textContent='No se pudo guardar en este navegador.';});
function openDrawer(){drawer.hidden=false;listSaved();}function closeDrawer(){drawer.hidden=true;}
$('#open-dictionary').addEventListener('click',openDrawer);$('#mobile-dictionary').addEventListener('click',openDrawer);$('#close-drawer').addEventListener('click',closeDrawer);
$('#export-dictionary').addEventListener('click',()=>{const b=new Blob([JSON.stringify({language:'en',entries:readSaved()},null,2)],{type:'application/json'});const u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='edicion-viva-diccionario-ingles.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);});
$('#close-word').addEventListener('click',hidePopups);$('#close-note').addEventListener('click',hidePopups);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePopups();closeDrawer();}});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.popover-card,.token,.note-inline'))hidePopups();});
$('#toggle-notes').addEventListener('click',()=>{notesEnabled=!notesEnabled;document.body.classList.toggle('notes-off',!notesEnabled);hidePopups();$('#toggle-notes').textContent='Notas: '+(notesEnabled?'sí':'no');$('#toggle-notes').setAttribute('aria-pressed',String(notesEnabled));});
const search=$('#search-input');
search.placeholder='Buscar en esta escena…';
search.addEventListener('input',()=>{
  const q=search.value.toLocaleLowerCase('es').trim();let visible=0;
  activeScene?.container.querySelectorAll('.verse').forEach(row=>{
    const match=!q||row.textContent.toLocaleLowerCase('es').includes(q);
    row.hidden=!match;if(match)visible++;
  });
  $('#empty-results').hidden=!q||visible>0;
});
const nav=$('#sidebar'),rail=$('#character-rail'),shell=$('#app-shell');
function toggleNav(){if(window.matchMedia('(max-width:860px)').matches){nav.classList.toggle('open');$('#mobile-nav').setAttribute('aria-expanded',String(nav.classList.contains('open')));}else shell.classList.toggle('nav-collapsed');}
$('#mobile-nav').addEventListener('click',toggleNav);$('#nav-panel-toggle').addEventListener('click',toggleNav);
$('#characters-panel-toggle').addEventListener('click',()=>{if(window.matchMedia('(max-width:1160px)').matches)rail.classList.toggle('open');else shell.classList.toggle('characters-collapsed');});
$('#mobile-characters').addEventListener('click',()=>rail.classList.toggle('open'));
document.querySelectorAll('.scene-index a[data-section]').forEach(a=>a.addEventListener('click',event=>{
  event.preventDefault();
  if(window.location.hash==='#'+a.dataset.section)setActiveScene(sceneById.get(a.dataset.section));
  else window.location.hash=a.dataset.section;
}));
for(const id of ['previous-scene','next-scene']){
  $( '#' + id ).addEventListener('click',event=>{const target=event.currentTarget.dataset.target;if(target)window.location.hash=target;});
}
const resume=$('#resume-reading');
function savedPosition(){try{return localStorage.getItem(POS)||'';}catch{return '';}}
resume.disabled=!sectionOfLine.has(savedPosition());
resume.addEventListener('click',()=>{
  const saved=savedPosition(),section=sectionOfLine.get(saved);
  if(!section)return;
  if(window.location.hash==='#'+saved)setActiveScene(sceneById.get(section),{lineId:saved});
  else window.location.hash=saved;
});
navigateFromHash({scroll:!!window.location.hash||sectionOfLine.has(savedPosition())});
listSaved();
})();