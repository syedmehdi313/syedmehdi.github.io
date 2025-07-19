/* loader fade‑out */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.classList.remove('is-loading');
  }, 400);           // adjust delay if you like
});


/* loader fade‑out */
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.classList.remove('is-loading');
  }, 400);
});

/* dark / light toggle */
const themeBtn   = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme-dark') === 'true';
if (savedTheme) document.body.classList.add('theme-dark');
themeBtn.textContent = savedTheme ? 'Light theme' : 'Dark theme';
themeBtn.setAttribute('aria-pressed', savedTheme);

themeBtn.addEventListener('click', () => {
  const dark = document.body.classList.toggle('theme-dark');
  themeBtn.textContent = dark ? 'Light theme' : 'Dark theme';
  themeBtn.setAttribute('aria-pressed', dark);
  localStorage.setItem('theme-dark', dark);
});

/* experience accordion */
document.querySelectorAll('.exp-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const open  = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !open);
    panel.hidden = open;
    panel.classList.toggle('open', !open);
  });
});

/* skill‑bar hover‑fill */
document.querySelectorAll('.skill-bar').forEach(bar => {
  const pct = bar.dataset.skill || 0;
  bar.addEventListener('mouseenter', () => bar.style.setProperty('--fill', pct + '%'));
  bar.addEventListener('mouseleave',  () => bar.style.setProperty('--fill', '0%'));
});
