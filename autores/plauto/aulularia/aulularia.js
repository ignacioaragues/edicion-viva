/* Aulularia I.1, vv. 40–51: F. Leo (1895), vía Perseus (CC BY-SA 4.0).
   Se suprimen las marcas prosódicas de la edición digital.
   Traducción y análisis morfológico: Edición Viva. */
'use strict';

const verses = [
  {
    n: '40', speaker: 'EUCLIÓN', latin: 'Exi, inquam. Age exi. Exeundum hercle tibi hinc est foras,',
    spanish: '¡Sal, te digo! Vamos, sal. ¡Por Hércules, tienes que irte de aquí!',
    words: [
      ['Exi','exeo','verbo; imperativo presente, 2.ª persona singular, voz activa'],
      ['inquam','inquam','verbo defectivo; indicativo presente, 1.ª persona singular'],
      ['Age','ago','verbo; imperativo presente, 2.ª persona singular (uso exhortativo)'],
      ['exi','exeo','verbo; imperativo presente, 2.ª persona singular, voz activa'],
      ['Exeundum','exeo','gerundivo neutro singular en construcción impersonal de obligación (exeundum est)'],
      ['hercle','hercle','interjección de juramento (por Hércules)'],
      ['tibi','tu','pronombre personal; dativo singular'],
      ['hinc','hinc','adverbio de lugar: desde aquí'],
      ['est','sum','verbo; indicativo presente, 3.ª persona singular'],
      ['foras','foras','adverbio de dirección: hacia fuera']
    ]
  },
  {
    n: '41', latin: 'circumspectatrix cum oculis emissiciis.',
    spanish: '¡Fisgona, con esos ojos que lo escudriñan todo!',
    words: [
      ['circumspectatrix','circumspectatrix','sustantivo femenino; vocativo singular'],
      ['cum','cum','preposición con ablativo'],
      ['oculis','oculus','sustantivo masculino; ablativo plural'],
      ['emissiciis','emissicius','adjetivo masculino; ablativo plural, concuerda con oculis']
    ]
  },
  {
    n: '42', speaker: 'ESTÁFILA', latin: 'Nam cur me miseram verberas?',
    spanish: '¿Y por qué me pegas, desgraciada de mí?',
    words: [
      ['Nam','nam','partícula introductoria o enfática'],
      ['cur','cur','adverbio interrogativo: por qué'],
      ['me','ego','pronombre personal; acusativo singular'],
      ['miseram','miser','adjetivo femenino; acusativo singular, referido a me'],
      ['verberas','verbero','verbo; indicativo presente, voz activa, 2.ª persona singular']
    ]
  },
  {
    n: '', speaker: 'EUCLIÓN', latin: 'Ut misera sis',
    spanish: 'Para que seas desgraciada...',
    words: [
      ['Ut','ut','conjunción final; introduce subjuntivo'],
      ['misera','miser','adjetivo femenino; nominativo singular, atributo del sujeto'],
      ['sis','sum','verbo; subjuntivo presente, 2.ª persona singular']
    ]
  },
  {
    n: '43', latin: 'atque ut te dignam mala malam aetatem exigas.',
    spanish: '...y para que, malvada, lleves la mala vida que te mereces.',
    words: [
      ['atque','atque','conjunción copulativa'],
      ['ut','ut','conjunción final; introduce subjuntivo'],
      ['te','tu','pronombre personal; acusativo singular'],
      ['dignam','dignus','adjetivo femenino; acusativo singular, referido a te'],
      ['mala','malus','adjetivo femenino; vocativo singular, insulto dirigido a Estáfila'],
      ['malam','malus','adjetivo femenino; acusativo singular, concuerda con aetatem'],
      ['aetatem','aetas','sustantivo femenino; acusativo singular'],
      ['exigas','exigo','verbo; subjuntivo presente, voz activa, 2.ª persona singular']
    ]
  },
  {
    n: '44', speaker: 'ESTÁFILA', latin: 'Nam qua me nunc causa extrusisti ex aedibus?',
    spanish: 'Pero ¿por qué motivo me has echado ahora de la casa?',
    words: [
      ['Nam','nam','partícula introductoria o enfática'],
      ['qua','qui, quae, quod','adjetivo interrogativo femenino; ablativo singular, concuerda con causa'],
      ['me','ego','pronombre personal; acusativo singular'],
      ['nunc','nunc','adverbio de tiempo: ahora'],
      ['causa','causa','sustantivo femenino; ablativo singular (ablativo de causa)'],
      ['extrusisti','extrudo','verbo; indicativo perfecto, voz activa, 2.ª persona singular'],
      ['ex','ex','preposición con ablativo'],
      ['aedibus','aedes','sustantivo femenino; ablativo plural']
    ]
  },
  {
    n: '45', speaker: 'EUCLIÓN', latin: 'Tibi ego rationem reddam, stimulorum seges?',
    spanish: '¿Yo tengo que darte explicaciones, cosecha de azotes?',
    words: [
      ['Tibi','tu','pronombre personal; dativo singular'],
      ['ego','ego','pronombre personal; nominativo singular'],
      ['rationem','ratio','sustantivo femenino; acusativo singular'],
      ['reddam','reddo','verbo; futuro imperfecto de indicativo, voz activa, 1.ª persona singular'],
      ['stimulorum','stimulus','sustantivo masculino; genitivo plural'],
      ['seges','seges','sustantivo femenino; vocativo singular (metáfora insultante)']
    ]
  },
  {
    n: '46', latin: 'illuc regredere ab ostio. illuc sis vide,',
    spanish: '¡Retrocede, aléjate de la puerta! ¡Allá, por favor! Mira...',
    words: [
      ['illuc','illuc','adverbio de dirección: hacia allá'],
      ['regredere','regredior','verbo deponente; imperativo presente, 2.ª persona singular'],
      ['ab','ab','preposición con ablativo'],
      ['ostio','ostium','sustantivo neutro; ablativo singular'],
      ['illuc','illuc','adverbio de dirección: hacia allá'],
      ['sis','si vis','expresión coloquial de cortesía: «si quieres»; no es sum, sis'],
      ['vide','video','verbo; imperativo presente, voz activa, 2.ª persona singular']
    ]
  },
  {
    n: '47', latin: 'ut incedit. at scin quo modo tibi res se habet?',
    spanish: '...cómo camina. Pero ¿sabes cómo están las cosas para ti?',
    words: [
      ['ut','ut','adverbio exclamativo: cómo'],
      ['incedit','incedo','verbo; indicativo presente, voz activa, 3.ª persona singular'],
      ['at','at','conjunción adversativa'],
      ['scin','scio + -ne','contracción de scisne: indicativo presente, voz activa, 2.ª persona singular + interrogativa'],
      ['quo','qui, quae, quod','adjetivo interrogativo masculino; ablativo singular, concuerda con modo'],
      ['modo','modus','sustantivo masculino; ablativo singular'],
      ['tibi','tu','pronombre personal; dativo singular'],
      ['res','res','sustantivo femenino; nominativo singular'],
      ['se','sui','pronombre reflexivo; acusativo singular'],
      ['habet','habeo','verbo; indicativo presente, voz activa, 3.ª persona singular']
    ]
  },
  {
    n: '48', latin: 'si hercle hodie fustem cepero aut stimulum in manum,',
    spanish: 'Si hoy, por Hércules, llego a tomar un palo o un aguijón en la mano...',
    words: [
      ['si','si','conjunción condicional'],
      ['hercle','hercle','interjección de juramento'],
      ['hodie','hodie','adverbio de tiempo: hoy'],
      ['fustem','fustis','sustantivo masculino; acusativo singular'],
      ['cepero','capio','verbo; futuro perfecto de indicativo, voz activa, 1.ª persona singular'],
      ['aut','aut','conjunción disyuntiva'],
      ['stimulum','stimulus','sustantivo masculino; acusativo singular'],
      ['in','in','preposición con acusativo (dirección)'],
      ['manum','manus','sustantivo femenino; acusativo singular']
    ]
  },
  {
    n: '49', latin: 'testudineum istum tibi ego grandibo gradum.',
    spanish: '...te haré alargar ese paso de tortuga.',
    words: [
      ['testudineum','testudineus','adjetivo masculino; acusativo singular, concuerda con gradum'],
      ['istum','iste','demostrativo masculino; acusativo singular, concuerda con gradum'],
      ['tibi','tu','pronombre personal; dativo singular'],
      ['ego','ego','pronombre personal; nominativo singular'],
      ['grandibo','grandio','verbo poco frecuente; futuro imperfecto de indicativo, voz activa, 1.ª persona singular'],
      ['gradum','gradus','sustantivo masculino; acusativo singular']
    ]
  },
  {
    n: '50', speaker: 'ESTÁFILA', latin: 'Utinam me divi adaxint ad suspendium',
    spanish: '¡Ojalá los dioses me lleven a la horca...',
    words: [
      ['Utinam','utinam','partícula optativa; introduce un deseo con subjuntivo'],
      ['me','ego','pronombre personal; acusativo singular'],
      ['divi','divus','sustantivo masculino; nominativo plural'],
      ['adaxint','adigo','verbo; subjuntivo perfecto, voz activa, 3.ª persona plural (forma arcaica de adegerint)'],
      ['ad','ad','preposición con acusativo'],
      ['suspendium','suspendium','sustantivo neutro; acusativo singular']
    ]
  },
  {
    n: '51', latin: 'potius quidem quam hoc pacto apud te serviam.',
    spanish: '...antes que tener que seguir sirviéndote de esta manera!',
    words: [
      ['potius','potius','adverbio comparativo: más bien, antes'],
      ['quidem','quidem','partícula enfática'],
      ['quam','quam','conjunción comparativa'],
      ['hoc','hic, haec, hoc','demostrativo neutro; ablativo singular, concuerda con pacto'],
      ['pacto','pactum','sustantivo neutro; ablativo singular (modo)'],
      ['apud','apud','preposición con acusativo'],
      ['te','tu','pronombre personal; acusativo singular'],
      ['serviam','servio','verbo; subjuntivo presente, voz activa, 1.ª persona singular']
    ]
  }
];

