/**
 * Marencore Worker
 * With fallthrough=true in wrangler.toml, static assets are served automatically.
 * This worker simply passes through all requests to the static asset handler.
 */

export default {
  async fetch(request, env) {
    // Cloudflare's static asset handler will serve the files automatically
    // due to fallthrough: true in wrangler.toml configuration
    // So we don't need to handle anything here - just let it fall through
    
    // Return undefined to allow fallthrough to static assets
    return undefined;
  }
};
