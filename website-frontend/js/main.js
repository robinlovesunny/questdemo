// 主文件 - 初始化所有功能

// 渲染产品推荐
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid || !siteData.products) return;
    
    const html = siteData.products.map(product => `
        <div class="card product-card">
            <div class="card-content">
                <div class="card-icon">${product.icon}</div>
                <h3 class="card-title">${product.title}</h3>
                <p class="card-description">${product.description}</p>
                <a href="${product.link}" class="card-link">了解更多 →</a>
            </div>
        </div>
    `).join('');
    
    productsGrid.innerHTML = html;
}

// 渲染成功案例
function renderCases() {
    const casesList = document.getElementById('casesList');
    if (!casesList || !siteData.cases) return;
    
    const html = siteData.cases.map(caseItem => `
        <div class="case-item">
            <div class="case-item-title">${caseItem.title}</div>
            <div class="case-item-meta">${caseItem.industry} · ${formatDate(caseItem.date)}</div>
        </div>
    `).join('');
    
    casesList.innerHTML = html;
}

// 渲染新闻列表
function renderNews() {
    const newsList = document.getElementById('newsList');
    if (!newsList || !siteData.news) return;
    
    const html = siteData.news.map(news => `
        <div class="news-item">
            <div class="news-item-image">
                <img src="${news.image}" alt="${news.title}" loading="lazy">
            </div>
            <div class="news-item-content">
                <h3 class="news-item-title">${news.title}</h3>
                <p class="news-item-summary">${news.summary}</p>
                <div class="news-item-meta">
                    <span class="news-item-date">${formatDate(news.date)}</span>
                    <span>${news.category}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    newsList.innerHTML = html;
}

// 添加页面加载动画
function initPageAnimations() {
    // 观察元素进入视口
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addClass(entry.target, 'animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察所有卡片
    document.querySelectorAll('.card, .news-item, .info-block').forEach(el => {
        observer.observe(el);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('软通动力官网初始化...');
    
    // 初始化导航
    initNavigation();
    
    // 初始化轮播图
    initBanner();
    
    // 初始化搜索
    initSearch();
    
    // 初始化平滑滚动
    initSmoothScroll();
    
    // 初始化回到顶部按钮
    initBackToTop();
    
    // 渲染内容
    renderProducts();
    renderCases();
    renderNews();
    
    // 初始化动画
    setTimeout(() => {
        initPageAnimations();
    }, 300);
    
    console.log('初始化完成！');
});

// 页面加载完成
window.addEventListener('load', () => {
    console.log('页面资源加载完成');
    
    // 移除加载状态
    document.body.classList.remove('loading');
});

// 性能监控（可选）
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;
            
            console.log('性能数据：');
            console.log(`页面加载时间: ${pageLoadTime}ms`);
            console.log(`请求响应时间: ${connectTime}ms`);
            console.log(`DOM渲染时间: ${renderTime}ms`);
        }, 0);
    });
}
