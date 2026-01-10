/**
 * Marencore Worker
 * Serves a simple placeholder page
 */

export default {
  async fetch(request, env, ctx) {
    try {
      // Simple HTML response
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Marencore</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
              .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              h1 { color: #333; }
              p { color: #666; line-height: 1.6; }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Welcome to Marencore</h1>
              <p>The application is now running on Cloudflare Workers!</p>
              <p>This is a temporary placeholder page.</p>
            </div>
          </body>
        </html>
      `;
      
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
        },
        status: 200,
      });
    } catch (err) {
      return new Response('Internal Server Error: ' + err.message, {
        status: 500,
      });
    }
  },
};
