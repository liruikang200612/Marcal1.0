// Vercel Serverless Function Entry Point
import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES模块中获取__dirname的替代方案
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 创建Express应用
const app = express();

// 基本中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务 - Vercel环境中的路径
const publicPath = process.env.VERCEL 
  ? join(process.cwd(), 'dist', 'public')
  : join(__dirname, '..', 'dist', 'public');
app.use(express.static(publicPath));

// API路由
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Marcal营销日历API正常运行',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/regions', (req, res) => {
  const regions = [
    { id: 'cn', name: '中国', timezone: 'Asia/Shanghai', flag: '🇨🇳' },
    { id: 'us', name: '美国', timezone: 'America/New_York', flag: '🇺🇸' },
    { id: 'ca', name: '加拿大', timezone: 'America/Toronto', flag: '🇨🇦' },
    { id: 'eu', name: '欧洲', timezone: 'Europe/London', flag: '🇪🇺' },
    { id: 'jp', name: '日本', timezone: 'Asia/Tokyo', flag: '🇯🇵' },
    { id: 'kr', name: '韩国', timezone: 'Asia/Seoul', flag: '🇰🇷' },
    { id: 'vn', name: '越南', timezone: 'Asia/Ho_Chi_Minh', flag: '🇻🇳' },
    { id: 'id', name: '印度尼西亚', timezone: 'Asia/Jakarta', flag: '🇮🇩' },
    { id: 'th', name: '泰国', timezone: 'Asia/Bangkok', flag: '🇹🇭' },
    { id: 'br', name: '巴西', timezone: 'America/Sao_Paulo', flag: '🇧🇷' },
    { id: 'ar', name: '阿根廷', timezone: 'America/Argentina/Buenos_Aires', flag: '🇦🇷' },
    { id: 'mx', name: '墨西哥', timezone: 'America/Mexico_City', flag: '🇲🇽' }
  ];
  res.json(regions);
});

// 主页路由 - 直接显示营销日历应用
app.get('/', (req, res) => {
  const indexPath = process.env.VERCEL 
    ? join(process.cwd(), 'dist', 'public', 'index.html')
    : join(__dirname, '..', 'dist', 'public', 'index.html');
  res.sendFile(indexPath);
});

// 测试页面路由
app.get('/test', (req, res) => {
  const testPath = process.env.VERCEL 
    ? join(process.cwd(), 'public', 'test.html')
    : join(__dirname, '..', 'public', 'test.html');
  res.sendFile(testPath);
});

// 所有其他路由返回主页（SPA路由支持）
app.get('*', (req, res) => {
  const indexPath = process.env.VERCEL 
    ? join(process.cwd(), 'dist', 'public', 'index.html')
    : join(__dirname, '..', 'dist', 'public', 'index.html');
  res.sendFile(indexPath);
});

