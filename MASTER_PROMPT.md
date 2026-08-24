# Master Design-to-Code Workflow

Use this reusable workflow for future website implementation tasks. Do not skip stages silently; if a stage does not apply, state why.

```text
READ RULES
→ LOAD ACTIVE THEME
→ INSPECT REFERENCES
→ INSPECT ASSETS
→ INSPECT CODEBASE
→ PLAN
→ IMPLEMENT
→ RUN
→ SCREENSHOT
→ COMPARE
→ CORRECT
→ RESPONSIVE QA
→ ACCESSIBILITY QA
→ FINAL VERIFY
```

## 1. Read rules

Read every `AGENTS.md` that applies to files you may change, then read `DESIGN_SYSTEM.md`, `ACTIVE_THEME.md`, and `VISUAL_QA.md`. Extract explicit task constraints and repository conventions before editing.

## 2. Load active theme

Open the exact theme path named in `ACTIVE_THEME.md`. Translate the core and theme guidance into a short list of visual decisions for the task. Accessibility and explicit requirements override aesthetic preferences.

## 3. Inspect references

Inventory `references/` and inspect every item relevant to the requested view. For screenshot-based UI implementation, supplied reference designs are the primary visual source of truth. Analyze composition, hierarchy, section order, proportions, section dimensions, container widths, grids and columns, alignment, spacing, typography hierarchy, text wrapping, imagery, image dimensions, image crop and focal position, component dimensions, colors and surfaces, borders and radii, shadows, and responsive relationships. Do not redesign or reinterpret a supplied reference unless explicitly requested. Identify missing information and make conservative, documented assumptions.

## 4. Inspect assets

Inventory `public/images/`, `public/icons/`, `public/fonts/`, and any framework-specific asset locations before creating substitutes. Check format, dimensions, licensing/provenance when known, and suitability. When supplied original logos, photographs, images, icons, illustrations, or approved fonts are available, prefer and use them unless there is a technical reason not to. Do not fabricate paths or silently replace supplied assets with generated images, stock images, placeholders, alternative icons, or unrelated media.

## 5. Inspect codebase

Identify the framework, package manager, routes, entry points, styling approach, reusable components, tokens, scripts, tests, and repository status. Preserve established architecture and unrelated files. Do not add dependencies unless they are justified and the task permits it.

## 6. Plan

Write an implementation plan covering page structure, reusable components, tokens, asset mapping, responsive behavior, accessibility, validation commands, and screenshot viewports. Resolve the largest structural uncertainties before polishing details.

## 7. Implement

Build a faithful implementation using clean, semantic, responsive, accessible, and maintainable code in the existing stack. Apply shared tokens and components, meaningful source order, suitable media behavior, and complete interaction states. Use the active theme to implement the supplied reference, not to override its composition; theme consistency must not become an unrequested redesign. Preserve task scope: do not redesign unrelated pages, sections, or components unless explicitly requested or required for correctness.

## 8. Run

Use documented scripts to run the site. Confirm the target route, fonts, media, interactions, and browser console are error-free. Run relevant static checks early enough to correct structural problems.

## 9. Screenshot

Follow `VISUAL_QA.md`. Capture the target at the reference dimensions when available plus representative desktop, mobile, and intermediate widths. Use stable data and wait for fonts and media before capture.

## 10. Compare

Compare screenshots against the references systematically in this order:

1. overall page silhouette;
2. missing content;
3. page structure and section order;
4. section dimensions;
5. container widths;
6. grids and columns;
7. images, crop, and media positioning;
8. typography and line wrapping;
9. alignment;
10. spacing;
11. component dimensions and states;
12. colors;
13. borders and radii;
14. shadows and decorative details.

For the overall silhouette, check total page length, section proportions, major whitespace regions, image placement, content density, and large background regions. Use overlay and difference-image comparison when tooling permits, according to `VISUAL_QA.md`, and record specific discrepancies.

## 11. Correct

Follow the complete iterative loop:

```text
SCREENSHOT
→ COMPARE
→ CORRECT
→ RUN
→ SCREENSHOT AGAIN
→ COMPARE AGAIN
```

Continue while meaningful visual discrepancies remain. Always fix structural and high-impact differences before fine decorative details. Do not use brittle one-viewport hacks merely to improve screenshot similarity.

## 12. Responsive QA

Continuously resize and verify compact mobile, typical mobile, tablet/intermediate, desktop, and wide layouts, including both sides of every breakpoint. Check reflow, overflow, source order, text wrapping, navigation, media crops, targets, and orientation changes.

## 13. Accessibility QA

Check semantic landmarks and headings, keyboard-only use, focus order and visibility, accessible names, form errors, contrast, alternative text, reduced motion, zoom/reflow, and screen-reader behavior. Run available automated tooling, then perform manual checks because automation is incomplete.

## 14. Final verify

Run the full applicable test, lint, type-check, and production-build suite. Review the final diff for accidental changes, hard-coded secrets, broken paths, debug output, and unrelated files. For screenshot-based UI implementation, confirm that the screenshot comparison and correction loop was performed and that remaining visual differences are minor or caused by documented limitations such as unavailable original assets, unavailable fonts, browser/platform rendering differences, accessibility requirements, or explicit functional constraints. Confirm final screenshots and QA notes are saved in `visual-qa/`. Summarize what changed, commands run, remaining limitations, and intentional reference differences honestly.

## Definition of done

A task is complete only when the requested experience is implemented, the visual loop has converged at desktop and mobile sizes, intermediate responsive behavior is sound, accessibility checks pass, project validation succeeds, and known limitations are disclosed. For screenshot-based UI implementation, completion requires both:

```text
FUNCTIONAL CORRECTNESS
+
VISUAL VERIFICATION
```

Do not declare the task complete merely because the application builds, the page renders, all sections exist, tests pass, or the page generally resembles the reference. The screenshot comparison and correction loop must have been performed, and known remaining differences must be reported honestly.
