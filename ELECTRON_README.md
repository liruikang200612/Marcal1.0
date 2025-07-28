# MarCal 桌面应用

MarCal 是一个跨区域营销日历应用，现在支持桌面版本！

## 功能特性

- 📅 营销日历管理
- 🌍 跨区域支持
- 💾 本地数据存储（通过 Supabase）
- 🖥️ 原生桌面体验
- 🔄 实时同步

## 开发环境设置

### 前置要求

- Node.js (版本 16 或更高)
- npm 或 yarn

### 安装依赖

```bash
# 安装主项目依赖
npm install

# 安装 Electron 依赖
cd electron
npm install
cd ..
```

### 开发模式运行

```bash
# 启动开发服务器和 Electron 应用
npm run electron:dev
```

这个命令会：
1. 启动 Vite 开发服务器 (http://localhost:5173)
2. 等待服务器启动完成
3. 启动 Electron 应用并加载开发服务器

### 构建桌面应用

```bash
# 构建生产版本
npm run electron:pack
```

或者构建分发版本：

```bash
# 构建用于分发的版本
npm run electron:dist
```

## 项目结构

```
DocumentBuilder/
├── client/                 # React 前端代码
├── server/                 # Express 后端代码
├── electron/              # Electron 相关文件
│   ├── main.js           # Electron 主进程
│   ├── preload.js        # 预加载脚本
│   ├── package.json      # Electron 配置
│   └── assets/           # 应用资源
├── package.json          # 主项目配置
└── vite.config.ts        # Vite 配置
```

## Electron 配置

### 主要文件说明

- **electron/main.js**: Electron 主进程，负责创建窗口和处理系统级操作
- **electron/preload.js**: 预加载脚本，提供安全的 API 桥接
- **electron/package.json**: Electron 特定的配置和构建设置

### 安全特性

- 禁用 Node.js 集成
- 启用上下文隔离
- 使用预加载脚本安全地暴露 API

## 构建目标

支持以下平台的构建：

- **Windows**: NSIS 安装程序 (.exe)
- **macOS**: DMG 磁盘映像 (.dmg)
- **Linux**: AppImage (.AppImage)

## 开发注意事项

1. **环境变量**: 确保 `.env` 文件包含正确的 Supabase 配置
2. **图标**: 将应用图标放置在 `electron/assets/icon.png`
3. **自动更新**: 可以集成 electron-updater 实现自动更新功能

## 故障排除

### 常见问题

1. **Electron 启动失败**
   - 检查 Node.js 版本是否兼容
   - 确保所有依赖都已正确安装

2. **构建失败**
   - 清理 node_modules 并重新安装
   - 检查 electron-builder 配置

3. **开发服务器连接问题**
   - 确保端口 5173 没有被占用
   - 检查防火墙设置

## 部署

构建完成后，可执行文件将在以下位置：

- Windows: `electron/dist/MarCal Setup.exe`
- macOS: `electron/dist/MarCal.dmg`
- Linux: `electron/dist/MarCal.AppImage`

## 技术栈

- **前端**: React + TypeScript + Vite
- **后端**: Express + Node.js
- **数据库**: Supabase (PostgreSQL)
- **桌面**: Electron
- **构建**: electron-builder

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License