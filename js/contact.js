/* ============================================================
   CONTACT.JS — PASCHAL DURU PORTFOLIO
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* Input focus effects */
  document.querySelectorAll('.form-input, .form-textarea').forEach(el => {
    el.addEventListener('focus', () => {
      el.parentElement.querySelector('.form-label')?.classList.add('active');
    });
    el.addEventListener('blur', () => {
      el.parentElement.querySelector('.form-label')?.classList.remove('active');
    });
  });

  /* Basic form validation */
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#e74c3c';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    // Email validation
    const emailField = form.querySelector('[type="email"]');
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = '#e74c3c';
      valid = false;
    }

    if (!valid) return;

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>Sending…</span>';
    btn.disabled = true;

    setTimeout(() => {
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
      const success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        setTimeout(() => success.classList.remove('show'), 5000);
      }
    }, 1200);
  });

});
