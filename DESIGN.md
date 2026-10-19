---
name: Restaurante Ysconderijo
description: A dinner-only fusion restaurant's one-page site, laid out the way its kitchen plates.
colors:
  mesa: "#1A1617"
  mesa-raised: "#241E1F"
  luz: "#F3EFEB"
  luz-suave: "#B8ADAA"
  porcelana: "#F6F4F1"
  porcelana-rim: "#E9E4E0"
  porcelana-luz: "#FCFBF9"
  tinta: "#201B1C"
  tinta-suave: "#5F5658"
  bordo: "#5A2527"
  sobre-bordo: "#E2D3CF"
  sobre-bordo-suave: "#CDB7B1"
  cobre: "#C99580"
  acafrao: "#E2A93B"
  balsamico: "#3A1D1B"
  wasabi: "#A7C46B"
typography:
  display:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.6rem, 1.35rem + 4.6vw, 5.4rem)"
    fontWeight: 480
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.4rem, 1.5rem + 3.3vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bodoni Moda, Bodoni 72, Didot, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 560
    lineHeight: 1.3
    fontFeature: "\"lnum\" 1, \"tnum\" 1"
  body:
    fontFamily: "Ysabeau Office, Segoe UI, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 420
    lineHeight: 1.6
  label:
    fontFamily: "Ysabeau Office, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
  signature:
    fontFamily: "Alex Brush, cursive"
    fontSize: "1.95rem"
    fontWeight: 400
    lineHeight: 1
rounded:
  pill: "999px"
  frame: "28px"
  plate: "50%"
spacing:
  gutter: "clamp(16px, 5vw, 64px)"
  section: "clamp(72px, 10vw, 140px)"
  course: "clamp(56px, 7vw, 88px)"
  row: "18px"
components:
  button-reserve:
    backgroundColor: "{colors.porcelana}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
    height: "56px"
  button-reserve-hover:
    backgroundColor: "{colors.porcelana-luz}"
    textColor: "{colors.tinta}"
  button-call-outline:
    textColor: "{colors.luz}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  button-call-outline-hover:
    backgroundColor: "{colors.mesa-raised}"
  logo-capsule:
    backgroundColor: "{colors.bordo}"
    textColor: "{colors.cobre}"
    typography: "{typography.signature}"
    rounded: "{rounded.pill}"
    padding: "0 22px 0 12px"
    height: "52px"
  phone-bar:
    backgroundColor: "{colors.porcelana}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    height: "56px"
  step-number:
    backgroundColor: "{colors.acafrao}"
    textColor: "{colors.mesa}"
    rounded: "{rounded.plate}"
    size: "40px"
---

# Design System: Restaurante Ysconderijo

## Overview

**Creative North Star: "Empratamento"**

The page is plated the way the Ysconderijo kitchen plates. A night table runs the whole page as its ground; porcelain is where things are read; the logo's oxblood is the charger plate under it all and the field where a table gets booked. Composition sits on one central axis, like the centre line of a plate, with generous dark rim around every element. Ornament is limited to what a chef puts on a plate: graded dots of saffron sauce that lead the eye to the phone number, a single balsamic swoosh, and the copper hairline bands taken from the restaurant's own logo.

The surface alternates between two materials and never mixes them inside one block: dark table (opening, the house, footer), porcelain (the menu), oxblood (booking). Real photographs of the restaurant's food and room are the only pictures, each one framed as a plate: a round well or a capsule. One lit plate per screen; darkness is the space around it. Motion is a single authored moment, the plate being served, and everything else stays still.

