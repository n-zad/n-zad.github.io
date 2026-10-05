---
name: portfolio-ui-ux
description: Apply the owner's visual and interaction preferences when designing, implementing, or reviewing their personal portfolio website. Use for layout, responsive behavior, typography, color, motion, component styling, interaction design, and visual QA. Create a polished, approachable home for professional work and personal interests; defer content selection and writing to portfolio-website-content.
---

# Portfolio UI/UX

Design a personal website that helps a CS, software engineering, or AI student stand out through both their work and their character. Balance refined presentation with a friendly, casual feel. Make the site feel confidently owned by a person rather than styled as a corporate brochure or an embellished resume.

## Visual references

Keep these as directional references, not templates to reproduce:

- [DAQ Consulting](https://daqconsulting.com/) for technical structure, strong hierarchy, and selective numbered or labeled organization.
- [Format by Obys](https://format.obys.agency/) for editorial grids, geometric composition, and thoughtful relationships between formats.
- [ESR Bespoke](https://www.esrbespoke.au/) for restraint, confident scale, and polished image-led presentation.

Borrow composition and craft, then adapt them to a student's actual work and personality. Do not import corporate messaging, luxury positioning, desktop-only behavior, or theatrical interactions. Do not copy branding, assets, layouts, or interaction sequences. Favor clarity, approachability, and mobile usability when references conflict.

## Design direction

- Make polish come from typography, spacing, alignment, and thoughtful imagery. A simple layout can be distinctive without elaborate effects.
- Keep information density balanced. Give major ideas room while keeping related details connected; avoid giant empty hero areas that bury the work.
- Prefer charcoal, graphite, warm gray, off-white, and subdued accents. Allow either light or dark surfaces within this direction; darkness is not a requirement for sophistication.
- Use color purposefully. Let project screenshots, artwork, or playlist covers retain their natural colors within a restrained surrounding interface. Avoid neon and decorative multicolor treatments by default.
- Use sans-serif for primary reading and display roles. Add monospace selectively for metadata, labels, or technical details, rather than making the whole site look like a terminal. Use serif only with a specific rationale.
- Establish hierarchy through scale, spacing, weight, alignment, and contrast before adding ornament. Keep body text readable and secondary labels legible.
- Explore asymmetry, geometric divisions, oversized headings, or modular grids where they improve the material. Do not force every section into the same card grid or an experimental composition.
- Translate desktop compositions into an intentional mobile flow, preserving character and reading order rather than shrinking the desktop layout.

## Personality and cohesion

- Give the site a recognizable visual identity through a small set of consistent choices, such as a typographic treatment, accent, illustration, or recurring motif rooted in the owner's interests.
- Use an existing personal handle, mark, or project identity when provided. Keep the person's name easy to find; do not invent a studio, agency, or product umbrella to manufacture confidence.
- Treat personal interests as part of the same website. Carry typography, spacing, and interaction conventions across professional work, hobby tools, and music collections.
- Allow lighter presentation in personal areas, such as a compact playlist shelf or playful project thumbnail. Keep it discoverable without competing with the introduction and strongest work.
- Use actual project output and personal material when available. Do not fill gaps with generic AI imagery, fake dashboards, stock developer imagery, or invented personality cues.
- Make any playful detail optional to explore. Essential information must remain visible without an Easter egg, hover reveal, or interaction sequence.

## Navigation and presentation

- Make identity, selected work, resume, and contact easy to locate on a quick visit. Give deeper projects and personal interests a clear route for visitors who want to browse.
- Use straightforward navigation labels. Personality can appear in supporting details without making destinations ambiguous.
- Give featured work more visual weight than a broader project index. Use compact rows, small previews, or another suitable treatment for additional work so breadth does not become a wall of identical cards.
- Distinguish project, repository, demo, and playlist links through clear labels and interaction states. Do not make unrelated links compete as equally prominent buttons.
- Choose a single page or multiple pages according to the material and existing project structure. Avoid adding pages, tabs, or filtering controls solely to look more sophisticated.

## Motion, accessibility, and performance

- Keep links, navigation, and controls recognizable and predictable. Use short transitions for feedback, with opacity, color, or small transforms.
- Avoid scroll hijacking, mandatory intros, long pinned sections, custom cursors, excessive parallax, and repeated reveal animations. Render essential content immediately.
- Keep content and controls usable without hover; provide visible keyboard focus and comfortable touch targets.
- Honor reduced-motion preferences. Avoid autoplay audio and load third-party media on demand when practical.
- Maintain readable text sizes, line lengths, and line heights. Meet WCAG AA contrast for text and meaningful controls, and preserve semantic reading order in asymmetric layouts.
- Never convey essential meaning through color or motion alone. Provide meaningful alternative text for informative images.
- Keep visual additions proportional to their value. Optimize images and avoid heavy effects that make the site slow on ordinary phones.

## Decision boundary

Own visual direction, responsive composition, interaction behavior, and rendered verification. Use `portfolio-website-content` for information architecture, project selection, and voice; use the project's coding guidance for implementation structure. Keep these concerns coordinated without duplicating their rules.

Preserve existing functional behavior while adjusting presentation toward this direction. Resolve routine aesthetic choices within these preferences; clarify only when a consequential choice depends on missing information.

## Rendered verification loop

After meaningful UI work, inspect the actual site:

1. Use the existing development workflow. Check desktop around 1440 x 900 and mobile around 390 x 844; include an intermediate width if the layout changes materially there.
2. Inspect hierarchy, density, wrapping, crops, alignment, contrast, focus, touch targets, sticky elements, and clipping or horizontal overflow. Confirm that personal areas feel integrated and featured work remains easy to find.
3. Exercise navigation and primary links with pointer and keyboard. Check access to project details, demos, resume, contact, and personal collections when present. Confirm essential content works without hover and reduced motion removes nonessential movement.
4. Fix issues and repeat the affected viewport checks. Treat a compromised mobile result as unfinished.
5. Report only the viewports and interactions actually checked. If browser tooling is unavailable, state that rendered verification remains outstanding.
