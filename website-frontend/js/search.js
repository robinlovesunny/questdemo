// 搜索功能
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchBtn || !searchModal) return;
    
    // 打开搜索弹窗
    searchBtn.addEventListener('click', () => {
        addClass(searchModal, 'active');
        searchInput.focus();
    });
    
    // 关闭搜索弹窗
    searchClose.addEventListener('click', () => {
        removeClass(searchModal, 'active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });
    
    // 点击遮罩关闭
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            removeClass(searchModal, 'active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
    
    // ESC键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hasClass(searchModal, 'active')) {
            removeClass(searchModal, 'active');
            searchInput.value = '';
            searchResults.innerHTML = '';
        }
    });
    
    // 搜索输入
    searchInput.addEventListener('input', debounce((e) => {
        const keyword = e.target.value.trim();
        
        if (keyword.length < 2) {
            searchResults.innerHTML = '<p style="text-align: center; color: #999; padding: 40px 0;">请输入至少2个字符进行搜索</p>';
            return;
        }
        
        performSearch(keyword);
    }, 300));
}

// 执行搜索
function performSearch(keyword) {
    const results = {
        products: [],
        news: [],
        cases: []
    };
    
    // 搜索产品
    if (siteData.products) {
        results.products = siteData.products.filter(product => 
            product.title.includes(keyword) || product.description.includes(keyword)
        );
    }
    
    // 搜索新闻
    if (siteData.news) {
        results.news = siteData.news.filter(news => 
            news.title.includes(keyword) || news.summary.includes(keyword)
        );
    }
    
    // 搜索案例
    if (siteData.cases) {
        results.cases = siteData.cases.filter(caseItem => 
            caseItem.title.includes(keyword) || caseItem.summary.includes(keyword)
        );
    }
    
    renderSearchResults(results, keyword);
}

// 渲染搜索结果
function renderSearchResults(results, keyword) {
    const searchResults = document.getElementById('searchResults');
    const totalCount = results.products.length + results.news.length + results.cases.length;
    
    if (totalCount === 0) {
        searchResults.innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <svg width="80" height="80" viewBox="0 0 80 80" style="margin-bottom: 20px;">
                    <circle cx="40" cy="40" r="30" fill="#f0f0f0"/>
                    <text x="40" y="50" font-size="40" text-anchor="middle">🔍</text>
                </svg>
                <p style="color: #666; font-size: 16px;">未找到与"${keyword}"相关的内容</p>
                <p style="color: #999; font-size: 14px; margin-top: 8px;">请尝试其他关键词</p>
            </div>
        `;
        return;
    }
    
    let html = `<div class="search-results-container">`;
    html += `<p style="color: #666; margin-bottom: 20px;">找到 <strong>${totalCount}</strong> 条相关结果</p>`;
    
    // 产品结果
    if (results.products.length > 0) {
        html += `<div class="search-category" style="margin-bottom: 24px;">`;
        html += `<h4 style="font-size: 16px; font-weight: 600; margin-bottom: 12px; color: #333;">产品与服务 (${results.products.length})</h4>`;
        html += `<div style="display: flex; flex-direction: column; gap: 12px;">`;
        results.products.forEach(product => {
            html += `
                <a href="${product.link}" class="search-result-item" style="display: block; padding: 12px; background: #f8f9fa; border-radius: 6px; transition: all 0.2s;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 24px;">${product.icon}</span>
                        <div style="flex: 1;">
                            <div style="font-weight: 500; color: #333; margin-bottom: 4px;">${highlightKeyword(product.title, keyword)}</div>
                            <div style="font-size: 14px; color: #666;">${highlightKeyword(product.description, keyword)}</div>
                        </div>
                    </div>
                </a>
            `;
        });
        html += `</div></div>`;
    }
    
    // 新闻结果
    if (results.news.length > 0) {
        html += `<div class="search-category" style="margin-bottom: 24px;">`;
        html += `<h4 style="font-size: 16px; font-weight: 600; margin-bottom: 12px; color: #333;">新闻资讯 (${results.news.length})</h4>`;
        html += `<div style="display: flex; flex-direction: column; gap: 12px;">`;
        results.news.forEach(news => {
            html += `
                <a href="${news.link}" class="search-result-item" style="display: block; padding: 12px; background: #f8f9fa; border-radius: 6px; transition: all 0.2s;">
                    <div style="font-weight: 500; color: #333; margin-bottom: 4px;">${highlightKeyword(news.title, keyword)}</div>
                    <div style="font-size: 14px; color: #666; margin-bottom: 4px;">${highlightKeyword(news.summary, keyword)}</div>
                    <div style="font-size: 12px; color: #999;">${formatDate(news.date)} · ${news.category}</div>
                </a>
            `;
        });
        html += `</div></div>`;
    }
    
    // 案例结果
    if (results.cases.length > 0) {
        html += `<div class="search-category">`;
        html += `<h4 style="font-size: 16px; font-weight: 600; margin-bottom: 12px; color: #333;">成功案例 (${results.cases.length})</h4>`;
        html += `<div style="display: flex; flex-direction: column; gap: 12px;">`;
        results.cases.forEach(caseItem => {
            html += `
                <div class="search-result-item" style="padding: 12px; background: #f8f9fa; border-radius: 6px;">
                    <div style="font-weight: 500; color: #333; margin-bottom: 4px;">${highlightKeyword(caseItem.title, keyword)}</div>
                    <div style="font-size: 14px; color: #666; margin-bottom: 4px;">${highlightKeyword(caseItem.summary, keyword)}</div>
                    <div style="font-size: 12px; color: #999;">${caseItem.industry} · ${formatDate(caseItem.date)}</div>
                </div>
            `;
        });
        html += `</div></div>`;
    }
    
    html += `</div>`;
    
    searchResults.innerHTML = html;
    
    // 添加悬停样式
    const style = document.createElement('style');
    style.textContent = `
        .search-result-item:hover {
            background-color: #e9ecef !important;
            transform: translateX(4px);
        }
    `;
    document.head.appendChild(style);
}

// 高亮关键词
function highlightKeyword(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark style="background-color: #fff3cd; padding: 2px 4px; border-radius: 2px;">$1</mark>');
}