const notes = {
  '40': { number: 1, type: 'FILOLÓGICA', heading: 'Exi · exeundum', text: 'La insistencia en exi y la variación exi / exeundum producen una apertura entrecortada y agresiva. Hercle, invocación a Hércules, es una fórmula corriente de juramento en la comedia.' },
  '41': { number: 2, type: 'LÉXICA', heading: 'Una fisgona con ojos de explorador', text: 'Circumspectatrix es una formación excepcional de Plauto para quien mira a todas partes. Emissicius evoca a quien se envía a reconocer o explorar: los ojos de Estáfila parecen espías que buscan el secreto de Euclión.' },
  '43': { number: 3, type: 'FILOLÓGICA', heading: 'Mala malam', text: 'La yuxtaposición de mala (vocativo) y malam (acusativo) refuerza el insulto por repetición de la raíz. El juego sonoro importa tanto como el significado.' },
  '45': { number: 4, type: 'CULTURAL', heading: 'Stimulorum seges', text: 'Literalmente, «cosecha de aguijones». El cuerpo de la esclava se convierte metafóricamente en un campo donde proliferan los instrumentos de castigo. La exageración cómica no elimina la violencia de la relación entre amo y esclava.' },
  '46': { number: 5, type: 'LINGÜÍSTICA', heading: 'Illuc sis vide', text: 'Aquí sis funciona como una fórmula coloquial de cortesía, contraída de si vis («si quieres»). No debe confundirse con el subjuntivo sis de sum, que aparece unos versos antes.' },
  '49': { number: 6, type: 'FILOLÓGICA', heading: 'Grandibo gradum', text: 'La proximidad sonora entre grandibo y gradum es una paronomasia. Grandio, «hacer mayor», es un verbo muy raro. La imagen del paso de tortuga convierte una amenaza de golpes en un chiste cruel sobre la lentitud de Estáfila.' },
  '50': { number: 7, type: 'MORFOLÓGICA', heading: 'Adaxint', text: 'Adaxint equivale a adegerint: es una forma arcaica del perfecto de subjuntivo de adigo. Su empleo tras utinam expresa un deseo, formulado aquí con deliberada exageración dramática.' }
};

