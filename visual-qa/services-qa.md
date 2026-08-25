# Services page visual QA

- Route: `/services`
- Reference: `references/services-mobile.png` (862 × 1822 supplied mobile composition)
- Implementation widths reviewed from responsive CSS: 320px, 390px, 798px
- Automated checks: `npm run check`, `npm run build`, HTTP status checks for both routes and every production asset
- Accessibility review: semantic landmarks and heading order, decorative images hidden from assistive technology, current-page navigation state, keyboard focus styling, and the shared drawer focus trap/Escape/backdrop/scroll-lock/reduced-motion behavior retained
- Browser screenshot limitation: no browser executable or browser automation package is installed. Installing Playwright was blocked by the environment's npm registry policy (HTTP 403), so implementation screenshots and browser-based visual overlays could not be captured.
- Remaining visual differences: system Bodoni/Montserrat fallbacks may render differently because no approved font files are supplied; small service add-on symbols are CSS/SVG line drawings because matching production icons were not supplied. The supplied logo and four supplied service icons are used without binary modification.
