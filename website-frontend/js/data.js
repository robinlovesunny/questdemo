// 网站数据配置
const siteData = {
    // 轮播图数据
    banners: [
        {
            id: 1,
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="600"%3E%3Crect fill="%230066CC" width="1920" height="600"/%3E%3Ctext x="50%25" y="50%25" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3E同行有你：一起AI一起赢%3C/text%3E%3C/svg%3E',
            title: '同行有你：一起AI一起赢',
            subtitle: '软通动力成立二十周年，携手客户与合作伙伴共创未来',
            link: {
                url: '#anniversary',
                text: '了解更多'
            },
            order: 1
        },
        {
            id: 2,
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="600"%3E%3Crect fill="%2300A3E0" width="1920" height="600"/%3E%3Ctext x="50%25" y="50%25" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3E全栈智能 软硬协同%3C/text%3E%3C/svg%3E',
            title: '全栈智能 软硬协同',
            subtitle: '营收净利双增，彰显发展质效',
            link: {
                url: '#report',
                text: '查看财报'
            },
            order: 2
        },
        {
            id: 3,
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1920" height="600"%3E%3Crect fill="%23667EEA" width="1920" height="600"/%3E%3Ctext x="50%25" y="50%25" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle"%3E数字化转型 可信赖伙伴%3C/text%3E%3C/svg%3E',
            title: '数字化转型 可信赖伙伴',
            subtitle: '助力企业数字化转型升级',
            link: {
                url: '#services',
                text: '探索服务'
            },
            order: 3
        }
    ],

    // 产品推荐数据
    products: [
        {
            id: 1,
            icon: '🤖',
            title: 'AI及大模型应用',
            description: '天璇2.0 MaaS多模态大模型运营平台，引领智能化变革',
            link: '#product-ai'
        },
        {
            id: 2,
            icon: '☁️',
            title: '云智能服务',
            description: '多云管理平台解决方案，实现云资源统一管理',
            link: '#product-cloud'
        },
        {
            id: 3,
            icon: '🏭',
            title: '工业元宇宙',
            description: '虚实融合，释放数字潜力，赋能智能制造',
            link: '#product-metaverse'
        },
        {
            id: 4,
            icon: '🔐',
            title: '信创及开源',
            description: '鸿蒙/欧拉/高斯生态，助力国产化替代',
            link: '#product-opensource'
        },
        {
            id: 5,
            icon: '💳',
            title: '数字人民币平台',
            description: '智能合约应用服务平台，创新金融服务',
            link: '#product-dcep'
        },
        {
            id: 6,
            icon: '📊',
            title: '数据中台',
            description: '云上中台-重明，数据驱动业务创新',
            link: '#product-data'
        },
        {
            id: 7,
            icon: '🏦',
            title: '金融核心系统',
            description: '保险、银行核心业务系统解决方案',
            link: '#product-finance'
        },
        {
            id: 8,
            icon: '🔗',
            title: '工业互联网',
            description: '构建工业互联网平台，推动产业升级',
            link: '#product-iot'
        }
    ],

    // 成功案例数据
    cases: [
        {
            id: 1,
            title: '赋能旗能电铝落地数字孪生工厂',
            industry: '制造业',
            summary: '虚实融合释放数字潜力',
            date: '2024-11-05'
        },
        {
            id: 2,
            title: '杭州市公共交通集团办公电脑采购项目',
            industry: '交通物流',
            summary: '提供整体IT基础设施解决方案',
            date: '2024-10-20'
        },
        {
            id: 3,
            title: '成都信息工程大学数字化校园建设',
            industry: '教育',
            summary: '打造智慧校园，赋能教育创新',
            date: '2024-09-15'
        }
    ],

    // 新闻资讯数据
    news: [
        {
            id: 1,
            title: '同行有你：一起AI一起赢 —— 软通动力成立二十周年致客户与合作伙伴的一封信',
            summary: '二十载春秋流转，恰如长河奔涌。站在成立二十周年的节点，向客户与合作伙伴致以感谢与问候。',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="180"%3E%3Crect fill="%230066CC" width="280" height="180"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3E20周年庆典%3C/text%3E%3C/svg%3E',
            date: '2024-12-01',
            category: '企业动态',
            link: '#news-1'
        },
        {
            id: 2,
            title: '软通动力2025年三季报 - 全栈智能激活软硬协同，营收净利双增彰显发展质效',
            summary: '公司在"智能化、自主化、绿色化、国际化"四大战略下，业务规模与盈利质量同步提升，首次登榜《财富》中国500强第429名。',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="180"%3E%3Crect fill="%2300A3E0" width="280" height="180"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3E财报发布%3C/text%3E%3C/svg%3E',
            date: '2024-10-29',
            category: '财务公告',
            link: '#news-2'
        },
        {
            id: 3,
            title: '软通动力荣登"2025北京民营企业百强"等多项榜单',
            summary: '凭借卓越的综合实力与持续的产业贡献，成功入选多项荣誉榜单，展现行业领先地位。',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="180"%3E%3Crect fill="%23667EEA" width="280" height="180"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle"%3E荣誉奖项%3C/text%3E%3C/svg%3E',
            date: '2024-09-19',
            category: '企业荣誉',
            link: '#news-3'
        }
    ]
};

// 导航菜单数据
const menuData = [
    {
        id: 'services-tech',
        label: '软件与数字技术服务',
        url: '#services-tech',
        children: [
            {
                id: 'consulting',
                label: '咨询与解决方案',
                children: [
                    { id: 'solution-1', label: '软通咨询', url: '#solution-consulting' },
                    { id: 'solution-2', label: '财务公司整合型全局解决方案', url: '#solution-finance' },
                    { id: 'solution-3', label: '集团司库解决方案', url: '#solution-treasury' },
                    { id: 'solution-4', label: 'AI端云一体化解决方案', url: '#solution-ai' },
                    { id: 'solution-5', label: '工业元宇宙解决方案', url: '#solution-metaverse' }
                ]
            },
            {
                id: 'digital-tech',
                label: '数字技术服务',
                children: [
                    { id: 'tech-1', label: '云智能', url: '#tech-cloud' },
                    { id: 'tech-2', label: '信创及开源', url: '#tech-opensource' },
                    { id: 'tech-3', label: '工业互联网', url: '#tech-iot' },
                    { id: 'tech-4', label: 'AI及大模型应用', url: '#tech-ai' },
                    { id: 'tech-5', label: '数据服务与数据要素应用', url: '#tech-data' }
                ]
            }
        ]
    }
];
