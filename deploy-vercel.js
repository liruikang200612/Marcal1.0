const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始准备Vercel部署...');

try {
  // 1. 清理旧的构建文件
  console.log('📁 清理旧的构建文件...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // 2. 构建前端和后端
  console.log('🔨 构建应用...');
  execSync('npm run build:vercel', { stdio: 'inherit' });

  // 3. 检查构建结果
  if (!fs.existsSync('dist/index.js')) {
    throw new Error('后端构建失败：dist/index.js 不存在');
  }

  if (!fs.existsSync('dist/public')) {
    throw new Error('前端构建失败：dist/public 不存在');
  }

  console.log('✅ Vercel构建完成！');
  console.log('📦 前端文件位置: dist/public/');
  console.log('⚡ 后端文件位置: dist/index.js');
  console.log('');
  console.log('🌐 现在可以部署到Vercel了！');
  console.log('💡 请确保在Vercel中配置了所有必要的环境变量');

} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}