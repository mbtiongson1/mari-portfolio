---
name: Mari Portfolio
description: A technical writer's portfolio. Grounded, generous, warm.
colors:
  fern-green: "#2b6b3f"
  fern-green-deep: "#1e5530"
  fern-green-light: "#d4ebd9"
  fern-green-subtle: "#ecf4ee"
  warm-ivory: "#f5f2ed"
  warm-ivory-raised: "#faf8f5"
  warm-ivory-sunken: "#ebe7e0"
  warm-charcoal: "#3a3530"
  warm-stone: "#7a756e"
  warm-ash: "#9d9890"
  text-on-primary: "#f0f5f1"
  border-soft: "#ddd8d1"
  border-strong: "#c2bdb5"
  terracotta: "#c06a3a"
  terracotta-light: "#f0d0b8"
  focus-ring: "#2e8050"
typography:
  display:
    fontFamily: "Brygada 1918, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 4vw + 0.5rem, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Brygada 1918, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 3vw + 0.5rem, 3rem)"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Brygada 1918, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 2vw + 0.5rem, 2rem)"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.03em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  2xs: "0.25rem"
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "clamp(3rem, 5vw + 1rem, 5rem)"
  4xl: "clamp(4rem, 7vw + 1rem, 8rem)"
  section: "clamp(4rem, 8vw + 1rem, 10rem)"
components:
  hero-cta:
    textColor: "{colors.fern-green}"
    typography: "{typography.label}"
    padding: "0.75rem 0"
  showcase-entry:
    backgroundColor: "transparent"
    textColor: "{colors.warm-charcoal}"
    padding: "2rem 0"
    rounded: "{rounded.md}"
  showcase-entry-hover:
    backgroundColor: "{colors.fern-green-subtle}"
  showcase-tag:
    backgroundColor: "{colors.fern-green-light}"
    textColor: "{colors.fern-green}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.75rem"
  artifact-container:
    backgroundColor: "{colors.warm-ivory-sunken}"
    rounded: "{rounded.md}"
    padding: "2rem"
  impact-container:
    backgroundColor: "{colors.warm-ivory-sunken}"
    rounded: "{rounded.md}"
    padding: "2rem"
  nav-link:
    textColor: "{colors.warm-stone}"
  nav-link-active:
    textColor: "{colors.fern-green}"
---

# Design System: Mari Portfolio

## 1. Overview

**Creative North Star: "The Generous Folio"**

This is a portfolio that teaches by showing. It borrows from the tradition of the printed folio—carefully typeset, generously margined, structured for deep reading—but lives on the web with subtle life in its interactions. The system is restrained, warm, and unadorned. It earns its authority through structure rather than decoration, through craft rather than spectacle.

The design rejects Silicon Valley "disruption energy," Dribbble portfolio templates with floating browser mockups, corporate case study sites with stock photography and blue-and-white palettes, minimalist dev portfolios with terminal aesthetics, and content-creator personal brands with gradient backgrounds and emoji headings. What it embraces instead: the specific warmth of someone who genuinely cares about the people her documentation serves.

Every visual choice demonstrates the same care Mari brings to client documentation. The portfolio *is* the specimen.

**Key Characteristics:**
- **Grounded**: rooted typography, warm neutral surfaces, no floating or lifted UI
- **Generous**: wide margins, relaxed line-height, unhurried rhythm between sections
- **Warm**: ivory-toned surfaces (never pure white), botanical green accents drawn from Mari's portrait, terracotta warmth in selective moments
- **Quiet confidence**: the design doesn't shout; it invites close reading
- **Responsive restraint**: motion exists only as scroll-triggered reveals and hover feedback—never choreographed, never gratuitous

## 2. Colors: The Botanical Palette

A committed green strategy anchored by deep fern green drawn from Mari's portrait photography, set against warm ivory surfaces that never touch pure white or pure black. The palette reads as organic and grounded—a greenhouse, not a hospital.

