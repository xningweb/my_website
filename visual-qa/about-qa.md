# About page visual QA

- Route: `/about` and `/about/`
- Reference: `references/about-mobile.png` (916 × 1717 source image, treated as a 458 CSS-pixel-wide mobile capture)
- Intended verification viewports: 320 × 800, 458 × 859, 768 × 1024, and 798 × 1000 CSS pixels
- Production assets: `public/images/salon interior photo.jpg` and `public/icons/logo.png`

## Checks performed

- Confirmed the home, Services, About, and trailing-slash routes return HTTP 200.
- Confirmed every production image and icon returns HTTP 200.
- Ran JavaScript syntax checks, the production build, and `git diff --check` successfully.
- Reviewed semantic heading order, landmark structure, image alternatives, external-link naming, drawer current-page state, focus trapping, Escape-to-close, scroll locking, and reduced-motion rules in source.
- Reviewed the responsive CSS at compact mobile, reference mobile, intermediate, and maximum site widths; About-specific selectors are scoped beneath About classes.

## Browser and visual comparison limitation

No browser executable or screenshot runner is installed in the environment. An attempt to fetch Playwright was rejected by the package registry with HTTP 403, so implementation screenshots and browser-driven keyboard/overflow checks could not be captured. The page was compared manually against the source reference while implementing its measured proportions.

The exact arched room photograph in the reference is not present in the production assets. The supplied `salon interior photo.jpg` is used because it is the only approved studio photograph; its room contents and crop therefore differ from the reference. The supplied logo artwork is reused for the central bird emblem, with the image cropped via CSS rather than modifying the binary.