const dictionaryKey = 'edicion-viva:latin-dictionary:v1';
const container = document.querySelector('#verses');
const wordPanel = document.querySelector('#word-panel');
const notePanel = document.querySelector('#note-panel');
const saveWordButton = document.querySelector('#save-word');
const drawer = document.querySelector('#side-drawer');
const tabs = Array.from(document.querySelectorAll('.side-tabs [data-drawer]'));
let selected = null;
let noteAnchor = null;
let currentWord = null;
let activeDrawer = null;
let reviewDeck = [];
let reviewIndex = 0;
let savedWords = readDictionary();

function readDictionary() {
  try {
    const value = JSON.parse(localStorage.getItem(dictionaryKey) || '[]');
    return Array.isArray(value) ? value.filter(item => item && typeof item.id === 'string' &&
      typeof item.form === 'string' && typeof item.lemma === 'string' && typeof item.morphology === 'string') : [];
  } catch { return []; }
}

function persistDictionary() {
  try {
    localStorage.setItem(dictionaryKey, JSON.stringify(savedWords));
    return true;
  } catch {
    return false;
  }
}

function wordId(word) {
  return 'la|' + word[1].toLocaleLowerCase('la') + '|' + word[0].toLocaleLowerCase('la');
}

function updateSaveButton() {
  if (!currentWord) return;
  const exists = savedWords.some(item => item.id === wordId(currentWord.word));
  saveWordButton.textContent = exists ? '✓ Guardada · quitar' : '+ Guardar en mi diccionario';
  saveWordButton.setAttribute('aria-pressed', String(exists));
}

