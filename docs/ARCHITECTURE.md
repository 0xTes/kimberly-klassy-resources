# Architecture guide

## One configuration file

`src/config/brand.config.js` is the content source for the page. It holds the identity, SEO, hero text, social profiles, cards, about copy, call to action, and footer options. This prevents a future creator rebrand from being scattered across components.

To create another creator page, copy the repository, replace values in that file, and add the creator portrait to `public/images/`. Set `identity.profileImage` to its public path, such as `/images/portrait.jpg`. When there is no image, the `Avatar` component intentionally renders initials instead of a broken image.

## Components

`components/sections` contains page-sized sections. `components/ui` contains small repeated interface patterns. `components/layout` owns page framing, and `components/brand` owns visual identity. Components receive data through props; they do not contain Kimberly-specific content.

## Styling

Tailwind v4 is imported in `src/styles/globals.css`. `src/styles/theme.css` defines the semantic brand tokens. Use tokens such as `bg-canvas` and `text-accent` so a palette update remains predictable. The global stylesheet also supplies baseline resets, focus visibility, and reduced-motion behavior.

## Metadata

The HTML contains crawlable default metadata. `useDocumentMetadata` then keeps title, description, Open Graph, Twitter card, and canonical URL synchronized with configuration during client rendering. Set `seo.canonicalUrl` before deployment.

## Footer options

All footer items are optional. Set `footer.contact.email`, `phone`, or `address`; add `{ label, href }` entries to `legalLinks` or `additionalLinks`; and set `showSocials` to false when needed. The footer logic does not need editing.
