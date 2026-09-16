# Shoaib Khan Portfolio

A modern, responsive game developer portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Update content

- Project metadata, game links, and contact placeholders live in `src/data/portfolioData.js`.
- Local preview images and videos are imported from the existing `Assets/` folder so they are bundled during build.

## Free hosting

The easiest free options for this portfolio are:

1. Vercel: import the repository, framework preset `Vite`, deploy.
2. Netlify: connect the repository, build command `npm run build`, publish directory `dist`.

Because this site is a single-page portfolio with section anchors instead of client-side routes, it works on either platform without extra routing configuration.

## Embedded game note

The iframe previews point to external Gamezop builds. On plain `http://localhost` those embeds can show SDK errors because they expect a secure `https://` origin. That is why the portfolio is ready for Vercel or Netlify deployment out of the box: once hosted over HTTPS, the interactive previews are the correct environment to validate.
## SEO and themes

`npm run build` builds the browser assets, renders the React app to static HTML,
and generates Person, ProfilePage, WebSite and project ItemList JSON-LD from the
portfolio data. Deploy the generated `dist` directory; `npm run dev` remains a
client-rendered development server. Use `npm run preview` to inspect SEO output.

The canonical origin is `https://shoaibkhan-dev.vercel.app/`. If the domain changes,
update `index.html`, `src/entry-server.jsx`, `public/sitemap.xml`, `public/robots.txt`,
and the social preview. Keep sitemap dates tied to actual content changes. Section
anchors are not separate pages and must not be added as sitemap URLs.

Fresh visits use light mode. A dark system preference highlights the theme button
without switching themes. Explicit user choices persist under the versioned
`shoaib_portfolio_theme_v2` key; inaccessible browser storage is supported.

The share image is `public/social-preview.png` (1200 × 630). Project play counts
are reported snapshots, not live counters. After deployment, submit the sitemap
and inspect the homepage in Google Search Console; local validation cannot confirm
indexing or ranking.

Browser regression checks: `node scripts/verify.cjs` requires Playwright and an
installed Edge browser. To use a separately installed Playwright package, set
`PLAYWRIGHT_MODULE_PATH` to its module directory. The checks cover static HTML,
structured data asset URLs, both system themes, saved manual choices, runtime
system-theme changes, blocked storage, mobile overflow, and hydration errors.

SEO implementation reference: [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).
