/* Edición Viva · portada contextual.
   Lectores con sesión: última obra leída, según el registro sincronizado.
   Visitantes: edición cuyo contenido cambió más recientemente en GitHub.
   Si GitHub no está disponible, se mantiene una edición destacada sin atribuirle una fecha. */
(() => {
  'use strict';
  const panel = document.querySelector('.hero-feature');
  if (!panel || typeof collection === 'undefined') return;

  const label = panel.querySelector('[data-feature-label]');
  const monogram = panel.querySelector('[data-feature-monogram]');
  const author = panel.querySelector('[data-feature-author]');
  const title = panel.querySelector('[data-feature-title]');
  const subtitle = panel.querySelector('[data-feature-subtitle]');
  const description = panel.querySelector('[data-feature-description]');
  const link = panel.querySelector('[data-feature-link]');

  // La URL del catálogo sigue siendo la fuente autorizada para los enlaces.
  const editions = [
    {
      catalogueUrl: './autores/plauto/aulularia/',
      readingId: 'plauto-aulularia', monogram: 'P',
      explanation: 'Comedia latina de Plauto, en lectura bilingüe con notas y léxico.',
      repository: 'ignacioaragues/edicion-viva', sourcePath: 'autores/plauto/aulularia/'
    },
    {
      catalogueUrl: 'https://ignacioaragues.github.io/shakespeare-edicion-viva/',
      readingId: 'shakespeare-coriolanus', monogram: 'S',
      explanation: 'La tragedia romana de Shakespeare, escena por escena.',
      repository: 'ignacioaragues/shakespeare-edicion-viva', sourcePath: ''
    },
    {
      catalogueUrl: './autores/evangelios/marcos/',
      readingId: 'evangelios-marcos', monogram: 'M',
      title: 'Evangelio según Marcos',
      explanation: 'Griego koiné y español, con lectura y análisis lingüístico.',
      repository: 'ignacioaragues/edicion-viva', sourcePath: 'autores/evangelios/marcos/'
    },
    {
      catalogueUrl: './autores/leon-i/',
      readingId: 'leo-i-sermo-1', monogram: 'L',
      title: 'León I el Grande', subtitle: 'Sermones y epístolas',
      readingUrl: './autores/leon-i/sermones/sermo-i/',
      explanation: 'Sus escritos latinos y su voz: sermones, correspondencia y notas filológicas.',
      repository: 'ignacioaragues/edicion-viva', sourcePath: 'autores/leon-i/'
    },
    {
      catalogueUrl: './autores/corneille/attila/',
      readingId: 'corneille-attila', monogram: 'A',
      explanation: 'La tragedia de Corneille en francés y español.',
      repository: 'ignacioaragues/edicion-viva', sourcePath: 'autores/corneille/attila/'
    }
  ].map(spec => {
    const entry = collection.find(item => item.url === spec.catalogueUrl && item.status === 'available');
    return entry ? { ...entry, ...spec } : null;
  }).filter(Boolean);

  const byId = new Map(editions.map(item => [item.readingId, item]));
  const fallback = editions.find(item => item.readingId === 'shakespeare-coriolanus') || editions[0];
  const CACHE_KEY = 'edicion-viva:featured-commits:v1';
  const CACHE_TTL = 15 * 60 * 1000;
  let accountUser = null;
  let recentUpdate = null;

  function formatDate(date) {
    const d = new Date(date);
    return Number.isNaN(d.getTime()) ? '' :
      new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short', year: 'numeric' }).format(d);
  }

  function paint(item, mode, work = null, date = '') {
    if (!item) return;
    label.textContent = mode === 'reading' ? 'TU ÚLTIMA LECTURA'
      : mode === 'updated' ? 'ÚLTIMA ACTUALIZACIÓN' : 'EDICIÓN DESTACADA';
    monogram.textContent = item.monogram;
    author.textContent = (item.title === item.author || item.period === 'TEXTOS BÍBLICOS' ? item.period : item.author).toLocaleUpperCase('es');
    title.textContent = item.title || item.work;
    subtitle.textContent = item.subtitle || item.translated || '';
    const position = typeof work?.lastPosition === 'string' ? work.lastPosition.trim() : '';
    if (mode === 'reading') {
      description.textContent =
        (position ? 'Última posición registrada: ' + position + '. ' : '') +
        'Volvé a ' + (item.title || item.work) + ' desde tu biblioteca de lectura.';
    } else if (mode === 'updated') {
      description.textContent = item.explanation.replace(/[.\\s]+$/, '') +
        (date ? ' · Actualizada el ' + formatDate(date) + '.' : '.');
    } else {
      description.textContent = item.explanation;
    }
    link.href = mode === 'reading' ? (item.readingUrl || item.url) : item.url;
    link.querySelector('[data-feature-cta]').textContent =
      mode === 'reading' ? 'Volver a la lectura' : 'Entrar a la edición';
    panel.setAttribute('aria-label', mode === 'reading' ? 'Tu última lectura' :
      mode === 'updated' ? 'Edición actualizada recientemente' : 'Edición destacada');
  }

  function latestReading() {
    const works = window.EdicionVivaReading?.read()?.works;
    if (!works || typeof works !== 'object') return null;
    return Object.entries(works)
      .filter(([id, work]) => byId.has(id) && work && typeof work.lastReadAt === 'string' &&
        !Number.isNaN(new Date(work.lastReadAt).getTime()))
      .sort((a, b) => new Date(b[1].lastReadAt) - new Date(a[1].lastReadAt))[0] || null;
  }

  function updateCard() {
    if (accountUser) {
      const latest = latestReading();
      if (latest) {
        paint(byId.get(latest[0]), 'reading', latest[1]);
        return;
      }
    }
    if (recentUpdate) paint(recentUpdate.item, 'updated', null, recentUpdate.date);
    else paint(fallback, 'featured');
  }

  async function fetchLastChange(item) {
    const base = 'https://api.github.com/repos/' + item.repository + '/commits?per_page=1';
    const url = base + (item.sourcePath ? '&path=' + encodeURIComponent(item.sourcePath) : '');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);
    try {
      const response = await fetch(url, {
        headers: { Accept: 'application/vnd.github+json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('GitHub ' + response.status);
      const commits = await response.json();
      const changedAt = commits?.[0]?.commit?.committer?.date || commits?.[0]?.commit?.author?.date;
      if (!changedAt || Number.isNaN(Date.parse(changedAt))) throw new Error('Sin fecha de actualización');
      return { readingId: item.readingId, date: changedAt };
    } finally {
      clearTimeout(timeout);
    }
  }

  function useUpdates(entries) {
    if (!Array.isArray(entries) || entries.length !== editions.length) return false;
    const dates = entries.map(record => {
      const item = byId.get(record.readingId);
      return item && !Number.isNaN(Date.parse(record.date))
        ? { item, date: record.date } : null;
    });
    if (dates.some(item => !item)) return false;
    dates.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    recentUpdate = dates[0];
    updateCard();
    return true;
  }

  async function loadUpdates() {
    try {
      const cache = JSON.parse(sessionStorage.getItem(CACHE_KEY) || 'null');
      if (cache && Date.now() - cache.checkedAt < CACHE_TTL && useUpdates(cache.entries)) return;
    } catch { /* Sin caché de la sesión */ }
    try {
      // Exigir datos para todas las ediciones antes de anunciar cuál es la última.
      const entries = await Promise.all(editions.map(fetchLastChange));
      if (useUpdates(entries)) {
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ checkedAt: Date.now(), entries })); }
        catch { /* El destacado sigue funcionando sin almacenamiento */ }
      }
    } catch (error) {
      console.info('Edición Viva: no se pudo verificar la última actualización.', error);
      updateCard();
    }
  }

  function onAccountChange(event) {
    accountUser = event?.user || null;
    updateCard();
  }

  window.addEventListener('edicion-viva:reading-updated', updateCard);
  window.addEventListener('edicion-viva:account-status', event => onAccountChange(event.detail));
  if (window.EdicionVivaAccount?.subscribe) {
    window.EdicionVivaAccount.subscribe(onAccountChange);
  } else {
    window.addEventListener('edicion-viva:account-ready', () => {
      window.EdicionVivaAccount?.subscribe(onAccountChange);
    }, { once: true });
  }
  updateCard();
  loadUpdates();
})();