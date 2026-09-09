# Sreekanth T — Portfolio

Personal portfolio site built with Angular 21, showcasing experience, AI projects, and skills.
Live at **[sreekantht123.github.io](https://sreekantht123.github.io/)**.

## Stack

- **Angular 21** — standalone components, signals, zoneless-friendly patterns
- **Tailwind CSS 4** — utility-first styling
- **Static Site Generation (SSG)** — prerendered at build time via `@angular/ssr`, deployed as pure static files (no server runtime)
- **Vitest** — unit testing
- **GitHub Actions** — CI/CD, auto-deploys to GitHub Pages on every push to `main`

## Architecture

- `core/data` — all portfolio content (profile, experience, projects, skills) lives in one typed data file, kept separate from presentation
- `core/services/active-section.service.ts` — scroll-position-based nav highlighting (not IntersectionObserver — see commit history for why)
- `shared/directives/reveal-on-scroll.directive.ts` — scroll-triggered fade-in, SSR-safe via `afterNextRender`
- `layout/sidebar` — sticky desktop sidebar / stacked mobile header
- `sections/*` — one standalone component per content section

## Development

```bash
npm install
npm start          # dev server at http://localhost:4200
npm test           # unit tests (Vitest)
npm run build      # production build with SSG prerendering -> dist/portfolio-app/browser
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs tests, builds with prerendering,
and publishes `dist/portfolio-app/browser` to GitHub Pages. No manual deploy step required.
