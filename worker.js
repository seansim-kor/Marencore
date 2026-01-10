/**
 * Marencore Worker
 * Serves index.html for all requests to support SPA routing
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Check if it's a request for a static file (has file extension)
    if (pathname.includes('.')) {
      // Let Cloudflare serve static assets automatically
      return undefined;
    }

    // For all other requests (SPA routes), serve index.html
    return fetch(new URL('/index.html', url).toString());
  }
};
