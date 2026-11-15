/* Edición Viva · lector de Attila. Los enlaces léxicos abren Wiktionnaire;
   el diccionario local no afirma sincronización todavía. */
(() => {
  'use strict';
  const edition = window.ATTILA_EDITION;
  if (!edition) return;
  const $ = selector => document.querySelector(selector);
  const verses = $('#verses');
  const popup = $('#word-panel'), notePopup = $('#note-panel'), drawer = $('#side-drawer');
  const STORE = 'edicion-viva:dictionary:fr:v1';
  let activeWord = null, currentData = null;
  const lex = Object.create(null);
  function add(forms, lemma, analysis, gloss) {
    forms.split(';').forEach(form => { lex[form.trim().toLocaleLowerCase('fr')] = [lemma,analysis,gloss]; });
  }
  // Las formas que admiten varias interpretaciones se describen sin imponer una lectura mecánica.
  add('ils;elles','il / elle','pronombre personal; 3.ª persona plural','ellos / ellas');
  add('il;elle','il / elle','pronombre personal; 3.ª persona singular','él / ella');
  add('je;j’','je','pronombre personal; 1.ª persona singular','yo');
  add('vous','vous','pronombre personal; 2.ª persona plural o tratamiento de cortesía','vos / usted(es)');
  add('on','on','pronombre indefinido; funciona como 3.ª persona singular','uno / se');
  add('nos','notre','posesivo; plural','nuestros / nuestras');
  add('votre','votre','posesivo; singular','vuestro / su');
  add('vos','votre','posesivo; plural','vuestros / sus');
  add('leur;leurs','leur','posesivo o pronombre de 3.ª persona plural, según el contexto','su / sus / les');
  add('me;m’','me','pronombre clítico; 1.ª persona singular','me');
  add('les','le','pronombre de objeto directo; 3.ª persona plural o artículo plural','los / las');
  add('eux','eux','pronombre personal tónico; 3.ª persona plural','ellos');
  add('en','en','pronombre adverbial o preposición; función dependiente del contexto','de ello / de eso / en');
  add('se;s’','se','pronombre reflexivo; 3.ª persona','se');
  add('ce;c’','ce','demostrativo; singular o clítico neutro','este / eso');
  add('ces','ce','determinante demostrativo plural','estos / estas');
  add('un','un','artículo indefinido masculino singular / numeral','un');
  add('une','un','artículo indefinido femenino singular','una');
  add('le;l’','le','artículo definido masculino singular o pronombre clítico','el / lo');
  add('la','la','artículo definido femenino singular o pronombre clítico','la');
  add('des','de + les / un','contracción o artículo indefinido plural; depende del contexto','de los / unos');
  add('du','de + le','contracción de preposición y artículo','del');
  add('de;d’','de','preposición','de');
  add('à','à','preposición','a / en');
  add('pour','pour','preposición','para / por');
  add('sur','sur','preposición','sobre');
  add('sous','sous','preposición','bajo');
  add('avant','avant','preposición o adverbio','antes');
  add('partout','partout','adverbio','por todas partes');
  add('ici','ici','adverbio de lugar','aquí');
  add('déjà','déjà','adverbio','ya');
  add('alors','alors','adverbio; en alors que, locución temporal','entonces / cuando');
  add('si','si','adverbio de intensidad o conjunción condicional','tan / si');
  add('trop','trop','adverbio de grado','demasiado');
  add('tout;tous','tout','determinante, pronombre o adverbio; concordancia variable','todo / todos');
  add('même','même','adjetivo, pronombre o adverbio','mismo / incluso');
  add('seul','seul','adjetivo masculino singular','solo');
  add('deux','deux','numeral cardinal invariable','dos');
  add('pas','pas','adverbio de negación; normalmente junto con ne','no');
  add('ne;n’','ne','partícula negativa','no');
  add('non','non','adverbio de negación','no');
  add('mais','mais','conjunción adversativa','pero');
  add('et','et','conjunción copulativa','y');
  add('ou','ou','conjunción disyuntiva','o');
  add('que;qu’','que','conjunción o pronombre relativo; función según el contexto','que');
  add('qui','qui','pronombre relativo o interrogativo','quien / que');
  add('quel','quel','determinante interrogativo masculino singular','qué / cuál');
  add('pourquoi','pourquoi','adverbio interrogativo','por qué');
  add('lequel','lequel','pronombre relativo/interrogativo masculino singular','cuál / el que');
  add('dont','dont','pronombre relativo','del cual / de quien');
  add('autre;l’autre','autre','adjetivo o pronombre indefinido singular','otro');
  add('aucun','aucun','determinante negativo masculino singular','ningún');
  add('plus','plus','adverbio; grado o negación según el contexto','más / ya no');
  add('moins','moins','adverbio de grado','menos');
  add('bien','bien','adverbio / sustantivo','bien');
  add('aussi','aussi','adverbio','también');
  add('enfin','enfin','adverbio','finalmente / al fin');
  add('hautement','hautement','adverbio','abiertamente');
  add('venu;venus','venir','participio pasado masculino singular/plural','venido / llegados');
  add('sont','être','indicativo presente; 3.ª persona plural','son / han (auxiliar)');
  add('est','être','indicativo presente; 3.ª persona singular','es / está');
  add('être','être','infinitivo presente','ser / estar');
  add('font','faire','indicativo presente; 3.ª persona plural','hacen');
  add('faire','faire','infinitivo presente','hacer');
  add('doivent','devoir','indicativo presente; 3.ª persona plural','deben');
  add('doit','devoir','indicativo presente; 3.ª persona singular','debe');
  add('die','dire','subjuntivo presente arcaico; 3.ª persona singular (hoy dise: qu’il dise)','diga');
  add('dit','dire','participio pasado masculino singular; también indicativo presente 3.ª singular','dicho / dice');
  add('diront','dire','futuro simple; 3.ª persona plural','dirán');
  add('mande','mander','indicativo presente; 1.ª persona singular','mando llamar');
  add('hâter','hâter','infinitivo presente, usado pronominalmente','apresurarse');
  add('ennuie','ennuyer','indicativo presente; 3.ª persona singular, con pronombre s’','se aburre / se impacienta');
  add('lais­sez;laissez','laisser','indicativo presente; 2.ª persona plural','dejáis');
  add('prendre','prendre','infinitivo presente','tomar');
  add('prennent','prendre','indicativo presente; 3.ª persona plural','toman');
  add('prendrois','prendre','condicional presente histórico; 1.ª persona singular (hoy prendrais)','tomaría / aprovecharía');
  add('trai­ner;traîner','traîner','infinitivo presente','arrastrar / llevar');
  add('puis','pouvoir','indicativo presente; 1.ª persona singular','puedo');
  add('pouvoir','pouvoir','infinitivo presente','poder');
  add('résoudre','résoudre','infinitivo presente','resolver / decidir');
  add('appelle','appeler','indicativo presente; 1.ª o 3.ª persona singular; aquí 1.ª','llamo');
  add('crois','croire','indicativo presente; 1.ª persona singular','creo');
  add('voir','voir','infinitivo presente','ver');
  add('éclairciront','éclaircir','futuro simple; 3.ª persona plural','aclararán');
  add('préfère','préférer','subjuntivo presente; 1.ª persona singular en concesiva','prefiera');
  add('veux','vouloir','indicativo presente; 1.ª persona singular','quiero');
  add('attirer','attirer','infinitivo presente','atraer / hacer recaer');
  add('assurer','assurer','infinitivo presente','asegurar / procurar');
  add('oblige','obliger','indicativo presente; 3.ª persona singular','obliga');
  add('consulter','consulter','infinitivo presente','consultar');
  add('éclater','éclater','infinitivo presente','resaltar / manifestarse');
  add('aimerois','aimer','condicional presente, grafía histórica de aimerais; 1.ª persona singular','me gustaría');
  add('choque','choquer','indicativo presente; 3.ª persona singular','molesta / irrita');
  add('sais','savoir','indicativo presente; 1.ª persona singular','sé');
  add('commande','commander','indicativo presente; 1.ª persona singular','ordeno / mando');
  add('ose','oser','indicativo presente; 3.ª persona singular','se atreve');
  add('nommer','nommer','infinitivo presente','llamar / nombrar');
  add('marque','marquer','indicativo presente; 3.ª persona singular','marca / expresa');
  add('souille','souiller','indicativo presente; 3.ª persona singular','mancha');
  add('détruit','détruire','indicativo presente; 3.ª persona singular','destruye');
  add('suis','être','indicativo presente; 1.ª persona singular','soy / estoy');
  add('traiter','traiter','infinitivo presente','tratar');
  add('roi;rois','roi','sustantivo masculino; singular / plural','rey / reyes');
  add('att­ila;attila','Attila','nombre propio','Atila');
  add('octar','Octar','nombre propio','Octar');
  add('seigneur','seigneur','sustantivo masculino; vocativo','señor');
  add('besoin','besoin','sustantivo masculino singular','necesidad');
  add('hymen','hymen','sustantivo masculino singular; francés clásico: unión matrimonial','matrimonio');
  add('arbitres','arbitre','sustantivo masculino o femenino plural','árbitros');
  add('trône','trône','sustantivo masculino singular','trono');
  add('vains','vain','adjetivo masculino plural','vacíos / vanos');
  add('titres;titre','titre','sustantivo masculino singular o plural','título(s)');
  add('nombre','nombre','sustantivo masculino singular','número');
  add('vivants','vivant','sustantivo/adjetivo masculino plural','vivos');
  add('suivants','suivant','sustantivo masculino plural; miembros del séquito','acompañantes / séquito');
  add('espoir','espoir','sustantivo masculino singular','esperanza');
  add('lumière','lumière','sustantivo femenino singular; metáfora de conocimiento','luz / aclaración');
  add('nouvelle','nouveau','adjetivo femenino singular','nueva');
  add('partis','parti','sustantivo masculino plural; aquí, opciones o alianzas','opciones');
  add('gloire','gloire','sustantivo femenino singular','gloria / triunfo');
  add('affront','affront','sustantivo masculino singular','afrenta');
  add('frère','frère','sustantivo masculino singular','hermano');
  add('juste','juste','adjetivo masculino o femenino singular','justo');
  add('courroux','courroux','sustantivo masculino singular','ira / indignación');
  add('auteur','auteur','sustantivo masculino singular','autor / responsable');
  add('conseil','conseil','sustantivo masculino singular','consejo');
  add('dangereux','dangereux','adjetivo masculino singular o plural; aquí plural','peligrosos');
  add('coups','coup','sustantivo masculino plural','golpes');
  add('excuse','excuse','sustantivo femenino singular','excusa');
  add('manque','manque','sustantivo masculino singular','falta');
  add('estime','estime','sustantivo femenino singular','estima / consideración');
  add('besoin','besoin','sustantivo masculino singular','necesidad');
  add('livrer','livrer','infinitivo presente','entregar');
  add('victime','victime','sustantivo femenino singular','víctima');
  add('périls','péril','sustantivo masculino plural','peligros / riesgos');
  add('grand','grand','adjetivo masculino singular','gran / grande');
  add('choix','choix','sustantivo masculino singular','elección');
  add('prétexte','prétexte','sustantivo masculino singular','pretexto');
  add('perte','perte','sustantivo femenino singular','pérdida / ruina');
  add('occasion','occasion','sustantivo femenino singular','ocasión');
  add('offerte','offrir','participio pasado femenino singular; modifica occasion','ofrecida');
  add('glorieux','glorieux','adjetivo masculino singular','glorioso');
  add('nom','nom','sustantivo masculino singular','nombre');
  add('indépendance','indépendance','sustantivo femenino singular','independencia');
  add('moindre','moindre','adjetivo comparativo; singular','menor / más pequeño');
  add('obéissance','obéissance','sustantivo femenino singular','obediencia');
  add('las','las','adjetivo masculino singular; predicativo del sujeto','cansado / harto');
  add('bandeau','bandeau','sustantivo masculino singular; distintivo real','diadema / banda');
  add('royal','royal','adjetivo masculino singular','real');
  add('droit','droit','sustantivo masculino singular','derecho');
  add('égal','égal','adjetivo masculino singular; sustantivado en d’égal','igual');
  add('attendre','attendre','infinitivo presente','esperar');
  add('au','à + le','contracción de preposición y artículo definido masculino','al');
  add('sa','son','determinante posesivo femenino singular','su');
  add('son','son','determinante posesivo masculino singular','su');
  add('d’estime','de + estime','preposición elidida + sustantivo femenino singular','de estima');
  add('m’oblige','me + obliger','pronombre objeto 1.ª singular + indicativo presente, 3.ª singular','me obliga');
  add('car','car','conjunción causal','pues / porque');
  // Contracciones con apóstrofo: análisis explícito sin perder la forma impresa.
  add('qu’on','que + on','conjunción que + pronombre indefinido on','que se / que alguien');
  add('qu’ils','que + ils','conjunción que + pronombre personal plural','que ellos');
  add('qu’att­ila;qu’attila','que + Attila','conjunción que + nombre propio','que Atila');
  add('qu’alors','que + alors','conjunción que + adverbio','cuando');
  add('n’ont','ne + avoir','negación ne + indicativo presente; 3.ª plural','no tienen');
  add('n’','ne','partícula negativa elidida','no');
  add('j’en','je + en','pronombre 1.ª singular + pronombre adverbial','yo sobre ello / de ello');
  add('j’aimerois','je + aimer','1.ª persona singular + condicional histórico','me gustaría');
  add('j’en','je + en','pronombre personal + adverbial; significado contextual','de ello');
  add('l’auteur','le + auteur','artículo masculino elidido + sustantivo','el responsable');
  add('l’autre','le + autre','artículo definido elidido + adjetivo/pronombre','el otro');
  add('l’occasion','la + occasion','artículo elidido + sustantivo femenino','la ocasión');
  add('l’','le / la','artículo definido o pronombre clítico elidido','el / la');
  add('m’être','me + être','pronombre reflexivo + infinitivo auxiliar','haberme');
  add('m’éclairciront','me + éclaircir','pronombre clítico + futuro 3.ª plural','me aclararán');
  add('s’ennuie','s’ennuyer','indicativo presente; 3.ª singular, pronominal','se impacienta');
  add('s’il','si + il','conjunción condicional + pronombre','si él');
  add('c’est','ce + être','demostrativo + indicativo presente, 3.ª singular','esto es');
  add('d’un','de + un','preposición + artículo indefinido masculino','de un');
  add('d’égal','de + égal','preposición + adjetivo sustantivado','como a un igual');
  function getLex(form) {
    const exact = form.toLocaleLowerCase('fr').replace(/\u00ad/g,'');
    return lex[exact] || [form.replace(/^[^’']+[’']/,'').toLocaleLowerCase('fr'), 'Análisis específico pendiente de revisión; consultá el lema o la forma en el diccionario.', 'Ficha provisional'];
  }
  function renderText(text, node) {
    const re = /[\p{L}\p{M}]+(?:[’'][\p{L}\p{M}]+)*/gu;
    let start=0;
    for (const match of text.matchAll(re)) {
      const end=match.index ?? 0;
      if (end>start) node.append(document.createTextNode(text.slice(start,end)));
      const word=match[0], button=document.createElement('button');
      button.className='token';button.type='button';button.textContent=word;button.dataset.form=word;
      button.setAttribute('aria-label','Analizar '+word);
      button.addEventListener('click',()=>showWord(word,button));
      node.append(button);start=end+word.length;
    }
    if (start<text.length)node.append(document.createTextNode(text.slice(start)));
  }
  function place(panel,anchor){
    const b=anchor.getBoundingClientRect();
    panel.hidden=false;
    const r=panel.getBoundingClientRect(),pad=12;
    const x=Math.max(pad,Math.min(window.innerWidth-r.width-pad,b.left));
    const below=b.bottom+9;
    const y=below+r.height+pad<window.innerHeight?below:Math.max(pad,b.top-r.height-9);
    panel.style.left=x+'px';panel.style.top=y+'px';
  }
  function hidePanels(){popup.hidden=true;notePopup.hidden=true;document.querySelectorAll('.token[aria-pressed]').forEach(t=>t.removeAttribute('aria-pressed'));}
  for(const [n,speaker,fr,es] of edition.verses) {
    const row=document.createElement('div');row.className='verse';row.id='v'+n;row.dataset.sceneId='corneille-attila-1-1';
    const num=document.createElement('span');num.className='number';num.textContent=n;
    const speech=document.createElement('div');speech.className='speech';speech.lang='fr';
    if (speaker){const sp=document.createElement('span');sp.className='speaker';sp.textContent=speaker;speech.append(sp);}
    const original=document.createElement('p');original.className='latin';renderText(fr,original);speech.append(original);
    if (edition.notes[n]){
      const anchor=document.createElement('button');anchor.type='button';anchor.className='note-anchor';anchor.textContent='n';anchor.setAttribute('aria-label','Nota al verso '+n);
      anchor.addEventListener('click',()=>{hidePanels();$('#note-heading').textContent=edition.notes[n][0];$('#note-content').textContent=edition.notes[n][1];place(notePopup,anchor);});
      speech.append(anchor);
    }
    const translation=document.createElement('p');translation.className='spanish';translation.lang='es';translation.textContent=es;
    row.append(num,speech,translation);verses.append(row);
  }
  function readSaved(){try{const a=JSON.parse(localStorage.getItem(STORE)||'[]');return Array.isArray(a)?a:[];}catch{return [];}}
  function storeSaved(a){try{localStorage.setItem(STORE,JSON.stringify(a));return true;}catch{return false;}}
  function showWord(form,anchor){
    hidePanels();const [lemma,morph,gloss]=getLex(form);
    currentData={form,lemma,morph,gloss};
    $('#word-form').textContent=form;$('#word-lemma').textContent=lemma;$('#word-morphology').textContent=morph;$('#word-gloss').textContent=gloss;
    const link=$('#word-paradigm');link.href='https://fr.wiktionary.org/wiki/'+encodeURIComponent(lemma.includes(' + ')||lemma.includes(' / ')?form.toLowerCase():lemma);link.textContent='Consultar Wiktionnaire ↗';
    activeWord=anchor;anchor.setAttribute('aria-pressed','true');place(popup,anchor);
    refreshSave();
  }
  function refreshSave(){const saved=readSaved(),found=!!currentData&&saved.some(x=>x.form===currentData.form);const btn=$('#save-word');btn.setAttribute('aria-pressed',String(found));btn.textContent=found?'✓ Guardada en mi diccionario':'+ Guardar en mi diccionario';}
  function listSaved(){
    const saved=readSaved(), target=$('#dictionary-list');target.replaceChildren();$('#saved-count').textContent=saved.length;
    if (!saved.length){const p=document.createElement('p');p.className='storage-note';p.textContent='Todavía no guardaste palabras de esta obra.';target.append(p);return;}
    saved.sort((a,b)=>a.form.localeCompare(b.form,'fr')).forEach(item=>{
      const div=document.createElement('div');div.className='dict-record';
      const name=document.createElement('strong');name.textContent=item.form;
      const sub=document.createElement('small');sub.textContent=item.lemma+' · '+item.gloss;
      const del=document.createElement('button');del.type='button';del.textContent='Eliminar';del.setAttribute('aria-label','Eliminar '+item.form);
      del.addEventListener('click',()=>{storeSaved(readSaved().filter(x=>x.form!==item.form));listSaved();refreshSave();});
      div.append(name,sub,del);target.append(div);
    });
  }
  $('#save-word').addEventListener('click',()=>{
    if(!currentData)return;let saved=readSaved();if(!saved.some(x=>x.form===currentData.form))saved.push(currentData);
    if(storeSaved(saved)){refreshSave();listSaved();} else $('#dictionary-feedback').textContent='No se pudo guardar en este navegador.';
  });
  $('#close-word').addEventListener('click',hidePanels);$('#close-note').addEventListener('click',hidePanels);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){hidePanels();closeDrawer();}});
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.popover-card,.token,.note-anchor'))hidePanels();});
  function closeDrawer(){drawer.hidden=true;}
  function openDrawer(){drawer.hidden=false;listSaved();}
  $('#close-drawer').addEventListener('click',closeDrawer);
  $('#export-dictionary').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify({language:'fr',entries:readSaved()},null,2)],{type:'application/json'});
    const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='edicion-viva-attila-diccionario-fr.json';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);
  });
  document.querySelectorAll('[data-drawer]').forEach(button=>button.addEventListener('click',()=>{
    const type=button.dataset.drawer;
    if(type==='dictionary'){openDrawer();return;}
    const shell=$('#app-shell'),cls=type==='position'?'nav-collapsed':'characters-collapsed';
    if (window.matchMedia('(max-width:1160px)').matches && type==='characters') {
      const rail=$('#character-rail');rail.classList.toggle('open');
      button.setAttribute('aria-expanded',String(rail.classList.contains('open')));
    } else if (window.matchMedia('(max-width:860px)').matches && type==='position') {
      $('#sidebar').classList.toggle('open');button.setAttribute('aria-expanded',String($('#sidebar').classList.contains('open')));
    } else {
      shell.classList.toggle(cls);button.setAttribute('aria-expanded',String(!shell.classList.contains(cls)));
    }
  }));
  listSaved();
})();