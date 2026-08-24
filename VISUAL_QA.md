# Visual QA Workflow

Visual implementation is iterative. A page is not complete merely because it renders or resembles a reference at one viewport.

## Required loop

```text
REFERENCE
→ ANALYZE
→ IMPLEMENT
→ RUN
→ SCREENSHOT
→ COMPARE
→ FIX
→ REPEAT
```

### 1. Reference

Locate the relevant source material in `references/`. Record its pixel dimensions, apparent viewport, state, and any uncertainty. Never modify the original reference during comparison.

For screenshot-based implementation, the supplied reference design is the primary visual source of truth. Reproduce it as faithfully as practical, including its composition, section order, proportions, container widths, section heights, grid structure, alignment, spacing, typography hierarchy, text wrapping, image dimensions, crop and focal position, component dimensions, colors, borders, radii, shadows, and visual relationships. Do not redesign or reinterpret the supplied reference unless explicitly requested. Accessibility, responsiveness, and explicit functional requirements take priority where a genuine conflict exists.

### 2. Analyze

Before coding, decompose the reference into content hierarchy, grid, alignment, spacing, typography, colors, surfaces, media treatment, component states, and responsive hypotheses. Distinguish reusable patterns from one-off composition. Consult `DESIGN_SYSTEM.md` and the theme named in `ACTIVE_THEME.md`.

### 3. Implement

Create semantic, token-driven, reusable UI. Reproduce the supplied reference faithfully rather than merely matching its general visual intent, without sacrificing accessibility, responsiveness, maintainability, or originality. Do not optimize only for a single screenshot.

### 4. Run

Start the application using its documented local workflow. Confirm the target route loads without runtime or console errors and that assets and fonts resolve.

### 5. Screenshot

Capture deterministic full-page or region screenshots at the reference viewport when known. Also capture representative desktop, compact mobile, and intermediate responsive sizes. Store implementation captures in `visual-qa/` with descriptive names such as `home-desktop-1440x900-v1.png`.

### 6. Compare

First compare the overall page silhouette: total page length, section proportions, major whitespace regions, image placement, content density, and large background regions. If the pages would not look substantially alike when visually blurred, fix structural differences before adjusting minor details.

Then compare side by side and correct meaningful visual discrepancies in this order:

1. missing content;
2. page structure and section order;
3. section dimensions;
4. container width;
5. grid and columns;
6. images, crop, and media positioning;
7. typography and line wrapping;
8. alignment;
9. spacing;
10. component dimensions and states;
11. colors;
12. borders and radii;
13. shadows;
14. decorative details.

Always fix large structural discrepancies before fine styling. Verify that supplied original assets are used when available, and compare each image's aspect ratio, crop, object position, focal point, dimensions, and surrounding spacing. Do not accept a placeholder or substitute asset as visually complete when the original supplied asset exists.

When tooling permits, compare the reference and implementation with a transparent overlay, using approximately 50% opacity when useful, and inspect doubled edges for misalignment. Generate a difference image when useful, but treat it as a debugging aid rather than blindly optimizing individual pixels. Ignore insignificant differences caused solely by browser anti-aliasing, font rasterization, image compression, or platform rendering.

Document objective differences rather than relying on a general impression.

### 7. Fix

Correct the highest-impact root causes first. Prefer changing a shared token or component rule when several differences have the same cause. Do not accumulate arbitrary offsets that only work at one width.

### 8. Repeat

Run and recapture after meaningful corrections. Continue the screenshot → compare → fix → repeat loop while meaningful visual discrepancies remain across the required viewports.

## Completion criteria

Do not declare screenshot-based UI work complete merely because the application builds, the page renders, all sections exist, or the implementation generally resembles the reference. Completion requires both:

```text
FUNCTIONAL CORRECTNESS
+
VISUAL VERIFICATION
```

Remaining differences must be minor or caused by documented limitations such as unavailable assets, unavailable fonts, browser rendering differences, accessibility requirements, or explicit functional constraints.

## Required viewport verification

- **Desktop:** verify the reference width when known and at least one common wide viewport. Check max widths, gutters, whitespace, media resolution, and long-line control.
- **Mobile:** verify at a compact width (including 320px where practical) and a typical modern mobile width. Check navigation, tap targets, stacking, crop, text wrapping, and horizontal overflow.
- **Responsive:** inspect intermediate widths and both sides of every breakpoint. Resize continuously to identify abrupt jumps, collisions, orphaned content, unexpected scrollbars, and unstable composition.

Verify relevant interactive states at each layout: keyboard focus, hover where available, active, expanded/collapsed, loading, empty, and error states.

## Completion record

For each implemented page, retain final screenshots and a concise QA note in `visual-qa/` containing:

- route and commit/version;
- viewport sizes and browser used;
- reference files compared;
- automated checks and manual accessibility checks performed;
- material differences intentionally retained and why.

Do not treat pixel similarity as the sole measure of quality. The final result must also pass responsive, accessibility, content, and interaction review.
