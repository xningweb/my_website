# Mobile responsive correction QA

## Scope

- Routes corrected: `/`, `/services`, `/about`, and `/gallery`.
- Safety-reviewed without changes: `/contact` and `/booking`.
- Target widths: 360px, 390px, and 430px.
- Responsive boundary: the existing `max-width: 520px` phone breakpoint. Rules above 520px are unchanged.
- Human-browser observations supplied with the task were treated as the defect source of truth.

## Confirmed defects and corrections

1. **Homepage header — oversized BOOK NOW / shifted identity**
   - Kept BOOK NOW at a 44px minimum height while reducing its horizontal padding.
   - Positioned the wordmark at the true horizontal center of the header viewport, independently of the unequal menu and booking-control widths.
   - Preserved the hamburger hit area and drawer behavior.
2. **Services hero — clipped decorative logo**
   - Made both hero grid tracks shrink-safe and constrained the complete `logo-mark.svg` to its available grid track.
   - Preserved the logo aspect ratio and heading/logo relationship without cropping or hiding overflow.
3. **Services CTA — oversized/crowded CONTACT US**
   - Reflowed the CTA into copy and action rows. CONTACT US now occupies its own full-width row with a 44px minimum height.
   - Retained 12–14px functional type and comfortable internal spacing.
4. **About — compressed introduction and studio information**
   - Reflowed the introduction from two narrow columns to heading/copy/image source order.
   - Restored natural paragraph wrapping at a 16px body size and retained the arched image treatment and corrected 40% focal position.
   - Stacked location, opening hours, and Instagram details with horizontal separators, aligned icons, and 56px row heights.
5. **Gallery CTA — BOOK APPOINTMENT label overflow**
   - Reflowed the copy and button into separate rows.
   - Gave the label flexible width, normal wrapping as a fallback, sufficient padding, and a 44px minimum target height.

## Contact and booking safety review

Source review found no concrete container-width or control-label overflow requiring a route-specific layout change. Both routes use width-constrained forms and controls inside their phone gutters. Their earlier accessibility corrections retain 44px-or-larger primary controls and readable functional typography, so no additional redesign was made.

## Overflow and accessibility checks

- Component-level grid tracks use `minmax(0, 1fr)` where text must shrink/reflow rather than force viewport width.
- Decorative service imagery is constrained by its actual grid track; no asset geometry, cropping, or global overflow workaround was introduced.
- Mobile CTA copy and controls no longer compete in fixed horizontal columns.
- Header, CTA, detail-row, and primary action hit areas remain at least approximately 44px high.
- Existing focus styles, semantic links, source order, route behavior, fonts, colors, and approved assets remain intact.

## Verification record

- Static checks: `npm run check`, `npm run build`, and `git diff --check`.
- Route smoke test: `/`, `/services`, `/about`, `/gallery`, `/contact`, and `/booking` checked for HTTP 200 responses.
- Browser screenshot tooling is unavailable in this environment. No implementation screenshots or visual-comparison claims are made; corrections are based on the supplied human-browser observations and source-level responsive analysis.

