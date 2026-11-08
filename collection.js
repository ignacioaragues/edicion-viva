/*
 * Catálogo de Edición Viva.
 * Para incorporar otra edición, agregá una entrada con status: "available"
 * y su URL real. Las obras en consideración no generan enlaces vacíos.
 * Pueden enlazarse tanto páginas alojadas aquí como proyectos externos.
 */
const collection = [
  {
    author: 'William Shakespeare',
    period: 'TEATRO ISABELINO',
    work: 'Coriolanus',
    translated: 'Coriolano',
    language: 'Inglés · Español',
    status: 'available',
    url: 'https://ignacioaragues.github.io/shakespeare-edicion-viva/',
    detail: 'Edición bilingüe en marcha',
  },
  {
    author: 'Tito Maccio Plauto',
    period: 'COMEDIA LATINA',
    work: 'Aulularia',
    translated: 'La comedia de la olla',
    language: 'Latín · Español',
    status: 'available',
    url: './autores/plauto/aulularia/',
    detail: 'Edición en curso · Prólogo 1–39; I.1, 40–78; I.2, 79–119; II.1, 120–160',
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
    author: 'Pierre Corneille',
    period: 'TEATRO CLÁSICO FRANCÉS',
    work: 'Attila',
    translated: 'Atila',
    language: 'Francés · Español',
    status: 'considering',
    detail: 'En consideración',
  },
];

const list = document.querySelector('#library-list');
if (list) {
  list.replaceChildren();
  collection.forEach((item, index) => {
    const available = item.status === 'available' && item.url;
    const row = document.createElement(available ? 'a' : 'div');
    row.className = 'library-row' + (available ? ' library-row-active' : ' library-row-future');
    if (available) {
      row.href = item.url;
      row.setAttribute('aria-label', `${item.author}: ${item.work}. Entrar en la edición`);
    }

    const number = document.createElement('span');
    number.className = 'library-number';
    number.textContent = String(index + 1).padStart(2, '0');

    const identity = document.createElement('div');
    identity.className = 'library-identity';
    const overline = document.createElement('span');
    overline.className = 'library-overline';
    overline.textContent = item.period;
    const name = document.createElement('h3');
    name.textContent = item.author;
    const work = document.createElement('p');
    work.innerHTML = `<em>${escapeHtml(item.work)}</em> <span>· ${escapeHtml(item.translated)}</span>`;
    identity.append(overline, name, work);

    const meta = document.createElement('div');
    meta.className = 'library-meta';
    const lang = document.createElement('span');
    lang.className = 'library-lang';
    lang.textContent = item.language;
    const status = document.createElement('span');
    status.className = 'library-status' + (available ? ' is-live' : '');
    status.textContent = item.detail;
    meta.append(lang, status);

    const arrow = document.createElement('span');
    arrow.className = 'library-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = available ? '→' : '—';

    row.append(number, identity, meta, arrow);
    list.append(row);
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
