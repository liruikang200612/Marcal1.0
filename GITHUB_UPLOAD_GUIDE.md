# GitHub上传指南 - Marcal营销日历

## 🚀 快速上传到GitHub

### 方法一：使用GitHub Desktop（推荐新手）

1. **下载GitHub Desktop**
   - 访问 [desktop.github.com](https://desktop.github.com)
   - 下载并安装GitHub Desktop

2. **创建仓库**
   - 打开GitHub Desktop
   - 点击 "Create a New Repository on your hard drive"
   - Repository name: `marcal-marketing-calendar`
   - Local path: 选择DocumentBuilder文件夹的上级目录
   - 点击 "Create Repository"

3. **上传文件**
   - GitHub Desktop会自动检测文件变化
   - 在左侧看到所有项目文件
   - 在底部输入提交信息："Initial commit - Marcal Marketing Calendar"
   - 点击 "Commit to main"
   - 点击 "Publish repository"

### 方法二：使用命令行

```bash
# 1. 进入项目目录
cd DocumentBuilder

# 2. 初始化Git仓库
git init

# 3. 添加所有文件
git add .

# 4. 创建第一次提交
git commit -m "Initial commit - Marcal Marketing Calendar"

# 5. 设置主分支
git branch -M main

# 6. 添加远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/你的用户名/marcal-marketing-calendar.git

# 7. 推送到GitHub
git push -u origin main
```

### 方法三：直接上传（适合小项目）

1. **创建GitHub仓库**
   - 登录 [github.com](https://github.com)
   - 点击右上角 "+" → "New repository"
   - Repository name: `marcal-marketing-calendar`
   - 选择 "Public" 或 "Private"
   - 点击 "Create repository"

2. **上传文件**
   - 在新仓库页面点击 "uploading an existing file"
   - 将DocumentBuilder文件夹中的所有文件拖拽到页面
   - 输入提交信息："Initial commit - Marcal Marketing Calendar"
   - 点击 "Commit changes"

## 📋 上传前检查清单

- [ ] 确保.env文件不会被上传（已在.gitignore中）
- [ ] 检查所有必要文件都在项目中
- [ ] 验证package.json配置正确
- [ ] 确认vercel.json配置文件存在

## 🔒 安全注意事项

⚠️ **重要**：
- `.env` 文件已被 `.gitignore` 忽略，不会上传敏感信息
- 环境变量将在Vercel中单独配置
- 不要在代码中硬编码API密钥

## 🔄 后续更新

每次修改代码后：

**GitHub Desktop**：
1. 查看变化
2. 输入提交信息
3. 点击 "Commit to main"
4. 点击 "Push origin"

**命令行**：
```bash
git add .
git commit -m "更新描述"
git push
```

## 📞 遇到问题？

常见问题解决：

**权限错误**：
- 确保GitHub账号有仓库访问权限
- 检查SSH密钥或个人访问令牌配置

**文件太大**：
- 检查是否有大文件需要使用Git LFS
- 确认node_modules文件夹被.gitignore忽略

**推送失败**：
- 先拉取远程更改：`git pull origin main`
- 解决冲突后再推送

---

✅ **GitHub上传完成后，就可以继续Vercel部署了！**