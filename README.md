# Alikhan Yedilbayev — Portfolio

A responsive personal portfolio built around engineering explorations, honest project case studies, and an editorial portrait. Includes four dedicated project pages, dark/light themes, accessible native dialogs, a searchable keyboard command palette, and responsive CSS architecture diagrams.

## Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS 4, Lucide icons, CSS animation. Most content renders as server components; navigation and preferences use a small client component. No remote fonts or external tracking.

## Getting started

Requires Node.js 20.9 or newer (Node 24 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks and production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm run format` applies Prettier. Commit the supplied package lock; use `npm ci` in automated environments.

## Content editing

- `data/profile.ts`: name, email, university, location, GitHub, LinkedIn, and résumé URL. Empty optional URLs hide their buttons everywhere, including the command palette. Add your real URLs to enable them.
- `data/projects.ts`: typed project content, status, architecture, challenges, lessons, technology, future work, and optional repository/demo links. New project records receive a generated route at `/projects/[slug]`. Add an appropriate visualization in `components/project-diagram.tsx` for new slugs.
- `data/skills.ts`: skills and journey milestones.
- `app/page.tsx`: introductory, education, personal, and exploration copy.
- `public/alikhanyedilbayev.jpg`: supplied portrait. Replace this file to change the image and update its dimensions/alt text in `components/portfolio.tsx` if necessary.
- `app/globals.css`: light/dark design tokens, layout, responsive breakpoints, and reduced-motion behavior.

No repository URLs, employment, publications, or commercial results have been invented. Project maturity is explicitly labeled. Technology tags on conceptual projects describe architectural topics, not unsupported implementation claims.

## Deploy to Vercel

1. Push this directory to your own Git repository and import it into Vercel.
2. Select the Next.js preset; use `npm run build` and the default output settings.
3. Set `NEXT_PUBLIC_SITE_URL` to your final HTTPS origin (without a trailing slash), then deploy.
4. Add your actual GitHub, LinkedIn, and résumé URLs in `data/profile.ts` when available. A local résumé can live at `public/resume.pdf` with `resume: "/resume.pdf"`.

The canonical origin is deliberately unset until you supply a real domain. Set it before the production build to populate the sitemap, robots sitemap reference, and Person website field. There is no fabricated deployment URL. OpenGraph and Twitter text metadata are included; no unsupported social image is claimed.

## Interaction and accessibility

- Cmd+K / Ctrl+K opens search. Arrow keys select, Enter navigates, Escape closes.
- Native modal dialogs provide focus containment, background inertness, and focus restoration.
- Mobile navigation is a modal drawer. All destinations also work without the command palette.
- Theme is read before paint, saved locally, and initially follows the operating-system preference; dark is the CSS fallback.
- Reduced-motion preferences disable smooth scrolling and nonessential animation.
- Visible keyboard focus and a skip link support keyboard navigation.

## Release checklist

Configure the real production origin and optional profile links, verify your current academic/project details, and run Lighthouse against the deployed production build. Lighthouse targets are goals, not asserted scores. Hosting is ready for Vercel; this deliverable does not create a Vercel deployment or account.
