// 轮播图功能
class BannerSlider {
    constructor(container, options = {}) {
        this.container = container;
        this.slidesContainer = container.querySelector('.banner-slides');
        this.prevBtn = container.querySelector('.banner-prev');
        this.nextBtn = container.querySelector('.banner-next');
        this.indicatorsContainer = container.querySelector('.banner-indicators');
        
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = options.autoplayDelay || 5000;
        this.transitionDuration = options.transitionDuration || 600;
        
        this.init();
    }
    
    init() {
        this.renderSlides();
        this.renderIndicators();
        this.bindEvents();
        this.startAutoplay();
    }
    
    renderSlides() {
        if (!siteData.banners || siteData.banners.length === 0) return;
        
        const slides = siteData.banners.map((banner, index) => `
            <div class="banner-slide ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${banner.image}" alt="${banner.title}" class="banner-slide-image">
                <div class="banner-slide-content">
                    <h2 class="banner-slide-title">${banner.title}</h2>
                    <p class="banner-slide-subtitle">${banner.subtitle}</p>
                    ${banner.link ? `<a href="${banner.link.url}" class="banner-slide-link">${banner.link.text}</a>` : ''}
                </div>
            </div>
        `).join('');
        
        this.slidesContainer.innerHTML = slides;
        this.slides = this.slidesContainer.querySelectorAll('.banner-slide');
    }
    
    renderIndicators() {
        if (!siteData.banners || siteData.banners.length === 0) return;
        
        const indicators = siteData.banners.map((_, index) => `
            <button class="banner-indicator ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="跳转到第${index + 1}张"></button>
        `).join('');
        
        this.indicatorsContainer.innerHTML = indicators;
        this.indicators = this.indicatorsContainer.querySelectorAll('.banner-indicator');
    }
    
    bindEvents() {
        // 上一张
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prev();
            });
        }
        
        // 下一张
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.next();
            });
        }
        
        // 指示器点击
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                this.goTo(index);
            });
        });
        
        // 鼠标悬停时暂停自动播放
        this.container.addEventListener('mouseenter', () => {
            this.stopAutoplay();
        });
        
        this.container.addEventListener('mouseleave', () => {
            this.startAutoplay();
        });
    }
    
    prev() {
        const newIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
        this.goTo(newIndex);
    }
    
    next() {
        const newIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
        this.goTo(newIndex);
    }
    
    goTo(index) {
        if (index === this.currentIndex) return;
        
        // 更新幻灯片
        removeClass(this.slides[this.currentIndex], 'active');
        addClass(this.slides[index], 'active');
        
        // 更新指示器
        removeClass(this.indicators[this.currentIndex], 'active');
        addClass(this.indicators[index], 'active');
        
        this.currentIndex = index;
        
        // 重置自动播放
        this.stopAutoplay();
        this.startAutoplay();
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, this.autoplayDelay);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// 初始化轮播图
function initBanner() {
    const bannerContainer = document.getElementById('heroBanner');
    if (bannerContainer) {
        new BannerSlider(bannerContainer);
    }
}
