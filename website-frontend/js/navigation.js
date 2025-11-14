// 导航功能
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    // 移动端菜单切换
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            toggleClass(mobileMenuBtn, 'active');
            toggleClass(navMenu, 'active');
            
            // 禁用/启用body滚动
            if (hasClass(navMenu, 'active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // 移动端下拉菜单点击展开
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            const navLink = item.querySelector('.nav-link');
            navLink.addEventListener('click', (e) => {
                e.preventDefault();
                toggleClass(item, 'active');
            });
        });
    }
    
    // 监听窗口大小变化
    window.addEventListener('resize', debounce(() => {
        if (window.innerWidth > 768) {
            removeClass(navMenu, 'active');
            removeClass(mobileMenuBtn, 'active');
            document.body.style.overflow = '';
        }
    }, 250));
    
    // 滚动时头部固定
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            addClass(header, 'scrolled');
        } else {
            removeClass(header, 'scrolled');
        }
        
        lastScrollTop = scrollTop;
    }, 100));
}

// 平滑滚动锚点
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 跳过纯 # 和特殊锚点
            if (href === '#' || href.startsWith('#news-') || href.startsWith('#product-')) {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                smoothScrollTo(target);
            }
        });
    });
}

// 回到顶部按钮
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 300) {
            addClass(backToTopBtn, 'show');
        } else {
            removeClass(backToTopBtn, 'show');
        }
    }, 100));
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
