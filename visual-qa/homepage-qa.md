# Homepage visual QA

- Route: `/`
- Primary reference: `references/homepage-mobile.png` (798 × 1972)
- Stack: dependency-free semantic HTML and CSS, served by a small Node.js static server.
- Supplied assets used: `public/icons/logo.png` and all three images in `public/images/`.
- Target review viewports: 798 × 1972 (reference), 390 × 844, 320 × 800, and 1024 × 900. Automated browser capture was unavailable in the container: no browser binary was installed and the Playwright download was rejected by the package registry (HTTP 403). Responsive rules and overflow protections were reviewed statically, but pixel comparison and browser accessibility inspection remain to be completed when a browser is available.
- Known source limitation: no original salon-interior photograph or fourth gallery photograph is supplied. The about panel therefore reuses the supplied logo illustration, and the gallery presents the three supplied nail photographs rather than fabricating replacements.
