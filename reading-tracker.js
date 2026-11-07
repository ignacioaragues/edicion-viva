/* Edición Viva · registro de lectura local, sin cuentas ni analítica remota. */
(() => {
  'use strict';

  const KEY = 'edicion-viva:reading:v1';
  const DEVICE_KEY = 'edicion-viva:reading-device:v1';
  const IDLE_MS = 90_000;
  const INTERVAL_MS = 5_000;

  function read() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY) || '{}');
      return value && value.version === 1 && value.works && typeof value.works === 'object'
        ? value : { version: 1, works: {} };
    } catch { return { version: 1, works: {} }; }
  }

  function write(data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); return true; }
    catch { return false; }
  }

  function deviceId() {
    try {
      let id = localStorage.getItem(DEVICE_KEY);
      if (!id) {
        id = (crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`);
        localStorage.setItem(DEVICE_KEY, id);
      }
      return id;
    } catch { return 'local'; }
  }

  function dayKey(date = new Date()) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function secondsForDay(work, date) {
    const values = work?.days?.[date];
    if (!values || typeof values !== 'object') return 0;
    return Object.values(values).reduce((total, seconds) =>
      total + (Number.isFinite(seconds) && seconds > 0 ? seconds : 0), 0);
  }

  function secondsForWork(work) {
    return Object.keys(work?.days || {}).reduce((sum, date) => sum + secondsForDay(work, date), 0);
  }

  function secondsForDate(data, date) {
    return Object.values(data.works || {}).reduce((sum, work) => sum + secondsForDay(work, date), 0);
  }

  function format(seconds) {
    const min = Math.floor(Math.max(0, seconds) / 60);
    const h = Math.floor(min / 60);
    return h ? `${h} h ${String(min % 60).padStart(2, '0')} min` : `${min} min`;
  }

  function merge(incoming) {
    if (!incoming || incoming.version !== 1 || !incoming.works || typeof incoming.works !== 'object') {
      throw new Error('Formato no reconocido');
    }
    const target = read();
    for (const [id, work] of Object.entries(incoming.works)) {
      if (!/^[a-z0-9-]{1,80}$/.test(id) || !work || typeof work !== 'object') continue;
      const local = target.works[id] || { title: '', days: {} };
      if (!local.days || typeof local.days !== 'object') local.days = {};
      if (typeof work.title === 'string' && work.title.length <= 150) local.title = work.title;
      for (const [date, devices] of Object.entries(work.days || {})) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !devices || typeof devices !== 'object') continue;
        const bucket = local.days[date] || {};
        for (const [origin, seconds] of Object.entries(devices)) {
          if (origin.length > 100 || !Number.isFinite(seconds) || seconds < 0 || seconds > 86400) continue;
          bucket[origin] = Math.max(bucket[origin] || 0, seconds);
        }
        local.days[date] = bucket;
      }
      if (typeof work.lastReadAt === 'string' &&
          (!local.lastReadAt || work.lastReadAt > local.lastReadAt)) {
        local.lastReadAt = work.lastReadAt;
        if (typeof work.lastPosition === 'string') local.lastPosition = work.lastPosition.slice(0, 90);
      }
      target.works[id] = local;
    }
    if (!write(target)) throw new Error('No se pudo guardar el registro');
    return target;
  }

  window.EdicionVivaReading = { read, write, merge, dayKey, secondsForDay, secondsForWork, secondsForDate, format };

  const id = document.body.dataset.readingId;
  if (!id) return;
  const title = document.body.dataset.readingTitle || document.title;
  const device = deviceId();
  const sessionStart = Date.now();
  let lastTick = sessionStart;
  let lastActivity = sessionStart;
  let focused = true;
  let sessionSeconds = 0;
  let observedPosition = '';

  const activity = () => { lastActivity = Date.now(); };
  ['pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'].forEach(event =>
    window.addEventListener(event, activity, { passive: true }));
  window.addEventListener('focus', () => { focused = true; activity(); });
  window.addEventListener('blur', () => { focused = false; });

  function currentPosition() {
    const rows = document.querySelectorAll('.verse');
    let nearest = '';
    for (const row of rows) {
      const box = row.getBoundingClientRect();
      if (box.bottom < 80) continue;
      const number = row.querySelector('.number')?.textContent?.trim();
      if (number) nearest = `v. ${number}`;
      if (box.top > window.innerHeight * 0.6) break;
    }
    return nearest || observedPosition;
  }

  function display(data) {
    const work = data.works[id];
    const today = dayKey();
    const values = {
      'reading-today': format(secondsForDay(work, today)),
      'reading-session': format(sessionSeconds),
      'reading-total': format(secondsForWork(work))
    };
    for (const [elementId, value] of Object.entries(values)) {
      const node = document.getElementById(elementId);
      if (node) node.textContent = value;
    }
  }

  function tick() {
    const now = Date.now();
    const elapsed = Math.min(INTERVAL_MS / 1000, Math.max(0, (now - lastTick) / 1000));
    lastTick = now;
    if (document.hidden || !focused || now - lastActivity > IDLE_MS) return;
    const data = read();
    const work = data.works[id] || { title, days: {} };
    if (!work.days || typeof work.days !== 'object') work.days = {};
    work.title = title;
    const date = dayKey();
    const bucket = work.days[date] || {};
    bucket[device] = (bucket[device] || 0) + elapsed;
    work.days[date] = bucket;
    sessionSeconds += elapsed;
    observedPosition = currentPosition();
    work.lastPosition = observedPosition;
    work.lastReadAt = new Date(now).toISOString();
    data.works[id] = work;
    if (write(data)) display(data);
  }

  document.addEventListener('visibilitychange', () => {
    lastTick = Date.now();
    if (!document.hidden) activity();
  });
  display(read());
  const timer = setInterval(tick, INTERVAL_MS);
  window.addEventListener('pagehide', () => { tick(); clearInterval(timer); });
})();
