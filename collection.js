/*
 * Catálogo de Edición Viva.
 * Para incorporar otra edición, agregá una entrada con status: "available"
 * y su URL real. Las obras en consideración no generan enlaces vacíos.
 * Pueden enlazarse tanto páginas alojadas aquí como proyectos externos.
 */
const collection = [
  {
    author: 'Tito Maccio Plauto',
    period: 'COMEDIA LATINA',
    work: 'Aulularia',
    translated: 'La comedia de la olla',
    language: 'Latín · Español',
    status: 'available',
    url: './autores/plauto/aulularia/',
    detail: 'En curso',
  },
  {
    author: 'William Shakespeare',
    period: 'TEATRO ISABELINO',
    work: 'Coriolanus',
    translated: 'Coriolano',
    language: 'Inglés · Español',
    status: 'available',
    url: 'https://ignacioaragues.github.io/shakespeare-edicion-viva/',
    detail: 'En curso',
  },
  {
    author: 'Evangelio según Marcos',
    period: 'TEXTOS BÍBLICOS',
    work: 'Κατὰ Μᾶρκον',
    translated: 'Evangelio según Marcos',
    language: 'Griego koiné · Español · Latín opcional',
    status: 'available',
    url: './autores/evangelios/marcos/',
    detail: 'En curso · Marcos 1,1–3,30',
  },
  {
    author: 'Evangelio según Mateo',
    period: 'TEXTOS BÍBLICOS',
    work: 'Κατὰ Μαθθαῖον',
    translated: 'Evangelio según Mateo',
    language: 'Griego koiné · Español · Latín opcional',
    status: 'considering',
    detail: 'Próxima edición bíblica',
  },
  {
    author: 'Evangelio según Lucas',
    period: 'TEXTOS BÍBLICOS',
    work: 'Κατὰ Λουκᾶν',
    translated: 'Evangelio según Lucas',
    language: 'Griego koiné · Español · Latín opcional',
    status: 'considering',
    detail: 'Próxima edición bíblica',
  },
  {
    author: 'Evangelio según Juan',
    period: 'TEXTOS BÍBLICOS',
    work: 'Κατὰ Ἰωάννην',
    translated: 'Evangelio según Juan',
    language: 'Griego koiné · Español · Latín opcional',
    status: 'considering',
    detail: 'Próxima edición bíblica',
  },
  {
    author: 'John Milton',
    period: 'POESÍA ÉPICA',
    work: 'Paradise Lost',
    translated: 'El paraíso perdido',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración',
  },
  {
    author: 'Christopher Marlowe',
    period: 'TEATRO ISABELINO',
    work: 'Doctor Faustus',
    translated: 'Doctor Fausto',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración',
  },
  {
    author: 'Christopher Marlowe',
    period: 'TEATRO ISABELINO',
    work: 'Tamburlaine the Great',
    translated: 'Tamerlán el Grande · partes I y II',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración',
  },
  {
    author: 'Pierre Corneille',
    period: 'TEATRO CLÁSICO FRANCÉS',
    work: 'Attila',
    translated: 'Atila',
    language: 'Francés · Español',
    status: 'considering',
    detail: 'En consideración',
  },
  {
    author: 'Walt Whitman',
    period: 'POESÍA ESTADOUNIDENSE',
    work: 'Leaves of Grass',
    translated: 'Hojas de hierba',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración · edición de 1855 como punto de partida',
  },
  {
    author: 'Emily Dickinson',
    period: 'POESÍA ESTADOUNIDENSE',
    work: 'Poems',
    translated: 'Poemas',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración · edición por poemas',
  },
  {
    author: 'Francesco Petrarca',
    period: 'LÍRICA ITALIANA',
    work: 'Rerum vulgarium fragmenta',
    translated: 'Cancionero',
    language: 'Italiano · Español',
    status: 'considering',
    detail: 'En consideración · selección de obra pendiente de confirmar',
  },
  {
    author: 'Geoffrey Chaucer',
    period: 'LITERATURA MEDIEVAL INGLESA',
    work: 'The Canterbury Tales',
    translated: 'Los cuentos de Canterbury',
    language: 'Inglés medio · Inglés moderno · Español',
    status: 'considering',
    detail: 'En consideración · tres versiones seleccionables',
  },
  {
    author: 'Ludovico Ariosto',
    period: 'POESÍA ÉPICA ITALIANA',
    work: 'Orlando furioso',
    translated: 'Orlando furioso',
    language: 'Italiano · Español',
    status: 'considering',
    detail: 'En consideración · 46 cantos',
  },
  {
    author: 'Stanisław Wyspiański',
    period: 'TEATRO POLACO',
    work: 'Wesele',
    translated: 'La boda',
    language: 'Polaco · Español',
    status: 'considering',
    detail: 'En consideración',
  },
  {
    author: 'Victor Hugo',
    period: 'POESÍA FRANCESA',
    work: 'La Légende des siècles',
    translated: 'La leyenda de los siglos',
    language: 'Francés · Español',
    status: 'considering',
    detail: 'En consideración · tres series (1859, 1877, 1883)',
  },
  {
    author: 'Herman Melville',
    period: 'NOVELA ESTADOUNIDENSE',
    work: 'The Confidence-Man: His Masquerade',
    translated: 'El estafador y sus disfraces',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración',
  },
  {
    author: 'William Shakespeare',
    period: 'POESÍA ISABELINA',
    work: 'Shakespeare’s Sonnets',
    translated: 'Sonetos de Shakespeare',
    language: 'Inglés · Español',
    status: 'considering',
    detail: 'En consideración · 154 sonetos',
  },
  {
    author: 'Thomas Malory',
    period: 'PROSA ARTÚRICA INGLESA',
    work: "Le Morte d'Arthur",
    translated: 'La muerte de Arturo',
    language: 'Inglés del siglo XV · Inglés moderno opcional · Español',
    status: 'considering',
    detail: 'En consideración · edición de referencia por determinar',
  },
];