### Primary
- **Fern Green** (`oklch(0.45 0.12 155)`): the singular accent. Used for links, active nav indicators, CTA borders, section labels, and showcase numbers. Its presence is earned; it appears only where the system needs to signal interaction or hierarchy.
- **Fern Green Deep** (`oklch(0.38 0.10 155)`): hover state for primary. Darkens to signal response, not decoration.
- **Fern Green Light** (`oklch(0.92 0.04 155)`): background tint for showcase tags. Quiet enough to read as surface, green enough to carry the accent.
- **Fern Green Subtle** (`oklch(0.96 0.02 155)`): hover background for showcase entries. Almost invisible until you move over it—a whisper, not a shout.

### Tertiary
- **Terracotta** (`oklch(0.62 0.14 50)`): selective warmth accent for process decision labels in showcase pages. Used sparingly to signal "this is where the thinking happened." Never competes with fern green for dominance.
- **Terracotta Light** (`oklch(0.90 0.06 50)`): reserved for potential callout backgrounds paired with terracotta accents.

### Neutral
- **Warm Ivory** (`oklch(0.97 0.005 80)`): the primary surface. Tinted toward 80° (yellow-orange axis) to stay warm. The entire background breathes through this.
- **Warm Ivory Raised** (`oklch(0.99 0.003 80)`): subtle lift for nav backdrop overlay. Nearly imperceptible but preserves tonal hierarchy.
- **Warm Ivory Sunken** (`oklch(0.94 0.008 80)`): artifact containers, impact containers, footer. Depressed surfaces that hold secondary content.
- **Warm Charcoal** (`oklch(0.25 0.01 80)`): primary text. Dark enough for WCAG AA on warm ivory, warm enough to avoid clinical black.
- **Warm Stone** (`oklch(0.50 0.01 80)`): muted body text, meta text, descriptions. The workhorse secondary text color.
- **Warm Ash** (`oklch(0.62 0.008 80)`): faint text for timestamps, copyright, tertiary information.
- **Border Soft** (`oklch(0.88 0.01 80)`): section dividers, card borders. Present but never dominant.
- **Border Strong** (`oklch(0.78 0.01 80)`): timeline dots, heavier separators where structure needs emphasis.

### Named Rules

**The No Pure Black, No Pure White Rule.** Every surface and text color carries warmth on the 80° hue axis. `#000` and `#fff` are prohibited. The warmest neutral is the page background; the darkest neutral is `oklch(0.25 0.01 80)`. This is non-negotiable.

**The Fern Green Discipline Rule.** The primary accent is used exclusively for interactive affordances (links, active states, CTA borders, labels that signal hierarchy). Never as a background fill larger than a tag chip. Its restraint is its authority.

## 3. Typography

**Display Font:** Brygada 1918 (with Georgia, Times New Roman, serif fallback)
**Body Font:** Figtree (with system-ui, -apple-system, sans-serif fallback)