function positionPopover(anchor, popover) {
  if (!anchor || popover.hidden) return;
  const r = anchor.getBoundingClientRect();
  const p = popover.getBoundingClientRect();
  const margin = 12;
  const width = Math.min(p.width, window.innerWidth - margin * 2);
  let left = r.left - 22;
  left = Math.max(margin, Math.min(left, window.innerWidth - width - margin));
  let top = r.bottom + margin;
  if (top + p.height > window.innerHeight - margin && r.top > p.height + margin * 2) {
    top = r.top - p.height - margin;
  }
  top = Math.max(margin, Math.min(top, window.innerHeight - p.height - margin));
  popover.style.left = left + 'px';
  popover.style.top = top + 'px';
}

function closeWord() {
  if (selected) selected.setAttribute('aria-pressed','false');
  selected = null;
  currentWord = null;
  wordPanel.hidden = true;
}

function closeNote() {
  if (noteAnchor) noteAnchor.setAttribute('aria-expanded','false');
  noteAnchor = null;
  notePanel.hidden = true;
}

function openWord(button, word, reference) {
  closeNote();
  if (selected) selected.setAttribute('aria-pressed','false');
  selected = button;
  currentWord = { word, reference };
  button.setAttribute('aria-pressed','true');
  document.querySelector('#word-form').textContent = word[0];
  document.querySelector('#word-lemma').textContent = word[1];
  document.querySelector('#word-morphology').textContent = word[2];
  wordPanel.hidden = false;
  updateSaveButton();
  positionPopover(button, wordPanel);
}

function openNote(button, note) {
  closeWord();
  closeNote();
  noteAnchor = button;
  button.setAttribute('aria-expanded','true');
  document.querySelector('#note-type').textContent = 'NOTA ' + note.number + ' · ' + note.type;
  document.querySelector('#note-heading').textContent = note.heading;
  document.querySelector('#note-content').textContent = note.text;
  notePanel.hidden = false;
  positionPopover(button, notePanel);
}

