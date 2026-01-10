/**
 * Marencore Worker
 * Serves index.html for all requests to support SPA routing
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // For requests with file extensions, let Cloudflare handle them
    if (pathname.includes('.')) {
      return undefined;
    }

    // For all other requests (SPA routes), fetch index.html
    try {
      const indexUrl = new URL('/index.html', url).toString();
      return await fetch(indexUrl, request);
    } catch (error) {
      return new Response('Not Found', { status: 404 });
    }
  }
};
