# Portfolio

A single-page developer portfolio that builds to plain HTML/CSS/JS — no server, no runtime
dependencies. Every word on the page comes from one file, so keeping it up to date doesn't mean
touching components.

- **Framework:** Next.js 16 (App Router + Turbopack) with `output: "export"`
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Fonts:** Inter + JetBrains Mono via `next/font/google`
- **Linting:** ESLint (`eslint-config-next`, core-web-vitals + TypeScript)

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script              | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Dev server with fast refresh.                                       |
| `npm run build`     | Static export — writes the whole site to `out/`.                    |
| `npm run preview`   | Serves the exported `out/` folder locally (via `npx serve`).         |
| `npm run lint`      | ESLint over the project.                                            |
| `npm run typecheck` | TypeScript check without emitting files.                            |

`next start` is intentionally not wired up: with `output: "export"` there is no server build to
start. Use `npm run preview` to check the real static output.

## Editing content

All copy, links, and lists live in **`src/data/portfolio.ts`**:

| Export        | Drives                                                                    |
| ------------- | ------------------------------------------------------------------------- |
| `siteConfig`  | Published site URL, used by metadata, `sitemap.xml`, and `robots.txt`.     |
| `navLinks`    | Top navigation and footer links.                                          |
| `hero`        | Name, title, tagline, intro, and the two hero buttons.                     |
| `about`       | Bio paragraphs, degree, year level, career goal, interests, photo.         |
| `projects`    | Project cards, including the expanded problem/solution details.            |
| `skillGroups` | The skill columns.                                                        |
| `processSteps`| The numbered "How I Work" steps.                                          |
| `contact`     | The email button, contact cards, and footer name.                          |

Components in `src/components/` read that data and only care about layout.

## Placeholders to replace before publishing

The committed data uses obvious placeholders. Search for `yourusername` / `your.email` and swap in
real values:

1. `siteConfig.url` — your live origin, e.g. `https://yourusername.github.io`. A GitHub Pages
   *project* site is served from `/<repo-name>`; the deploy workflow passes that prefix in
   separately (see [Deploying](#deploying)).
2. `hero.secondaryCta.href` — your GitHub profile.
3. `projects[].github` / `projects[].demo` — real repository and demo URLs (both optional; the
   buttons only render when present).
4. `contact.email` plus the `contact.links` entries — email, GitHub, LinkedIn, portfolio, Discord.
5. `about.photo` — drop a portrait in `public/` and set e.g. `photo: "/profile.jpg"`; leave it as
   `""` to keep the initials placeholder.
6. `src/app/favicon.ico` — replace with your own icon.
7. Component chrome that isn't in the data file: the terminal lines in `src/components/Hero.tsx` and
   the monogram (`about.initials`) shown in `src/components/Nav.tsx`.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata (title/OG/Twitter/canonical), <html> shell
│  ├─ page.tsx          # section order for the single page
│  ├─ not-found.tsx     # styled 404 (exported as 404.html)
│  ├─ robots.ts         # /robots.txt
│  ├─ sitemap.ts        # /sitemap.xml
│  ├─ globals.css       # Tailwind import + theme tokens
│  └─ favicon.ico
├─ components/
│  ├─ Nav.tsx           # fixed header, scroll spy, mobile menu
│  ├─ Hero.tsx          # name, CTAs, terminal card
│  ├─ About.tsx         # bio + optional portrait
│  ├─ Projects.tsx / ProjectCard.tsx
│  ├─ Skills.tsx / Process.tsx
│  ├─ Contact.tsx / Footer.tsx
│  ├─ Section.tsx / SectionHeading.tsx
│  └─ icons.tsx         # inline SVG icons (no icon dependency)
├─ data/portfolio.ts    # <- all content lives here
└─ lib/site.ts          # base-path helpers: basePath, siteUrl, asset()
```

## Deploying

The build is a static export, so any static host works. `next.config.ts` reads
`NEXT_PUBLIC_BASE_PATH` and applies it as `basePath` — the value is inlined into the client bundle
at build time, which is why it is an environment variable instead of a hardcoded config value.

### GitHub Pages (workflow included)

`.github/workflows/deploy.yml` builds and publishes the site with GitHub's own Pages actions.

1. Push this repository to GitHub (the workflow triggers on `master`; update the branch name in the
   workflow if yours differs).
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Set `siteConfig.url` in `src/data/portfolio.ts` to your real origin, then push.

`actions/configure-pages` reports the prefix your site is served from — `/<repo-name>` for project
sites, empty for `<user>.github.io` — and the workflow passes it to the build as
`NEXT_PUBLIC_BASE_PATH`. Links, `_next/*` assets, and the sitemap therefore resolve correctly either
way.

To check a sub-path build locally:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/my-repo"; npm run build; npm run preview
```

### Other hosts

- **Vercel / Netlify:** import the repository and deploy. No base path is needed, so leave
  `NEXT_PUBLIC_BASE_PATH` unset.
- **Manual / any web server:** run `npm run build` and upload the contents of `out/`. The included
  `public/.nojekyll` keeps GitHub Pages-style hosts from skipping the `_next/` folder if you publish
  from a branch instead of the Actions artifact.

## Notes

- `next/image` optimization needs a server, so `images.unoptimized` is enabled and images are plain
  `<img>` tags. Anything you reference from `public/` should go through `asset()` in
  `src/lib/site.ts` so it keeps working when the site is served from a sub-path.
- `npm run build` typechecks as part of the build, so a green build means the data file still
  matches its types.
- The page is prerendered at build time, so the footer year is baked in at build time.

