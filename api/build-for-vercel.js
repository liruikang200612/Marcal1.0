import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('开始为Vercel构建应用...');

try {
  // 1. 清理旧的构建文件
  if (fs.existsSync('dist')) {
    console.log('清理旧的构建文件...');
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // 2. 构建前端
  console.log('构建前端应用...');
  execSync('npx vite build', { stdio: 'inherit' });

  // 3. 构建后端
  console.log('构建后端服务...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

  // 4. 验证构建结果
  const publicDir = path.join(__dirname, 'dist', 'public');
  const indexFile = path.join(publicDir, 'index.html');
  const serverFile = path.join(__dirname, 'dist', 'index.js');

  if (!fs.existsSync(indexFile)) {
    throw new Error('前端构建失败：找不到 dist/public/index.html');
  }

  if (!fs.existsSync(serverFile)) {
    throw new Error('后端构建失败：找不到 dist/index.js');
  }

  console.log('✅ Vercel构建完成！');
  console.log('📁 前端文件: dist/public/');
  console.log('📁 后端文件: dist/index.js');
  console.log('📁 API入口: api/index.js');

} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}
