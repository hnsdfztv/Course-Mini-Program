// pages/index/index.js
const app = getApp()

Page({
    data: {
        bannerList: [
            {
                id: 1,
                title: '习近平新时代中国特色社会主义思想',
                subtitle: '坚持对外开放基本国策',
                image: '/static/images/banner1.jpg'
            },
            {
                id: 2,
                title: '一带一路倡议',
                subtitle: '推动构建人类命运共同体',
                image: '/static/images/banner2.jpg'
            },
            {
                id: 3,
                title: '高水平对外开放',
                subtitle: '共建开放型世界经济',
                image: '/static/images/banner3.jpg'
            }
        ],
        currentBanner: 0,
        coreIdeas: [
            {
                id: 1,
                icon: '🌏',
                title: '构建人类命运共同体',
                desc: '推动建设相互尊重、公平正义、合作共赢的新型国际关系'
            },
            {
                id: 2,
                icon: '🚂',
                title: '共建"一带一路"',
                desc: '打造国际合作新平台，增添共同发展新动力'
            },
            {
                id: 3,
                icon: '🔓',
                title: '全面扩大开放',
                desc: '推进高水平对外开放，形成更高水平开放型经济新体制'
            },
            {
                id: 4,
                icon: '🤝',
                title: '互利共赢开放战略',
                desc: '坚持引进来和走出去并重，推动形成陆海内外联动、东西双向互济的开放格局'
            }
        ],
        quickLinks: [
            {
                id: 1,
                icon: '📖',
                title: '开放政策',
                desc: '学习对外开放政策',
                url: '/pages/policy/policy',
                color: '#FF6B6B'
            },
            {
                id: 2,
                icon: '📊',
                title: '发展成果',
                desc: '了解经济发展成就',
                url: '/pages/achievement/achievement',
                color: '#4ECDC4'
            },
            {
                id: 3,
                icon: '✍️',
                title: '知识测验',
                desc: '检验学习效果',
                url: '/pages/quiz/quiz',
                color: '#95E1D3'
            }
        ],
        latestNews: [
            {
                id: 1,
                title: '中国对外贸易持续增长，进出口总额创历史新高',
                date: '2024-10-10',
                tag: '贸易数据'
            },
            {
                id: 2,
                title: '自贸试验区扩容，改革开放新高地不断涌现',
                date: '2024-10-08',
                tag: '自贸区'
            },
            {
                id: 3,
                title: '"一带一路"倡议成果丰硕，合作伙伴达150多个国家',
                date: '2024-10-05',
                tag: '一带一路'
            }
        ]
    },

    onLoad() {
        this.startBannerAutoPlay()
    },

    onUnload() {
        if (this.bannerTimer) {
            clearInterval(this.bannerTimer)
        }
    },

    // 轮播图自动播放
    startBannerAutoPlay() {
        this.bannerTimer = setInterval(() => {
            const next = (this.data.currentBanner + 1) % this.data.bannerList.length
            this.setData({
                currentBanner: next
            })
        }, 3000)
    },

    // 轮播图切换
    onBannerChange(e) {
        this.setData({
            currentBanner: e.detail.current
        })
    },

    // 导航到快捷入口
    navigateToPage(e) {
        const url = e.currentTarget.dataset.url
        wx.navigateTo({
            url: url
        })
    },

    // 查看核心理念详情
    viewIdeaDetail(e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: `/pages/detail/detail?type=idea&id=${id}`
        })
    },

    // 查看新闻详情
    viewNewsDetail(e) {
        const id = e.currentTarget.dataset.id
        wx.navigateTo({
            url: `/pages/detail/detail?type=news&id=${id}`
        })
    },

    // 分享功能
    onShareAppMessage() {
        return {
            title: '对外开放与经济发展学习平台',
            path: '/pages/index/index',
            imageUrl: '/static/images/share.jpg'
        }
    }
})
