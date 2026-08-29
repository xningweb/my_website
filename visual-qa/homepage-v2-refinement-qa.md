# Homepage V2 refinement visual QA

## Scope

- Route: `/`
- Version: Homepage V2 visual refinement pass
- Active reference: `references/homepage-v2-mobile.png` (798 × 1972 px; the visible design occupies the upper portion of the tall capture)
- Requested review widths: 390px, 798px, and 1024px
- Supporting material: `visual-qa/homepage-v2-qa.md` and `visual-qa/shared-visual-system-v2-phase-1-5.md`

## Reference comparison and corrections

- Corrected the header grid to use equal outside tracks, so the wordmark is centered on the viewport rather than the unequal space remaining between the menu and booking controls.
- Loaded the supplied Bodoni Moda and Montserrat variable font assets and calibrated the Homepage display typography around their actual metrics.
- Increased the Homepage logo mark's vertical presence while preserving the complete `logo-mark.svg` artwork without cropping or transforms.
- Narrowed and centered the hero text measure, and adjusted heading leading, divider width/spacing, service-line spacing, CTA height, and the overall vertical rhythm toward the reference.
- Added fluid Homepage-specific rules for compact mobile and the 798px site canvas. The 1024px viewport retains the established centered 798px canvas.

## Verification

- Source-level responsive review completed at 390px, 798px, and 1024px, including minimum widths, text measure, header track sizing, complete logo aspect ratio, and overflow constraints.
- Semantic structure, focus-visible rules, 44px mobile primary CTA, reduced motion, drawer focus containment, Escape close, backdrop close, inert background, and focus restoration remain intact.
- Local route and font/icon asset responses were checked over HTTP.

## Browser status and retained differences

No browser executable or screenshot runner is installed in this environment. Browser captures, overlays, browser-console review, and interactive real-browser verification could not be performed. No generated screenshot is recorded as a substitute. The source was calibrated against the reference, but the 390px, 798px, and 1024px layouts still require a browser capture pass to assess platform font rasterization and make any final optical spacing adjustments. The approved, uncropped `logo-mark.svg` has a taller/narrower silhouette than the earlier raster artwork visible in the reference; that asset-driven difference is intentionally retained.
