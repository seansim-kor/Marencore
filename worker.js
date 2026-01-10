/**
 * Marencore Worker
 * Serves Vite-built React SPA with proper asset handling and SPA routing
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
      // Try to serve as a static asset first
      const response = await env.ASSETS.fetch(request);
      
      // If the asset exists (status 200), return it
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      // Continue if ASSETS fails
    }

    // For non-existent files, check if it's a request for a route (not a file)
    // If it doesn't have a file extension, serve index.html for SPA routing
    if (!pathname.includes('.')) {
      try {
        return await env.ASSETS.fetch(new Request(new URL('/index.html', url).toString(), request));
      } catch (error) {
        // If index.html doesn't exist, return 404
      }
    }

    // Return 404 for missing files
    return new Response('Not Found', { status: 404 });
  }
};
