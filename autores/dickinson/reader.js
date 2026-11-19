/* Un único lector para el curso y el corpus; evita bifurcar las traducciones. */
(function () {
  const poems = window.ED_DICKINSON_POEMS || {};
  const all = [...document.querySelectorAll('[data-dickinson-poem]')];
  const make = (tag, className, content) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content !== undefined) el.textContent = content;
    return el;
  };
  for (const mount of all) {
    const poem = poems[mount.dataset.dickinsonPoem];
    if (!poem) { mount.textContent = 'Poema todavía no incorporado.'; continue; }
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
    const source = make('p', 'poem-source', 'Fuentes: ' + poem.source);
    mount.append(notes, source);
    if (document.body.dataset.page === 'curso') {
      const a = make('a', 'inline-link', 'Abrir en la edición completa →');
      a.href = '../../../autores/dickinson/#' + poem.id;
      actions.append(a);
    } else {
      const a = make('a', 'inline-link', 'Volver a la lección 1 →');
      a.href = '../../cursos/emily-dickinson/#' + poem.id;
      actions.append(a);
    }
    mount.append(actions);
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