let lastNumber = '';
for (const entry of verses) {
  if (entry.n) lastNumber = entry.n;
  const row = document.createElement('div');
  row.className = 'verse';
  const left = document.createElement('div');
  left.className = 'latin-side';
  const num = document.createElement('span');
  num.className = 'number';
  num.textContent = entry.n;
  const speech = document.createElement('div');
  speech.className = 'speech';
  if (entry.speaker) {
    const who = document.createElement('span');
    who.className = 'speaker';
    who.textContent = entry.speaker;
    speech.append(who);
  }
  const latin = document.createElement('p');
  latin.className = 'latin';
  const reference = 'I.1, v. ' + lastNumber;
  const chunks = entry.latin.match(/\p{L}+|[^\p{L}]+/gu) || [];
  let index = 0;
  for (const chunk of chunks) {
    if (!/^\p{L}/u.test(chunk)) {
      latin.append(document.createTextNode(chunk));
      continue;
    }
    const word = entry.words[index++];
    if (!word || word[0].toLocaleLowerCase('la') !== chunk.toLocaleLowerCase('la')) {
      throw new Error('Falta análisis o hay un desajuste en ' + entry.n + ': ' + chunk);
    }
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'token';
    button.textContent = chunk;
    button.setAttribute('aria-label', chunk + ': ver análisis morfológico');
    button.setAttribute('aria-pressed','false');
    button.addEventListener('click', () => openWord(button, word, reference));
    latin.append(button);
  }
  if (index !== entry.words.length) throw new Error('Sobran análisis en el verso ' + entry.n);
  const note = notes[entry.n];
  if (note) {
    latin.append(document.createTextNode(' '));
    const noteButton = document.createElement('button');
    noteButton.type = 'button';
    noteButton.className = 'note-anchor';
    noteButton.textContent = String(note.number);
    noteButton.setAttribute('aria-label', 'Nota ' + note.number + ': ' + note.heading);
    noteButton.setAttribute('aria-expanded','false');
    noteButton.addEventListener('click', () => openNote(noteButton, note));
    latin.append(noteButton);
  }
  speech.append(latin);
  left.append(num,speech);
  const right = document.createElement('p');
  right.className = 'spanish';
  right.textContent = entry.spanish;
  row.append(left,right);
  container.append(row);
}

saveWordButton.addEventListener('click', () => {
  if (!currentWord) return;
  const id = wordId(currentWord.word);
  const before = savedWords.slice();
  const index = savedWords.findIndex(item => item.id === id);
  if (index >= 0) savedWords.splice(index, 1);
  else savedWords.push({
    id, language: 'latín', form: currentWord.word[0], lemma: currentWord.word[1],
    morphology: currentWord.word[2], work: 'Plauto · Aulularia',
    reference: currentWord.reference, addedAt: new Date().toISOString()
  });
  if (!persistDictionary()) {
    savedWords = before;
    saveWordButton.textContent = 'No se pudo guardar en este navegador';
    return;
  }
  updateSaveButton();
  renderDictionary();
});

function renderDictionary() {
  document.querySelector('#saved-count').textContent = String(savedWords.length);
  document.querySelector('#start-review').disabled = !savedWords.length;
  document.querySelector('#export-dictionary').disabled = !savedWords.length;
  const list = document.querySelector('#dictionary-list');
  list.replaceChildren();
  if (!savedWords.length) {
    const empty = document.createElement('p');
    empty.className = 'dictionary-empty';
    empty.textContent = 'Todavía no hay palabras guardadas. Seleccioná una palabra del latín y elegí «Guardar».';
    list.append(empty);
    return;
  }
  for (const item of savedWords) {
    const article = document.createElement('article');
    article.className = 'dictionary-entry';
    const content = document.createElement('div');
    const form = document.createElement('strong');
    form.textContent = item.form;
    const lemma = document.createElement('span');
    lemma.textContent = item.lemma + ' · ' + item.reference;
    content.append(form,lemma);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = '×';
    remove.setAttribute('aria-label', 'Quitar ' + item.form + ' del diccionario');
    remove.addEventListener('click', () => {
      const before = savedWords.slice();
      savedWords = savedWords.filter(word => word.id !== item.id);
      if (!persistDictionary()) { savedWords = before; return; }
      renderDictionary();
      updateSaveButton();
    });
    article.append(content,remove);
    list.append(article);
  }
}

function closeDrawer() {
  activeDrawer = null;
  drawer.hidden = true;
  tabs.forEach(tab => tab.setAttribute('aria-expanded','false'));
  document.querySelector('#flashcard').hidden = true;
  document.querySelector('#dictionary-list').hidden = false;
}

function openDrawer(name) {
  closeWord();
  closeNote();
  if (activeDrawer === name) { closeDrawer(); return; }
  activeDrawer = name;
  drawer.hidden = false;
  const titles = {position:'Posición',characters:'Personajes',dictionary:'Mi diccionario'};
  document.querySelector('#drawer-title').textContent = titles[name];
  for (const content of drawer.querySelectorAll('.drawer-content')) {
    content.hidden = content.id !== 'drawer-' + name;
  }
  tabs.forEach(tab => tab.setAttribute('aria-expanded',String(tab.dataset.drawer === name)));
  if (name === 'dictionary') renderDictionary();
}