The type speaks like a fine-dining menu: a Didone display with hairline contrast (the same fineness as the logo's gold lines), a calligraphic humanist text face, and the script of the logo for the name only.

**Key Characteristics:**
- One central axis; centred headings, left-aligned reading columns hung on it.
- Three materials by section: night table, porcelain, oxblood charger.
- Saffron dots graded large to small always lead to the booking phone.
- Copper three-line bands (from the logo) are the only rules between courses.
- Photos sit in round wells or the logo's capsule; nothing else is framed.
- Prices and hours in tabular lining figures.

## Colors

A dark, warm table with porcelain and the restaurant's own oxblood and copper; saffron and balsamic come from the sauce on the plate.

### Primary
- **Ysconderijo Oxblood** (`bordo`): sampled from the logo. The charger plate in the opening, the logo capsule, the booking section, and dish placeholders that still need a price on porcelain.

### Secondary
- **Logo Copper** (`cobre`): sampled from the logo's lines. The three-line bands, the charger's rings and rim name, footer labels, and the figures of the ratings sentence. Text on the table or on oxblood only (6.9:1 and 4.7:1); never on porcelain.

### Tertiary
- **Saffron Sauce** (`acafrao`): graded dots before every booking action, the step numbers, the status dot, today's row in the hours, focus rings and text selection on dark grounds.
- **Balsamic Swoosh** (`balsamico`): the one brush swoosh under the menu heading.
- **Wasabi** (`wasabi`): only the status dot when the restaurant is open right now.

### Neutral
- **Night Table** (`mesa`): the page ground, the opening, the house, the footer.
- **Lamplit Table** (`mesa-raised`): hover fill of controls on the table.
- **Candle White** (`luz`) and **Smoked Linen** (`luz-suave`): primary and secondary text on the table (8.2:1 for the secondary).
- **Porcelain** (`porcelana`), **Porcelain Rim** (`porcelana-rim`), **Glaze Highlight** (`porcelana-luz`): the menu ground, the plate rim and well shading, the hover of the booking pill.
- **Menu Ink** (`tinta`) and **Faded Menu Ink** (`tinta-suave`): dish names and descriptions on porcelain (6.5:1 for the faded ink).
- **Rosé Linen** (`sobre-bordo`) and **Dusty Rosé** (`sobre-bordo-suave`): secondary text on oxblood, and closed days in the hours table.

### Named Rules
**The Sauce Leads Rule.** Saffron appears as graded dots only where they lead somewhere: to the phone, to today, to the open state. It never decorates.

**The Three Materials Rule.** A block is table, porcelain or oxblood. Never a porcelain card on the table or an oxblood box on porcelain.

## Typography

**Display Font:** Bodoni Moda (with Didot, Georgia)
**Body Font:** Ysabeau Office (with Segoe UI, system-ui)
**Signature Font:** Alex Brush, for the restaurant's name only

**Character:** a hairline Didone set like a printed menu, beside a calligraphic sans that keeps the hand of the logo's script without imitating it. All three are self-hosted (`public/fontes/`).

### Hierarchy
- **Display** (480, clamp 2.6rem to 5.4rem, 1.02): the opening headline only, balanced, two lines on desktop.
- **Headline** (500, clamp 2.4rem to 4.4rem, 1.04): section titles (the menu, the house, booking).
- **Title** (560, 1.4rem, 1.3, tabular lining figures): dish names and prices; course names step up to 1.75–2.4rem.
- **Body** (420, 1.125rem, 1.6): descriptions and running text, measure held near 34–38em.
- **Label** (700, 0.875rem, 0.08em, uppercase): footer column labels only.

### Named Rules
**The Menu Card Rule.** Every dish keeps three fixed tiers in the same order in every language: name (Title), what is on the plate (Body, faded ink), price (Title, right column).

**The Name Is Script Rule.** Alex Brush sets "Ysconderijo" and nothing else.

## Layout

A single central axis for the whole page. Content widths: 980px for the opening copy, 760px for the menu column, 820px for the house introduction, 1040px for quotes and booking details, 1200px for the top bar and footer. Side gutters are fluid (16px to 64px). Sections breathe with fluid vertical padding (72px to 140px, more above headings than below).

The opening is a sticky stage on capable browsers: the headline block scrolls away, then the place setting holds the screen while it settles and its porcelain opens until it fills the viewport, handing over to the menu on the same porcelain. Without JavaScript or with reduced motion, the plate simply sits under the headline.

Responsive behavior: section links disappear below 900px, the header call button below 520px (a bottom phone bar takes over), the quotes leave the axis line and stack below 900px, booking details go from three columns (1024px) to two (700px) to one, and the tuna tataki well moves from the right margin (1360px and up) to above the fish course.

## Elevation & Depth

Flat by default: depth comes from material changes (table, porcelain, oxblood), not from shadows. The only shadows are physical: a plate resting on a surface, and the phone bar floating over content.

### Shadow Vocabulary
- **Plate on the table** (`filter: drop-shadow(0 34px 40px rgba(0, 0, 0, .55))`): the charger in the opening.
- **Plate on porcelain** (`box-shadow: 0 0 0 10px #E9E4E0, 0 18px 30px -12px rgba(32, 27, 28, .35)`): the round photo well in the menu; the first layer is its porcelain rim.
- **Floating bar** (`box-shadow: 0 14px 30px -10px rgba(0, 0, 0, .6)`): the mobile phone bar.

### Named Rules
**The Only Shadow Is a Plate Rule.** If it is not a plate resting on something, it has no shadow.

## Shapes

Circles are plates: the charger, the porcelain, the photo wells, the step numbers and every dot. Pills (999px) for every pressable control and for the logo capsule. The room photograph sits in the logo's capsule on wide screens and in a 28px rounded frame on phones. The booking section's top edge is a wide elliptical arc, the rim of a charger, traced inside by three copper hairlines. Rules are hairlines (1px) in three-line bands, never single heavy borders.

## Components

### Buttons
- **Booking pill:** porcelain pill, 56px tall, menu ink label in semibold Ysabeau with the number in Bodoni. Always preceded by four graded saffron dots (15, 11, 7.5 and 5px). On hover the porcelain brightens and the dots swell in sequence; pressed, the pill drops 1px.
- **Call outline (header):** 44px pill, hairline border on the table, phone icon and "Reservar"; border turns copper on hover. Hidden on phones.
- **Text links:** underlined with a copper or saffron underline, 0.22em offset; underline thickens on hover.

### Navigation
- **Top bar:** logo capsule left; section links in Smoked Linen turning Candle White on hover; language links PT EN ES as 44px targets with the current one in saffron; call outline right.
- **Language links** repeat in the footer.

### Logo capsule
Oxblood pill with an inset copper double rule, two eight-petal copper flowers and the name in Alex Brush. A redraw of the restaurant's Facebook logo until the original artwork arrives.

### The place setting (signature)
Oxblood charger (SVG) with three concentric copper rings and the name set on its rim, a porcelain plate with a soft well, and a food photograph in the round well. On scroll it turns from -7° to 0° and scales from 0.95 to 1 (first 40% of the stage), then a porcelain disc grows from the plate's edge to cover the screen (from 30% to 100% of the stage). Eased with a cubic ease-out computed in `site.js`.

### Menu rows
Grid of name and price on the first line, description under the name; hairline separators in faded ink; prices right-aligned in tabular figures. A price still to be confirmed shows a bracketed oxblood placeholder.

### Live status and hours
A saffron dot (wasabi when open) and a sentence computed in Lisbon time. In the hours table, today's row gets a saffron wash and a small "hoje / today / hoy" tag.

## Do's and Don'ts

### Do:
- **Do** lead every booking action with the graded saffron dots, and keep the phone number in Bodoni tabular figures.
- **Do** keep each block in one material: table, porcelain or oxblood.
- **Do** frame photographs as plates (round well) or in the logo capsule, one per screen.
- **Do** use copper three-line bands for rules between courses and around oxblood edges.
- **Do** keep text contrast at AA on every material (copper never on porcelain).

### Don't:
- **Don't** add cards, tiles or boxed containers; the menu is rows on porcelain.
- **Don't** add a second swoosh or scatter sauce dots as decoration.
- **Don't** add shadows that are not a plate resting on something.
- **Don't** use Alex Brush for anything but the restaurant's name.
- **Don't** add a second scroll-driven effect or any infinite animation; the served plate is the only motion moment.
