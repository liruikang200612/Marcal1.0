// Vercel API入口文件
const path = require('path');

// 设置环境变量
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// 导入构建后的服务器
const serverPath = path.join(__dirname, '..', 'dist', 'index.js');

let app;

try {
  // 动态导入构建后的应用
  app = require(serverPath);
  
  // 如果是ES模块，获取default导出
  if (app && app.default) {
    app = app.default;
  }
} catch (error) {
  console.error('Failed to load server:', error);
  
  // 创建一个简单的错误处理应用
  const express = require('express');
  app = express();
  
  app.use((req, res) => {
    res.status(500).json({
      error: 'Server initialization failed',
      message: error.message
    });
  });
}

// 导出应用供Vercel使用
module.exports = app;