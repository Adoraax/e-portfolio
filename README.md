# e-portfolio

Personal portfolio site for **Daniel Sorouni** — Software Engineering student at UTS.

**Live:** https://adoraax.github.io/e-portfolio/

## Stack

- **React 18** + **React Router 7** (`HashRouter`, so deep links work on GitHub Pages)
- **Vite 6** for dev server and bundling
- **Sass** with CSS custom properties as design tokens
- **EmailJS** for the contact form, **React Leaflet** for the map

## Getting started

The app lives in `react-portfolio/`.

```bash
cd react-portfolio
npm install
npm run dev
```

The dev server runs at http://localhost:3000/e-portfolio/ (the `/e-portfolio/`
base path matches the GitHub Pages URL, so local and production behave the same).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Build, then publish `dist/` to the `gh-pages` branch |

## Deploying

```bash
cd react-portfolio
npm run deploy
```

This builds and pushes to the `gh-pages` branch, which GitHub Pages serves.
Source stays on `master`.

## Project layout

```
react-portfolio/
├── index.html              # HTML shell: meta tags, Open Graph, JSON-LD
├── vite.config.js          # base path + build config
├── public/                 # copied verbatim into the build
│   ├── Daniel_Sorouni_Resume.pdf
│   ├── portfolio/          # project cover images
│   └── og-image.png        # social share card
└── src/
    ├── main.jsx            # entry point
    ├── App.jsx             # routes
    ├── styles/_tokens.scss # colours, type scale, spacing
    ├── data/               # resume.json + portfolio.json drive the content
    ├── hooks/
    └── components/
```

## Updating content

Most changes don't need any JSX edits:

- **Résumé** — edit `src/data/resume.json` (experience, education, skills)
- **Projects** — edit `src/data/portfolio.json`; cover images go in `public/portfolio/`
- **Résumé PDF** — replace `public/Daniel_Sorouni_Resume.pdf`, keeping the filename
  so existing links stay valid

## Accessibility

The site targets WCAG 2.2 AA: all text and UI colours meet AA contrast, every
interactive element is keyboard operable with a visible focus ring, there's a
skip link to main content, and animations are disabled under
`prefers-reduced-motion`.
