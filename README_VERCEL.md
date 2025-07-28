# Marcal跨区域营销日历 - Vercel部署版

## 🚀 Vercel部署指南

### 快速部署步骤

1. **准备项目**
   ```bash
   cd DocumentBuilder
   npm install
   npm run deploy:vercel
   ```

2. **上传到GitHub**
   - 创建GitHub仓库
   - 推送代码到仓库

3. **部署到Vercel**
   - 登录 [vercel.com](https://vercel.com)
   - 导入GitHub仓库
   - 配置环境变量
   - 等待自动部署

### 🔧 环境变量配置

在Vercel项目设置中添加：

```
SUPABASE_URL=https://kbnkndntqmxbmmcdciyp.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtibmtuZG50cW14Ym1tY2RjaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTA2ODAsImV4cCI6MjA2ODM4NjY4MH0.fVnD846tDx9NyUyRlQNc7eC37AoA8La7gZbZsUG1ngY
DATABASE_URL=postgresql://postgres:5bJPcbxdCEq4gcYM@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1
DEEPSEEK_API_KEY=sk-5TLjMukdVTDBGibBDc2bE478EfD44d8e9089D06914D84916
SESSION_SECRET=marcal-session-secret-2024
NODE_ENV=production
```

### 📋 部署检查清单

- [ ] 项目构建成功
- [ ] GitHub仓库创建
- [ ] Vercel项目导入
- [ ] 环境变量配置
- [ ] 部署完成
- [ ] 应用正常访问

### 🛠 故障排除

**构建失败**：
```bash
rm -rf dist node_modules
npm install
npm run deploy:vercel
```

**404错误**：检查vercel.json和环境变量配置

**API错误**：验证Supabase连接和API密钥

### 📞 获取帮助

详细指南请查看：
- `VERCEL_DEPLOY_COMPLETE.md` - 完整部署指南
- `VERCEL_ENV_SETUP.md` - 环境变量配置
- `VERCEL_DEPLOYMENT_GUIDE.md` - 故障排除

---

🎉 **Marcal营销日历现已准备好部署到Vercel！**