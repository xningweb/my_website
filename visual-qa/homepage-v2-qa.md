# Homepage V2 visual QA

## Scope and reference analysis

- Route: `/`
- References: `references/homepage-v2-mobile.png` (798 × 1972 px) and `references/navigation-drawer-mobile.png` (852 × 1846 px)
- Supporting references inspected: all mobile page references and `references/font and color.png`
- Production assets inspected: every file in `public/images/`, `public/icons/`, and `public/fonts/`
- The mobile references appear to be 2× captures. The primary comparison viewport is therefore approximately 399 × 986 CSS px for the home page and 426 × 923 CSS px for the open drawer.

## Checks performed

- Verified the dependency-free Node server responds at `/` and every production image/icon URL returns HTTP 200.
- Verified JavaScript syntax and the production copy build.
- Reviewed semantic landmarks, heading order, accessible names, current-page state, visible focus rules, drawer focus containment, focus restoration, Escape close, backdrop close, background inertness, scroll locking, and reduced-motion styles.
- Reviewed CSS at 320 px, 399 px, 426 px, 798 px, and wider desktop rules for overflow and reflow.

## Visual comparison status

Browser screenshot capture was attempted with Playwright, but the environment has no installed browser and blocks downloading Playwright from the package registry with HTTP 403. As a result, the required render → screenshot → compare → correct loop could not be completed in this environment. The implementation was calibrated directly against the reference pixel dimensions and visual proportions, but must not be treated as screenshot-verified until captures can be produced in a browser-enabled environment.

## Known differences and assumptions

- No Bodoni Moda or Montserrat font files are supplied under `public/fonts/`; the implementation uses the approved system fallback stacks already established by the project. Exact glyph metrics and line wrapping can vary by platform.
- No dedicated drawer-navigation icons are supplied. The simple line icons in the drawer are implemented as inline SVG UI graphics rather than substituting external or generated image assets.
- Only mobile Homepage V2 and drawer references are supplied. Wider layouts conservatively retain the same centered composition rather than inventing a new desktop presentation.
