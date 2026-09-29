# NAFIA Surgical Goves

A responsive React/Vite website for NAFIA Surgical Mart. The public homepage is pre-rendered during production builds so its main content is present in the delivered HTML, then hydrated for interactive product photos, size selection, FAQs and quotation helpers.

## Requirements

- Node.js 20.19 or newer (below 23)
- npm 10.9.2 (or a compatible npm 10 release)

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local development URL. The development server listens on port 3000.

## Create and preview a production build

```bash
npm run build
npm run preview
```

The deployable static site is written to `dist/`. Deploy that directory to a static host such as Netlify, Vercel, Cloudflare Pages or a configured cPanel web root.

## Project layout

- `src/App.jsx` — page sections, product gallery, product-size selection, FAQ and WhatsApp quotation form.
- `src/styles.css` — responsive design system, accessible states and reduced-motion-aware animation.
- `src/main.jsx` — React hydration entry point.
- `scripts/prerender.mjs` — embeds homepage content into the production HTML.
- `public/assets/reference/` — supplied packaging/product references.
- `public/assets/reference/optimized/` — responsive-page WebP copies used by the gallery; original supplied PNGs are retained.
- `public/manus-routes.json` — homepage route declaration.

## Contact and content

The provided phone, email and address are maintained near the top of `src/App.jsx`. The public location/map and all phone/WhatsApp links use these details. The quotation form opens WhatsApp with an editable draft; visitors still review and send it themselves. No customer information is submitted to this website.

Packaging photos and claims are treated as supplied references, not independent verification. Customers should confirm current stock, actual packaging, the quotation and any area-specific delivery or collection arrangement directly with NAFIA before travelling or ordering.
