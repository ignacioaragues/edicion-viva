/* Edición Viva · cuenta opcional y sincronización entre dispositivos.
   Supabase JS v2.119.0 (dependencia fijada); ningún secreto de servidor en este archivo.
   La lectura sigue siendo pública y los datos locales anteriores NO se importan. */
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.119.0/+esm';

const SUPABASE_URL = 'https://nzjdlqanbclsfwwstkwi.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_be96IsfN-3skQErkZtOtQQ_pK0OT1Y9';
const client = createClient(SUPABASE_URL, PUBLISHABLE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
});
const K = Object.freeze({
  account: 'edicion-viva:cloud-user:v1',
  baseline: 'edicion-viva:cloud-baseline:v1',
  latin: 'edicion-viva:latin-dictionary:v1',
  greek: 'edicion-viva:dictionary:gr:v1',
  reading: 'edicion-viva:reading:v1',
  device: 'edicion-viva:reading-device:v1'
});
const EMPTY_READING = { version: 1, works: {} };
let user = null;
let working = false;
let started = false;
let initialized = false;
let currentStatus = 'Visitante · lectura pública';
let lastUpload = '';
let nextSync = 0;
const listeners = new Set();

function parse(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || '') ?? fallback; }
  catch { return fallback; }
}
function put(key, value) {
  localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
}
function same(a, b) { return JSON.stringify(a) === JSON.stringify(b); }
function status(message) {
  currentStatus = message;
  document.querySelectorAll('[data-account-status]').forEach(el => { el.textContent = message; });
  for (const listener of listeners) listener({ user, status: message });
  window.dispatchEvent(new CustomEvent('edicion-viva:account-status', { detail: { user, message } }));
}
function visibleEmail(u) {
  return u?.email || 'Cuenta conectada';
}
function linkAccount() {
  const path = location.pathname;
  return path.includes('/autores/') ? '../../../cuenta.html' :
    path.includes('/shakespeare-edicion-viva/') ? '../edicion-viva/cuenta.html' :
    './cuenta.html';
}
function renderAccount() {
  document.querySelectorAll('[data-account-link]').forEach(el => {
    el.href = linkAccount();
    el.textContent = user ? 'Mi cuenta' : 'Iniciar sesión';
  });
  const signedOut = document.querySelector('[data-account-signed-out]');
  const signedIn = document.querySelector('[data-account-signed-in]');
  if (signedOut) signedOut.hidden = !!user;
  if (signedIn) signedIn.hidden = !user;
  const identity = document.querySelector('[data-account-email]');
  if (identity) identity.textContent = visibleEmail(user);
}
function readDict(lang) {
  if (lang === 'la') {
    const items = parse(K.latin, []);
    return Object.fromEntries((Array.isArray(items) ? items : [])
      .filter(e => e && typeof e.id === 'string' && e.id.length <= 240)
      .map(e => [e.id, e]));
  }
  const items = parse(K.greek, {});
  return items && typeof items === 'object' && !Array.isArray(items) ? items : {};
}
function writeDict(lang, map) {
  if (lang === 'la') put(K.latin, Object.values(map));
  else put(K.greek, map);
}
function purgePreviousLocalData() {
  // No migrar datos guardados antes del primer inicio de sesión.
  localStorage.removeItem(K.latin);
  localStorage.removeItem(K.greek);
  localStorage.removeItem(K.reading);
  localStorage.removeItem(K.baseline);
}
function deviceId() {
  let value = localStorage.getItem(K.device);
  if (!value) {
    value = crypto.randomUUID();
    localStorage.setItem(K.device, value);
  }
  return value;
}
function onlyDeviceData(data, device) {
  const out = { version: 1, works: {} };
  for (const [id, work] of Object.entries(data?.works || {})) {
    if (!/^[a-z0-9-]{1,80}$/.test(id) || !work || typeof work !== 'object') continue;
    const days = {};
    for (const [day, values] of Object.entries(work.days || {})) {
      const seconds = Number(values?.[device] || 0);
      if (/^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isFinite(seconds) && seconds > 0) {
        days[day] = { [device]: seconds };
      }
    }
    if (Object.keys(days).length || work.lastReadAt) {
      out.works[id] = { title: String(work.title || '').slice(0, 150), days };
      if (work.lastReadAt) {
        out.works[id].lastReadAt = work.lastReadAt;
        out.works[id].lastPosition = String(work.lastPosition || '').slice(0, 90);
      }
    }
  }
  return out;
}
function mergeReading(into, incoming) {
  for (const [id, work] of Object.entries(incoming?.works || {})) {
    if (!/^[a-z0-9-]{1,80}$/.test(id) || !work || typeof work !== 'object') continue;
    const dest = into.works[id] || { title: '', days: {} };
    if (work.title) dest.title = String(work.title).slice(0, 150);
    for (const [date, devices] of Object.entries(work.days || {})) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
      const bucket = dest.days[date] || {};
      for (const [device, seconds] of Object.entries(devices || {})) {
        if (device.length > 100 || !Number.isFinite(seconds) || seconds < 0 || seconds > 86400) continue;
        bucket[device] = Math.max(bucket[device] || 0, seconds);
      }
      dest.days[date] = bucket;
    }
    if (work.lastReadAt && (!dest.lastReadAt || work.lastReadAt > dest.lastReadAt)) {
      dest.lastReadAt = work.lastReadAt;
      dest.lastPosition = work.lastPosition || '';
    }
    into.works[id] = dest;
  }
  return into;
}
async function getAllRows(table, fields) {
  const { data, error } = await client.from(table).select(fields).eq('user_id', user.id).limit(5000);
  if (error) throw error;
  return data || [];
}
async function syncDictionaries() {
  const remoteRows = await getAllRows('edition_dictionary_entries', 'language,entry_id,payload');
  for (const lang of ['la', 'gr']) {
    const local = readDict(lang);
    const baseline = parse(K.baseline, {});
    const old = baseline[lang] || {};
    const remote = Object.fromEntries(remoteRows.filter(row => row.language === lang)
      .map(row => [row.entry_id, row.payload]));
    const upserts = [];
    const deletes = [];
    // Tres vías: los cambios locales tienen precedencia únicamente si difieren
    // de la última versión sincronizada; el resto recibe cambios remotos.
    const merged = { ...remote };
    for (const id of new Set([...Object.keys(old), ...Object.keys(local)])) {
      if (!same(local[id], old[id])) {
        if (Object.hasOwn(local, id)) {
          if (!same(local[id], remote[id])) {
            upserts.push({ user_id: user.id, language: lang, entry_id: id, payload: local[id] });
          }
          merged[id] = local[id];
        } else {
          if (Object.hasOwn(remote, id)) deletes.push(id);
          delete merged[id];
        }
      }
    }
    if (upserts.length) {
      const { error } = await client.from('edition_dictionary_entries').upsert(upserts, {
        onConflict: 'user_id,language,entry_id'
      });
      if (error) throw error;
    }
    if (deletes.length) {
      const { error } = await client.from('edition_dictionary_entries').delete()
        .eq('user_id', user.id).eq('language', lang).in('entry_id', deletes);
      if (error) throw error;
    }
    if (!same(merged, local)) {
      writeDict(lang, merged);
      window.dispatchEvent(new CustomEvent('edicion-viva:dictionary-updated', { detail: { language: lang } }));
    }
    // A single baseline shared across tabs avoids mistaking a remote addition
    // for a new local edit. Preserve the other language's snapshot.
    put(K.baseline, { ...parse(K.baseline, {}), [lang]: merged });
  }
}
async function syncReading() {
  const device = deviceId();
  // Read server snapshots BEFORE writing. A fresh sign-in must never
  // overwrite the existing history of this same device with an empty record.
  const rows = await getAllRows('edition_reading_devices', 'device_id,data');
  const remoteOwn = rows.find(row => row.device_id === device)?.data || EMPTY_READING;
  const current = parse(K.reading, EMPTY_READING);
  const localOwn = onlyDeviceData(current, device);
  const combinedOwn = mergeReading(
    structuredClone(EMPTY_READING), remoteOwn
  );
  mergeReading(combinedOwn, localOwn);
  const remoteOwnText = JSON.stringify(remoteOwn);
  const combinedText = JSON.stringify(combinedOwn);
  if (combinedText !== remoteOwnText) {
    const { error } = await client.from('edition_reading_devices').upsert({
      user_id: user.id, device_id: device, data: combinedOwn
    }, { onConflict: 'user_id,device_id' });
    if (error) throw error;
  }
  lastUpload = combinedText;
  const merged = { version: 1, works: {} };
  for (const row of rows) mergeReading(merged, row.data);
  mergeReading(merged, combinedOwn);
  // Seconds accrued locally while fetching are not discarded.
  mergeReading(merged, parse(K.reading, EMPTY_READING));
  if (!same(merged, parse(K.reading, EMPTY_READING))) {
    put(K.reading, merged);
    window.dispatchEvent(new Event('edicion-viva:reading-updated'));
  }
}
async function synchronize(force = false) {
  if (!user || working || !initialized || (!force && Date.now() < nextSync)) return;
  working = true;
  try {
    await syncDictionaries();
    await syncReading();
    nextSync = Date.now() + 12000;
    status('Sincronizado · ' + visibleEmail(user));
  } catch (error) {
    nextSync = Date.now() + 12000;
    status('Sin conexión de sincronización · datos pendientes en este dispositivo');
    console.warn('Edición Viva: error al sincronizar', error);
  } finally { working = false; }
}
async function startSession(u) {
  if (!u) {
    user = null;
    initialized = false;
    renderAccount();
    status('Visitante · lectura pública');
    return;
  }
  const changedUser = localStorage.getItem(K.account) !== u.id;
  user = u;
  if (changedUser) {
    purgePreviousLocalData();
    localStorage.setItem(K.account, u.id);
    lastUpload = '';
  }
  initialized = true;
  renderAccount();
  status('Conectado · sincronizando...');
  await synchronize(true);
}
async function signOut() {
  if (user) await synchronize(true);
  const { error } = await client.auth.signOut();
  if (error) throw error;
  purgePreviousLocalData();
  localStorage.removeItem(K.account);
  user = null;
  initialized = false;
  lastUpload = '';
  renderAccount();
  status('Sesión cerrada · lectura pública');
}
async function sendLink(email) {
  const redirect = 'https://ignacioaragues.github.io/edicion-viva/cuenta.html';
  const { error } = await client.auth.signInWithOtp({
    email, options: { emailRedirectTo: redirect, shouldCreateUser: true }
  });
  if (error) throw error;
}
async function startup() {
  const { data: { session }, error } = await client.auth.getSession();
  if (error) throw error;
  await startSession(session?.user || null);
  client.auth.onAuthStateChange((_event, sessionNow) => {
    const nextUser = sessionNow?.user || null;
    // Avoid async Supabase requests inside auth callbacks.
    setTimeout(() => {
      if (nextUser?.id !== user?.id) startSession(nextUser).catch(console.warn);
      else if (nextUser && !initialized) startSession(nextUser).catch(console.warn);
    }, 0);
  });
  return user;
}
const ready = startup().catch(error => {
  status('Servicio de cuentas no disponible. La lectura sigue siendo pública.');
  console.warn('Edición Viva: no pudo iniciarse la cuenta', error);
  return null;
});
window.EdicionVivaAccount = {
  client, ready, get user() { return user; }, get status() { return currentStatus; },
  signOut, sendLink, syncNow: () => synchronize(true),
  subscribe(fn) { listeners.add(fn); fn({ user, status: currentStatus }); return () => listeners.delete(fn); }
};
setInterval(() => { if (!document.hidden) synchronize().catch(console.warn); }, 6000);
window.addEventListener('pagehide', () => { if (user) synchronize(true).catch(console.warn); });
