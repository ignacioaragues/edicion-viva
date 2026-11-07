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
