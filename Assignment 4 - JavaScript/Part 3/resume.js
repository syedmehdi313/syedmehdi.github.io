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


/* CITATIONS FOR resume.js

Link: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event?

Code Used: js<br>window.addEventListener('load', () => { … });

What the code does: Waits for the load event for example when it fires the whole page—including images, CSS, 
fonts has to load before fading out the loader overlay.


Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling?

Code Used: js<br>const panel = btn.nextElementSibling;

What the code does: Retrieves the element immediately following each accordion button (the hidden content panel) with the nextElementSibling 
DOM property so we can open/close it without extra IDs
*/ 


