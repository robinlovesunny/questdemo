#!/bin/bash

# 软通动力官网前端项目启动脚本

echo "======================================"
echo "  软通动力官网前端项目"
echo "======================================"
echo ""

# 获取项目目录
PROJECT_DIR="/data/workspace/questdemo/website-frontend"

echo "项目位置: $PROJECT_DIR"
echo ""

# 检查项目文件是否存在
if [ ! -f "$PROJECT_DIR/index.html" ]; then
    echo "错误: 未找到项目文件"
    exit 1
fi

echo "✅ 项目文件检查通过"
echo ""

# 显示项目结构
echo "📁 项目结构:"
echo "├── index.html          (首页)"
echo "├── css/               (样式文件)"
echo "│   ├── reset.css"
echo "│   ├── global.css"
echo "│   ├── header.css"
echo "│   ├── footer.css"
echo "│   ├── banner.css"
echo "│   ├── card.css"
echo "│   ├── home.css"
echo "│   └── responsive.css"
echo "├── js/                (JavaScript文件)"
echo "│   ├── data.js"
echo "│   ├── utils.js"
echo "│   ├── banner.js"
echo "│   ├── navigation.js"
echo "│   ├── search.js"
echo "│   └── main.js"
echo "└── README.md          (项目说明)"
echo ""

echo "📝 使用说明:"
echo ""
echo "方式一：直接打开文件"
echo "  双击打开 $PROJECT_DIR/index.html"
echo ""
echo "方式二：使用 HTTP 服务器（推荐）"
echo "  如果系统中有以下工具，可以启动本地服务器："
echo ""
echo "  - Python 3:"
echo "    cd $PROJECT_DIR"
echo "    python3 -m http.server 8000"
echo ""
echo "  - Node.js (http-server):"
echo "    cd $PROJECT_DIR"
echo "    npx http-server -p 8000"
echo ""
echo "  - PHP:"
echo "    cd $PROJECT_DIR"
echo "    php -S localhost:8000"
echo ""
echo "  然后在浏览器访问: http://localhost:8000"
echo ""

echo "✨ 核心功能:"
echo "  ✅ 响应式设计 - 支持桌面、平板、移动设备"
echo "  ✅ 轮播横幅 - 自动播放，手动切换"
echo "  ✅ 多级导航 - 三级下拉菜单"
echo "  ✅ 搜索功能 - 全站内容搜索"
echo "  ✅ 产品展示 - 核心产品和解决方案"
echo "  ✅ 新闻资讯 - 企业动态和行业资讯"
echo ""

echo "📊 浏览器兼容性:"
echo "  Chrome, Firefox, Safari, Edge (最新2个主版本)"
echo ""

echo "======================================"
echo "项目已就绪！"
echo "======================================"
