# Nail Art Gallery visual QA

- Route: `/gallery` and `/gallery/`
- Reference: `references/gallery-mobile.png` (942 × 1668 source image; treated as a high-density compact viewport capture)
- Intended verification widths: 320px, 375px, 471px, 768px, and 798px
- Production image order: `Nail art example 1.png`, `Nail art example 2.png`, `Nail art example 3.png`, `Nail art example 4.png`
- Structural review: shared header and drawer retained; two-column image grid, introductory lockup, and booking callout implemented; compact and desktop rules reviewed for reflow.
- Accessibility review: one page-level heading, semantic labelled gallery section, descriptive image alternatives, below-the-fold lazy loading, current-page drawer state, and existing focus-trap/reduced-motion behavior retained.
- Asset limitation: the reference contains ten distinct nail-art photographs, but only four approved production nail-art images are available. The implementation does not duplicate or substitute unrelated images, so it is intentionally shorter than the reference.
- Browser limitation: no browser executable or browser automation dependency is available in the environment. Installing Playwright was blocked by a registry `403`, so rendered screenshots, browser-console inspection, keyboard walkthrough, and visual overlays could not be captured. Route and asset responses were verified through the local HTTP server instead.