tabs.forEach(tab => tab.addEventListener('click', () => openDrawer(tab.dataset.drawer)));
document.querySelector('#close-drawer').addEventListener('click', closeDrawer);
document.querySelector('#return-to-text').addEventListener('click', closeDrawer);
document.querySelector('#close-word').addEventListener('click', closeWord);
document.querySelector('#close-note').addEventListener('click', closeNote);

document.querySelector('#export-dictionary').addEventListener('click', () => {
  if (!savedWords.length) return;
  const blob = new Blob([JSON.stringify({version:1, words:savedWords},null,2)], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'edicion-viva-diccionario.json';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
document.querySelector('#import-trigger').addEventListener('click', () => document.querySelector('#import-dictionary').click());
document.querySelector('#import-dictionary').addEventListener('change', async event => {
  const file = event.target.files?.[0];
  if (!file) return;
  const feedback = document.querySelector('#dictionary-feedback');
  try {
    const data = JSON.parse(await file.text());
    if (data.version !== 1 || !Array.isArray(data.words)) throw new Error('Formato no reconocido');
    const incoming = data.words.filter(item => item && typeof item.id === 'string' &&
      typeof item.form === 'string' && typeof item.lemma === 'string' && typeof item.morphology === 'string');
    const before = savedWords.slice();
    const known = new Set(savedWords.map(item => item.id));
    let count = 0;
    for (const item of incoming) {
      if (!known.has(item.id)) { savedWords.push(item); known.add(item.id); count++; }
    }
    if (!persistDictionary()) { savedWords = before; throw new Error('No se pudo guardar'); }
    feedback.textContent = count + ' palabra(s) importada(s).';
    renderDictionary();
  } catch {
    feedback.textContent = 'No se pudo importar ese archivo JSON.';
  }
  event.target.value = '';
});

function showCard() {
  const card = reviewDeck[reviewIndex];
  document.querySelector('#flash-progress').textContent = (reviewIndex + 1) + ' de ' + reviewDeck.length;
  document.querySelector('#flash-form').textContent = card.form;
  document.querySelector('#flash-lemma').textContent = card.lemma;
  document.querySelector('#flash-morph').textContent = card.morphology;
  document.querySelector('#flash-answer').hidden = true;
  document.querySelector('#reveal-card').hidden = false;
  document.querySelector('#next-card').hidden = true;
}

document.querySelector('#start-review').addEventListener('click', () => {
  reviewDeck = savedWords.slice();
  if (!reviewDeck.length) return;
  reviewIndex = 0;
  document.querySelector('#dictionary-list').hidden = true;
  document.querySelector('#flashcard').hidden = false;
  showCard();
});
document.querySelector('#reveal-card').addEventListener('click', () => {
  document.querySelector('#flash-answer').hidden = false;
  document.querySelector('#reveal-card').hidden = true;
  document.querySelector('#next-card').hidden = false;
});
document.querySelector('#next-card').addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % reviewDeck.length;
  showCard();
});
document.querySelector('#end-review').addEventListener('click', () => {
  document.querySelector('#flashcard').hidden = true;
  document.querySelector('#dictionary-list').hidden = false;
  renderDictionary();
});

function trackAnchor() {
  for (const [anchor, popover] of [[selected,wordPanel],[noteAnchor,notePanel]]) {
    if (!anchor || popover.hidden) continue;
    const r = anchor.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) {
      popover === wordPanel ? closeWord() : closeNote();
    } else positionPopover(anchor,popover);
  }
}
window.addEventListener('scroll', trackAnchor, {passive:true});
window.addEventListener('resize', trackAnchor);
document.addEventListener('pointerdown', event => {
  if (!wordPanel.hidden && !wordPanel.contains(event.target) && !event.target.closest('.token')) closeWord();
  if (!notePanel.hidden && !notePanel.contains(event.target) && !event.target.closest('.note-anchor')) closeNote();
  if (!drawer.hidden && !drawer.contains(event.target) && !event.target.closest('.side-tabs')) closeDrawer();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeWord();
    closeNote();
    closeDrawer();
  }
});
renderDictionary();
