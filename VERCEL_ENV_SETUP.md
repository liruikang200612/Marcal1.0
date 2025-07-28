# Vercel环境变量配置指南

## 必需的环境变量

在Vercel项目设置中添加以下环境变量：

### 1. Supabase配置
```
SUPABASE_URL=https://kbnkndntqmxbmmcdciyp.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtibmtuZG50cW14Ym1tY2RjaXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MTA2ODAsImV4cCI6MjA2ODM4NjY4MH0.fVnD846tDx9NyUyRlQNc7eC37AoA8La7gZbZsUG1ngY
```

### 2. 数据库连接
```
DATABASE_URL=postgresql://postgres:5bJPcbxdCEq4gcYM@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres?pgbouncer=true&connection_limit=1
```

### 3. AI服务配置
```
DEEPSEEK_API_KEY=sk-5TLjMukdVTDBGibBDc2bE478EfD44d8e9089D06914D84916
```

### 4. 应用配置
```
SESSION_SECRET=marcal-session-secret-2024
NODE_ENV=production
```

## 配置步骤

1. 登录 [Vercel控制台](https://vercel.com/dashboard)
2. 选择你的项目
3. 进入 Settings > Environment Variables
4. 逐一添加上述环境变量
5. 确保所有环境变量都设置为 Production, Preview, Development

## 验证配置

部署完成后，访问以下端点验证：
- 主页: `https://your-app.vercel.app/`
- API测试: `https://your-app.vercel.app/api/regions`

## 注意事项

⚠️ **重要**: 
- 不要在代码中硬编码敏感信息
- 确保所有API密钥都是有效的
- 数据库连接字符串必须包含正确的连接池配置