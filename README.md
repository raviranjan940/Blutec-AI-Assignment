# Blutec AI Assignment: TeddyPups React clone

A Vite + React 19 + React Router rebuild of https://puppy.instabizweb.com, covering every page in its sitemap:
home, puppies, gone home, happy families, how it works, FAQ, contact, the 41 puppy profile pages, and the 404 page.
Images, videos, fonts, logo and cursors are served locally from `public/`.

## Run it

```powershell
npm install
npm run dev
```

Then open http://localhost:5173.

`npm run dev` is for editing: React's development mode and unbundled modules make animations noticeably choppier.
To see it as smooth as the live site, run the optimized production build:

```powershell
npm start
```

(`npm start` = `vite build` + `vite preview` on port 5173.)

Photos are served as resized WebP copies via `srcset`, like Next.js did on the original. If you add or change images in `public/media`, run `npm run images` to regenerate `public/_img`.

When hosting the built `dist/` folder, send every unknown path to `index.html` (SPA fallback) so deep links like `/puppies/maltipoo-max-male` work.

## Layout

| Path | What it is |
| --- | --- |
| `src/App.jsx` | Routes (puppy pages are lazy-loaded from `src/pages/puppies`) |
| `src/layout/SiteLayout.jsx` | Header, nav, mobile menu, footer, page-curtain transition, paw-trail canvas, smooth scroll |
| `src/pages/*.jsx` | One file per page, with the site's own text and image data |
| `src/components/index.js` | Readable names for the interactive components |
| `src/runtime/` | The interactive components and their animation code, converted from the live site's JavaScript (includes the bundled Framer Motion and Lenis code it uses) |
| `src/shims/` | Small replacements for Next.js `Link`, `Image`, `useRouter`/`usePathname`/`useSearchParams` and page metadata |
| `src/styles/site.css`, `fonts.css` | The site's compiled stylesheet (Tailwind v4 output) and font faces |

## Enquiry forms

The original posts enquiries to its own server. Here the forms validate in the browser and show the "sent" state.
To deliver them, set `VITE_ENQUIRY_ENDPOINT` (in a `.env` file) to a URL that accepts a JSON POST; see `src/runtime/m95187.jsx`.
