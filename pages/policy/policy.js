// pages/policy/policy.js
const app = getApp()

Page({
    data: {
        tabs: ['全部', '一带一路', '自贸区', '开放政策', '贸易合作'],
        activeTab: 0,
        policyList: [
            {
                id: 1,
                category: '一带一路',
                title: '共建"一带一路"倡议',
                summary: '习近平主席提出的重大国际合作倡议，旨在推动沿线各国实现经济政策协调，开展更大范围、更高水平、更深层次的区域合作。',
                content: '"一带一路"倡议自2013年提出以来，已经成为当今世界范围最广、规模最大的国际合作平台。截至目前，已有150多个国家和30多个国际组织与中国签署合作文件。倡议坚持共商共建共享原则，推动政策沟通、设施联通、贸易畅通、资金融通、民心相通，为构建人类命运共同体注入了强大动力。',
                keyPoints: ['政策沟通', '设施联通', '贸易畅通', '资金融通', '民心相通'],
                date: '2013-09',
                impact: '促进了全球经济增长，为世界经济复苏注入新动力',
                readCount: 2580
            },
            {
                id: 2,
                category: '自贸区',
                title: '中国自由贸易试验区建设',
                summary: '自贸试验区是新时代改革开放的新高地，承担着为全面深化改革和扩大开放探索新途径、积累新经验的重要使命。',
                content: '自2013年上海自贸试验区设立以来，我国已在全国设立21个自贸试验区，形成了覆盖东西南北中的改革开放创新格局。自贸试验区坚持以制度创新为核心，聚焦投资、贸易、金融、事中事后监管等领域，形成了一大批可复制可推广的制度创新成果。',
                keyPoints: ['制度创新', '投资自由化', '贸易便利化', '金融开放', '政府职能转变'],
                date: '2013-08',
                impact: '累计形成278项制度创新成果向全国复制推广',
                readCount: 1920
            },
            {
                id: 3,
                category: '开放政策',
                title: '外商投资法及其实施条例',
                summary: '构建更加开放透明的外商投资环境，保护外商投资合法权益，推动形成全面开放新格局。',
                content: '《外商投资法》于2020年1月1日起施行，确立了我国新型外商投资法律制度的基本框架。该法坚持内外资一致原则，实行准入前国民待遇加负面清单管理制度，大幅放宽市场准入，保护外商投资合法权益。外商投资准入负面清单不断缩减，开放领域持续扩大。',
                keyPoints: ['准入前国民待遇', '负面清单管理', '投资保护', '投资促进', '法治化营商环境'],
                date: '2019-03',
                impact: '外商投资环境持续优化，投资自由化便利化水平显著提升',
                readCount: 1650
            },
            {
                id: 4,
                category: '贸易合作',
                title: 'RCEP区域全面经济伙伴关系协定',
                summary: '全球最大的自由贸易协定，标志着东亚区域经济一体化达到新高度。',
                content: 'RCEP于2022年1月1日正式生效，涵盖15个成员国，总人口约23亿，GDP约26万亿美元，出口总额约5.2万亿美元，均占全球总量约30%。协定通过削减关税、开放市场、减少标准壁垒，推动区域内经济要素自由流动，有力促进了区域经济一体化进程。',
                keyPoints: ['关税减让', '市场准入', '贸易便利化', '经济一体化', '互利共赢'],
                date: '2022-01',
                impact: '为区域和全球经济增长注入强劲动力',
                readCount: 2100
            },
            {
                id: 5,
                category: '开放政策',
                title: '海南自由贸易港建设',
                summary: '中国特色自由贸易港，打造引领中国新时代对外开放的鲜明旗帜和重要开放门户。',
                content: '海南自由贸易港建设是习近平总书记亲自谋划、亲自部署、亲自推动的重大国家战略。按照"分步骤、分阶段"建设目标，到2025年初步建立以贸易自由便利和投资自由便利为重点的自由贸易港政策制度体系，到2035年成为我国开放型经济新高地。',
                keyPoints: ['零关税', '低税率', '简税制', '贸易投资自由化', '数据跨境流动'],
                date: '2020-06',
                impact: '打造新时代改革开放新高地',
                readCount: 1880
            },
            {
                id: 6,
                category: '一带一路',
                title: '中欧班列国际合作',
                summary: '连接中国与欧洲及沿线国家的国际铁路联运班列，推动陆海内外联动、东西双向互济的开放格局。',
                content: '中欧班列自2011年开行以来，已成为"一带一路"建设的标志性成果。截至2023年底，中欧班列累计开行超过7万列，通达欧洲25个国家200多个城市，运输货物超过650万标箱。疫情期间，中欧班列逆势增长，成为稳定国际供应链的"钢铁驼队"。',
                keyPoints: ['互联互通', '物流通道', '经贸合作', '产业链供应链', '国际运输'],
                date: '2011-03',
                impact: '打通亚欧陆路物流新通道，促进沿线国家经贸往来',
                readCount: 1560
            }
        ],
        filteredList: [],
        showDetail: false,
        currentPolicy: null
    },

    onLoad() {
        this.filterPolicyList(0)
    },

    // 切换标签
    switchTab(e) {
        const index = e.currentTarget.dataset.index
        this.setData({
            activeTab: index
        })
        this.filterPolicyList(index)
    },

    // 筛选政策列表
    filterPolicyList(tabIndex) {
        const category = this.data.tabs[tabIndex]
        let filtered = this.data.policyList

        if (category !== '全部') {
            filtered = this.data.policyList.filter(item => item.category === category)
        }

        this.setData({
            filteredList: filtered
        })
    },

    // 查看政策详情
    viewDetail(e) {
        const id = e.currentTarget.dataset.id
        const policy = this.data.policyList.find(item => item.id === id)

        // 记录学习进度
        app.saveLearningProgress('policyRead', id)

        wx.navigateTo({
            url: `/pages/detail/detail?type=policy&id=${id}`
        })
    },

    // 分享功能
    onShareAppMessage() {
        return {
            title: '对外开放政策学习',
            path: '/pages/policy/policy'
        }
    }
})
