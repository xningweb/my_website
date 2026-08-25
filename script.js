const menuButton = document.querySelector('.menu-button');
const drawer = document.querySelector('.drawer');
const closeButton = document.querySelector('.drawer-close');
const backdrop = document.querySelector('.backdrop');
const page = document.querySelector('.page');

function openDrawer() {
  backdrop.hidden = false;
  requestAnimationFrame(() => backdrop.classList.add('visible'));
  drawer.classList.add('open');
  drawer.removeAttribute('inert');
  drawer.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
  page.setAttribute('inert', '');
  document.body.classList.add('drawer-open');
  closeButton.focus();
}

function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('inert', '');
  drawer.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
  page.removeAttribute('inert');
  document.body.classList.remove('drawer-open');
  backdrop.classList.remove('visible');
  const delay = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220;
  window.setTimeout(() => { backdrop.hidden = true; }, delay);
  menuButton.focus();
}

menuButton.addEventListener('click', openDrawer);
closeButton.addEventListener('click', closeDrawer);
backdrop.addEventListener('click', closeDrawer);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  if (event.key === 'Tab' && drawer.classList.contains('open')) {
    const focusable = [...drawer.querySelectorAll('a, button')];
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
