/* Un único lector para el curso y el corpus; evita bifurcar las traducciones. */
(function () {
  const poems = window.ED_DICKINSON_POEMS || {};
  const library = document.getElementById('dickinson-poem-list');
  if (library) {
    const entries = Object.values(poems).filter(p => p && /^J\d+$/.test(p.id) && Array.isArray(p.lines)).sort((a,b) => Number(a.id.slice(1)) - Number(b.id.slice(1)));
    const index = document.getElementById('dickinson-poem-index');
    const readKey = 'ed-dickinson-read-v1';
    let readIds = new Set();
    try { readIds = new Set(JSON.parse(localStorage.getItem(readKey) || '[]')); } catch (_) {}
    const search = document.getElementById('dickinson-poem-search');
    const groups = document.getElementById('dickinson-poem-groups');
    const readCount = document.getElementById('dickinson-read-count');
    const showRead = document.getElementById('dickinson-show-read');
    const updateReadCount = () => { if (readCount) readCount.textContent = readIds.size + ' de ' + entries.length + ' leídos'; };
    const markRead = (id, value) => {
      if (value) readIds.add(id); else readIds.delete(id);
      try { localStorage.setItem(readKey, JSON.stringify([...readIds])); } catch (_) {}
      document.querySelectorAll('[data-poem-link]').forEach(a => {
        if (a.dataset.poemLink === id) {
          a.classList.toggle('is-read', readIds.has(id));
          a.setAttribute('aria-label', id + (readIds.has(id) ? ', leído' : ', pendiente'));
        }
      });
      document.querySelectorAll('[data-read-toggle]').forEach(button => {
        if (button.dataset.readToggle === id) {
          button.textContent = readIds.has(id) ? '✓ Leído · marcar pendiente' : '○ Marcar como leído';
          button.setAttribute('aria-pressed', String(readIds.has(id)));
        }
      });
      updateReadCount();
    };
    window.dickinsonReadState = { readIds, markRead };
    if (index) {
      const buckets = new Map();
      entries.forEach(poem => {
        const number = Number(poem.id.slice(1));
        const from = Math.floor((number - 1) / 100) * 100 + 1;
        const label = from + '–' + (from + 99);
        if (!buckets.has(label)) buckets.set(label, []);
        buckets.get(label).push(poem);
      });
      const renderIndex = () => {
        const query = (search?.value || '').trim().toLocaleLowerCase();
        const onlyRead = !!showRead?.checked;
        const current = decodeURIComponent(location.hash.slice(1));
        index.replaceChildren();
        for (const [label, poemsInBucket] of buckets) {
          const visible = poemsInBucket.filter(poem => {
            const haystack = [poem.id, poem.incipit, poem.titleES || '', poem.franklin || ''].join(' ').toLocaleLowerCase();
            return (!query || haystack.includes(query)) && (!onlyRead || readIds.has(poem.id));
          });
          if (!visible.length) continue;
          const section = document.createElement('details');
          section.className = 'poem-index-group';
          section.open = !!query || !!onlyRead || visible.some(p => p.id === current);
          const heading = document.createElement('summary');
          heading.textContent = 'J' + label + ' · ' + visible.length + ' poemas';
          section.append(heading);
          visible.forEach(poem => {
            const link = document.createElement('a');
            link.href = '#' + poem.id;
            link.dataset.poemLink = poem.id;
            link.textContent = poem.id + ' · ' + poem.incipit;
            link.classList.toggle('is-read', readIds.has(poem.id));
            link.classList.toggle('active', poem.id === current);
            if (poem.id === current) link.setAttribute('aria-current', 'page');
            section.append(link);
          });
          index.append(section);
        }
        if (!index.childElementCount) index.append(Object.assign(document.createElement('p'), {textContent:'No hay poemas que coincidan.'}));
      };
      window.dickinsonRenderIndex = renderIndex;
      search?.addEventListener('input', renderIndex);
      showRead?.addEventListener('change', renderIndex);
      groups?.addEventListener('change', () => {
        if (groups.value === 'all') index.querySelectorAll('details').forEach(d => d.open = true);
        if (groups.value === 'compact') index.querySelectorAll('details').forEach(d => d.open = false);
        if (groups.value === 'current') renderIndex();
      });
      renderIndex();
      updateReadCount();
    }
    const verses = entries.reduce((sum, p) => sum + p.lines.length, 0);
    document.querySelectorAll('[data-poem-count]').forEach(el => el.textContent = entries.length.toLocaleString('es'));
    document.querySelectorAll('[data-verse-count]').forEach(el => el.textContent = verses.toLocaleString('es'));
  }
  const all = [...document.querySelectorAll('body[data-page="curso"] [data-dickinson-poem]')];
  const make = (tag, className, content) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content !== undefined) el.textContent = content;
    return el;
  };
  // Resaltados persistentes por poema y número de verso; independientes del corpus.
  const highlightKey = 'ed-dickinson-highlights-v1';
  let highlights = {};
  try {
    const stored = JSON.parse(localStorage.getItem(highlightKey) || '{}');
    if (stored && typeof stored === 'object' && !Array.isArray(stored)) highlights = stored;
  } catch (_) {}
  const highlightToggle = document.querySelector('[data-toggle-highlights]');
  let highlightMode = false;
  const updateHighlightToggle = () => {
    if (!highlightToggle) return;
    highlightToggle.setAttribute('aria-pressed', String(highlightMode));
    highlightToggle.textContent = highlightMode ? '✎ Resaltar versos: activado' : '✎ Resaltar versos';
  };
  highlightToggle?.addEventListener('click', () => {
    highlightMode = !highlightMode;
    updateHighlightToggle();
  });
  updateHighlightToggle();
  const toggleHighlight = (id, verse, row) => {
    const selected = new Set(Array.isArray(highlights[id]) ? highlights[id] : []);
    if (selected.has(verse)) selected.delete(verse); else selected.add(verse);
    if (selected.size) highlights[id] = [...selected].sort((a,b) => a-b);
    else delete highlights[id];
    row.classList.toggle('is-highlighted', selected.has(verse));
    row.setAttribute('aria-pressed', String(selected.has(verse)));
    try { localStorage.setItem(highlightKey, JSON.stringify(highlights)); } catch (_) {}
  };
  const renderPoem = (mount) => {
    const poem = poems[mount.dataset.dickinsonPoem];
    if (!poem) { mount.textContent = 'Poema todavía no incorporado.'; return; }
    mount.classList.add('poem-view');
    mount.id = poem.id;
    const header = make('div', 'poem-heading');
    const label = make('div', 'poem-label', poem.id + ' · ' + poem.franklin + ' · ' + poem.approx);
    const h3 = make('h3', '', poem.incipit);
    const shared = make('p', 'poem-subtitle', 'Inglés original · traducción propia al español');
    header.append(label, h3, shared);
    mount.append(header);
    const grid = make('div', 'poem-grid');
    const head = make('div', 'poem-grid-head');
    head.append(make('span', '', 'EN · ORIGINAL'), make('span', '', 'ES · TRADUCCIÓN'));
    grid.append(head);
    poem.lines.forEach((pair, index) => {
      const line = make('div', 'poem-line');
      if (document.body.dataset.page === 'edicion') {
        const verse = index + 1;
        line.classList.toggle('is-highlighted', (highlights[poem.id] || []).includes(verse));
        line.setAttribute('role', 'button');
        line.setAttribute('tabindex', '0');
        line.setAttribute('aria-label', 'Verso ' + verse + '. Activar para resaltar o quitar resaltado');
        line.setAttribute('aria-pressed', String((highlights[poem.id] || []).includes(verse)));
        line.addEventListener('click', () => {
          if (highlightMode) toggleHighlight(poem.id, verse, line);
        });
        line.addEventListener('keydown', event => {
          if ((event.key === 'Enter' || event.key === ' ') && highlightMode) {
            event.preventDefault();
            toggleHighlight(poem.id, verse, line);
          }
        });
      }
      if ((poem.stanzaBreaks || []).includes(index)) line.classList.add('stanza-start');
      const en = make('div', 'poem-en', pair[0]); en.lang = 'en';
      const es = make('div', 'poem-es', pair[1]); es.lang = 'es';
      en.dataset.line = String(index + 1);
      line.append(en, es); grid.append(line);
    });
    mount.append(grid);
    const actions = make('div', 'poem-actions');
    const notes = make('details', 'poem-notes');
    const summary = make('summary', '', 'Notas textuales y de lectura (' + poem.notes.length + ')');
    notes.append(summary);
    poem.notes.forEach(note => {
      const p = make('div', 'poem-note');
      p.append(make('strong', '', 'v. ' + note.line + ' · ' + note.title), make('p', '', note.body));
      notes.append(p);
    });
    if (poem.interpretation) {
      const reading = make('section', 'poem-interpretation');
      reading.append(make('h4', '', 'Interpretación'), make('p', '', poem.interpretation));
      if (poem.preest) reading.append(make('h4', '', 'La lectura de David Preest'), make('p', '', poem.preest));
      mount.append(reading);
    }
    const source = make('p', 'poem-source', 'Fuentes: ' + poem.source);
    mount.append(notes, source);
    if (document.body.dataset.page === 'curso') {
      const a = make('a', 'inline-link', 'Abrir en la edición completa →');
      a.href = '../../autores/dickinson/#' + poem.id;
      actions.append(a);
    } else {
      const lesson = ['J254', 'J303'].includes(poem.id) ? 2 : ['J324', 'J444'].includes(poem.id) ? 3 : ['J328', 'J986'].includes(poem.id) ? 4 : ['J185', 'J376', 'J501'].includes(poem.id) ? 5 : ['J449', 'J465', 'J712'].includes(poem.id) ? 6 : ['J14', 'J249', 'J640'].includes(poem.id) ? 7 : ['J258', 'J280', 'J341'].includes(poem.id) ? 8 : ['J709', 'J1129', 'J1212'].includes(poem.id) ? 9 : 1;
      const a = make('a', 'inline-link', 'Volver a la lección ' + lesson + ' →');
      a.href = '../../cursos/emily-dickinson/' + (['J254', 'J303'].includes(poem.id) ? 'leccion-2.html#' : ['J324', 'J444'].includes(poem.id) ? 'leccion-3.html#' : ['J328', 'J986'].includes(poem.id) ? 'leccion-4.html#' : ['J185', 'J376', 'J501'].includes(poem.id) ? 'leccion-5.html#' : ['J449', 'J465', 'J712'].includes(poem.id) ? 'leccion-6.html#' : ['J14', 'J249', 'J640'].includes(poem.id) ? 'leccion-7.html#' : ['J258', 'J280', 'J341'].includes(poem.id) ? 'leccion-8.html#' : ['J709', 'J1129', 'J1212'].includes(poem.id) ? 'leccion-9.html#' : '#') + poem.id;
      actions.append(a);
    }
    if (document.body.dataset.page === 'edicion' && window.dickinsonReadState) {
      const button = make('button', 'poem-read-toggle');
      button.type = 'button';
      button.dataset.readToggle = poem.id;
      const state = window.dickinsonReadState;
      button.textContent = state.readIds.has(poem.id) ? '✓ Leído · marcar pendiente' : '○ Marcar como leído';
      button.setAttribute('aria-pressed', String(state.readIds.has(poem.id)));
      button.addEventListener('click', () => {
        state.markRead(poem.id, !state.readIds.has(poem.id));
        window.dickinsonRenderIndex?.();
      });
      actions.prepend(button);
    }
    mount.append(actions);
  };
  all.forEach(renderPoem);
  if (library) {
    const ids = Object.keys(poems).filter(id => /^J\d+$/.test(id) && Array.isArray(poems[id].lines)).sort((a,b) => Number(a.slice(1))-Number(b.slice(1)));
    const navigation = document.createElement('nav');
    navigation.className = 'poem-pagination';
    navigation.setAttribute('aria-label', 'Navegación entre poemas');
    library.after(navigation);
    const display = () => {
      const requested = decodeURIComponent(location.hash.slice(1));
      const id = ids.includes(requested) ? requested : ids[0];
      if (!id) return;
      library.replaceChildren();
      const mount = document.createElement('div');
      mount.dataset.dickinsonPoem = id;
      library.append(mount);
      renderPoem(mount);
      navigation.replaceChildren();
      const pos = ids.indexOf(id);
      const makeLink = (target, label) => {
        const a = document.createElement('a');
        a.href = '#' + target;
        a.textContent = label;
        return a;
      };
      if (pos > 0) navigation.append(makeLink(ids[pos-1], '← Poema anterior'));
      const position = document.createElement('span');
      position.textContent = 'Poema ' + (pos+1) + ' de ' + ids.length;
      navigation.append(position);
      if (pos < ids.length-1) navigation.append(makeLink(ids[pos+1], 'Poema siguiente →'));
      window.dickinsonRenderIndex?.();
      document.querySelectorAll('#dickinson-poem-index a').forEach(a => {
        const active = a.getAttribute('href') === '#' + id;
        a.classList.toggle('active', active);
        if (active) a.setAttribute('aria-current','page');
        else a.removeAttribute('aria-current');
      });
      document.title = id + ' · ' + poems[id].incipit + ' — Emily Dickinson · Edición Viva';
    };
    document.addEventListener('click', event => {
      const link = event.target.closest('a[href^="#J"]');
      if (!link || !library.contains(link) && !document.getElementById('dickinson-poem-index')?.contains(link) && !navigation.contains(link)) return;
      const target = decodeURIComponent(link.hash.slice(1));
      if (!ids.includes(target)) return;
      event.preventDefault();
      const y = window.scrollY;
      history.pushState({ poem: target }, '', '#' + target);
      display();
      window.scrollTo(0, y);
    });
    window.addEventListener('popstate', display);
    window.addEventListener('hashchange', display);
    display();
  }
  const layout = document.getElementById('dickinson-reader-layout');
  const widthControl = document.getElementById('dickinson-reader-width');
  const widthReset = document.querySelector('[data-width-reset]');
  const indexToggle = document.querySelector('[data-toggle-index]');
  if (layout && widthControl) {
    // El contenedor siempre ocupa el ancho disponible. El control ajusta
    // únicamente la proporción EN/ES, sin achicar el área de lectura.
    const applyColumns = value => {
      const left = Math.max(30, Math.min(70, Number(value) || 50));
      document.body.style.setProperty('--dickinson-english-share', left + 'fr');
      document.body.style.setProperty('--dickinson-spanish-share', (100 - left) + 'fr');
      widthControl.value = String(left);
      try { localStorage.setItem('dickinson-column-share', String(left)); } catch (_) {}
    };
    let stored = 50;
    try { stored = Number(localStorage.getItem('dickinson-column-share')) || 50; } catch (_) {}
    applyColumns(stored);
    widthControl.addEventListener('input', () => applyColumns(widthControl.value));
    if (widthReset) widthReset.addEventListener('click', () => applyColumns(50));
  }
  if (layout && indexToggle) {
    const setIndex = hidden => {
      layout.classList.toggle('index-hidden', hidden);
      indexToggle.textContent = hidden ? 'Mostrar índice' : 'Ocultar índice';
      indexToggle.setAttribute('aria-expanded', String(!hidden));
      try { localStorage.setItem('dickinson-index-hidden', String(hidden)); } catch (_) {}
    };
    let hidden = false;
    try { hidden = localStorage.getItem('dickinson-index-hidden') === 'true'; } catch (_) {}
    setIndex(hidden);
    indexToggle.addEventListener('click', () => setIndex(!layout.classList.contains('index-hidden')));
  }
  let currentSize = 17;
  const updateSize = () => document.documentElement.style.setProperty('--poem-size', currentSize + 'px');
  document.querySelectorAll('[data-font-increase]').forEach(b => b.addEventListener('click', () => {
    currentSize = Math.min(23, currentSize + 1); updateSize();
  }));
  document.querySelectorAll('[data-font-decrease]').forEach(b => b.addEventListener('click', () => {
    currentSize = Math.max(13, currentSize - 1); updateSize();
  }));
  document.querySelectorAll('[data-toggle-translation]').forEach(b => b.addEventListener('click', () => {
    const hidden = document.body.classList.toggle('translation-hidden');
    b.textContent = hidden ? 'Mostrar traducción' : 'Ocultar traducción';
    b.setAttribute('aria-pressed', String(!hidden));
  }));
})();