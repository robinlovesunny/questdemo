# 软通动力官网前端项目

这是基于软通动力官网分析文档实现的企业门户网站前端项目。

## 项目说明

本项目采用纯 HTML/CSS/JavaScript 技术栈实现，无需 Node.js 环境即可运行。

## 项目位置

```
./website-frontend/
```

## 快速开始

### 方式一：直接打开

直接打开 `website-frontend/index.html` 文件即可在浏览器中查看。

### 方式二：使用启动脚本

```bash
cd website-frontend
bash start.sh
```

### 方式三：使用本地服务器

```bash
cd website-frontend

# 使用 Python 3
python3 -m http.server 8000

# 或使用 PHP
php -S localhost:8000

# 然后在浏览器访问 http://localhost:8000
```

## 核心功能

- ✅ **响应式设计** - 支持桌面、平板、移动设备
- ✅ **轮播横幅** - 自动播放，手动切换
- ✅ **多级导航** - 三级下拉菜单
- ✅ **搜索功能** - 全站内容搜索
- ✅ **产品展示** - 核心产品和解决方案
- ✅ **新闻资讯** - 企业动态和行业资讯

## 项目结构

```
website-frontend/
├── index.html          # 首页
├── README.md           # 项目文档
├── SUMMARY.md          # 实施总结
├── start.sh           # 启动脚本
├── css/               # 样式文件（8个）
├── js/                # JavaScript 文件（6个）
├── images/            # 图片资源
├── data/              # 数据文件
└── pages/             # 其他页面
```

## 技术特点

- **零依赖**：无需 Node.js 或其他运行时
- **轻量级**：总代码量不到 3000 行
- **高性能**：优化的加载和运行性能
- **易维护**：模块化设计，代码清晰
- **SEO 友好**：完整的 Meta 标签和语义化标签

## 浏览器兼容性

支持所有现代浏览器：Chrome、Firefox、Safari、Edge（最新 2 个主版本）

## 详细文档

请查看 `website-frontend/README.md` 和 `website-frontend/SUMMARY.md` 获取详细的项目说明和实施总结。

## 参考文档

- `website.md` - 软通动力官网页面分析文档
- `.qoder/quests/website-frontend-implementation.md` - 前端实现设计文档

