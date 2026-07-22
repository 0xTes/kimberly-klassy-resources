# Creator Resource Template

A calm, premium, configuration-driven Vite, React, and Tailwind landing page for creator links. The included brand is **Kimberly Klassy**, a lifestyle creator and city girl who loves nature and the outdoors.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create an optimized production build with `npm run build`; inspect it locally with `npm run preview`. Run `npm run lint` before submitting changes.

## Customize a creator page

Edit [src/config/brand.config.js](src/config/brand.config.js). It is the single place for brand name, portrait, SEO, hero copy, resources, social links, about text, CTA, and footer details. The page updates automatically because components receive their content from this object.

For a portrait, add a licensed image to `public/images/` and set `identity.profileImage` to its public path, for example `/images/portrait.jpg`. If no portrait is configured, the accessible initials avatar is shown instead. Update `seo.canonicalUrl` and the social preview before publishing.

To make a new creator site, duplicate the repository, replace configuration and public brand assets, then update this README and the license owner. Do not put a creator's copy or URLs inside components.

## Project structure

```text
public/                 Static brand assets and creator imagery
src/config/             The single brand configuration source
src/components/brand/   Brand mark and avatar
src/components/layout/  Header, footer, and width container
src/components/sections/Page-level content sections
src/components/ui/      Reused buttons, cards, headings, and icons
src/hooks/              Small shared browser behavior
src/styles/             Tailwind import and semantic design tokens
docs/                   Plain-language technical guidance
```

## Why this structure

This template separates content from presentation. That makes a rebrand low-risk: update configuration instead of searching JSX files. Small components are intentionally boring and composable, which keeps future maintenance approachable. The footer is also configuration-driven, so contact, legal, social, and supplemental links can be added or removed without component edits.

## Accessibility and performance

The template uses semantic landmarks, one H1 per page, labeled social links, visible focus treatment, sufficient contrast, keyboard-friendly native links, and reduced-motion support. Portrait images are lazy loaded. There are no animation, UI, icon, or routing libraries; the interface uses native CSS transitions and inline SVG icons.

## Deployment

Any static host that supports a Vite build will work. Run `npm run build` and publish the generated `dist/` directory. For a host with a custom domain, set `seo.canonicalUrl` to the final HTTPS URL first.

## Maintenance

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the reasoning behind the architecture and exact modification guidance. See [CONTRIBUTING.md](CONTRIBUTING.md) for the local contribution workflow.
