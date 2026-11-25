/* Edición Viva · lector de Marcos. Datos por capítulo; SBLGNT / MorphGNT. */
(() => {
  'use strict';
  const modules = window.edicionVivaMarcosChapters;
  const shared = window.edicionVivaMarcosShared;
  if (!Array.isArray(modules) || !shared) throw new Error('Faltan módulos de Marcos');
  const passages = modules.flatMap(m => m.passages);
  const notes = Object.assign({}, shared.orphanNotes, ...modules.map(m => m.notes));
  const glossary = {...shared.glossary};
  const morphologyByChapter = Object.fromEntries(modules.map(m => [m.chapter,m.morphology]));
  function greekGrammar(pos, code) {
    const category = {
      'A-': 'adjetivo', 'C-': 'conjunción', 'D-': 'adverbio',
      'I-': 'interjección', 'N-': 'sustantivo', 'P-': 'preposición',
      'RA': 'artículo determinado', 'RD': 'pronombre demostrativo',
      'RI': 'pronombre interrogativo o indefinido', 'RP': 'pronombre personal',
      'RR': 'pronombre relativo', 'V-': 'verbo', 'X-': 'partícula'
    }[pos] || 'forma gramatical';
    const cases = {N:'nominativo',G:'genitivo',D:'dativo',A:'acusativo'};
    const numbers = {S:'singular',P:'plural'};
    const genders = {M:'masculino',F:'femenino',N:'neutro'};
    const degrees = {C:'comparativo',S:'superlativo'};
    const voices = {A:'activa',M:'media',P:'pasiva'};
    const tenses = {P:'presente',I:'imperfecto',F:'futuro',A:'aoristo',X:'perfecto',Y:'pluscuamperfecto'};
    const moods = {I:'indicativo',D:'imperativo',S:'subjuntivo',O:'optativo',N:'infinitivo',P:'participio'};
    const persons = {'1':'1.ª persona','2':'2.ª persona','3':'3.ª persona'};
    const parts = [];
    if (pos === 'V-') {
      if (code[1] !== '-') parts.push(tenses[code[1]] || 'tiempo por determinar');
      if (code[3] !== '-') parts.push(moods[code[3]] || 'modo por determinar');
      if (code[2] !== '-') parts.push('voz ' + (voices[code[2]] || code[2]));
      if (code[0] !== '-') parts.push(persons[code[0]] || 'persona por determinar');
    }
    if (code[4] !== '-') parts.push(cases[code[4]] || 'caso por determinar');
    if (code[5] !== '-') parts.push(numbers[code[5]] || 'número por determinar');
    if (code[6] !== '-') parts.push(genders[code[6]] || 'género por determinar');
    if (code[7] !== '-') parts.push('grado ' + (degrees[code[7]] || code[7]));
    return category + (parts.length ? '; ' + parts.join(', ') : '');
  }

  function analyzeWord(form, record) {
    const [, lemma, pos, parse] = record;
    const contextual = Object.hasOwn(glossary, form) ? glossary[form][2] : null;
    return [lemma, greekGrammar(pos, parse), record[4] || contextual || shared.glosses[lemma]];
  }

  // Completar el índice de formas para preservar los diccionarios locales anteriores.
  for (const records of Object.values(morphologyByChapter).flatMap(chapter => Object.values(chapter))) {
    for (const record of records) {
      if (!Object.hasOwn(glossary, record[0])) {
        glossary[record[0]] = analyzeWord(record[0], record);
      }
    }
  }

  const $ = (selector) => document.querySelector(selector);
  const dictionaryKey = 'edicion-viva:dictionary:gr:v1';
  const vulgateKey = 'edicion-viva:marcos:vulgate:v1';
  const reader = $('#reader');
  const verses = $('#verses');
  const wordPanel = $('#word-panel');
  const notePanel = $('#note-panel');
  const dictionaryPanel = $('#side-drawer');
  const app = $('#app-shell');
  let selectedWord = null;
  let selectedAnalysis = null;
  let reviewItems = [];
  let reviewIndex = 0;

  function safeRead(key, fallback) {
    try { const result = localStorage.getItem(key); return result == null ? fallback : result; }
    catch { return fallback; }
  }
  function safeWrite(key, value) { try { localStorage.setItem(key, value); return true; } catch { return false; } }
  function readDictionary() {
    try {
      const saved = JSON.parse(safeRead(dictionaryKey, '{}'));
      if (!saved || typeof saved !== 'object' || Array.isArray(saved)) return {};
      return Object.fromEntries(Object.entries(saved).filter(([form]) => Object.hasOwn(glossary, form)));
    } catch { return {}; }
  }
  let dictionary = readDictionary();

  function makeElement(tag, cls, content) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (content !== undefined) el.textContent = content;
    return el;
  }
  function closePanels() { wordPanel.hidden = true; notePanel.hidden = true; }
  function placePanel(panel, anchor) {
    const box = anchor.getBoundingClientRect();
    panel.hidden = false;
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const left = Math.max(12, Math.min(window.innerWidth - width - 12, box.left));
    const below = box.bottom + 10;
    const top = below + height < window.innerHeight - 12 ? below : Math.max(12, box.top - height - 10);
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
  }
  function setParadigmLink(lemma, partOfSpeech) {
    const link = $('#word-paradigm');
    const kind = partOfSpeech === 'V-' ? 'conjugación' :
      /^(N-|A-|RA|RD|RI|RP|RR)$/.test(partOfSpeech) ? 'declinación' : 'entrada';
    link.textContent = kind === 'entrada' ? 'Ver entrada en Wiktionary ↗' :
      'Ver ' + kind + ' en Wiktionary ↗';
    link.href = 'https://en.wiktionary.org/wiki/' + encodeURIComponent(lemma) + '#Ancient_Greek';
    link.title = 'Consultar el lema ' + lemma + ' en Wiktionary; los paradigmas disponibles pueden corresponder a variedades distintas del griego koiné.';
    link.hidden = false;
  }

  function showWord(form, anchor, record) {
    closePanels();
    selectedWord = form;
    selectedAnalysis = analyzeWord(form, record);
    const [lemma, morph, gloss] = selectedAnalysis;
    $('#word-form').textContent = form;
    $('#word-lemma').textContent = lemma;
    $('#word-morphology').textContent = morph;
    $('#word-gloss').textContent = gloss;
    setParadigmLink(lemma, record[2]);
    const save = $('#save-word');
    save.setAttribute('aria-pressed', String(Object.hasOwn(dictionary, form)));
    save.textContent = Object.hasOwn(dictionary, form) ? '✓ Guardada en mi diccionario' : '+ Guardar en mi diccionario';
    placePanel(wordPanel, anchor);
  }
  function showNote(id, anchor) {
    closePanels();
    $('#note-heading').textContent = notes[id][0];
    $('#note-content').textContent = notes[id][1];
    placePanel(notePanel, anchor);
  }

  function greekContent(container, text, chapter, verse) {
    const records = morphologyByChapter[chapter]?.[verse];
    if (!records) throw new Error('Faltan fichas para Marcos ' + chapter + ',' + verse);
    const tokens = text.split(/(\p{L}[\p{L}\p{M}\u1fbdʼ’]*)/u);
    let i = 0;
    tokens.forEach(token => {
      if (!/^\p{L}/u.test(token)) {
        container.append(document.createTextNode(token));
        return;
      }
      const record = records[i++];
      if (!record || record[0] !== token) {
        throw new Error('Análisis ausente o desajustado en Marcos ' + chapter + ',' + verse + ': ' + token);
      }
      const button = makeElement('button', 'token', token);
      button.type = 'button';
      button.title = 'Ficha: ' + record[1];
      button.setAttribute('aria-label', token + '. Consultar ficha morfológica');
      button.addEventListener('click', () => showWord(token, button, record));
      container.append(button);
    });
    if (i !== records.length) throw new Error('Sobran fichas para Marcos ' + chapter + ',' + verse);
  }

  const sections = {
    1: ['1,1–8', 'Juan el Bautista'],
    9: ['1,9–11', 'El bautismo de Jesús'],
    12: ['1,12–13', 'En el desierto'],
    14: ['1,14–15', 'El anuncio en Galilea'],
    16: ['1,16–20', 'Los primeros discípulos'],
    21: ['1,21–28', 'En la sinagoga de Cafarnaúm'],
    29: ['1,29–34', 'En casa de Simón y al atardecer'],
    35: ['1,35–39', 'Oración y predicación en Galilea'],
    40: ['1,40–45', 'La purificación de un enfermo'],
  };
  passages.forEach(p => {
    if (p.chapter === 9 && p.n === 1) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '9,1'), makeElement('h2', '', 'La llegada del reino con poder')); verses.append(section); }
    if (p.chapter === 6 && p.n === 30) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '6,30–32'), makeElement('h2', '', 'El regreso de los Doce')); verses.append(section); }
    if (p.chapter === 3 && p.n === 1) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '3,1–6'), makeElement('h2', '', 'Una curación en sábado')); verses.append(section); }
    if (p.chapter === 2 && p.n === 18) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,18–22'), makeElement('h2', '', 'El ayuno y las imágenes de lo nuevo')); verses.append(section); }
    if (p.chapter === 2 && p.n === 13) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,13–17'), makeElement('h2', '', 'La vocación de Leví')); verses.append(section); }
    if (p.chapter === 2 && p.n === 1) { const section = makeElement('div', 'verse-section'); section.append(makeElement('p', '', '2,1–5'), makeElement('h2', '', 'Regreso a Cafarnaúm')); verses.append(section); }
    if (!p.chapter && sections[p.n]) {
      const section = makeElement('div', 'verse-section');
      section.append(makeElement('p', '', sections[p.n][0]), makeElement('h2', '', sections[p.n][1]));
      verses.append(section);
    }
    const row = makeElement('div', 'verse');
    row.id = p.chapter ? `v${p.chapter}-${p.n}` : `v${p.n}`;
    if (p.chapter === 9 && p.n === 8) { const legacyAnchor = makeElement('span', 'legacy-verse-anchor'); legacyAnchor.id = 'v908'; legacyAnchor.hidden = true; row.append(legacyAnchor); }
    const number = makeElement('div', 'number', String(p.n));
    const speech = makeElement('div', 'speech');
    const original = makeElement('p', 'latin');
    original.lang = 'grc';
    greekContent(original, p.gr, p.chapter || 1, p.n);
    speech.append(original);
    p.notes.forEach((noteId, i) => {
      const anchor = makeElement('button', 'note-anchor', String(i + 1));
      anchor.type = 'button';
      anchor.title = `Nota: ${notes[noteId][0]}`;
      anchor.setAttribute('aria-label', `Nota al versículo ${p.n}: ${notes[noteId][0]}`);
      anchor.addEventListener('click', () => showNote(noteId, anchor));
      speech.append(anchor);
    });
    const spanish = makeElement('div', 'spanish', p.es);
    spanish.lang = 'es';
    const latin = makeElement('div', 'vulgate', p.la);
    latin.lang = 'la';
    row.append(number, speech, spanish, latin);
    verses.append(row);
  });

  // The chapter index follows the published passage data, not a static HTML list.
  // Newly added chapters and verses become navigable without editing index.html.
  function buildPassageNavigation() {
    const nav = document.querySelector('.passage-nav');
    if (!nav) return;
    nav.replaceChildren();
    const titles = {
      1: {1:'Juan el Bautista',9:'El bautismo de Jesús',12:'En el desierto',14:'El anuncio en Galilea',16:'Los primeros discípulos',21:'En la sinagoga de Cafarnaúm',29:'La casa de Simón y las curaciones',35:'Oración y predicación en Galilea',40:'La purificación de un enfermo'},
      2: {1:'Regreso a Cafarnaúm',13:'Leví y los comensales',18:'El ayuno y lo nuevo',23:'Las espigas y el sábado'},
      3: {1:'Una curación en sábado',7:'La multitud junto al mar',13:'La elección de los Doce',20:'Jesús y los suyos'},
      4: {1:'La enseñanza junto al mar'},
      5: {1:'La región de los gerasenos'},
      6: {1:'Jesús en su tierra natal'}
    };
    const byChapter = new Map();
    for (const verse of passages) {
      const chapter = verse.chapter || 1;
      if (!byChapter.has(chapter)) byChapter.set(chapter, []);
      byChapter.get(chapter).push(verse.n);
    }
    for (const [chapter, numbers] of byChapter) {
      const heading = makeElement('div','act-label');
      heading.append(makeElement('span','', 'CAPÍTULO ' + chapter));
      heading.append(makeElement('span','act-count', String(chapter).padStart(2,'0') + ' / 16'));
      nav.append(heading);
      const starts = Object.keys(titles[chapter] || {}).map(Number).filter(n => numbers.includes(n));
      const segments = [...new Set([Math.min(...numbers), ...starts])].sort((a,b)=>a-b);
      for (let i=0;i<segments.length;i++) {
        const start = segments[i], end = i+1<segments.length ? segments[i+1]-1 : Math.max(...numbers);
        const link = makeElement('a','passage-link');
        link.href = '#v' + (chapter===1?'':chapter+'-') + start;
        link.append(document.createTextNode(chapter + ',' + start + (end>start?'–'+end:'')));
        link.append(makeElement('small','',titles[chapter]?.[start] || 'Continuación'));
        nav.append(link);
      }
    }
  }
  buildPassageNavigation();

  // Columna latina opcional y diseño en bloques/columnas compartido con Plauto.
  const latinToggle = $('#toggle-vulgate');
  const latinVisible = safeRead(vulgateKey, 'false') === 'true';
  reader.dataset.vulgate = String(latinVisible);
  latinToggle.setAttribute('aria-pressed', String(latinVisible));
  latinToggle.textContent = latinVisible ? 'Ocultar Vulgata' : 'Mostrar Vulgata';
  latinToggle.addEventListener('click', () => {
    const enabled = reader.dataset.vulgate !== 'true';
    reader.dataset.vulgate = String(enabled);
    latinToggle.textContent = enabled ? 'Ocultar Vulgata' : 'Mostrar Vulgata';
    latinToggle.setAttribute('aria-pressed', String(enabled));
    safeWrite(vulgateKey, String(enabled));
  });

  function updateDictionary() {
    const list = $('#dictionary-list');
    list.replaceChildren();
    const entries = Object.entries(dictionary).sort((a,b) => a[0].localeCompare(b[0], 'el'));
    $('#saved-count').textContent = String(entries.length);
    document.querySelectorAll('.mobile-saved-count').forEach(el => { el.textContent = entries.length ? `(${entries.length})` : ''; });
    if (!entries.length) list.append(makeElement('p', 'storage-note', 'Todavía no guardaste palabras griegas.'));
    entries.forEach(([form, data]) => {
      const entry = makeElement('div', 'dictionary-entry');
      const info = makeElement('div');
      info.append(makeElement('strong', '', form), makeElement('small', '', `${data[0]} · ${data[2]}`));
      const remove = makeElement('button', '', 'Quitar');
      remove.type = 'button';
      remove.setAttribute('aria-label', `Quitar ${form} del diccionario`);
      remove.addEventListener('click', () => { delete dictionary[form]; persist(); });
      entry.append(info, remove);
      list.append(entry);
    });
  }
  function persist() {
    if (!safeWrite(dictionaryKey, JSON.stringify(dictionary))) $('#dictionary-feedback').textContent = 'El almacenamiento de este navegador no está disponible.';
    updateDictionary();
  }
  $('#save-word').addEventListener('click', () => {
    if (!selectedWord) return;
    dictionary[selectedWord] = selectedAnalysis;
    persist();
    $('#save-word').setAttribute('aria-pressed', 'true');
    $('#save-word').textContent = '✓ Guardada en mi diccionario';
  });
  updateDictionary();
  window.addEventListener('edicion-viva:dictionary-updated', event => {
    if (event.detail?.language === 'gr') {
      dictionary = readDictionary();
      updateDictionary();
    }
  });

  function showDictionary() {
    closePanels();
    dictionaryPanel.hidden = false;
    dictionaryPanel.querySelector('#close-drawer').focus();
  }
  function closeDictionary() { dictionaryPanel.hidden = true; }
  $('#close-drawer').addEventListener('click', closeDictionary);
  $('#close-word').addEventListener('click', closePanels);
  $('#close-note').addEventListener('click', closePanels);
  $('#export-dictionary').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({version: 1, language: 'grc', entries: dictionary}, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = makeElement('a'); a.href = url; a.download = 'edicion-viva-griego-diccionario.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('#import-trigger').addEventListener('click', () => $('#import-dictionary').click());
  $('#import-dictionary').addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      if (file.size > 500_000) throw new Error('El archivo supera el tamaño permitido.');
      const data = JSON.parse(await file.text());
      if (data.version !== 1 || data.language !== 'grc' || !data.entries || typeof data.entries !== 'object') throw new Error('Formato de diccionario no reconocido.');
      let added = 0;
      for (const form of Object.keys(data.entries)) if (Object.hasOwn(glossary, form)) { dictionary[form] = glossary[form]; added++; }
      persist();
      $('#dictionary-feedback').textContent = `${added} palabras reconocidas incorporadas.`;
    } catch (error) { $('#dictionary-feedback').textContent = error.message; }
    event.target.value = '';
  });

  function showCard() {
    const [form, data] = reviewItems[reviewIndex];
    $('#flash-progress').textContent = `${reviewIndex + 1} / ${reviewItems.length}`;
    $('#flash-form').textContent = form;
    $('#flash-lemma').textContent = `${data[0]} · ${data[2]}`;
    $('#flash-morph').textContent = data[1];
    $('#flash-answer').hidden = true;
    $('#reveal-card').hidden = false;
    $('#next-card').hidden = true;
  }
  $('#start-review').addEventListener('click', () => {
    reviewItems = Object.entries(dictionary);
    if (!reviewItems.length) { $('#dictionary-feedback').textContent = 'Guardá alguna palabra para empezar a repasar.'; return; }
    reviewIndex = 0;
    $('#flashcard').hidden = false;
    showCard();
  });
  $('#reveal-card').addEventListener('click', () => {
    $('#flash-answer').hidden = false;
    $('#reveal-card').hidden = true;
    $('#next-card').hidden = false;
  });
  $('#next-card').addEventListener('click', () => {
    reviewIndex = (reviewIndex + 1) % reviewItems.length;
    showCard();
  });
  $('#end-review').addEventListener('click', () => { $('#flashcard').hidden = true; });

  function closeMobileRails() { $('#sidebar').classList.remove('open'); $('#character-rail').classList.remove('open'); }
  document.querySelectorAll('[data-drawer]').forEach(button => button.addEventListener('click', () => {
    const target = button.dataset.drawer;
    if (target === 'dictionary') { closeMobileRails(); showDictionary(); return; }
    closeDictionary(); closePanels();
    const mobile = window.matchMedia('(max-width: 860px)').matches;
    if (target === 'position') {
      if (mobile) { const open = !$('#sidebar').classList.contains('open'); closeMobileRails(); $('#sidebar').classList.toggle('open', open); }
      else app.classList.toggle('nav-collapsed');
    } else if (target === 'characters') {
      if (mobile || window.matchMedia('(max-width: 1160px)').matches) { const open = !$('#character-rail').classList.contains('open'); closeMobileRails(); $('#character-rail').classList.toggle('open', open); }
      else app.classList.toggle('characters-collapsed');
    }
    const sidebarExpanded = !app.classList.contains('nav-collapsed');
    const contextExpanded = !app.classList.contains('characters-collapsed');
    document.querySelectorAll('[data-drawer="position"]').forEach(b => b.setAttribute('aria-expanded', String(mobile ? $('#sidebar').classList.contains('open') : sidebarExpanded)));
    document.querySelectorAll('[data-drawer="characters"]').forEach(b => b.setAttribute('aria-expanded', String(mobile ? $('#character-rail').classList.contains('open') : contextExpanded)));
  }));
  $('.passage-nav').addEventListener('click', () => closeMobileRails());
  $('#return-to-text').addEventListener('click', () => closeMobileRails());
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closePanels(); closeDictionary(); closeMobileRails(); } });
  document.addEventListener('pointerdown', event => {
    if (!wordPanel.hidden && !wordPanel.contains(event.target) && !event.target.closest('.token')) wordPanel.hidden = true;
    if (!notePanel.hidden && !notePanel.contains(event.target) && !event.target.closest('.note-anchor')) notePanel.hidden = true;
  });
})();
