# Restaurante Ysconderijo — website

One-page website for **Restaurante Ysconderijo**, a dinner-only fusion restaurant in São Brás de Alportel, Algarve, Portugal.
Built by [Digital Montra](https://digitalmontra.pt/) as a **proposal for the owner** (free draft): the restaurant has no website today, its Google Maps listing links to Tripadvisor.

Plain static HTML and CSS with one small script: no build step, no dependencies. Fonts are self-hosted (`public/fontes/`), so there are no requests to Google. No maps, videos or trackers are embedded, so the site sets no cookies and needs no cookie banner.

## Structure

```
public/               What gets published (GitHub Pages now, Netlify at launch)
  index.html          Portuguese version (main)
  en/index.html       English version
  es/index.html       Spanish version
  estilo.css          Styles shared by the three versions
  site.js             Opening status in Lisbon time, today's row in the hours,
                      the phone bar on mobile and the "plate being served" effect
  fontes/             Self-hosted fonts and their OFL licences
  img/                Photos (WebP in several widths + JPG fallback)
  404.html            Error page, in three languages
  favicon.svg         Browser tab icon (the logo's flower on oxblood)
  robots.txt          Allows crawling (the draft is kept out of search by noindex)
  _headers            Netlify headers: caching, security, draft noindex
.github/workflows/    static.yml: publishes public/ to GitHub Pages on every push to main
netlify.toml          Netlify config: which folder gets published
PRODUCT.md            Product brief: audience, purpose, facts, evidence, open questions
DESIGN.md             Design system (tokens, rules, components)
fotos-originais/      Source photos as downloaded (local only, not in Git)
.impeccable/          Design-process files: direction contract, design.json
.claude/              Local preview server config
```

## Run locally

With Python installed, from this folder:

```bash
python -m http.server 5174 -d public
```

Then open <http://localhost:5174> (Portuguese), <http://localhost:5174/en/> (English) or <http://localhost:5174/es/> (Spanish).

## Publishing

There is no build: whatever host serves the `public/` folder as is. Code: <https://github.com/pviegasmendes/Ysconderijo> (public repository, branch `main`).

### Now: draft for the owner on GitHub Pages

<https://pviegasmendes.github.io/Ysconderijo/> (EN `/en/`, ES `/es/`), the same setup as barberia-diogo.

- `.github/workflows/static.yml` publishes `public/` on every push to `main`.
- Pages has to be switched on once in the repository: *Settings → Pages → Build and deployment → Source: GitHub Actions*.
- GitHub Pages ignores `_headers` and `netlify.toml`. The draft stays out of search engines through the `robots` meta in the three pages.
- `404.html` sets its own base URL, so it works under `/Ysconderijo/` on Pages and at the root on Netlify.

### At launch: Netlify

The Netlify site `ysconderijo-rascunho` already exists on the Digital Montra account (<https://app.netlify.com/projects/ysconderijo-rascunho>) and this folder is linked to it (`.netlify/state.json`, local, not in Git). On 19 October 2026 the account had used up the Free plan's monthly credits (300), which blocks new deploys until the credits renew on **3 November 2026** or more are added. Then either:

- `npx netlify-cli deploy --prod --dir public`, or
- connect the GitHub repository in Netlify (*Project configuration → Build & deploy → Link repository*) for automatic deploys; `netlify.toml` already says to publish `public/`.

HTML, `estilo.css` and `site.js` are revalidated on every visit. Photos and icon are cached for 7 days (use a new filename to force a change); fonts for a year.

### When the owner approves

- Remove the draft mode: the `<meta name="robots" content="noindex">` line (and its comment) in the three pages, and the `X-Robots-Tag: noindex` line in `public/_headers`.
- Point `og:url` and `og:image` (now on the GitHub Pages draft) at the final domain.
- Add `<link rel="canonical">` with the full URL of each version, and full URLs in the `hreflang` links (they are relative for now).
- Add `url` and `image` to the structured-data block (`application/ld+json`).
- Add a `sitemap.xml` and its `Sitemap:` line in `robots.txt`.

## Design

The direction is **Empratamento** (plating): the page is laid out the way the kitchen plates, because presentation is what guests praise most. Chosen by Pablo from the impeccable decision round; the full contract is in `.impeccable/surfaces/public-index-html.md`.

- **The table and the plate:** the night table (`--mesa`) is the ground, porcelain (`--porcelana`) is where things are read, the logo's oxblood (`--bordo`) is the charger plate and the booking block, its copper hairlines (`--cobre`) are the structure between sections, saffron (`--acafrao`) is the sauce: graded dots that lead to the phone, and the live status dot.
- **Signature moment:** on scroll, the place setting turns and settles, and its porcelain opens into the menu. It is driven by `site.js` (CSS variables `--e1`, `--e2`) and switched off for visitors who ask for reduced motion, and when JavaScript is off: then the plate simply sits under the opening text.
- **Typography:** *Bodoni Moda* for headings, dish names and prices; *Ysabeau Office* for text; *Alex Brush* for the name in the logo.
- **Logo:** no original file was supplied. The capsule in the header and footer is a redraw of the Facebook logo (oxblood capsule, copper script, two flowers). Replace it with the original artwork when the owner provides it.

## Editing content

Every content change must be made in **all three versions** (`public/index.html`, `public/en/index.html`, `public/es/index.html`).

- **Menu:** section `id="carta"`. Each dish is a `.prato-linha` with name, price and description. Two prices are placeholders, `[preço]` / `[price]` / `[precio]` (duck breast and chicken ballotine): they were not legible on the menu photo.
- **Opening hours:** change them in three places on each page, plus the script:
  1. the hours table in `id="reservar"` (each row's `data-dia` is the day, 0 = Sunday … 6 = Saturday, used to light up today's row);
  2. the opening text in the first screen and in the footer;
  3. the structured data (`openingHoursSpecification`) in the `<head>`.
  Then update the `HORARIO` object at the top of `public/site.js`, which drives the "Aberto agora" / "Open now" / "Abierto ahora" status (always in Lisbon time). Holiday closures are not handled by the script.
- **Phones:** booking number 967 139 381 (mobile), landline 289 849 520. Search for `967139381` and `289849520` in the three files if they change (they also appear in the structured data).
- **Ratings and review counts:** written by hand ("4,7 … 423", "4,6 … 618", "n.º 2 de 56"); refresh them from time to time.
- **Photos:** each photo exists as WebP in several widths plus a JPG fallback. To replace one, keep the same names; the widths are generated with the `image-converter` skill (`--widths 480 800 1200` for the dish, `640 1024 1600` for the room, `480 720` for the tataki).

## Data sources

Collected on 19 October 2026 from:

- **Google Maps:** address, landline, hours (Monday to Friday 19:00–23:30), rating 4.7 from 423 reviews, accessibility, Spanish reviews quoted on `/es/`.
- **Tripadvisor (listing managed by the restaurant):** mobile number, cuisines, features (cash only, outdoor tables, high chairs, gift vouchers, Wi-Fi, vegetarian/vegan/gluten-free options), rating 4.6 from 618 reviews and no. 2 of 56 in São Brás, the owner's note "abrimos só para jantares, não aceitamos pagamento com cartão", the reviews quoted on `/` and `/en/`, a photo of the printed menu (main courses and prices) and the three photos.
- **Facebook page of the restaurant:** logo, email, "restaurante português cozinha de fusão", summer closure dates.

## To confirm with the owner

- [ ] Permission to use the three photos on the site, or better, the restaurant's own photos to replace them (`fotos-originais/` keeps the downloaded files: they come from the cover of the Tripadvisor listing).
- [ ] Current menu and prices, the two missing prices, and whether to add starters, desserts and cocktails.
- [ ] Which phone takes bookings (the site shows the mobile first and the landline second).
- [ ] Hours and the summer holiday dates.
- [ ] Original logo file.
- [ ] Final domain (see "When the owner approves").
