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
    plus: '<circle cx="16" cy="16" r="12"/><path d="M10 16h12M16 10v12"/>',
    location: '<path d="M16 29S7 20 7 12a9 9 0 0 1 18 0c0 8-9 17-9 17z"/><circle cx="16" cy="12" r="3"/>',
    clock: '<circle cx="16" cy="16" r="13"/><path d="M16 7v10l6 3"/>',
    instagram: '<rect x="3" y="3" width="26" height="26" rx="7"/><circle cx="16" cy="16" r="6"/><circle cx="24" cy="8" r="1"/>'
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

function renderAbout() {
  document.title = 'About Us | Lark Nail Studio';
  document.querySelector('meta[name="description"]').content = 'Meet Lark Nail Studio, a welcoming Melbourne studio for elevated, individual nail art.';
  document.body.classList.add('about-page');
  const main = document.querySelector('#main');
  main.dataset.page = 'about';
  main.innerHTML = `
    <section class="about-intro" aria-labelledby="about-title">
      <div class="about-copy">
        <h1 id="about-title">About Lark</h1>
        <div class="about-rule" aria-hidden="true"><span></span><b>✦</b></div>
        <p>Inspired by flight, freedom<br>and delicate beauty.<br>We create nails that<br>let you feel like you.</p>
      </div>
      <img class="about-photo" src="public/images/salon interior photo.jpg" alt="Warm, softly lit interior of Lark Nail Studio">
    </section>
    <section class="studio-details" aria-label="Studio details">
      <div class="detail-item">${lineIcon('location')}<span>Melbourne CBD</span></div>
      <div class="detail-item">${lineIcon('clock')}<span>Mon – Sun<br>10:00am – 7:00pm</span></div>
      <a class="detail-item" href="https://instagram.com/lark.nailstudio">${lineIcon('instagram')}<span>@lark.nailstudio</span></a>
      <div class="about-emblem" aria-hidden="true">
        <span></span><div><img src="public/icons/logo.png" alt=""></div><span></span>
      </div>
    </section>
    <section class="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Loved by our clients</h2>
      <figure>
        <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote>The best nail studio I’ve ever been to!<br>So clean, so talented, and the nails last<br>perfectly.</blockquote>
        <figcaption>— MOMO</figcaption>
      </figure>
      <div class="testimonial-rule" aria-hidden="true"><span></span><b>✦</b><span></span></div>
    </section>`;
  document.querySelector('.drawer-logo').removeAttribute('aria-current');
  document.querySelector('.drawer a[href="/about"]').setAttribute('aria-current', 'page');
}

if (window.location.pathname.replace(/\/$/, '') === '/about') renderAbout();

const galleryImages = [
  ['public/images/Nail art example 1.png', 'Manicure with curved red, white, and blue nail art'],
  ['public/images/Nail art example 2.png', 'Square nails with a soft pink glitter manicure'],
  ['public/images/Nail art example 3.png', 'Almond-shaped nails with a pearly white manicure'],
  ['public/images/Nail art example 4.png', 'Manicure with pale blue French tips']
];

function renderGallery() {
  document.title = 'Nail Art Gallery | Lark Nail Studio';
  document.querySelector('meta[name="description"]').content = 'Explore nail art created at Lark Nail Studio and find inspiration for your next appointment.';
  document.body.classList.add('gallery-page');
  const main = document.querySelector('#main');
  main.dataset.page = 'gallery';
  main.innerHTML = `
    <section class="gallery-intro" aria-labelledby="gallery-title">
      <div class="gallery-copy">
        <h1 id="gallery-title">Nail Art Gallery</h1>
        <div class="gallery-rule" aria-hidden="true"><span></span><b>✦</b></div>
        <p>Explore our creations and find<br>your next inspiration.</p>
      </div>
      <div class="gallery-emblem" aria-hidden="true"><img src="public/icons/logo.png" alt=""></div>
    </section>
    <section class="gallery-grid" aria-label="Nail art examples">
      ${galleryImages.map(([src, alt], index) => `<img src="${src}" alt="${alt}" width="600" height="360"${index > 1 ? ' loading="lazy"' : ''}>`).join('')}
    </section>
    <aside class="gallery-cta" aria-label="Book a custom nail art appointment">
      <span class="gallery-sparkle" aria-hidden="true">✦</span>
      <p><strong>Love something you see?</strong><span>Show your favourite design to your technician<br>and we’ll create it just for you.</span></p>
      <a class="gallery-book" href="/booking">Book appointment</a>
    </aside>`;
  document.querySelector('.drawer-logo').removeAttribute('aria-current');
  document.querySelector('.drawer a[href="/gallery"]').setAttribute('aria-current', 'page');
}

if (window.location.pathname.replace(/\/$/, '') === '/gallery') renderGallery();

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