// 获取特定地区的足球文化信息
app.get('/api/regions/:regionId/culture', (req, res) => {
  const { regionId } = req.params;
  
  const cultureData = {
    cn: {
      footballCulture: '新兴足球市场',
      majorEvents: ['中超联赛', '亚洲杯', '世界杯预选赛'],
      popularTeams: ['广州恒大', '上海上港', '北京国安'],
      marketingTips: '重视传统节日结合，关注本土球星'
    },
    us: {
      footballCulture: '多元体育文化',
      majorEvents: ['MLS', '世界杯', '美洲杯'],
      popularTeams: ['洛杉矶FC', '纽约城', '亚特兰大联'],
      marketingTips: '结合超级碗热度，重视社交媒体营销'
    },
    ca: {
      footballCulture: '冰雪之国的足球热情',
      majorEvents: ['MLS', 'Canadian Championship', '世界杯'],
      popularTeams: ['多伦多FC', '温哥华白帽', '蒙特利尔冲击'],
      marketingTips: '冬季室内足球推广，多语言营销'
    },
    eu: {
      footballCulture: '足球发源地',
      majorEvents: ['欧洲杯', '欧冠', '英超', '西甲', '德甲'],
      popularTeams: ['皇马', '巴萨', '曼联', '拜仁'],
      marketingTips: '传统与现代结合，重视俱乐部文化'
    },
    jp: {
      footballCulture: '亚洲足球强国',
      majorEvents: ['J联赛', '亚洲杯', '世界杯'],
      popularTeams: ['浦和红钻', '鹿岛鹿角', '川崎前锋'],
      marketingTips: '精细化运营，重视技术和战术分析'
    },
    kr: {
      footballCulture: '太极虎的足球精神',
      majorEvents: ['K联赛', '亚洲杯', '世界杯'],
      popularTeams: ['首尔FC', '全北现代', '水原三星'],
      marketingTips: '结合韩流文化，重视年轻球迷群体'
    },
    vn: {
      footballCulture: '东南亚足球新星',
      majorEvents: ['V联赛', '东南亚锦标赛', '亚洲杯'],
      popularTeams: ['河内FC', '胡志明市FC', '平阳FC'],
      marketingTips: '移动端优先，重视本土球星效应'
    },
    id: {
      footballCulture: '千岛之国的足球热情',
      majorEvents: ['印尼超级联赛', '东南亚锦标赛', '亚洲杯'],
      popularTeams: ['佩西加雅加达', '佩西布万隆', '阿雷马FC'],
      marketingTips: '宗教节日结合，重视社区足球文化'
    },
    th: {
      footballCulture: '微笑之国的足球梦',
      majorEvents: ['泰超联赛', '东南亚锦标赛', '亚洲杯'],
      popularTeams: ['武里南联', '曼谷联合', '春武里FC'],
      marketingTips: '佛教节日营销，重视王室足球文化'
    },
    br: {
      footballCulture: '足球王国',
      majorEvents: ['巴甲', '世界杯', '美洲杯', '解放者杯'],
      popularTeams: ['弗拉门戈', '科林蒂安', '圣保罗', '帕尔梅拉斯'],
      marketingTips: '桑巴文化结合，重视街头足球和嘉年华'
    },
    ar: {
      footballCulture: '探戈足球艺术',
      majorEvents: ['阿甲', '世界杯', '美洲杯', '解放者杯'],
      popularTeams: ['博卡青年', '河床', '独立', '圣洛伦索'],
      marketingTips: '马拉多纳和梅西效应，重视足球历史传承'
    },
    mx: {
      footballCulture: '北美足球热土',
      majorEvents: ['墨超', '世界杯', '美洲杯', '中北美金杯'],
      popularTeams: ['美洲队', '瓜达拉哈拉', '蓝十字', '老虎队'],
      marketingTips: '节日庆典结合，重视家庭观赛文化'
    }
  };

  const culture = cultureData[regionId];
  if (!culture) {
    return res.status(404).json({ error: '地区不存在' });
  }

  res.json({
    regionId,
    ...culture,
    lastUpdated: new Date().toISOString()
  });
});

// 获取所有地区的营销建议
app.get('/api/marketing-suggestions', (req, res) => {
  const suggestions = [
    {
      region: 'cn',
      suggestion: '春节期间推出"新年新预测"活动，结合传统文化元素',
      priority: 'high',
      season: 'spring'
    },
    {
      region: 'us',
      suggestion: '超级碗期间推广足球预测，利用体育热度',
      priority: 'high',
      season: 'winter'
    },
    {
      region: 'eu',
      suggestion: '欧洲杯/世界杯期间重点推广，制作专题预测内容',
      priority: 'high',
      season: 'summer'
    },
    {
      region: 'br',
      suggestion: '嘉年华期间结合桑巴文化，推出趣味足球预测',
      priority: 'medium',
      season: 'summer'
    },
    {
      region: 'jp',
      suggestion: 'J联赛开赛期间，重点推广技术分析功能',
      priority: 'medium',
      season: 'spring'
    }
  ];

  res.json({
    suggestions,
    totalRegions: 12,
    generatedAt: new Date().toISOString()
  });
});

// 错误处理
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    error: '服务器内部错误',
    message: err.message 
  });
});

export default app;
