# Contact page visual QA

- **Route:** `/contact` and `/contact/`
- **Reference:** `references/contact-mobile.png` (1024 × 1536 source capture, treated as a 512 × 768 CSS-pixel mobile viewport at 2× density)
- **Implementation scope:** Contact introduction, accessible contact form, optional attachment control, non-connected submission notice, and decorative closing emblem. The existing shared header and drawer are reused unchanged.
- **Automated checks:** `npm run check`, `npm run build`, `git diff --check`, HTTP 200 checks for all implemented routes, and HTTP 200 checks for representative production assets.
- **Responsive review:** CSS rules were reviewed at compact mobile (320px), reference mobile (512px), intermediate, and the site's 798px maximum canvas.
- **Accessibility review:** Semantic labels and input types, required fields, keyboard-operable file picker and submit button, visible focus styles, status messaging, current-page navigation state, shared drawer focus management, and reduced-motion behavior were reviewed.
- **Browser limitation:** No browser binary is installed in the environment, and installing Playwright was blocked by an HTTP 403 package policy. Rendered screenshots and pixel overlays could therefore not be captured. The implementation was compared structurally against the reference, but browser-rendered font metrics and exact pixel alignment remain unverified.
- **Known difference:** The reference shows a send action but no delivery state. Because the repository has no form backend, submission is intentionally prevented and exposes an honest status message instead of claiming delivery.
