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

## Browser Optical Pass

### Adjustments

- Reduced the Homepage emblem's compact-viewport height from 344px to 276px, bringing its apparent scale closer to the active reference while retaining the complete, undistorted SVG.
- Increased the compact-viewport emblem-to-headline gap from 7px to 12px so the asymmetric artwork and Bodoni headline have clearer optical separation.
- Reduced the emblem height below 351px from 310px to 250px to prevent the mark from dominating narrow screens and to tighten the first-screen vertical rhythm.

These adjustments affect only the Homepage at widths up to 520px. The established 798px composition and centered 798px canvas at a 1024px viewport are intentionally unchanged because the available reference does not provide reliable browser evidence for further large-screen corrections. The shared header, divider, sparkle, navigation drawer, local fonts, CTA target sizing, and approved production assets are also unchanged.

### Verification status and remaining differences

No browser executable or screenshot runner is available in this environment, so this pass used source-level review at 390px, 798px, and 1024px and did not claim pixel-perfect browser verification. Browser captures are still required to confirm platform-specific Bodoni metrics, the final optical relationship between the narrow SVG silhouette and the headline, and anti-aliased divider weight. The intentionally uncropped approved SVG remains taller and narrower than the historical raster mark in the active reference.
