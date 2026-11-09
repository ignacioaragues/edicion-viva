/* Edición Viva · cuenta opcional: acceso, registro y recuperación. */
const accountReady = new Promise(resolve => {
  if (window.EdicionVivaAccount) resolve(window.EdicionVivaAccount);
  else window.addEventListener('edicion-viva:account-ready',
    () => resolve(window.EdicionVivaAccount), { once: true });
});
const account = await accountReady;
await account.ready;

const $ = selector => document.querySelector(selector);

function setMode(mode) {
  for (const panel of document.querySelectorAll('[data-auth-panel]')) {
    panel.hidden = panel.dataset.authPanel !== mode;
  }
  for (const button of document.querySelectorAll('.mode-button')) {
    const active = button.dataset.authMode === mode;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  }
}
for (const button of document.querySelectorAll('[data-auth-mode]')) {
  button.addEventListener('click', () => setMode(button.dataset.authMode));
}

function setFeedback(selector, message, isError = false) {
  const element = $(selector);
  element.textContent = message;
  element.classList.toggle('error', isError);
}
function explainError(error) {
  const msg = String(error?.message || 'Error de conexión');
  if (/invalid login credentials/i.test(msg)) return 'Correo o contraseña incorrectos.';
  if (/email not confirmed/i.test(msg)) return 'Primero confirmá tu correo con el mensaje que recibiste al registrarte.';
  if (/user already registered/i.test(msg)) return 'Ese correo ya tiene una cuenta. Probá iniciar sesión.';
  if (/password.*short/i.test(msg)) return 'La contraseña es demasiado corta.';
  if (/rate limit|too many requests/i.test(msg)) return 'Demasiados intentos. Esperá unos minutos antes de volver a probar.';
  return msg;
}
async function runForm(buttonSelector, feedbackSelector, task) {
  const button = $(buttonSelector);
  button.disabled = true;
  setFeedback(feedbackSelector, 'Procesando…');
  try {
    const message = await task();
    setFeedback(feedbackSelector, message);
  } catch (error) {
    setFeedback(feedbackSelector, explainError(error), true);
  } finally {
    button.disabled = false;
  }
}
function equalPasswords(first, second) {
  const password = $(first).value;
  if (password !== $(second).value) throw new Error('Las contraseñas no coinciden.');
  return password;
}

$('#login-form').addEventListener('submit', event => {
  event.preventDefault();
  runForm('#login-button', '#login-feedback', async () => {
    await account.signInWithPassword($('#login-email').value.trim(), $('#login-password').value);
    $('#login-password').value = '';
    return 'Sesión iniciada. Tus datos se están sincronizando.';
  });
});
$('#register-form').addEventListener('submit', event => {
  event.preventDefault();
  runForm('#register-button', '#register-feedback', async () => {
    const password = equalPasswords('#register-password', '#register-confirm');
    const result = await account.createAccount($('#register-email').value.trim(), password);
    $('#register-password').value = '';
    $('#register-confirm').value = '';
    return result.confirmed
      ? 'Cuenta creada. Ya podés sincronizar tus lecturas.'
      : 'Revisá tu correo para confirmar la cuenta. Después vas a poder iniciar sesión.';
  });
});
$('#link-form').addEventListener('submit', event => {
  event.preventDefault();
  runForm('#link-button', '#link-feedback', async () => {
    await account.sendLink($('#link-email').value.trim());
    return 'Te enviamos un enlace. Abrilo en el dispositivo donde querés iniciar sesión.';
  });
});
$('#recover-form').addEventListener('submit', event => {
  event.preventDefault();
  runForm('#recover-button', '#recover-feedback', async () => {
    await account.recoverPassword($('#recover-email').value.trim());
    return 'Si existe una cuenta asociada a ese correo, recibirás instrucciones para cambiar la contraseña.';
  });
});

function showRecovery() {
  const recovery = !!account.passwordRecoveryPending;
  $('#reset-panel').hidden = !recovery;
  $('[data-account-signed-in]').hidden = recovery || !account.user;
  $('[data-account-signed-out]').hidden = recovery || !!account.user;
}
window.addEventListener('edicion-viva:recovery-started', showRecovery);
window.addEventListener('edicion-viva:recovery-finished', showRecovery);
account.subscribe(showRecovery);
showRecovery();
$('#reset-form').addEventListener('submit', event => {
  event.preventDefault();
  runForm('#reset-button', '#reset-feedback', async () => {
    const password = equalPasswords('#reset-password', '#reset-confirm');
    await account.updatePassword(password);
    $('#reset-password').value = '';
    $('#reset-confirm').value = '';
    return 'Contraseña actualizada. Ya podés usar tu cuenta.';
  });
});
$('#sync-button').addEventListener('click', async () => {
  const btn = $('#sync-button');
  btn.disabled = true;
  try { await account.syncNow(); } finally { btn.disabled = false; }
});
$('#logout-button').addEventListener('click', async () => {
  const btn = $('#logout-button');
  btn.disabled = true;
  try { await account.signOut(); }
  catch (error) { $('[data-account-status]').textContent = explainError(error); }
  finally { btn.disabled = false; }
});
