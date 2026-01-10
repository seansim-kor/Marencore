/**
 * Cloudflare Worker for serving static content
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    // Try to match the request to a static asset
    try {
      // Default to index.html for root path
      const assetPath = pathname === '/' ? '/index.html' : pathname;
      const asset = ASSETS[assetPath];

      if (asset !== undefined) {
        const response = new Response(asset[0], {
          headers: {
            'Content-Type': asset[1]['content-type'],
          },
        });
        return response;
      }

      // Try without extension or return index.html for SPA routing
      const fallback = ASSETS['/index.html'];
      if (fallback !== undefined) {
        return new Response(fallback[0], {
          headers: {
            'Content-Type': fallback[1]['content-type'],
          },
        });
      }

      return new Response('Not Found', { status: 404 });
    } catch (err) {
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};

/**
 * Assets are injected here by Wrangler
 */
