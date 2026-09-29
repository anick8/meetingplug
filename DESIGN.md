---
name: MeetingPlug
description: A printed results sheet for B2B outbound: heavy grotesk, hairline rules, one coral signal.
colors:
  newsprint: "#ededea"
  sheet-white: "#ffffff"
  ink: "#16130f"
  ink-soft: "#55554f"
  signal-coral: "#f1502f"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(46px, 7.3vw, 96px)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 84"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(32px, 3.8vw, 54px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 84"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "28px"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 90"
  body:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  none: "0px"
spacing:
  gutter: "32px"
  column-gap: "24px"
  row-pad: "24px"
  section-top: "72px"
  section-bottom: "120px"
components:
  button-coral:
    backgroundColor: "{colors.signal-coral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "18px 30px"
  button-coral-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.newsprint}"
    rounded: "{rounded.none}"
    padding: "18px 30px"
  button-ink-hover:
    backgroundColor: "{colors.signal-coral}"
    textColor: "{colors.ink}"
---

# Design System: MeetingPlug

## Overview

**Creative North Star: "The Printed Results Sheet"**

The page is a single offset-printed sheet a sales leader could pin above a desk. The proof is the picture: campaign numerals set in a compressed heavy grotesk sit in ruled rows, and everything else is a table, a rail, or a list held by hairlines on a 12-column grid. Nothing floats, glows, or rounds off. Warmth comes from scale, the founder's face, and one saturated field near the end, never from decoration.

The system is calm and exact. It states results and lets them carry the claim, so there is no urgency device, no gradient, no shadow, no illustration. Density alternates between tight ruled lists and wide, quiet margins. The page is read in daylight at a desk, so the ground is a cool newsprint gray-white and the ink is near-black.

**Key Characteristics:**
- Rules, not boxes: structure is drawn with 1px and 4px ink lines, never cards.
- One heavy compressed display voice; everything else is a plain humanist grotesk.
- Coral (#f1502f) is a signal used only for the primary call to action, the money figure, the tick squares and the closing field.
- Square corners everywhere; zero elevation.
- Motion is one grammar: hairlines that draw themselves in, with numerals counting up beside them.

## Colors

A two-ink print palette on newsprint with a single signal color.

### Primary
- **Signal Coral** (#f1502f): the brand color and the only chromatic value. Fills the primary button, the tick squares, the closing section, and the large money figures ($180,000, $90,000). It appears as text only at 44px and above, where it clears 3:1.

### Neutral
- **Newsprint** (#ededea): the page ground. Cool, slightly gray, deliberately not cream.
- **Sheet White** (#ffffff): case-study screenshots and the founder photo sit on it; service rows lift to it on hover.
- **Ink** (#16130f): all text, every rule, the dark button, the footer rule.
- **Ink Soft** (#55554f): secondary paragraphs and captions (about 6.4:1 on newsprint).

### Named Rules
**The One Signal Rule.** Coral is the only color. If a second hue is needed, the design is wrong.
**The Ink-On-Coral Rule.** Text on a coral field is always ink (about 4.9:1). White on coral fails contrast and is never used.

## Typography

**Display Font:** Archivo (variable, width axis), fallback Helvetica Neue / Arial
**Body Font:** Hanken Grotesk, fallback Helvetica Neue / Arial

**Character:** Archivo at width 84 and weight 800 reads as a poster face: compressed, heavy, tightly tracked. Hanken stays out of its way as a neutral working sans.

### Hierarchy
- **Display** (800, clamp(46px, 7.3vw, 96px), 0.94): the hero headline and the closing headline. Tracking -0.035em. Capped at 6rem.
- **Headline** (800, clamp(32px, 3.8vw, 54px), 1.0): section headings, balanced wrap.
- **Title** (800, 28px, 1.1): service names.
- **Figures** (800, clamp(56px, 6.6vw, 96px) in the hero, clamp(44px, 4.6vw, 68px) in case studies, 0.92): campaign numerals with tabular lining numerals.
- **Body** (400, 18px, 1.55): paragraphs; measure held at about 46-56ch.
- **Label** (700, 15px, 0.06em, uppercase): side labels, footer column heads, the hero caption.

### Named Rules
**The Figures Rule.** Numerals are always tabular and lining, and always set in the display face. A stat is never body text.

## Layout

A 12-column grid, 24px column gap, container capped at 1400px with 32px gutters (20px under 820px). Every content section opens with a 4px ink rule and places its label in columns 1-2 and its content in columns 3-12; an unlabeled section takes the full width. Inside, a 10-column split puts a sticky heading in columns 1-4 and a ruled list in columns 5-10. The hero puts copy in columns 1-7 and the proof stack in columns 9-12. Below 820px the grid collapses to one column and the label turns vertical along the left edge; below 980px the hero stacks. Section rhythm is 72px above the heading and 120px below the content.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is conveyed by rules (1px between rows, 4px opening each section), by the white lift of a hovered service row, and by a 5px coral outline that appears around a case-study screenshot on hover or focus.

### Named Rules
**The Flat Sheet Rule.** Surfaces never lift, blur, or glow. State changes are color swaps or an outline.

## Shapes

Every corner is square (0px): buttons, icon links, tick squares, image frames. Images carry a 1px ink border. The only recurring geometry is the horizontal rule and the 32px square tick.

## Components

### Buttons
- **Shape:** square, 2px ink border, 18px 30px padding, 17px bold text.
- **Primary (coral):** coral fill, ink text. Hover inverts to ink fill with newsprint text.
- **Secondary (ink):** ink fill, newsprint text. Hover turns coral with ink text; on the coral closing field it turns newsprint instead.
- **Small:** the header's "Contact Us" uses 10px 20px padding at 15px.

### Ruled rows
- Lists are rows separated by 1px ink rules with a closing rule. Check rows carry a 32px coral square with a stroked ink tick (ink square with coral tick on the coral field). Service rows are title over description and turn sheet white on hover.

### Navigation
- Sticky newsprint bar with a 1px ink bottom rule. Links are 16px semibold and gain a 2px coral underline on hover. Below 840px only the logo, the LinkedIn link and the button remain.

### Proof stack (signature)
- Three ruled rows, each with a display numeral and a bold label at the right baseline. Rules draw in left to right in sequence and the numerals count up beside them; the last row is coral.

### Pipeline rail (signature)
- Five equal columns divided by 1px verticals under a 6px coral rule that draws across once. Each column has a step number and a display-face label; on narrow screens the columns become ruled rows.

### Case study rows
- A screenshot in a 1px ink frame beside a stack of figures; the whole row is a link.

### FAQ
- Ruled question rows with a stroked plus that turns 45 degrees; the answer height animates open and one item is open at a time.

## Do's and Don'ts

### Do:
- **Do** draw structure with rules: 1px between rows, 4px opening each section.
- **Do** set every campaign figure in the display face with tabular lining numerals.
- **Do** keep coral as the only color and use ink for any text placed on it.
- **Do** keep corners square and surfaces flat.
- **Do** limit motion to hairlines drawing in and numerals counting up; show final states under reduced motion.

### Don't:
- **Don't** add a gradient, shadow, glass, blur or rounded card.
- **Don't** introduce a second hue or use coral for small text.
- **Don't** put a label above a heading; section labels live in the side column.
- **Don't** use white text on coral.
- **Don't** set display type above 6rem.
