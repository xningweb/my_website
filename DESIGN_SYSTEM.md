# Core Design System

This framework-agnostic system defines the durable rules for future websites in this repository. The active theme supplies aesthetic choices while this document supplies structure, behavior, and quality standards. Values are starting points: adapt them deliberately to the content and document material departures.

## Design principles

1. **Content first:** hierarchy and task completion take priority over decoration.
2. **Consistent, not rigid:** use shared tokens and patterns while allowing purposeful variation.
3. **Responsive by design:** layouts should work across a continuum, not just at named devices.
4. **Accessible by default:** accessibility is part of component behavior and visual decisions.
5. **Progressive enhancement:** core content and actions should survive constrained devices and preferences.

## Source of truth

For reference-based UI implementation, use this priority order:

1. Supplied reference designs
2. Supplied original assets
3. Active theme
4. Core Design System
5. Existing reusable components and project conventions
6. Engineering judgment

Supplied reference designs are the primary visual source of truth for composition, hierarchy, proportions, spacing, imagery, typography relationships, and overall visual relationships. The active theme provides the visual language used to implement the reference, while this Core Design System provides structural, responsive, accessibility, consistency, and engineering constraints. Do not redesign or reinterpret a supplied reference unless explicitly requested. Accessibility and explicit functional requirements take priority when they genuinely conflict with visual fidelity.

## Design tokens

Define tokens in the implementation layer (CSS custom properties, theme object, or platform equivalent) rather than scattering literals. Use semantic names so themes can change without rewriting components.

```text
color.background.canvas     Primary page surface
color.background.surface    Raised or grouped surface
color.text.primary          Highest-emphasis readable text
color.text.secondary        Supporting text
color.text.inverse          Text on dark/strong surfaces
color.border.subtle         Low-emphasis separators
color.action.primary        Primary interactive accent
color.action.hover          Hover state
color.focus                 Keyboard focus indicator

font.family.display         Display headings
font.family.body            Body and UI copy
font.size.*                 Fluid type scale
font.weight.*               Named weights used by the product
line.height.*               Display, heading, body, and compact leading

space.1 … space.12          Shared spacing scale
size.content.*              Reading and layout widths
radius.*                    Control, card, and pill radii
shadow.*                    Subtle elevation levels
motion.duration.*           Fast, normal, and slow timings
motion.easing.*             Standard and expressive curves
breakpoint.*                Layout-change thresholds, where needed
```

Every foreground/background token pairing must meet the contrast target for its use. Avoid naming tokens after raw colors (such as `blue500`) at the component API boundary.

## Typography

- Choose legible, properly licensed families with robust fallbacks; system fonts are an acceptable default.
- Establish a fluid modular scale using `clamp()` or the platform equivalent. Suggested roles: display, h1, h2, h3, body-large, body, small, and label.
- Keep body copy near 16–18px equivalent with a line height around 1.5–1.7. Use tighter leading only for large display text.
- Keep prose measures around 45–75 characters. Avoid full-width long-form paragraphs.
- Use weight, size, and spacing for hierarchy; do not rely on color alone.
- Do not use all caps for long labels or body copy. Preserve user zoom and avoid embedding essential text in images.
- Use responsive line breaks naturally. Add editorial breaks only when they remain appropriate at all widths.

## Spacing

Use a consistent base scale rather than arbitrary gaps. A practical default scale is `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` pixels (or equivalent relative units).

- Use smaller steps inside controls, medium steps between related elements, and larger steps between sections.
- Prefer `gap` and parent layout rules over child margins where possible.
- Let major section spacing scale fluidly with viewport width.
- Preserve breathing room at narrow widths; reduced space must not become cramped space.

## Layout

- Use a centered content container with fluid gutters and a documented maximum width.
- Use Grid for two-dimensional page composition and Flexbox (or platform equivalents) for linear groups.
- Align key edges to a coherent grid. Break the grid only to create intentional emphasis.
- Use logical properties so layouts can support different writing directions.
- Avoid fixed heights for text-bearing components. Define aspect ratios for media when stability matters.
- Keep primary content prominent and source order meaningful without styling.

## Responsive design

- Start from the smallest viable layout and enhance as available space increases.
- Choose breakpoints where content or composition needs to change, not for specific device brands.
- Test at minimum: a compact mobile viewport, a wider mobile/small tablet viewport, a desktop viewport, and widths immediately around each breakpoint.
- Allow navigation, grids, typography, media crops, and section spacing to adapt independently.
- Avoid horizontal scrolling at 320 CSS pixels except for intentionally scrollable regions with clear affordances.
- Support portrait and landscape orientations, zoom to 200%, and dynamic content lengths.
- Prefer responsive images (`srcset`, `sizes`, or platform equivalents) and art direction when the crop must change.

