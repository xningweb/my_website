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

Inventory `references/` and inspect every item relevant to the requested view. Note dimensions, content, layout, type hierarchy, spacing, imagery, colors, component states, and implied responsive behavior. Identify missing information and make conservative, documented assumptions.

## 4. Inspect assets

Inventory `public/images/`, `public/icons/`, `public/fonts/`, and any framework-specific asset locations. Check format, dimensions, licensing/provenance when known, and suitability. Reuse appropriate assets; do not fabricate paths or silently substitute unrelated media.

## 5. Inspect codebase

Identify the framework, package manager, routes, entry points, styling approach, reusable components, tokens, scripts, tests, and repository status. Preserve established architecture and unrelated files. Do not add dependencies unless they are justified and the task permits it.

## 6. Plan

Write an implementation plan covering page structure, reusable components, tokens, asset mapping, responsive behavior, accessibility, validation commands, and screenshot viewports. Resolve the largest structural uncertainties before polishing details.

## 7. Implement

Build semantic, responsive UI using the existing stack. Apply shared tokens and components, meaningful source order, suitable media behavior, complete interaction states, and theme-consistent but original visual treatment. Keep the change scoped to the task.

## 8. Run

Use documented scripts to run the site. Confirm the target route, fonts, media, interactions, and browser console are error-free. Run relevant static checks early enough to correct structural problems.

## 9. Screenshot

Follow `VISUAL_QA.md`. Capture the target at the reference dimensions when available plus representative desktop, mobile, and intermediate widths. Use stable data and wait for fonts and media before capture.

## 10. Compare

Compare screenshots against the references systematically: structure, geometry, typography, spacing, imagery, color, detail, then interaction. Use overlays or diffs where helpful and record specific discrepancies.

## 11. Correct

Fix high-impact systemic differences before small decoration. Re-run, recapture, and compare. Repeat until no significant discrepancy remains; avoid single-viewport hacks.

## 12. Responsive QA

Continuously resize and verify compact mobile, typical mobile, tablet/intermediate, desktop, and wide layouts, including both sides of every breakpoint. Check reflow, overflow, source order, text wrapping, navigation, media crops, targets, and orientation changes.

## 13. Accessibility QA

Check semantic landmarks and headings, keyboard-only use, focus order and visibility, accessible names, form errors, contrast, alternative text, reduced motion, zoom/reflow, and screen-reader behavior. Run available automated tooling, then perform manual checks because automation is incomplete.

## 14. Final verify

Run the full applicable test, lint, type-check, and production-build suite. Review the final diff for accidental changes, hard-coded secrets, broken paths, debug output, and unrelated files. Confirm final screenshots and QA notes are saved in `visual-qa/`. Summarize what changed, commands run, remaining limitations, and intentional reference differences.

## Definition of done

A task is complete only when the requested experience is implemented, the visual loop has converged at desktop and mobile sizes, intermediate responsive behavior is sound, accessibility checks pass, project validation succeeds, and known limitations are disclosed.
