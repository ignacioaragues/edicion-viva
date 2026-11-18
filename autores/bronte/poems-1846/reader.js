/* Edición Viva · Brontë 1846: 61 poemas, índice sin alteraciones. */
(()=>{
'use strict';
const poems=window.BRONTE_POEMS_1846||[];
if(poems.length!==61){document.querySelector('#overview').textContent='No se pudo cargar el corpus completo.';return;}
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const getNum=()=>{const n=Number(new URLSearchParams(location.search).get('poem'));return Number.isInteger(n)&&n>=1&&n<=poems.length?n:0};
let current=getNum(), filter='all';
const link=n=>n?'?poem='+n:'./';
const authorInitial=name=>name.startsWith('Charlotte')?'C':name.startsWith('Emily')?'E':'A';
function buildIndex(){
 const nav=$('#poem-nav'), overview=$('#overview-index');
 nav.replaceChildren();overview.replaceChildren();
 for(const p of poems){
  const a=document.createElement('a');a.href=link(p.n);a.dataset.author=p.author;
  if(p.n===current)a.setAttribute('aria-current','page');
  a.innerHTML='<span class="n">'+String(p.n).padStart(2,'0')+'</span><span>'+esc(p.title)+'<small>'+esc(p.penName)+' · p. '+p.page+'</small></span>';
  nav.append(a);
  const item=document.createElement('a');item.href=link(p.n);
  item.innerHTML='<span class="num">'+String(p.n).padStart(2,'0')+'</span><span class="name">'+esc(p.title)+'</span><span class="author-letter">'+authorInitial(p.author)+'</span>';
  overview.append(item);
 }
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
$('#toggle-index').addEventListener('click',()=>{const opened=document.body.classList.toggle('nav-open');$('#toggle-index').setAttribute('aria-expanded',String(opened))});
const labels={
"quench'd":"quench: extinguir, apagar. Contracción de la terminación de pasado -ed.",
"blent":"Forma poética de blended (mezclado).",
"wrapt":"Grafía literaria de wrapped (envuelto).",
"ret inge":"Volver a teñir o colorear; del verbo retinge.",
"thou":"Pronombre de segunda persona singular arcaico: tú.",
"thee":"Forma objeto del pronombre arcaico thou: te, a ti.",
"thy":"Posesivo arcaico correspondiente a thou: tu.",
"'tis":"Contracción poética de it is.",
"ne'er":"Contracción poética de never: nunca.",
"o'er":"Contracción poética de over: sobre, por encima de."
};
let popup=$('#word-popup');
function showWord(word,node){
 const lower=word.toLowerCase().replace(/[.,!?;:()"]/g,'');const note=labels[lower]||'Forma del texto original. Consultá la entrada lexicográfica; la ficha filológica específica está pendiente de revisión.';
 $('#word-label').textContent=word;$('#word-explanation').textContent=note;
 $('#word-lookup').href='https://en.wiktionary.org/wiki/'+encodeURIComponent(word.replace(/^[^A-Za-z]+|[^A-Za-z]+$/g,''));
 popup.hidden=false;
 const box=node.getBoundingClientRect(),width=295;
 popup.style.left=Math.min(window.innerWidth-width-12,Math.max(12,box.left))+'px';
 popup.style.top=Math.min(window.innerHeight-210,Math.max(12,box.bottom+9))+'px';
}
$('#close-word-popup').addEventListener('click',()=>popup.hidden=true);
window.addEventListener('keydown',e=>{if(e.key==='Escape'){popup.hidden=true;document.body.classList.remove('nav-open')}});
document.addEventListener('pointerdown',e=>{if(!popup.hidden&&!popup.contains(e.target)&&!e.target.closest('.word'))popup.hidden=true});
function tokenized(line){
 const fragment=document.createDocumentFragment();
 // Words retain historical spelling; no automatic grammatical claims are made.
 for(const part of String(line).match(/\b[A-Za-z]+(?:['’\-][A-Za-z]+)*\b|[^A-Za-z]+/g)||[line]){
  if(/^[A-Za-z]/.test(part)){
    const sp=document.createElement('span');sp.className='word';sp.tabIndex=0;sp.textContent=part;
    sp.addEventListener('click',()=>showWord(part,sp));sp.addEventListener('keydown',e=>{if(e.key==='Enter')showWord(part,sp)});
    fragment.append(sp);
  }else fragment.append(document.createTextNode(part));
 }
 return fragment;
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
    const en=document.createElement('div');en.className='latin';en.lang='en';en.append(tokenized(original));
    const es=document.createElement('div');es.className='spanish';es.lang='es';es.textContent=p.translatedLines?.[n-1]||'';
    if(p.translatedLines?.[n-1])row.classList.add('has-translation');
    if(/^([IVX]+\.|A FRAGMENT\.)/.test(original))row.classList.add('subheading-verse');
    row.append(number,en,es);block.append(row);
   }
   root.append(block);
 }
 const note=$('#editorial-note');
 note.textContent='Transcripción inicial: '+(p.sourceType==='wikisource-1846'?'Wikisource, testimonio de 1846.':'GITenberg / Project Gutenberg, comparada con el índice del volumen de 1846.')+' El cotejo de variantes gráficas, puntuación y lecturas con el ejemplar original está pendiente. La traducción española se publicará por poemas completos.';
 const prev=$('#poem-prev'),next=$('#poem-next');
 prev.href=link(p.n>1?p.n-1:0);
 prev.innerHTML='<small>← '+(p.n>1?'ANTERIOR':'VOLVER AL ÍNDICE')+'</small>'+esc(p.n>1?poems[p.n-2].title:'Los 61 poemas');
 next.href=link(p.n<61?p.n+1:0);
 next.innerHTML='<small>'+(p.n<61?'SIGUIENTE':'VOLVER AL ÍNDICE')+' →</small>'+esc(p.n<61?poems[p.n].title:'Los 61 poemas');
}
$('#toggle-translation').addEventListener('click',()=>{
 const el=$('#reader');const hidden=el.classList.toggle('hide-translation');$('#toggle-translation').setAttribute('aria-pressed',String(!hidden));
});
buildIndex();setFilter('all');if(current)renderPoem(poems[current-1]);
})();