const list = document.querySelector('#library-list');
const viewButtons = document.querySelectorAll('[data-library-view]');

function isAvailable(item) {
  return item.status === 'available' && Boolean(item.url);
}

function titleOf(item) {
  // En los evangelios, el nombre reconocible en español encabeza la ficha.
  return item.period === 'TEXTOS BÍBLICOS' ? item.translated : item.work;
}

function subtitleOf(item) {
  const subtitle = item.period === 'TEXTOS BÍBLICOS' ? item.work : item.translated;
  return subtitle && subtitle !== titleOf(item) ? subtitle : '';
}

function authorGroupOf(item) {
  // El catálogo agrupa los evangelios como corpus, sin atribuirles una autoría segura.
  return item.period === 'TEXTOS BÍBLICOS' ? 'Evangelios' : item.author;
}

function makeElement(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value !== undefined) element.textContent = value;
  return element;
}

function makeNumber(index) {
  return makeElement('span', 'library-number', String(index + 1).padStart(2, '0'));
}

function renderWorks() {
  collection.forEach((item, index) => {
    const available = isAvailable(item);
    const row = document.createElement(available ? 'a' : 'div');
    row.className = 'library-row ' + (available ? 'library-row-active' : 'library-row-future');
    if (available) {
      row.href = item.url;
      row.setAttribute('aria-label', `${titleOf(item)}. Entrar en la edición`);
    }

    const identity = makeElement('div', 'library-identity');
    const overline = makeElement('span', 'library-overline', item.period);
    const title = makeElement('h3', '', titleOf(item));
    const byline = makeElement('p', 'library-byline');
    if (item.period !== 'TEXTOS BÍBLICOS') {
      byline.append(makeElement('span', 'library-work-author', item.author));
    }
    if (subtitleOf(item)) {
      if (byline.childNodes.length) byline.append(document.createTextNode(' · '));
      byline.append(makeElement('em', 'library-work-translation', subtitleOf(item)));
    }
    identity.append(overline, title, byline);

    const meta = makeElement('div', 'library-meta');
    meta.append(
      makeElement('span', 'library-lang', item.language),
      makeElement('span', 'library-status' + (available ? ' is-live' : ''), item.detail)
    );
    const arrow = makeElement('span', 'library-arrow', available ? '→' : '—');
    arrow.setAttribute('aria-hidden', 'true');
    row.append(makeNumber(index), identity, meta, arrow);
    list.append(row);
  });
}

function renderAuthors() {
  const groups = new Map();
  collection.forEach(item => {
    const name = authorGroupOf(item);
    if (!groups.has(name)) groups.set(name, []);
    groups.get(name).push(item);
  });

  const sorted = [...groups].sort(([a], [b]) => a.localeCompare(b, 'es', { sensitivity: 'base' }));
  sorted.forEach(([author, works], index) => {
    const row = makeElement('div', 'library-author-row');
    const identity = makeElement('div', 'library-identity library-author-identity');
    identity.append(
      makeElement('span', 'library-overline', works.length === 1 ? '1 OBRA EN CATÁLOGO' : `${works.length} OBRAS EN CATÁLOGO`),
      makeElement('h3', '', author)
    );
    const availableCount = works.filter(isAvailable).length;
    const availableLabel = availableCount === 1 ? '1 edición disponible' : `${availableCount} ediciones disponibles`;
    identity.append(makeElement('p', 'library-author-count', availableLabel));

    const workList = makeElement('div', 'library-author-works');
    works.forEach(item => {
      const available = isAvailable(item);
      const work = makeElement(available ? 'a' : 'div',
        'library-author-work ' + (available ? 'is-available' : 'is-future'));
      if (available) {
        work.href = item.url;
        work.setAttribute('aria-label', `${titleOf(item)}. Entrar en la edición`);
      }
      const main = makeElement('span', 'library-author-work-main');
      main.append(makeElement('span', 'library-author-work-title', titleOf(item)));
      if (subtitleOf(item)) main.append(makeElement('span', 'library-author-work-subtitle', subtitleOf(item)));
      const detail = makeElement('span', 'library-author-work-detail',
        `${item.language} · ${available ? 'Edición disponible' : 'En consideración'}`);
      const arrow = makeElement('span', 'library-author-work-arrow', available ? '→' : '—');
      arrow.setAttribute('aria-hidden', 'true');
      work.append(main, detail, arrow);
      workList.append(work);
    });

    row.append(makeNumber(index), identity, workList);
    list.append(row);
  });
}

function setLibraryView(view) {
  if (!list) return;
  const selected = view === 'authors' ? 'authors' : 'works';
  viewButtons.forEach(button => {
    const active = button.dataset.libraryView === selected;
    button.setAttribute('aria-pressed', String(active));
  });
  list.dataset.view = selected;
  list.setAttribute('aria-label', selected === 'works' ? 'Catálogo de obras' : 'Catálogo por autores');
  list.replaceChildren();
  if (selected === 'authors') renderAuthors();
  else renderWorks();
}

viewButtons.forEach(button => {
  button.addEventListener('click', () => setLibraryView(button.dataset.libraryView));
});
setLibraryView('works');
