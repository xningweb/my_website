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

### 2. Analyze

Before coding, decompose the reference into content hierarchy, grid, alignment, spacing, typography, colors, surfaces, media treatment, component states, and responsive hypotheses. Distinguish reusable patterns from one-off composition. Consult `DESIGN_SYSTEM.md` and the theme named in `ACTIVE_THEME.md`.

### 3. Implement

Create semantic, token-driven, reusable UI. Match the reference's intent without sacrificing accessibility, responsiveness, maintainability, or originality. Do not optimize only for a single screenshot.

### 4. Run

Start the application using its documented local workflow. Confirm the target route loads without runtime or console errors and that assets and fonts resolve.

### 5. Screenshot

Capture deterministic full-page or region screenshots at the reference viewport when known. Also capture representative desktop, compact mobile, and intermediate responsive sizes. Store implementation captures in `visual-qa/` with descriptive names such as `home-desktop-1440x900-v1.png`.

### 6. Compare

Compare side by side and, when useful, with a transparent overlay or pixel-diff tool. Evaluate in this order:

1. page structure and content order;
2. section and container geometry;
3. typography and line wrapping;
4. spacing and alignment;
5. images, crops, colors, borders, shadows, and radii;
6. interaction states and motion.

Document objective differences rather than relying on a general impression.

### 7. Fix

Correct the highest-impact root causes first. Prefer changing a shared token or component rule when several differences have the same cause. Do not accumulate arbitrary offsets that only work at one width.

### 8. Repeat

Run and recapture after meaningful corrections. Continue until the implementation meets the reference's hierarchy and visual intent across the required viewports, with no known high-impact discrepancy.

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
