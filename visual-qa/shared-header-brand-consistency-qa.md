# Shared Header Brand Consistency QA

## Scope

- Routes: `/`, `/services`, `/about`, `/gallery`, `/contact`, and `/booking`
- Shared component: the centered header wordmark link in `index.html`
- Viewports reviewed at the source/layout level: 390px phone, 798px tablet, and 1024px desktop

## Finding and correction

Human browser review found secondary route headers omitted the NAIL STUDIO subtitle; shared header branding was normalized to match Homepage.

The shared HTML already contained both `LARK` and `Nail Studio` for every route because the server returns `index.html` and the route renderers replace only the main page content. Route-specific CSS hid `.wordmark-sub` and enlarged `.wordmark-main` on all five secondary pages. Those route overrides were removed so every route now uses the existing shared Homepage `.wordmark`, `.wordmark-main`, and `.wordmark-sub` rules without duplicating markup or changing the header controls.

## Responsive and accessibility review

- At 390px, all routes use the existing phone-only viewport-centering rule for the shared brand wrapper and the existing compact subtitle typography. The header height, hamburger placement, and booking action are unchanged.
- At 798px and 1024px, all routes use the existing symmetric three-column header grid and Homepage brand typography. No page content or route composition changed.
- Source review confirms the subtitle remains a visible block in the centered brand link, while its existing Montserrat family inheritance, uppercase transformation, letter spacing, color, and spacing from `LARK` remain unchanged.
- The existing accessible brand name, focus treatment, drawer behavior, keyboard handling, and booking-current-page behavior remain unchanged.
- Shared grid sizing, absolute phone centering, fixed control alignment, and body overflow protection remain unchanged; the restored subtitle does not add inline width or alter the header control tracks.

## Validation

- `npm run check`
- `npm run build`
- `git diff --check`
- HTTP 200 checks for all six routes
- Source assertion that the shared header contains `LARK` and `Nail Studio`, no secondary-page rule hides `.wordmark-sub`, and every supported route is served from the shared `index.html`

## Visual capture limitation

A local browser executable is unavailable, and the environment's package policy returned HTTP 403 when Playwright installation was attempted. New screenshots could not be captured in this environment. The change is limited to removing the confirmed route-specific overrides; the previously human-verified Homepage treatment and existing responsive header layout are reused exactly.
