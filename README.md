# paperchain-links

A minimal "link in bio" page built with SvelteKit, prerendered to static files and
deployed on Cloudflare Pages.

## Editing content

All content lives in one file: [`src/lib/data/site.json`](src/lib/data/site.json).

```json
{
  "logo": "Your logo text",
  "links": [
    { "title": "My GitHub", "url": "https://github.com/you" },
    { "title": "Newsletter", "url": "https://example.com/news" }
  ]
}
```

- `logo` — the text shown at the top of the page.
- `links` — one button per entry. Add or remove objects to change the buttons; no
  code changes needed.

## Project structure

- `src/lib/components/Logo.svelte` — renders the logo text.
- `src/lib/components/LinkButton.svelte` — a single clickable link button.
- `src/lib/components/LinkGrid.svelte` — CSS grid that lays out the buttons (centered).
- `src/routes/+page.svelte` — composes the data into the components.
- `src/routes/+layout.js` — enables full static prerendering.

The UI is intentionally unstyled apart from the grid layout; visual styling can be
added in the component `<style>` blocks.

## Develop

```bash
npm install
npm run dev
```

## Build / preview

```bash
npm run build    # outputs static site to ./build
npm run preview  # serves the production build locally
```

## Deploy to Cloudflare Pages

Create a Pages project connected to this repo with:

- **Framework preset:** SvelteKit (or "None")
- **Build command:** `npm run build`
- **Build output directory:** `build`

`adapter-static` with prerendering produces fully static assets, so no server runtime
is required.
