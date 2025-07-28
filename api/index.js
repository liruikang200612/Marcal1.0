// Vercel Serverless Function Entry Point
const path = require('path');

// 设置环境变量
process.env.NODE_ENV = 'production';

// 导入构建后的服务器
const serverPath = path.join(__dirname, '..', 'dist', 'index.js');

let app;

try {
  // 动态导入ES模块
  const importModule = async () => {
    const module = await import(serverPath);
    return module.default || module.app || module;
  };
  
  module.exports = async (req, res) => {
    if (!app) {
      app = await importModule();
    }
    return app(req, res);
  };
} catch (error) {
  console.error('Failed to load server:', error);
  module.exports = (req, res) => {
    res.status(500).json({ error: 'Server initialization failed' });
  };
}