## Reference-based implementation

- Analyze the complete reference before coding. Identify its page structure, hierarchy, proportions, grids, spacing, typography, imagery, and responsive relationships.
- Match the supplied reference rather than introducing arbitrary stylistic improvements. Do not add, remove, or redesign major visual elements unless explicitly requested.
- Implement responsive behavior from supplied desktop and mobile references when available. When only one viewport is supplied, infer responsive behavior using this Core Design System without changing the design's visual identity.
- After implementation, follow `VISUAL_QA.md`. Render at the reference viewport dimensions when practical, compare the rendered implementation against the supplied reference, correct meaningful visual discrepancies, and repeat verification before declaring the implementation complete.

## Components

Components should have a single clear responsibility, semantic markup, token-driven styling, and documented variants and states.

### Shared expectations

- Provide default, hover, active, focus-visible, disabled, loading, empty, error, and success states when relevant.
- Keep hit targets at least 44 by 44 CSS pixels where practical.
- Use native elements first. Add ARIA only when semantics or relationships are otherwise missing.
- Never communicate state using color alone; pair it with text, shape, or an icon.
- Avoid component variants created solely to compensate for inconsistent page layout.

### Baseline set

- **Buttons and links:** distinguish navigation from actions; use descriptive labels and visible focus.
- **Inputs:** always provide persistent labels, instructions, validation messaging, and programmatic associations.
- **Navigation:** expose the current location and ensure collapsed navigation is keyboard and screen-reader operable.
- **Cards:** group genuinely related content and avoid making nested interactive regions ambiguous.
- **Dialogs/overlays:** manage focus, provide a clear close mechanism, restore focus, and prevent background interaction.
- **Feedback:** reserve space where possible to prevent layout shift and announce important asynchronous updates.

## Images and media

- Store approved production assets in the relevant `public/` directory; keep design references in `references/`.
- Always inspect supplied assets before creating substitutes. When an original asset used by the reference design is supplied, use that asset.
- Do not replace supplied logos, photographs, icons, illustrations, or approved fonts with generated, stock, placeholder, or alternative assets unless technically necessary or explicitly requested.
- Select meaningful imagery that supports the content. Do not use decorative media as a substitute for hierarchy.
- Provide accurate alternative text for informative images and empty alternative text for decorative images.
- Preserve aspect ratio, define intrinsic dimensions, and use intentional crops with `object-fit`/`object-position` or equivalents.
- Use modern, compressed formats where supported and avoid serving assets substantially larger than their rendered size.
- Lazy-load below-the-fold media; prioritize the likely largest contentful image without loading every image eagerly.
- Provide captions, transcripts, and user controls for time-based media as applicable. Never autoplay audio.

## Accessibility

Target WCAG 2.2 AA as the baseline.

- Use landmarks, a logical heading hierarchy, meaningful labels, and semantic controls.
- Ensure all functionality works with a keyboard and focus order matches the visual and reading order.
- Maintain visible focus indicators with adequate contrast and avoid obscuring focused elements.
- Meet at least 4.5:1 contrast for normal text and 3:1 for large text and meaningful UI graphics.
- Support text zoom/reflow, user font settings, high contrast modes where feasible, and reduced-motion preferences.
- Provide skip navigation on content-heavy pages.
- Make errors identifiable, specific, and recoverable; do not rely on placeholder text as a label.
- Test with automated tooling and manual keyboard/screen-reader checks. Automation is not sufficient by itself.

## Motion

- Motion must clarify hierarchy, state, causality, or spatial relationships; never add it merely because it is possible.
- Favor subtle opacity and transform transitions that do not trigger disruptive layout changes.
- Suggested durations: 100–180ms for direct feedback, 180–300ms for component transitions, and up to 500ms for deliberate page-level reveals.
- Keep easing natural and consistent. Avoid large parallax, repetitive motion, or scroll hijacking.
- Honor `prefers-reduced-motion`: remove nonessential effects and replace necessary movement with an immediate or low-motion state change.
- Do not delay access to content for entrance animation.

## Governance

When adding a new token or pattern, first check whether an existing semantic role fits. Document additions and validate them in multiple contexts. Theme files may refine typography, color, radius, shadow, imagery, and motion, but must retain the accessibility and responsive requirements in this core.
