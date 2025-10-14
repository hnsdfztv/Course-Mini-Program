// pages/achievement/achievement.js
const app = getApp()

Page({
    data: {
        categories: ['全部', '贸易成就', '投资成果', '区域发展', '创新开放'],
        activeCategory: 0,
        achievementData: [
            {
                id: 1,
                category: '贸易成就',
                title: '对外贸易跨越式发展',
                icon: '📈',
                mainData: {
                    value: '41.76',
                    unit: '万亿元',
                    desc: '2023年货物贸易进出口总额'
                },
                highlights: [
                    { label: '全球排名', value: '第1位', trend: 'up' },
                    { label: '贸易伙伴', value: '230+', trend: 'up' },
                    { label: '同比增长', value: '0.2%', trend: 'stable' }
                ],
                details: '中国已连续7年保持全球第一货物贸易大国地位，对外贸易实现了历史性跨越。贸易结构持续优化，高技术、高附加值产品出口占比不断提升。',
                charts: {
                    type: 'line',
                    years: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    values: [30.51, 31.54, 32.16, 39.10, 42.07, 41.76]
                }
            },
            {
                id: 2,
                category: '投资成果',
                title: '外商投资持续增长',
                icon: '💰',
                mainData: {
                    value: '1891.6',
                    unit: '亿美元',
                    desc: '2023年实际使用外资'
                },
                highlights: [
                    { label: '高技术产业', value: '+9.5%', trend: 'up' },
                    { label: '服务业', value: '+10.1%', trend: 'up' },
                    { label: '制造业', value: '+6.5%', trend: 'up' }
                ],
                details: '中国持续优化营商环境，外商投资信心不断增强。高技术产业和服务业成为外资增长的主要动力，彰显了中国经济的韧性和潜力。',
                charts: {
                    type: 'bar',
                    years: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    values: [1383, 1412, 1630, 1735, 1891, 1892]
                }
            },
            {
                id: 3,
                category: '区域发展',
                title: '"一带一路"建设成果丰硕',
                icon: '🌍',
                mainData: {
                    value: '19.47',
                    unit: '万亿元',
                    desc: '2023年与沿线国家贸易额'
                },
                highlights: [
                    { label: '合作国家', value: '150+', trend: 'up' },
                    { label: '同比增长', value: '+5.4%', trend: 'up' },
                    { label: '中欧班列', value: '7万+列', trend: 'up' }
                ],
                details: '"一带一路"倡议已成为当今世界范围最广、规模最大的国际合作平台。累计开行中欧班列超7万列，开辟了亚欧陆路物流新通道。',
                charts: {
                    type: 'line',
                    years: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    values: [12.37, 13.64, 14.24, 16.13, 18.47, 19.47]
                }
            },
            {
                id: 4,
                category: '创新开放',
                title: '自贸试验区引领改革开放',
                icon: '🚀',
                mainData: {
                    value: '21',
                    unit: '个',
                    desc: '自贸试验区数量'
                },
                highlights: [
                    { label: '制度创新', value: '278项', trend: 'up' },
                    { label: '覆盖省份', value: '21个', trend: 'up' },
                    { label: '外资占比', value: '18.4%', trend: 'up' }
                ],
                details: '自贸试验区以不到全国千分之四的国土面积，贡献了全国18.4%的外商投资和17.9%的进出口贸易，成为新时代改革开放新高地。',
                charts: {
                    type: 'growth',
                    data: [
                        { year: '2013', count: 1, name: '上海' },
                        { year: '2015', count: 4, name: '扩展至4个' },
                        { year: '2017', count: 11, name: '扩展至11个' },
                        { year: '2019', count: 18, name: '扩展至18个' },
                        { year: '2020', count: 21, name: '达到21个' }
                    ]
                }
            },
            {
                id: 5,
                category: '贸易成就',
                title: 'RCEP生效推动区域经济一体化',
                icon: '🤝',
                mainData: {
                    value: '12.95',
                    unit: '万亿元',
                    desc: '2023年与RCEP成员国贸易额'
                },
                highlights: [
                    { label: '成员国数', value: '15个', trend: 'stable' },
                    { label: '人口占比', value: '30%', trend: 'stable' },
                    { label: 'GDP占比', value: '30%', trend: 'stable' }
                ],
                details: 'RCEP是全球最大的自由贸易协定，涵盖约23亿人口。协定生效以来，区域内贸易投资自由化便利化水平显著提升。',
                charts: {
                    type: 'pie',
                    data: [
                        { name: 'RCEP成员', value: 46.3 },
                        { name: '欧盟', value: 15.6 },
                        { name: '美国', value: 11.8 },
                        { name: '其他', value: 26.3 }
                    ]
                }
            },
            {
                id: 6,
                category: '创新开放',
                title: '服务贸易创新发展',
                icon: '💼',
                mainData: {
                    value: '6.57',
                    unit: '万亿元',
                    desc: '2023年服务贸易进出口总额'
                },
                highlights: [
                    { label: '全球排名', value: '第2位', trend: 'stable' },
                    { label: '同比增长', value: '+10%', trend: 'up' },
                    { label: '数字服务', value: '+15.2%', trend: 'up' }
                ],
                details: '中国服务贸易持续快速增长，数字服务、知识密集型服务贸易成为新的增长点，服务贸易结构不断优化。',
                charts: {
                    type: 'bar',
                    years: ['2018', '2019', '2020', '2021', '2022', '2023'],
                    values: [5.24, 5.42, 4.61, 5.30, 5.98, 6.57]
                }
            }
        ],
        filteredData: []
    },

    onLoad() {
        this.filterData(0)
    },

    // 切换分类
    switchCategory(e) {
        const index = e.currentTarget.dataset.index
        this.setData({
            activeCategory: index
        })
        this.filterData(index)
    },

    // 筛选数据
    filterData(categoryIndex) {
        const category = this.data.categories[categoryIndex]
        let filtered = this.data.achievementData

        if (category !== '全部') {
            filtered = this.data.achievementData.filter(item => item.category === category)
        }

        this.setData({
            filteredData: filtered
        })
    },

    // 查看详情
    viewDetail(e) {
        const id = e.currentTarget.dataset.id
        // 记录学习进度
        app.saveLearningProgress('achievementViewed', id)

        wx.navigateTo({
            url: `/pages/detail/detail?type=achievement&id=${id}`
        })
    },

    // 分享功能
    onShareAppMessage() {
        return {
            title: '对外开放经济发展成果',
            path: '/pages/achievement/achievement'
        }
    }
})
