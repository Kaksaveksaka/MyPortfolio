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