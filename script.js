const menuButton = document.querySelector('.menu-button');
const drawer = document.querySelector('.drawer');
const closeButton = document.querySelector('.drawer-close');
const backdrop = document.querySelector('.backdrop');
const page = document.querySelector('.page');

const serviceGroups = [
  {
    title: 'Manicure & Nail Art',
    items: [
      ['public/icons/biab.svg', 'BIAB Manicure', '$75+', '75 mins'],
      ['public/icons/gel.svg', 'Gel Manicure', '$65+', '60 mins'],
      ['public/icons/nail-art.svg', 'Nail Art', '$85+', '90 mins'],
      ['public/icons/extensions.svg', 'Extensions', '$95+', '120 mins']
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

function decorativeDivider(variant = 'standard') {
  return `<div class="decorative-divider divider--${variant}" aria-hidden="true"></div>`;
}

function sparkleCluster(variant = 'standard') {
  return `<span class="sparkle-cluster sparkle--${variant}" aria-hidden="true"></span>`;
}

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
      ${decorativeDivider('small')}
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
      <div><h1 id="services-title">Our Services</h1>${decorativeDivider('standard')}</div>
      <img src="public/icons/logo-mark.svg" alt="" aria-hidden="true">
    </section>
    <div class="services-list">${groups}</div>
    <aside class="services-help" aria-label="Service selection help">
      ${sparkleCluster()}
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
        ${decorativeDivider('small')}
        <p>Inspired by flight, freedom<br>and delicate beauty.<br>We create nails that<br>let you feel like you.</p>
      </div>
      <img class="about-photo" src="public/images/salon interior photo.jpg" alt="Warm, softly lit interior of Lark Nail Studio">
    </section>
    <section class="studio-details" aria-label="Studio details">
      <div class="detail-item">${lineIcon('location')}<span>Melbourne CBD</span></div>
      <div class="detail-item">${lineIcon('clock')}<span>Mon – Sun<br>10:00am – 7:00pm</span></div>
      <a class="detail-item" href="https://instagram.com/lark.nailstudio">${lineIcon('instagram')}<span>@lark.nailstudio</span></a>
      <div class="about-emblem" aria-hidden="true">
        ${decorativeDivider('standard')}<img src="public/icons/logo-mark.svg" alt="">${decorativeDivider('standard')}
      </div>
    </section>
    <section class="testimonials" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Loved by our clients</h2>
      <figure>
        <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote>The best nail studio I’ve ever been to!<br>So clean, so talented, and the nails last<br>perfectly.</blockquote>
        <figcaption>— MOMO</figcaption>
      </figure>
      ${decorativeDivider('wide')}
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
        ${decorativeDivider('small')}
        <p>Explore our creations and find<br>your next inspiration.</p>
      </div>
      <div class="gallery-emblem" aria-hidden="true"><img src="public/icons/logo-mark.svg" alt=""></div>
    </section>
    <section class="gallery-grid" aria-label="Nail art examples">
      ${galleryImages.map(([src, alt], index) => `<img src="${src}" alt="${alt}" width="600" height="360"${index > 1 ? ' loading="lazy"' : ''}>`).join('')}
    </section>
    <aside class="gallery-cta" aria-label="Book a custom nail art appointment">
      ${sparkleCluster('small')}
      <p><strong>Love something you see?</strong><span>Show your favourite design to your technician<br>and we’ll create it just for you.</span></p>
      <a class="gallery-book" href="/booking">Book appointment</a>
    </aside>`;
  document.querySelector('.drawer-logo').removeAttribute('aria-current');
  document.querySelector('.drawer a[href="/gallery"]').setAttribute('aria-current', 'page');
}

if (window.location.pathname.replace(/\/$/, '') === '/gallery') renderGallery();

function renderContact() {
  document.title = 'Contact Us | Lark Nail Studio';
  document.querySelector('meta[name="description"]').content = 'Send a message to the team at Lark Nail Studio.';
  document.body.classList.add('contact-page');
  const main = document.querySelector('#main');
  main.dataset.page = 'contact';
  main.innerHTML = `
    <section class="contact-intro" aria-labelledby="contact-title">
      <h1 id="contact-title">Contact Us</h1>
      ${decorativeDivider('standard')}
      <p>Have a question or want to get in touch?<br>Send us a message and we’ll get back to you soon.</p>
    </section>
    <form class="contact-form" aria-describedby="contact-form-note">
      <div class="form-field">
        <label for="contact-email">Your Email</label>
        <input id="contact-email" name="email" type="email" placeholder="example@email.com" autocomplete="email" required>
      </div>
      <div class="form-field">
        <label for="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" type="text" placeholder="How can we help?" required>
      </div>
      <div class="form-field">
        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="message" placeholder="Type your message here..." required></textarea>
      </div>
      <div class="form-field attachment-field">
        <label for="contact-attachment">Attachment <span>(optional)</span></label>
        <label class="upload-control" for="contact-attachment">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m12 17 7-7a4 4 0 0 1 6 6L14 27A7 7 0 0 1 4 17L17 4a5 5 0 0 1 7 0"/></svg>
          <span><strong>Click to upload or drag and drop</strong><small>Max size 10MB (PDF, JPG, PNG)</small></span>
        </label>
        <input class="file-input" id="contact-attachment" name="attachment" type="file" accept=".pdf,.jpg,.jpeg,.png" aria-describedby="attachment-help">
        <span id="attachment-help" class="visually-hidden">Accepted file types are PDF, JPG, and PNG, up to 10 megabytes.</span>
      </div>
      <button class="contact-submit" type="submit">Send message</button>
      <p class="form-note" id="contact-form-note" role="status">Online message delivery is not currently connected.</p>
    </form>
    <div class="contact-emblem" aria-hidden="true">${decorativeDivider('small')}<img src="public/icons/logo-mark.svg" alt="">${decorativeDivider('small')}</div>`;
  document.querySelector('.drawer-logo').removeAttribute('aria-current');
  document.querySelector('.drawer a[href="/contact"]').setAttribute('aria-current', 'page');

  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('.form-note').classList.add('visible');
  });
  document.querySelector('.file-input').addEventListener('change', event => {
    const filename = event.target.files[0]?.name;
    if (filename) document.querySelector('.upload-control strong').textContent = filename;
  });
}

if (window.location.pathname.replace(/\/$/, '') === '/contact') renderContact();

const bookingTimes = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

function localDateValue(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function dateFromLocalValue(value) {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function addLocalDays(value, amount) {
  const date = dateFromLocalValue(value);
  date.setDate(date.getDate() + amount);
  return localDateValue(date);
}

function renderBooking() {
  document.title = 'Book Appointment | Lark Nail Studio';
  document.querySelector('meta[name="description"]').content = 'Choose appointment preferences and send your details to Lark Nail Studio.';
  document.body.classList.add('booking-page');
  const main = document.querySelector('#main');
  main.dataset.page = 'booking';
  const today = localDateValue();
  main.innerHTML = `
    <section class="booking-intro" aria-labelledby="booking-title">
      <div class="booking-copy">
        <h1 id="booking-title">Book your<br>appointment</h1>
        ${decorativeDivider('standard')}
      </div>
      <div class="booking-emblem" aria-hidden="true"><img src="public/icons/logo-mark.svg" alt=""></div>
    </section>
    <form class="booking-form" aria-describedby="booking-disclosure booking-status">
      <fieldset class="booking-step service-step">
        <legend><span>1</span>Choose a service</legend>
        <label class="visually-hidden" for="booking-service">Choose a service</label>
        <select id="booking-service" name="service" required>
          <option value="">Select a service</option>
          <option>BIAB Manicure</option><option>Gel Manicure</option><option>Nail Art</option><option>Extensions</option>
        </select>
      </fieldset>
      <fieldset class="booking-step date-step">
        <legend><span>2</span>Choose date</legend>
        <div class="date-picker">
          <button class="date-arrow" type="button" data-direction="-1" aria-label="Choose previous date">‹</button>
          <div class="date-options" aria-label="Quick-select dates"></div>
          <button class="date-arrow" type="button" data-direction="1" aria-label="Choose next date">›</button>
        </div>
        <div class="calendar-date-field">
          <label for="booking-date">Choose another date</label>
          <input id="booking-date" name="date" type="date" min="${today}" value="${today}" required>
        </div>
      </fieldset>
      <fieldset class="booking-step time-step">
        <legend><span>3</span>Select time</legend>
        <div class="time-options">
          ${bookingTimes.map((time, index) => `<label><input type="radio" name="time" value="${time}"${index === 4 ? ' checked' : ''} required><span>${time}</span></label>`).join('')}
        </div>
      </fieldset>
      <fieldset class="booking-step information-step">
        <legend><span>4</span>Your information</legend>
        <div class="name-fields">
          <div class="booking-field"><label for="booking-first">First name</label><input id="booking-first" name="firstName" type="text" autocomplete="given-name" placeholder="First name" required></div>
          <div class="booking-field"><label for="booking-last">Last name</label><input id="booking-last" name="lastName" type="text" autocomplete="family-name" placeholder="Last name" required></div>
        </div>
        <div class="booking-field"><label for="booking-email">Email address</label><input id="booking-email" name="email" type="email" autocomplete="email" placeholder="Email address" required></div>
        <div class="booking-field"><label for="booking-phone">Phone number</label><div class="phone-field"><span aria-hidden="true">AU&nbsp;&nbsp; +61</span><input id="booking-phone" name="phone" type="tel" autocomplete="tel" placeholder="Phone number" required></div></div>
        <div class="booking-field"><label for="booking-requests">Special requests (optional)</label><textarea id="booking-requests" name="requests" placeholder="Special requests (optional)"></textarea></div>
      </fieldset>
      <button class="booking-submit" type="submit">Confirm appointment</button>
      <p class="booking-security" id="booking-disclosure"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="1"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></svg> Your information is secure and will never be shared.</p>
      <p class="booking-status" id="booking-status" role="status"></p>
    </form>`;
  document.querySelector('.drawer-logo').removeAttribute('aria-current');
  document.querySelector('.drawer-book').setAttribute('aria-current', 'page');
  document.querySelector('.header-book').setAttribute('aria-current', 'page');

  const form = document.querySelector('.booking-form');
  const nativeDateInput = form.querySelector('#booking-date');
  const dateOptions = form.querySelector('.date-options');
  let selectedDate = today;
  let visibleStartDate = today;

  function renderDateStrip() {
    dateOptions.innerHTML = Array.from({ length: 5 }, (_, index) => {
      const value = addLocalDays(visibleStartDate, index);
      const date = dateFromLocalValue(value);
      const dayName = new Intl.DateTimeFormat('en-AU', { weekday: 'short' }).format(date);
      const dateLabel = new Intl.DateTimeFormat('en-AU', { month: 'short', day: 'numeric' }).format(date);
      return `<label><input type="radio" name="quickDate" value="${value}"${value === selectedDate ? ' checked' : ''}><span><b>${dayName}</b>${dateLabel}</span></label>`;
    }).join('');
    dateOptions.querySelectorAll('input[name="quickDate"]').forEach(input => {
      input.addEventListener('change', () => selectDate(input.value, false));
    });
    dateOptions.querySelector('input:checked')?.closest('label').scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  function selectDate(value, updateContext = true) {
    if (!value || value < today) {
      nativeDateInput.value = selectedDate;
      return;
    }
    selectedDate = value;
    nativeDateInput.value = selectedDate;
    if (updateContext || selectedDate < visibleStartDate || selectedDate > addLocalDays(visibleStartDate, 4)) {
      visibleStartDate = selectedDate < addLocalDays(today, 2) ? today : addLocalDays(selectedDate, -2);
    }
    renderDateStrip();
  }

  nativeDateInput.addEventListener('change', () => selectDate(nativeDateInput.value));
  form.querySelectorAll('.date-arrow').forEach(button => {
    button.addEventListener('click', () => {
      const nextDate = addLocalDays(selectedDate, Number(button.dataset.direction));
      if (nextDate < today) return;
      selectDate(nextDate, false);
      dateOptions.querySelector('input:checked')?.focus();
    });
  });
  renderDateStrip();
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('.booking-status').textContent = 'Your appointment preferences are ready, but online booking is not connected. Please contact the studio to complete your booking.';
  });
}

if (window.location.pathname.replace(/\/$/, '') === '/booking') renderBooking();

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
