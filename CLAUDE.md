# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: start the Vite dev server with HMR
- `npm run build`: production build to `dist/`
- `npm run preview`: serve the built `dist/` locally
- `npm run lint`: run ESLint on the whole project

No test runner is configured yet, so there is no test command.

## Stack and state of the project

- React 19 + Vite 8, plain JavaScript (`.jsx`), no TypeScript. React Compiler is not enabled.
- The project is a freshly cleared Vite React template: `src/App.jsx` renders a placeholder and `src/App.css` is empty. The shopping cart app has not been built yet, so there is no existing architecture to follow.
- Goal (The Odin Project "Shopping Cart"): Home, Shop and Cart pages behind a navbar shown on every page (react-router). The navbar's cart link shows a live item count. Shop products are fetched from FakeStore API, and each product card has a quantity input, +/- buttons and "Add To Cart". The Cart page lets you change quantities and remove items, with no checkout. Test with React Testing Library without testing react-router itself. Deploy as an SPA (Netlify `_redirects`, Vercel `vercel.json` rewrites, or Cloudflare Pages).
- Entry point: `index.html` → `src/main.jsx`, which mounts `<App />` inside `<StrictMode>`. StrictMode double-invokes effects and renders in dev, so expect that when debugging.
- Styling: global styles live in `src/index.css` (imported in `main.jsx`); component styles are plain CSS files imported per component (e.g. `App.css`).
- There are no routing, state-management, or data-fetching libraries; the only runtime dependencies are `react` and `react-dom`.

## Lint rules worth knowing

`eslint.config.js` (flat config) enables `eslint-plugin-react-hooks` (recommended) and `eslint-plugin-react-refresh`. Practical consequences:
- Hook rules are enforced (rules of hooks, exhaustive deps, and the newer React Compiler–style checks in react-hooks v7).
- react-refresh warns when a component file also exports non-components, so keep component modules exporting components only.
