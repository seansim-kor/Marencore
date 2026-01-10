/**
 * Marencore Worker
 * Serves index.html for all requests to support SPA routing
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // For requests with file extensions, serve from static assets
    if (pathname.includes('.')) {
      try {
        return await env.ASSETS.fetch(request);
      } catch (e) {
        return new Response('Not Found', { status: 404 });
      }
    }

    // For all other requests (SPA routes), serve index.html
    try {
      return await env.ASSETS.fetch(new Request(new URL('/index.html', url).toString(), request));
    } catch (error) {
      return new Response('Not Found', { status: 404 });
    }
  }
};
