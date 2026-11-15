/* La preferencia de columnas se comparte entre lectores alojados en Edición Viva. */
(() => {
  const reader = document.querySelector('.reader');
  const toggle = document.getElementById('toggle-layout');
  if (!reader || !toggle) return;
  const key = 'edicion-viva:reader-layout:v1';
  let saved = null;
  try { saved = localStorage.getItem(key); } catch { /* almacenamiento no disponible */ }
  let layout = ['parallel', 'stacked'].includes(saved)
    ? saved : (window.matchMedia('(max-width: 820px)').matches ? 'stacked' : 'parallel');

  function render() {
    reader.dataset.layout = layout;
    toggle.textContent = layout === 'stacked' ? 'Ver en columnas' : 'Ver en bloques';
    toggle.setAttribute('aria-pressed', String(layout === 'stacked'));
  }

  toggle.addEventListener('click', () => {
    layout = layout === 'stacked' ? 'parallel' : 'stacked';
    try { localStorage.setItem(key, layout); } catch { /* preferencia solo para esta sesión */ }
    render();
  });
  render();
})();


/* Edición Viva: tamaño tipográfico compartido entre lectores. */
(() => {
  const reader = document.querySelector('.reader');
  if (!reader) return;
  const host = reader.querySelector('.reader-controls');
  if (!host) return;
  const key = 'edicion-viva-reading-font-size';
  const min = 14, max = 26, defaultSize = 17;
  let size = defaultSize;
  try {
    const stored = Number(localStorage.getItem(key));
    if (Number.isFinite(stored) && stored >= min && stored <= max) size = stored;
  } catch (_) {}
  let controls = host.querySelector('.font-size-controls');
  if (!controls) {
    controls = document.createElement('div');
    controls.className = 'font-size-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Tamaño de letra del texto');
    for (const [id, label, title] of [['font-decrease','A−','Reducir tamaño de letra'],['font-increase','A+','Aumentar tamaño de letra']]) {
      const button = document.createElement('button');
      button.type = 'button'; button.id = id; button.textContent = label;
      button.setAttribute('aria-label', title);
      controls.append(button);
    }
    host.prepend(controls);
  }
  const minus = controls.querySelector('#font-decrease');
  const plus = controls.querySelector('#font-increase');
  if (!minus || !plus) return;
  if (!document.getElementById('ev-reading-font-style')) {
    const style = document.createElement('style');
    style.id = 'ev-reading-font-style';
    style.textContent = '.font-size-controls{display:inline-flex;gap:4px;align-items:center;flex-shrink:0}.font-size-controls button{border:1px solid var(--line,#e4e3da);border-radius:4px;background:var(--paper-soft,#fbfaf6);color:var(--ink-mid,#636861);font:600 12px/1 var(--sans,"DM Sans",sans-serif);padding:7px 10px;min-width:35px;min-height:30px;cursor:pointer}.font-size-controls button:disabled{opacity:.4;cursor:default}.font-size-controls button:focus-visible{outline:2px solid var(--accent,#9d5747);outline-offset:2px}';
    document.head.append(style);
  }
  function apply() {
    document.documentElement.style.setProperty('--reading-size', size + 'px');
    minus.disabled = size <= min;
    plus.disabled = size >= max;
    try { localStorage.setItem(key, String(size)); } catch (_) {}
  }
  minus.addEventListener('click', () => { size = Math.max(min, size - 1); apply(); });
  plus.addEventListener('click', () => { size = Math.min(max, size + 1); apply(); });
  apply();
})();
