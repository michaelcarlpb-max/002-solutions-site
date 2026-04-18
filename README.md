# 002 Solutions — Marketing Site

Brochure / lead-gen site for **002 Solutions** (a DBA of MC Pickleball Ventures Inc.), built with Astro, Tailwind CSS, and TypeScript. Deployed as a static site to Cloudflare Pages.

Production URL: <https://002solutions.com>

## Stack

- [Astro 4](https://astro.build/) (static output)
- [Tailwind CSS](https://tailwindcss.com/) via `@astrojs/tailwind`
- TypeScript (strict)
- [Web3Forms](https://web3forms.com/) for the contact form (no server required)
- [`@fontsource`](https://fontsource.org/) self-hosted fonts — Space Grotesk, Inter, JetBrains Mono

## Local development

```bash
pnpm install
pnpm dev
```

Dev server runs on <http://localhost:4321>.

### Environment variables

Copy `.env.example` to `.env` and add your Web3Forms access key:

```bash
cp .env.example .env
```

```
PUBLIC_WEB3FORMS_KEY=your-real-access-key-here
```

Get a key at <https://web3forms.com/> by entering your destination email address (`michael.carlpb@gmail.com`). The free tier is plenty for this site.

> The `PUBLIC_` prefix is required — Astro only exposes `PUBLIC_*` env vars to the client, and the contact form submits from the browser directly to Web3Forms.

## Build

```bash
pnpm build     # outputs to dist/
pnpm preview   # serves dist/ locally for a final check
```

Target: Lighthouse 95+ on all four scores. Only `/contact` ships client-side JS.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages, **Create application → Pages → Connect to Git** and select the repo.
3. Configure the build:
   - **Framework preset:** Astro
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
   - **Node version:** 20 or later (set `NODE_VERSION=20` under Environment variables if needed)
4. Add the environment variable in **Settings → Environment variables**:
   - `PUBLIC_WEB3FORMS_KEY` → your Web3Forms access key (set for both Production and Preview)
5. Deploy. Then add the custom domain `002solutions.com` under **Custom domains**.

## Project structure

```
public/          # static assets (logo, favicon, robots.txt)
src/
  components/    # Astro components (Nav, Footer, Hero, ServiceCard, ContactForm, SectionHeading)
  layouts/       # BaseLayout.astro — <head>, nav, footer
  pages/         # index, services, about, contact, thanks
  styles/        # global.css (Tailwind entrypoint + component utilities)
astro.config.mjs
tailwind.config.mjs
```

## Editing content

- **Copy** lives inline in `src/pages/*.astro` — no CMS.
- **Service definitions** are arrays at the top of `src/pages/index.astro` and `src/pages/services.astro`.
- **Brand colors / fonts** are in `tailwind.config.mjs`.
- **Logo** — replace `public/logo.png` and `public/logo-square.png` (square version is used as favicon and OG image).

## License

Proprietary — © MC Pickleball Ventures Inc.
