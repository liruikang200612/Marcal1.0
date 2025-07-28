# Marcal跨区域营销日历 - Vercel完整部署指南

## 🚀 快速部署步骤

### 第一步：准备项目
```bash
# 1. 进入项目目录
cd DocumentBuilder

# 2. 安装依赖
npm install

# 3. 构建项目
npm run deploy:vercel
```

### 第二步：上传到GitHub
1. 在GitHub创建新仓库 `marcal-marketing-calendar`
2. 将项目推送到GitHub：
```bash
git init
git add .
git commit -m "Initial commit - Marcal Marketing Calendar"
git branch -M main
git remote add origin https://github.com/你的用户名/marcal-marketing-calendar.git
git push -u origin main
```

### 第三步：连接Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择你的 `marcal-marketing-calendar` 仓库
5. 点击 "Import"

### 第四步：配置环境变量
在Vercel项目设置中添加以下环境变量：

#### 必需环境变量：
```
SUPABASE_URL=https://kbnkndntqmxbmmcdciyp.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtibmtuZG50cW14Ym1tY2RjaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTA2ODAsImV4cCI6MjA2ODM4NjY4MH0.fVnD846tDx9NyUyRlQNc7eC37AoA8La7gZbZsUG1ngY
DATABASE_URL=postgresql://postgres:5bJPcbxdCEq4gcYM@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1
DEEPSEEK_API_KEY=sk-5TLjMukdVTDBGibBDc2bE478EfD44d8e9089D06914D84916
SESSION_SECRET=marcal-session-secret-2024
NODE_ENV=production
```

### 第五步：部署
1. 配置完环境变量后，Vercel会自动重新部署
2. 等待部署完成（通常需要2-3分钟）
3. 访问分配的域名测试应用

## 📋 部署检查清单

- [ ] 项目构建成功
- [ ] GitHub仓库创建并推送代码
- [ ] Vercel项目创建
- [ ] 所有环境变量配置完成
- [ ] 部署成功完成
- [ ] 应用可以正常访问
- [ ] API端点正常工作

## 🔧 故障排除

### 构建失败
```bash
# 清理并重新构建
rm -rf dist node_modules
npm install
npm run deploy:vercel
```

### 404错误
- 检查vercel.json配置是否正确
- 确认dist/index.js文件存在
- 验证环境变量配置

### API错误
- 检查Supabase连接
- 验证API密钥有效性
- 查看Vercel函数日志

## 🌐 访问应用

部署成功后，你将获得：
- 主域名：`https://your-app-name.vercel.app`
- 预览域名：每次部署都会生成新的预览链接

## 📱 功能验证

访问以下页面确认功能正常：
1. 主页：营销日历界面
2. 地区管理：`/regions`
3. 活动管理：`/campaigns`
4. API测试：`/api/regions`

## 🔄 后续更新

每次代码更新后：
1. 推送到GitHub仓库
2. Vercel会自动检测并重新部署
3. 无需手动操作

## 📞 技术支持

如遇问题，请检查：
1. Vercel部署日志
2. 浏览器开发者工具控制台
3. 网络请求状态

---

🎉 **恭喜！你的Marcal跨区域营销日历现已成功部署到Vercel！**