# Booking page visual QA

- **Route:** `/booking` and `/booking/`
- **Reference:** `references/booking-mobile.png` (852 × 1841 supplied capture)
- **Implementation asset:** `public/icons/logo.png` for the supplied hand-and-bird emblem
- **Target viewports:** 852 × 1841 reference width, 798px shared-site desktop canvas, 390px typical mobile, 320px compact mobile, and intermediate widths around the 520px breakpoint
- **Structural comparison:** Matched the reference hierarchy: shared header, split appointment introduction, service select, five-date selector, three-column time selector, customer details, full-width action, and privacy notice. The dynamically selected date and the 2:00 PM state are represented with semantic controls.
- **Responsive review:** Booking-specific rules retain the existing 798px site canvas and scale the reference composition at 520px and below; 320px receives narrower gutters. CSS uses grid tracks constrained by the parent width and the site retains global horizontal-overflow prevention.
- **Accessibility review:** Native required select, radio, text, email, telephone, and textarea controls; persistent visible labels; visible focus styles; keyboard-operable date arrows and radio groups; status announcement for demo submission; shared drawer focus trap, Escape close, focus restoration, scroll lock, and reduced-motion rules retained.
- **Submission behavior:** Front-end demonstration only. Submission is prevented and explicitly says online booking is not connected; it does not claim a reservation or live availability.
- **Browser limitation:** A browser executable and browser automation package are not available in the environment, so a new rendered screenshot, native picker invocation, visual overlay, console inspection, and browser-driven interaction checks could not be captured. Source-level responsive review and HTTP route/asset checks were completed instead. Native date-picker presentation is browser/device controlled and should receive a final interaction check in iPhone Safari.
- **Known visual differences:** Native select and date-input rendering may differ by browser. The Australian prefix is rendered as accessible text rather than introducing an unsupplied flag asset. Dates represent booking preferences only and are not presented as live availability.

## Mobile Choose Date correction

- **Human-browser finding:** The original phone presentation compressed all five date cards into one row, leaving narrow cards, awkwardly wrapped labels, and crowded navigation arrows. This was confirmed as a mobile layout defect rather than a tablet or desktop issue.
- **Fix:** At widths up to 520px, the five existing date radios now occupy a horizontally scrollable, scroll-snapping strip sized to show three cards at once. Previous and next controls remain in separate 44px grid tracks and keep the existing selection behavior; the selected calendar context is generated dynamically without changing unrelated booking logic.
- **Source-level responsive review:** Reviewed the three-card sizing at 360px, 390px, and 430px, plus the unchanged rules above the 520px breakpoint. Date labels use 12px Montserrat with no wrapping, cards are 72px tall, arrow targets are 44px square, and overflow is contained within the strip rather than the page.
- **Preservation:** Tablet and desktop retain the existing five-column date presentation. Other booking sections and shared routes are unchanged.

## Real calendar date picker integration

- **Control:** Added a labelled, required native `input[type="date"]` beneath the existing quick-select strip. It uses the established Montserrat typography, navy/blue palette, border, radius, focus ring, spacing, and a minimum 44px mobile touch height.
- **Synchronization model:** One `selectedDate` local-calendar string is the canonical state. Date-card changes and previous/next actions update that value and the native input; native input changes update the same value, rebuild the five-card context around distant selections, and visibly select the matching card.
- **Local-date handling:** The minimum and initial value are generated dynamically from local `getFullYear()`, `getMonth()`, and `getDate()` components. Calendar strings are parsed with the local `new Date(year, monthIndex, day)` constructor rather than UTC parsing, avoiding Australian-time day shifts. Earlier values are rejected and the native control is restored to the canonical selection.
- **Mobile behavior:** At 520px and below, the separate 44px previous/next controls and contained, scroll-snapping three-card viewport remain intact. The native input is width-constrained by its parent, uses `min-width: 0`, and expands only within the phone viewport. Tablet and desktop retain the five-column strip.
- **Availability boundary:** The picker exposes real calendar dates but does not introduce availability, blocked dates, staff schedules, a maximum horizon, or a booking-provider integration.