**Character:** Brygada 1918 is a Polish editorial serif with high x-height and sharp, confident letterforms—serious but not cold. Figtree is a geometric humanist sans with open apertures and friendly proportions. Together they create a pairing that says "I know what I'm doing and I'm glad you're here." The serif carries authority in display sizes; the sans carries warmth at body scale.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 4vw + 0.5rem, 3.75rem)`, 1.2): hero headlines only. "Documentation that works for people." Set in Brygada 1918 with tight letter-spacing (`-0.02em`) for editorial density.
- **Headline** (700, `clamp(2rem, 3vw + 0.5rem, 3rem)`, 1.2): page-level section headings ("How I got here"). Brygada 1918 at slightly smaller scale.
- **Title** (600, `clamp(1.5rem, 2vw + 0.5rem, 2rem)`, 1.35): showcase titles, section headings within a page. Brygada 1918 at semibold to differentiate from display.
- **Body** (400, `1.125rem`, 1.6): the primary reading size. Figtree at 18px with generous line-height for sustained reading. Paragraphs constrained to `68ch` max-width (`--measure-body`). Narrow contexts use `52ch` (`--measure-narrow`).
- **Label** (500, `0.875rem`, 1.35, `0.03em` letter-spacing, uppercase): section labels ("TECHNICAL WRITER," "ARTIFACT," "PROCESS," "IMPACT"), showcase tags, nav links. Figtree in uppercase with tracking to signal hierarchy without size.

### Named Rules

**The 68ch Rule.** Body text never exceeds 68 characters per line. Narrow contexts (showcase excerpts, about text) use 52ch. This is not a suggestion; it is a measure-based constraint in the CSS (`--measure-body`, `--measure-narrow`).

**The Perfect Fourth Rule.** The type scale follows a ~1.33 ratio (perfect fourth). Sizes step from `0.75rem` through `3.75rem` with fluid `clamp()` at larger sizes. New sizes are never invented ad-hoc; they come from the existing scale in `tokens.css`.

## 4. Elevation

This system is flat by default. There are no box-shadows anywhere in the design. Depth is conveyed entirely through **tonal layering**: surfaces step between warm ivory (primary), warm ivory raised (nav), and warm ivory sunken (artifact/impact containers, footer). The tonal shift is subtle (~3% lightness per step) but consistent.

The single exception to flatness is the nav bar's `backdrop-filter: blur(12px)`, which creates a frosted-glass effect at 92% opacity. This is the only transparency in the system. It signals "this element floats above the content" without requiring a shadow.

### Named Rules

**The No Shadow Rule.** Shadows are prohibited. If a surface needs to feel elevated, it uses tonal contrast (sunken or raised) or a 1px border in `--color-border`. The portfolio's flatness is the visual embodiment of "earn every element"—if you can't justify a shadow's role, you don't use one.

## 5. Components

### Navigation
- **Style:** sticky header with frosted-glass backdrop (`backdrop-filter: blur(12px)` at 92% opacity warm ivory). 1px bottom border.
- **Typography:** nav name in Brygada 1918 bold (`--text-md`), nav links in Figtree medium (`--text-sm`) with `0.01em` tracking.
- **Default:** links in warm stone (`--color-text-muted`), no underline.
- **Hover:** text darkens to warm charcoal; a 2px fern green underline animates from left to right via `width` transition (`300ms`, `--ease-out-expo`).
- **Active:** fern green text with persistent 2px underline, marked with `aria-current="page"`.
- **Mobile (≤640px):** hamburger toggle with three lines. Lines animate to × on open (rotate ±45°). Links panel slides down via `max-height` transition. First link auto-focused on open. Closes on Escape or outside click.

### Hero CTA ("See the work →")
- **Style:** inline-flex with fern green text, 2px fern green bottom border. No background fill—deliberately not a "button." The CTA earns attention through position and copy, not visual weight.
- **Hover:** arrow translates right 4px, gap widens from `--space-xs` to `--space-sm`. Text darkens to fern green deep.
- **Character:** understated, directional. Points toward the work, not toward itself.

### Showcase Entry (Landing Page)
- **Shape:** no visible container at rest. Separated by 1px borders.
- **Layout:** three-column grid: numbered index (fern green, Brygada 1918), body (title + meta + excerpt), directional arrow (faint, right-aligned).
- **Hover:** fern green subtle background fades in, negative margin expands the hit area, corners round to `--radius-md`, border dissolves, arrow translates right 6px and turns fern green, title text turns fern green. The entire row becomes an invitation.
- **Mobile:** arrow hidden at ≤768px. Number stacks above title at ≤480px.

### Showcase Tags
- **Style:** fern green light background, fern green text, `--radius-sm` corners, `0.25rem 0.75rem` padding. Set in label typography (uppercase, tracked).
- **Character:** quiet metadata markers, not attention-seeking badges.

### Artifact Container
- **Style:** warm ivory sunken background, 1px border soft, `--radius-md` corners, `--space-xl` padding.
- **Internal structure:** label bar (uppercase, faint, with 1px bottom border), then content area with body-scale headings and small-scale body text.
- **Redacted spans:** border-soft background with transparent text and `user-select: none`. Signals confidentiality without drama.
- **Character:** the document-within-a-document. Feels inset, contained, archival.

### Impact Container
- **Style:** warm ivory sunken background, `--radius-md` corners, `--space-xl` padding. No border (distinguishes it from artifact).
- **Character:** the quiet conclusion. Lets the numbers speak.

### Process Callout
- **Style:** fern green subtle background, `--radius-md` corners, generous padding (`--space-lg` × `--space-xl`).
- **Label:** fern green, semibold, small.
- **Character:** a sidebar voice—Mari stepping out of the narrative to share a principle or reflection.

### Process Decision Grid
- **Layout:** two-column grid with label + description.
- **Label:** terracotta text, semibold, small. The only place terracotta appears.
- **Character:** structured thinking made visible. The label-value pairing mirrors how technical writers actually document decisions.

### Timeline (About Page)
- **Thread:** 2px vertical line in border-soft, connecting all career entries.
- **Dots:** 16px circles, warm ivory fill with 2px border-strong stroke. On hover: border turns fern green, fill turns fern green light. The dot is the only interactive element on the timeline.
- **Content:** period (faint, medium weight), role (Brygada 1918, semibold, `--text-lg`), organization (small, muted), description (small, muted, capped at `--measure-narrow`).
- **Character:** "How I got here," not a resume. Each entry reads as a chapter in a story, not a line item.

### Footer
- **Style:** warm ivory sunken background, 1px top border. Two-column flex: brand (name + tagline) left, nav links right.
- **Copyright:** auto-updated year, faint text, separated by 1px border and padding.

## 6. Do's and Don'ts

### Do:
- **Do** use OKLCH for all color definitions in `tokens.css`. Hex approximations exist only in `DESIGN.md` frontmatter for tooling compliance; the CSS is the canonical source of truth.
- **Do** constrain all body text to `--measure-body` (68ch) or `--measure-narrow` (52ch). Every `<p>` inherits `max-width: var(--measure-body)` from `base.css`.
- **Do** use staggered `data-delay` attributes (1–4) on `.reveal` elements to create gentle entrance choreography. The stagger step is 100ms.
- **Do** respect `prefers-reduced-motion` unconditionally. All durations collapse to 0ms and scroll behavior changes to `auto`.
- **Do** use `aria-current="page"` on the active nav link. The JavaScript detects the current path and sets it dynamically.
- **Do** use the existing type scale from `tokens.css`. If a size doesn't exist in the scale, the design doesn't need it.
- **Do** use 1px solid `--color-border` as the only separator between sections. Borders do the work that shadows refuse to.
- **Do** test all new pages at both `file://` protocol and served via HTTP. Navigation uses explicit `index.html` paths for local compatibility.

