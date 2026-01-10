/**
 * Marencore Worker
 * Serves Vite-built React SPA with SPA routing support
 * Static assets are served automatically by Cloudflare through wrangler.toml configuration
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Get the pathname
    const pathname = url.pathname;
    
    // Check if the request is for a file with an extension
    // If it has a file extension, Cloudflare's static asset handler will serve it
    // We only need to handle non-file requests (routes) here
    if (!pathname.includes('.') && pathname !== '/') {
      // For SPA routing, serve index.html for non-file requests
      return fetch(new URL('/index.html', url).toString());
    }
    
    // For root path and static files, let the default handler take over
    return fetch(request);
  }
};
