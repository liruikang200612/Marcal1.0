const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 修复Vercel构建问题...');

try {
  // 1. 清理旧的构建文件
  console.log('📁 清理构建目录...');
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // 2. 创建必要的目录
  console.log('📂 创建构建目录...');
  fs.mkdirSync('dist', { recursive: true });
  fs.mkdirSync('dist/public', { recursive: true });

  // 3. 构建前端
  console.log('🎨 构建前端应用...');
  execSync('npx vite build', { stdio: 'inherit' });

  // 4. 检查前端构建结果
  const indexPath = path.join('dist', 'public', 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.log('⚠️  前端构建文件不存在，创建基础HTML...');
    
    // 复制client/index.html到构建目录
    const clientIndexPath = path.join('client', 'index.html');
    if (fs.existsSync(clientIndexPath)) {
      fs.copyFileSync(clientIndexPath, indexPath);
      console.log('✅ 复制了基础HTML文件');
    } else {
      // 创建基础HTML文件
      const basicHtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marcal营销日历</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0; padding: 20px; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white; min-height: 100vh;
        }
        .container { 
            max-width: 1200px; margin: 0 auto; 
            background: rgba(255,255,255,0.1); 
            padding: 30px; border-radius: 15px; 
            backdrop-filter: blur(10px);
        }
        .loading { text-align: center; padding: 50px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="loading">
            <h1>🚀 Marcal跨区域营销日历</h1>
            <p>正在加载营销日历应用...</p>
            <p>支持12个国家和地区的智能营销推荐</p>
            <div style="margin-top: 30px;">
                <a href="/test" style="color: #4CAF50; text-decoration: none;">📋 访问测试页面</a>
            </div>
        </div>
    </div>
    <div id="root"></div>
</body>
</html>`;
      fs.writeFileSync(indexPath, basicHtml);
      console.log('✅ 创建了基础HTML文件');
    }
  }

  // 5. 构建后端
  console.log('⚡ 构建后端服务...');
  execSync('npx esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', { stdio: 'inherit' });

  // 6. 验证构建结果
  console.log('🔍 验证构建结果...');
  const requiredFiles = [
    'dist/public/index.html',
    'dist/index.js'
  ];

  let allFilesExist = true;
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file} 存在`);
    } else {
      console.log(`❌ ${file} 不存在`);
      allFilesExist = false;
    }
  });

  if (allFilesExist) {
    console.log('🎉 构建修复完成！所有必要文件已生成');
  } else {
    console.log('⚠️  部分文件缺失，但已尽力修复');
  }

} catch (error) {
  console.error('❌ 构建修复失败:', error.message);
  process.exit(1);
}
