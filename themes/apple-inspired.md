# Apple-Inspired Theme

This theme translates qualities associated with refined, minimal product storytelling into an original visual language. It must not reproduce Apple's branding, proprietary assets, copy, page structures, or distinctive trade dress.

## Direction

- **Minimal and purposeful:** remove nonessential decoration and let content, imagery, and typography establish hierarchy.
- **Premium typography:** use a crisp, neutral sans-serif with careful weight, tracking, line length, and fluid scale. Prefer licensed local fonts or a polished system stack.
- **Generous whitespace:** use large, responsive section spacing and uncluttered compositions. Density should increase gently on small screens without feeling compressed.
- **Restrained color:** favor warm or neutral whites, near-black text, quiet grays, and one project-specific accent. Reserve saturated color for actions and meaningful emphasis.
- **Subtle depth:** create separation with tonal surfaces, fine borders, soft shadows, restrained blur, and occasional controlled layering—not heavy gradients or exaggerated elevation.
- **Subtle motion:** use short fades, gentle translations, and responsive hover feedback to clarify state. Avoid spectacle, scroll hijacking, and imitation of recognizable branded interactions.

## Suggested theme tokens

These are adaptable starting points, not a fixed palette:

```text
canvas:          #f5f5f7
surface:         #ffffff
surface-muted:   #ececf0
text-primary:    #1d1d1f
text-secondary:  #626267
border-subtle:   rgba(29, 29, 31, 0.12)
accent:          project-specific accessible hue

corner-small:    10px
corner-medium:   18px
corner-large:    28px

shadow-subtle:   0 12px 40px rgba(0, 0, 0, 0.07)
```

Adjust colors to meet the contrast requirements in `DESIGN_SYSTEM.md`. A quieter appearance never justifies low-contrast text or invisible controls.

## Typography

- Use a neutral sans-serif stack with distinct display and reading roles; a single variable family may fulfill both.
- Favor bold but not overly heavy display copy, slightly tightened at large sizes.
- Keep supporting copy relaxed and readable, with secondary color only when contrast remains sufficient.
- Limit the number of sizes and weights in a view. Hierarchy should feel inevitable rather than busy.
- Use concise editorial copy and strong nouns and verbs; do not imitate another company's voice or slogans.

## Composition

- Build clear, focused sections, each with one primary message.
- Use centered hero arrangements when appropriate, balanced by left-aligned reading sections and product detail grids.
- Give high-quality imagery space to breathe. Prefer large, deliberate crops over ornamental image mosaics.
- Use alternating canvas and surface tones to organize long pages without excessive dividers.
- Keep navigation calm, compact, and legible; transparency or blur may enhance it only when content remains readable.

## Components and interaction

- Buttons should be simple and confident: a clear filled primary action and a restrained secondary link or outline action.
- Cards should rely first on spacing and tonal separation, then a fine border or subtle shadow if needed.
- Controls should use comfortable targets and obvious focus-visible states even when their resting appearance is minimal.
- Hover effects may use a small color, elevation, or 1–4px translation change. Do not make essential meaning hover-only.
- Use large rounded corners selectively for feature surfaces; avoid turning every element into a pill.

## Imagery

Favor clean, high-resolution, original product or editorial imagery with controlled backgrounds, natural materials, and precise lighting. Avoid Apple logos, device renders, branded UI, or photography sourced from Apple's properties. Images must follow the performance, cropping, and alternative-text rules in the core system.

## Motion

- Direct feedback: about 140ms; component transitions: about 220ms; major reveals: no more than about 450ms.
- Use smooth ease-out for entrances and standard ease-in-out for state transitions.
- Prefer opacity, small transforms, and gentle scale changes. Keep transforms subtle enough that the interface feels stable.
- Fully honor reduced-motion preferences as required by the core system.

## Originality guardrail

Use this theme as a mood and quality bar, not a template. Choose project-specific layouts, accent colors, imagery, content rhythm, and interaction details. If a section looks recognizably copied from apple.com, redesign it.
