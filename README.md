# Rakshitha H P — Portfolio Website

A fast, accessible, fully responsive personal portfolio. No build step, no frameworks,
no external CDN calls — it works by opening `index.html` or by dropping the folder
straight onto GitHub Pages / Netlify / Vercel.

```
portfolio/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── img/              <- portrait (webp + png) and social preview (jpg)
│   ├── certificates/     <- hackathon / event / internship certificates
│   └── files/            <- resume PDF
└── README.md
```

## Configuration

Everything is already wired up in the `SITE` object at the top of
`assets/js/main.js`:

```js
var SITE = {
  email:    "rakshurakshitha182@gmail.com",
  github:   "https://github.com/Rakshu123-hp",
  linkedin: "https://www.linkedin.com/in/rakshitha-hp-25ab63300/",
  resume:   "assets/files/Rakshitha_HP_Resumee.pdf"
};
```

The resume PDF lives in `assets/files/`. If you ever replace it, keep the file
name in sync with `SITE.resume` — that one value drives both Download Resume
buttons.


## What's inside

- **Sticky nav** with scroll-spy (`aria-current`) and an accessible hamburger menu
  (`aria-expanded`, Escape to close, scrim, body scroll lock).
- **Smooth scrolling** that accounts for the sticky header, plus focus management
  so keyboard users land on the right section.
- **Scroll-reveal** via `IntersectionObserver`, staggered subtly.
- **Hero graphic** — an original inline SVG data-visualisation composition
  (area chart, bars, node graph). No stock photography, no external assets.
- **Contact form** — intentionally backend-free. On submit it validates the fields
  and opens the visitor's mail client with the message pre-filled. It never
  pretends to have sent anything.
- **Accessibility** — skip link, semantic landmarks, visible focus rings,
  44px minimum touch targets, WCAG AA contrast, full `prefers-reduced-motion`
  support.
- **SEO** — descriptive title/meta, Open Graph tags, JSON-LD `Person` schema
  containing only verified facts.
- **Print stylesheet** so the page prints cleanly.

## Content accuracy notes

- **SecurBank** copy is derived from the public README at
  `github.com/Rakshu123-hp/simswap`.
- **College Automation System** was removed from the site at Rakshitha's request;
  the repository is not publicly readable, so nothing was inferred beyond that.
- **Nyaya Sathi** is marked as the Major Project and visually featured. The source
  repository (`github.com/Vidhi0217/Nyay-Saathi`) is not publicly accessible, so the
  overview / problem / features / stack / role were deliberately left unwritten
  rather than invented. Replace the `.pending-note` paragraph inside
  `#nyayaDetail` in `index.html` once those details are supplied.

## Browser support

Evergreen Chrome, Edge, Firefox and Safari. Degrades gracefully without
`IntersectionObserver` (everything simply renders visible).
