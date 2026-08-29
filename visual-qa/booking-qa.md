# Booking page visual QA

- **Route:** `/booking` and `/booking/`
- **Reference:** `references/booking-mobile.png` (852 × 1841 supplied capture)
- **Implementation asset:** `public/icons/logo.png` for the supplied hand-and-bird emblem
- **Target viewports:** 852 × 1841 reference width, 798px shared-site desktop canvas, 390px typical mobile, 320px compact mobile, and intermediate widths around the 520px breakpoint
- **Structural comparison:** Matched the reference hierarchy: shared header, split appointment introduction, service select, five-date selector, three-column time selector, customer details, full-width action, and privacy notice. The selected Wednesday and 2:00 PM states are represented with semantic radio controls.
- **Responsive review:** Booking-specific rules retain the existing 798px site canvas and scale the reference composition at 520px and below; 320px receives narrower gutters. CSS uses grid tracks constrained by the parent width and the site retains global horizontal-overflow prevention.
- **Accessibility review:** Native required select, radio, text, email, telephone, and textarea controls; persistent visible labels; visible focus styles; keyboard-operable date arrows and radio groups; status announcement for demo submission; shared drawer focus trap, Escape close, focus restoration, scroll lock, and reduced-motion rules retained.
- **Submission behavior:** Front-end demonstration only. Submission is prevented and explicitly says online booking is not connected; it does not claim a reservation or live availability.
- **Browser limitation:** A browser executable was not available in the environment. Attempting to install Playwright Chromium was blocked by the package registry (HTTP 403), so rendered screenshots, visual overlays, console inspection, and browser-driven interaction checks could not be captured. Source-level comparison and HTTP route/asset checks were completed instead.
- **Known visual differences:** The reference's exact Montserrat and Bodoni Moda font files are not supplied in `public/fonts`, so the established shared-site fallback stacks are retained. Native select rendering may differ by browser. The Australian prefix is rendered as accessible text rather than introducing an unsupplied flag asset. Dates are fixed reference examples and are not presented as live availability.

## Mobile Choose Date correction

- **Human-browser finding:** The original phone presentation compressed all five date cards into one row, leaving narrow cards, awkwardly wrapped labels, and crowded navigation arrows. This was confirmed as a mobile layout defect rather than a tablet or desktop issue.
- **Fix:** At widths up to 520px, the five existing date radios now occupy a horizontally scrollable, scroll-snapping strip sized to show three cards at once. Previous and next controls remain in separate 44px grid tracks and keep the existing selection behavior; the date data and booking business logic are unchanged.
- **Source-level responsive review:** Reviewed the three-card sizing at 360px, 390px, and 430px, plus the unchanged rules above the 520px breakpoint. Date labels use 12px Montserrat with no wrapping, cards are 72px tall, arrow targets are 44px square, and overflow is contained within the strip rather than the page.
- **Preservation:** Tablet and desktop retain the existing five-column date presentation. Other booking sections and shared routes are unchanged.
