let app = null;

export default async function handler(req, res) {
  try {
    if (!app) {
      console.log('Initializing app for Vercel...');
      
      const serverModule = await import('../dist/index.js');
      app = serverModule.default;
      
      if (!app) {
        throw new Error('Failed to load app from server module');
      }
      
      console.log('App initialized successfully');
    }
    
    return app(req, res);
  } catch (error) {
    console.error('Vercel function error:', error);
    
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message,
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
    }
  }
}
