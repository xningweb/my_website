const menuButton = document.querySelector('.menu-button');
const drawer = document.querySelector('.drawer');
const closeButton = document.querySelector('.drawer-close');
const backdrop = document.querySelector('.backdrop');
const page = document.querySelector('.page');

const serviceGroups = [
  {
    title: 'Manicure & Nail Art',
    items: [
      ['public/icons/BIAB.png', 'BIAB Manicure', '$75+', '75 mins'],
      ['public/icons/gel.png', 'Gel Manicure', '$65+', '60 mins'],
      ['public/icons/Nail art.png', 'Nail Art', '$85+', '90 mins'],
      ['public/icons/Extensions.png', 'Extensions', '$95+', '120 mins']
    ]
  },
  {
    title: 'Removal & Add-ons',
    items: [
      ['bottle', 'Gel Removal', '$15'],
      ['bottle', 'BIAB Removal', '$20'],
      ['clipper', 'Extension Removal', '$25'],
      ['repair', 'Nail Repair', '$8 / nail'],
      ['plus', 'Extra Length', '+$10']
    ]
  }
];

function lineIcon(type) {
  const paths = {
    bottle: '<path d="M13 5h6v8l3 3v11H10V16l3-3z"/><circle cx="16" cy="21" r="2"/>',
    clipper: '<path d="M9 27c1-6 2-9 7-10-4-2-5-6-4-11 2 4 4 5 4 5s2-1 4-5c1 5 0 9-4 11 5 1 6 4 7 10"/><circle cx="16" cy="17" r="2"/>',
    repair: '<path d="M11 27V12c0-5 2-7 5-7s5 2 5 7v15M12 10c3 3 6 3 8 0M18 6l3-3"/><path d="m20 3 2 2"/>',
    plus: '<circle cx="16" cy="16" r="12"/><path d="M10 16h12M16 10v12"/>'
  };
  return `<svg viewBox="0 0 32 32" aria-hidden="true">${paths[type]}</svg>`;
}

function renderServices() {
  document.title = 'Services | Lark Nail Studio';
  document.querySelector('meta[name="description"]').content = 'Explore manicure, nail art, extensions, removals, and add-ons at Lark Nail Studio.';
  document.body.classList.add('services-page');
  const main = document.querySelector('#main');
  main.dataset.page = 'services';
  const groups = serviceGroups.map(group => `
    <section class="service-group" aria-labelledby="${group.title.toLowerCase().replace(/[^a-z]+/g, '-')}">
      <h2 id="${group.title.toLowerCase().replace(/[^a-z]+/g, '-')}">${group.title}</h2>
      <div class="section-rule" aria-hidden="true"><span></span><b>✦</b></div>
      <ul class="service-card">
        ${group.items.map(([icon, name, price, duration]) => `<li>
          <span class="service-icon">${icon.includes('/') ? `<img src="${icon}" alt="">` : lineIcon(icon)}</span>
          <span class="service-name">${name}</span>
          <strong>${price}</strong>
          ${duration ? `<span class="duration">${duration}</span>` : ''}
        </li>`).join('')}
      </ul>
    </section>`).join('');
  main.innerHTML = `
    <section class="services-intro" aria-labelledby="services-title">
      <div><h1 id="services-title">Our Services</h1><div class="title-rule" aria-hidden="true"><span></span><b>✦</b><span></span></div></div>
      <img src="public/icons/logo.png" alt="" aria-hidden="true">
    </section>
    <div class="services-list">${groups}</div>
    <aside class="services-help" aria-label="Service selection help">
      <span class="sparkles" aria-hidden="true">✦<small>✦</small></span>
      <p><strong>Not sure what to choose?</strong><span>Our team is here to help you<br>find the perfect service.</span></p>
      <a class="contact-button" href="/contact">Contact us</a>
    </aside>`;
  document.querySelector('.drawer-logo').removeAttribute('aria-current');
  document.querySelector('.drawer a[href="/services"]').setAttribute('aria-current', 'page');
}

if (window.location.pathname.replace(/\/$/, '') === '/services') renderServices();

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
