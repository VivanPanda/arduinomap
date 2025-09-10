# Repository Guidelines

## Project Structure & Module Organization
- `docs/` – Curriculum content organized by week (e.g., `docs/week-2/understanding-pwm.md`). Markdown uses frontmatter and kebab‑case filenames.
- `src/` – Site code (`css/`, `pages/`, `components/`). Keep UI tweaks small and self‑contained.
- `static/` – Static assets served at root (e.g., `static/img/logo.png`). You may also colocate small images next to a doc.
- `docusaurus.config.js`, `sidebars.js` – Site configuration and sidebar generation.
- `.github/workflows/` – CI for build and GitHub Pages deploy.

## Build, Test, and Development Commands
- `npm ci` – Install exact dependencies (Node ≥ 18).
- `npm start` – Local dev server with hot reload at `http://localhost:3000`.
- `npm run build` – Production build; fails on broken links (`onBrokenLinks: 'throw'`). Used by CI.
- `npm run serve` – Preview the built site from `build/`.
- Useful: `npm run clear` (cache), `npm run swizzle` (theme component override).

## Coding Style & Naming Conventions
- Markdown/Docs: frontmatter at top (`---`), H1 matches page title, concise sections, code fences with language hints (e.g., ```cpp, ```bash).
- Filenames: kebab‑case under `docs/week-x/` (e.g., `project-week-3.md`).
- Links/Images: prefer relative paths; store shared images in `static/img/` and reference as `/img/<name>.png` or local relative images near the doc.
- JS config: follow existing style (2‑space indent, single quotes). Keep config changes minimal and documented in PR.

## Testing Guidelines
- No unit tests. Validate content by:
  - Running `npm run build` to catch broken links/IDs.
  - Manually checking pages via `npm start` or `npm run serve` for images, code blocks, and navigation.
- Keep external links current; replace dead links or add alternatives.

## Commit & Pull Request Guidelines
- Commits: imperative, scoped summaries, e.g., `docs(week-2): clarify PWM intro` or `site: update navbar logo`.
- PRs: use `pull_request_template.md`. Include:
  - Because (why), This PR (what), linked Issue (`Closes #123`).
  - Title format `location: brief description` (e.g., `Week 3: add LDR lesson`).
  - Screenshots/GIFs for visual changes.
- Keep PRs focused and small; update related docs/links together.

## Security & Config Tips
- Do not commit secrets. Analytics IDs live in `docusaurus.config.js`.
- Deploys run from `main` to GitHub Pages via CI; verify builds pass locally before opening PRs.
