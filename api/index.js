// Vercel serverless function entry point
const path = require('path');

let app = null;

module.exports = async (req, res) => {
  try {
    // Only initialize once
    if (!app) {
      console.log('Initializing app for Vercel...');
      
      // Import the built server
      const serverModule = await import('../dist/index.js');
      app = serverModule.default;
      
      console.log('App initialized successfully');
    }
    
    // Handle the request
    return app(req, res);
  } catch (error) {
    console.error('Vercel function error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};