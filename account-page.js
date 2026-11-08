/* Edición Viva · página pública de acceso a la cuenta. */
const accountReady = new Promise(resolve => {
  if (window.EdicionVivaAccount) resolve(window.EdicionVivaAccount);
  else window.addEventListener('edicion-viva:account-ready', () => resolve(window.EdicionVivaAccount), { once:true });
});
const account = await accountReady;
await account.ready;
const form = document.querySelector('#login-form');
const feedback = document.querySelector('#login-feedback');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const btn = document.querySelector('#login-button');
  btn.disabled = true;
  feedback.textContent = 'Enviando…';
  try {
    await account.sendLink(document.querySelector('#login-email').value.trim());
    feedback.textContent = 'Revisá tu correo. Abrí el enlace en el dispositivo donde querés iniciar sesión.';
  } catch (err) {
    feedback.textContent = 'No se pudo enviar el enlace: ' + (err?.message || 'error de conexión');
  } finally { btn.disabled = false; }
});
document.querySelector('#sync-button').addEventListener('click', async () => {
  const btn = document.querySelector('#sync-button');
  btn.disabled = true;
  try { await account.syncNow(); } finally { btn.disabled = false; }
});
document.querySelector('#logout-button').addEventListener('click', async () => {
  const btn = document.querySelector('#logout-button');
  btn.disabled = true;
  try { await account.signOut(); }
  catch (err) { document.querySelector('[data-account-status]').textContent = err.message; }
  finally { btn.disabled = false; }
});