### Don't:
- **Don't** use pure black (`#000`) or pure white (`#fff`) anywhere. Every surface carries the warm 80° hue axis.
- **Don't** add box-shadows. The system is deliberately flat with tonal layering only.
- **Don't** use gradient backgrounds, glassmorphism beyond the nav backdrop-filter, neon accents, or emoji in any content. These are explicitly rejected as "content-creator personal brand" energy.
- **Don't** use stock photography. The only imagery is Mari's actual portrait.
- **Don't** create "Challenge / Solution / Results" patterns. Showcases use "Artifact / Process / Impact"—the domain language is canonical and documented in CONTEXT.md.
- **Don't** use `border-left` thicker than 2px as a colored accent stripe. The blockquote's 2px left border is the maximum.
- **Don't** introduce a dark mode. The warm ivory surface is integral to the brand identity. `prefers-color-scheme` hooks are reserved for future consideration but not implemented.
- **Don't** add testimonial carousels, newsletter signup popups, or "Let's work together" CTAs. The portfolio is an act of generosity, not a sales funnel.
- **Don't** use the word "project" or "case study" in the UI. The canonical term is "Showcase" (see CONTEXT.md).
- **Don't** add decorative elements (floating shapes, background patterns, illustration). Every element earns its place or it doesn't exist. "Earn every element" is PRODUCT.md's third design principle.
