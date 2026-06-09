import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-static prerenders the whole site to plain files in `build/`,
    // which is exactly what Cloudflare Pages serves.
    adapter: adapter(),
  },
};

export default config;
