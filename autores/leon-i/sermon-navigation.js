/* Edición Viva · navegación entre sermones publicados de León I.
   La lista se obtiene del registro editorial: no enlazar obras aún no publicadas. */
(() => {
  const match = /^leo-i-sermo-(\d+)$/.exec(document.body?.dataset.readingId || '');
  const endnote = document.querySelector('.main-content > .endnote');
  if (!match || !endnote) return;
  const current = Number(match[1]);
  const fallback = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const roman = (value) => {
    let n = value, result = '';
    for (const [amount, symbol] of [[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]) {
      while (n >= amount) { result += symbol; n -= amount; }
    }
    return result;
  };
  const directory = (value) => '../sermo-' + roman(value).toLowerCase() + '/';
  const render = (published) => {
    const ordered = [...new Set(published.filter(n => Number.isInteger(n) && n > 0))].sort((a, b) => a - b);
    const index = ordered.indexOf(current);
    if (index < 0) return;
    const prev = ordered[index - 1], next = ordered[index + 1];
    endnote.classList.add('sermon-pager');
    endnote.setAttribute('aria-label', 'Navegación entre sermones');
    endnote.replaceChildren();
    for (const [number, direction] of [[prev, 'previous'], [next, 'next']]) {
      const label = direction === 'previous' ? '← Anterior' : 'Siguiente →';
      const node = document.createElement(number ? 'a' : 'span');
      node.className = 'sermon-pager-' + direction + (number ? '' : ' is-unavailable');
      if (number) {
        node.href = directory(number);
        node.textContent = direction === 'previous' ? label + ': Sermo ' + roman(number) : 'Sermo ' + roman(number) + ' · ' + label;
        node.setAttribute('aria-label', (direction === 'previous' ? 'Sermón anterior: ' : 'Sermón siguiente: ') + roman(number));
      } else {
        node.textContent = label;
        node.setAttribute('aria-disabled', 'true');
      }
      endnote.append(node);
    }
  };
  render(fallback);
  fetch('../../progress.json', {cache: 'no-cache'})
    .then(response => { if (!response.ok) throw new Error('Corpus no disponible'); return response.json(); })
    .then(data => {
      if (!Array.isArray(data.published)) return;
      const published = data.published.filter(item => item.group === 'sermones').map(item => Number(item.number));
      if (published.includes(current)) render(published);
    })
    .catch(() => { /* Queda disponible la navegación de respaldo. */ });
})();
