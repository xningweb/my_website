# Codex Project Instructions

This repository is a reusable design-to-code workspace. It intentionally starts without an application framework or implementation. Preserve that portability unless a future task explicitly chooses a stack.

## Required reading order

Before planning or changing any UI, read:

1. `AGENTS.md` (this file)
2. `DESIGN_SYSTEM.md`
3. `ACTIVE_THEME.md`, followed by the theme file it names
4. `VISUAL_QA.md`
5. `MASTER_PROMPT.md`

Before any screenshot-based UI implementation, reading the design system, active theme, and `VISUAL_QA.md` is mandatory. Inspect all relevant material in `references/` and all available assets before writing UI code.

## Working principles

- Treat reference designs as the primary visual source of truth for composition, hierarchy, proportions, spacing, imagery, and visual relationships. Analyze them rather than copying mechanically, but do not redesign or reinterpret supplied designs unless explicitly requested.
- Apply the core design system first and the active theme as its visual expression. If they conflict, accessibility and explicit task requirements win, then the core design system.
- Reuse existing code and assets where appropriate; do not delete or overwrite unrelated files.
- Always inspect supplied assets before creating substitutes. Use supplied original logos, images, icons, illustrations, and approved fonts unless there is a technical reason not to; do not replace them with generated, stock, placeholder, or alternative assets without an explicit reason.
- Preserve task scope. Do not redesign or refactor unrelated pages, sections, or components unless required for correctness or explicitly requested.
- Do not invent a framework, dependency, font, image, or icon source without documenting the choice and confirming it fits the task.
- Build semantic, accessible, responsive interfaces. Avoid matching a desktop screenshot with brittle fixed positioning.
- Prefer reusable tokens and components over one-off values and duplicated patterns.
- Keep third-party inspiration original: reproduce design qualities, not protected branding, copy, or distinctive compositions.
- Keep generated files, screenshots, and implementation artifacts out of source locations unless the chosen toolchain requires them.

## Implementation workflow

Follow `MASTER_PROMPT.md`. For visual work, execute every stage in `VISUAL_QA.md`: analyze references, implement, run, capture screenshots, compare, correct, and repeat. Verify desktop, mobile, and intermediate responsive widths rather than checking only one viewport.

## Quality gates

Before declaring UI work complete:

- Run the project's available tests, linting, type checks, and production build.
- Confirm semantic structure, keyboard access, visible focus, contrast, text resizing, reduced motion, and useful alternative text.
- Compare the rendered page with supplied references at representative desktop and mobile sizes, and do not declare screenshot-based UI work complete while meaningful visual discrepancies remain. Continue correcting meaningful differences according to `VISUAL_QA.md`.
- Record screenshots and QA notes under `visual-qa/` using descriptive names; do not place reference originals there.
- Report remaining differences and environment limitations honestly.

## Repository conventions

- `references/`: source screenshots and other design references supplied for a task.
- `themes/`: reusable visual theme definitions.
- `public/images/`: production-ready raster or photographic assets.
- `public/icons/`: production-ready icon assets.
- `public/fonts/`: approved, properly licensed local font files.
- `visual-qa/`: captured implementation screenshots and comparison notes.

More specific `AGENTS.md` files may be added later. Their instructions apply within their directory scope and override this file when they are more specific.
