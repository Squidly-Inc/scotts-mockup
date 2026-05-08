# Scott's Seafood — Website Mockup

A modern, mobile-first redesign of [scottsseafoodsj.com](https://www.scottsseafoodsj.com), built as a "billboard" replacement that reuses the existing site's copy, video, and brand identity but in a clean, current structure.

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

## Pages

- `/` — Home (with existing video hero)
- `/menu` — Menu landing
- `/reservations` — OpenTable widget
- `/private-dining` — Consolidated single-page rooms with carousels
- `/gift-cards` — Toast gift card link
- `/contact` — Address, hours, embedded map

## Run locally

```sh
npm install
npm run dev
```

Opens at http://localhost:4321

## Build

```sh
npm run build
```

Outputs to `./dist/`.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push this code.
2. In the repo's **Settings → Pages**, set Source to **GitHub Actions**.
3. Edit `astro.config.mjs` (or set env vars) so `site` and `base` match your repo URL:
   - For a project repo: `site: 'https://USERNAME.github.io'`, `base: '/REPO-NAME'`
   - For a user repo (`USERNAME.github.io`): `site: 'https://USERNAME.github.io'`, `base: '/'`
4. Push to `main` — the Actions workflow at `.github/workflows/deploy.yml` builds and deploys automatically.

## Assets

Images and the hero video are served from `static.wixstatic.com` and `video.wixstatic.com` to keep the repo lightweight and ensure fidelity to the existing site's assets. For production, these should be migrated and self-hosted.
