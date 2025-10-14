// pages/detail/detail.js
const app = getApp();
const { detailContent } = require('../../static/data/detail-content.js');

Page({
    data: {
        type: '',
        id: 0,
        detailData: null,
        loading: true
    },

    onLoad(options) {
        const { type, id } = options
        if (type && id) {
            this.setData({
                type: type,
                id: parseInt(id)
            })
            this.loadDetail()
        } else {
            wx.showToast({
                title: '参数错误',
                icon: 'none'
            })
            setTimeout(() => {
                wx.navigateBack()
            }, 1500)
        }
    },

    loadDetail() {
        const { type, id } = this.data;
        let detailData = null;

        try {
            switch (type) {
                case 'idea':
                    // 加载核心理念详情
                    detailData = detailContent.ideas[id];
                    break;

                case 'news':
                    // 加载新闻详情
                    detailData = detailContent.news[id];
                    break;

                case 'policy':
                    // 加载政策详情
                    detailData = this.getPolicyDetail(id);
                    break;

                case 'achievement':
                    // 加载成就详情
                    detailData = this.getAchievementDetail(id);
                    break;

                default:
                    throw new Error('未知的详情类型');
            }

            if (detailData) {
                this.setData({
                    detailData,
                    loading: false
                });

                // 记录学习进度
                this.recordLearningProgress();
            } else {
                throw new Error('未找到对应的详情数据');
            }
        } catch (error) {
            console.error('加载详情失败:', error);
            wx.showToast({
                title: '加载失败',
                icon: 'none'
            });
            this.setData({
                loading: false
            });
        }
    },

    getPolicyDetail(id) {
        // 政策详情数据
        const policyList = [
            {
                id: 1,
                title: '共建"一带一路"倡议',
                subtitle: '推动构建人类命运共同体的实践平台',
                icon: '🚂',
                date: '2013年提出',
                sections: [
                    {
                        subtitle: '倡议内容',
                        text: '"一带一路"是"丝绸之路经济带"和"21世纪海上丝绸之路"的简称，旨在借用古代丝绸之路的历史符号，高举和平发展的旗帜，积极发展与沿线国家的经济合作伙伴关系，共同打造政治互信、经济融合、文化包容的利益共同体、命运共同体和责任共同体。'
                    },
                    {
                        subtitle: '合作框架',
                        text: '以政策沟通、设施联通、贸易畅通、资金融通、民心相通为主要内容，推动亚洲、欧洲和非洲的经济合作与文化交流。已有150多个国家和30多个国际组织签署合作文件。'
                    },
                    {
                        subtitle: '实施成效',
                        text: '截至2024年，中欧班列累计开行超过7万列，通达欧洲25个国家200多个城市。与"一带一路"沿线国家贸易额达到19.47万亿元，占我国外贸总值的44.4%。'
                    }
                ],
                tags: ['一带一路', '互联互通', '国际合作']
            },
            {
                id: 2,
                title: '自由贸易试验区建设',
                subtitle: '改革开放的试验田和新高地',
                icon: '🏛️',
                date: '2013年起',
                sections: [
                    {
                        subtitle: '战略定位',
                        text: '自贸试验区是党中央在新时代推进改革开放的一项战略举措，承担着为全面深化改革和扩大开放探索新途径、积累新经验的重要使命。'
                    },
                    {
                        subtitle: '发展历程',
                        text: '从2013年上海自贸试验区设立开始，到2024年已设立21个自贸试验区，形成覆盖东西南北中的改革开放创新格局。海南自由贸易港建设稳步推进，正在打造引领我国新时代对外开放的鲜明旗帜。'
                    },
                    {
                        subtitle: '改革成效',
                        text: '2024年，21个自贸试验区合计进出口8.45万亿元，增长10.3%。累计向全国复制推广制度创新成果300多项，在投资管理、贸易便利化、金融开放创新、事中事后监管等领域形成了一批可复制可推广的经验。'
                    }
                ],
                tags: ['自贸区', '制度创新', '先行先试']
            },
            {
                id: 3,
                title: '《区域全面经济伙伴关系协定》(RCEP)',
                subtitle: '全球最大的自由贸易区',
                icon: '🌏',
                date: '2022年生效',
                sections: [
                    {
                        subtitle: '协定概况',
                        text: 'RCEP于2020年11月15日签署，2022年1月1日正式生效，成员包括东盟10国和中国、日本、韩国、澳大利亚、新西兰。这是全球规模最大、最具潜力的自由贸易区。'
                    },
                    {
                        subtitle: '开放水平',
                        text: 'RCEP通过相互开放市场、降低关税、取消壁垒，推动区域内经济要素自由流动。中国在货物贸易、服务贸易、投资等领域作出高水平开放承诺，为区域经济一体化注入强劲动力。'
                    },
                    {
                        subtitle: '运行成效',
                        text: '运行3年以来,RCEP区域内贸易总额达到5.7万亿美元，吸引外商直接投资和对外直接投资全球占比均超过30%。到2030年，RCEP区域有望贡献全球约32.7%的经济增长。'
                    }
                ],
                tags: ['RCEP', '区域合作', '自由贸易']
            },
            {
                id: 4,
                title: '跨境电商综合试验区',
                subtitle: '培育外贸新业态新模式',
                icon: '📦',
                date: '2015年起',
                sections: [
                    {
                        subtitle: '政策背景',
                        text: '跨境电商综合试验区是国务院批准设立的跨境电商先行先试城市区域，旨在探索建立适应跨境电商发展的新型监管服务模式，促进跨境电商健康发展。'
                    },
                    {
                        subtitle: '试点布局',
                        text: '从2015年在杭州设立首个综试区开始，已经分7批在全国设立165个跨境电商综合试验区，基本覆盖全国，形成了陆海内外联动、东西双向互济的发展格局。'
                    },
                    {
                        subtitle: '创新成果',
                        text: '2024年，我国跨境电商进出口2.63万亿元，增长10.8%。综试区在监管服务、政策支持、平台建设等方面不断创新，"网购保税+线下自提"等新模式广受欢迎。'
                    }
                ],
                tags: ['跨境电商', '数字贸易', '新业态']
            },
            {
                id: 5,
                title: '外商投资准入负面清单',
                subtitle: '以开放促改革促发展',
                icon: '📋',
                date: '持续优化',
                sections: [
                    {
                        subtitle: '制度创新',
                        text: '外商投资准入负面清单制度是我国扩大对外开放的重要举措，实行"非禁即入"管理模式，清单之外的领域按照内外资一致原则实施管理。'
                    },
                    {
                        subtitle: '开放进程',
                        text: '全国版外商投资准入负面清单已从2017年的63条缩减至2024年的27条，自贸试验区版从2017年的95条缩减至2024年的23条，制造业已基本全面开放，服务业开放持续扩大。'
                    },
                    {
                        subtitle: '投资环境',
                        text: '负面清单管理制度的实施，大幅提升了外商投资便利化水平，增强了外资企业在华投资信心。2024年，我国实际使用外资规模保持全球前列，高技术产业吸引外资持续增长。'
                    }
                ],
                tags: ['负面清单', '外商投资', '营商环境']
            }
        ];

        return policyList.find(p => p.id === id);
    },

    getAchievementDetail(id) {
        // 成就详情数据
        const achievementList = [
            {
                id: 1,
                title: '货物贸易规模',
                subtitle: '连续8年保持全球第一',
                icon: '📈',
                value: '43.85万亿元',
                year: '2024年',
                sections: [
                    {
                        subtitle: '历史突破',
                        text: '2024年，我国货物贸易进出口总值43.85万亿元人民币，同比增长5%，规模再创历史新高。其中，出口25.45万亿元，增长7.1%；进口18.39万亿元，增长2.3%。这是我国连续8年保持全球第一货物贸易大国地位。'
                    },
                    {
                        subtitle: '增长动能',
                        text: '外贸实现了总量、增量、质量的"三量"齐升。民营企业进出口占比提升至55.4%，成为外贸稳定增长的重要力量。机电产品出口占比达到59.3%，展现出较强的国际竞争力。'
                    },
                    {
                        subtitle: '全球贡献',
                        text: '我国货物贸易的稳定增长为全球经济复苏和贸易发展注入了强劲动力，为全球产业链供应链稳定畅通作出了重要贡献。'
                    }
                ],
                tags: ['货物贸易', '出口', '全球第一']
            },
            {
                id: 2,
                title: 'RCEP区域贸易',
                subtitle: '全球最大自贸区成效显著',
                icon: '🌏',
                value: '5.7万亿美元',
                year: '2024年',
                sections: [
                    {
                        subtitle: '合作成果',
                        text: 'RCEP运行3年以来，区域内贸易总额达到5.7万亿美元，吸引外商直接投资和对外直接投资全球占比均超过30%。成为区域经贸发展的"压舱石"和"稳定器"。'
                    },
                    {
                        subtitle: '关税优惠',
                        text: '2024年，我国企业申领RCEP原产地证书119.4万份，货值5636.7亿元。进口享惠货值1877.5亿元，减让关税23.5亿元。RCEP成员国给予我国出口产品关税优惠54.2亿元。'
                    },
                    {
                        subtitle: '未来潜力',
                        text: '据国际货币基金组织测算，到2030年，RCEP区域有望贡献全球约32.7%的经济增长，发展前景广阔。'
                    }
                ],
                tags: ['RCEP', '区域合作', '自由贸易']
            },
            {
                id: 3,
                title: '综合保税区发展',
                subtitle: '高水平开放平台',
                icon: '🏛️',
                value: '6.7万亿元',
                year: '2024年',
                sections: [
                    {
                        subtitle: '平台优势',
                        text: '综合保税区是我国开放程度最高、优惠政策最集中、功能最齐全的海关特殊监管区域。167个综合保税区分布在全国31个省区市，在促进制度型开放和产业转型升级方面发挥了重要作用。'
                    },
                    {
                        subtitle: '发展成效',
                        text: '2024年，综合保税区合计进出口6.7万亿元，增长4.7%。平均一个足球场大小的面积就贡献了超过1亿元的进出口，单位面积产出效益显著。'
                    },
                    {
                        subtitle: '创新功能',
                        text: '综合保税区不断拓展保税加工、保税物流、保税服务等功能，成为吸引外资、促进产业集聚、推动转型升级的重要平台。'
                    }
                ],
                tags: ['综合保税区', '制度创新', '产业升级']
            },
            {
                id: 4,
                title: '跨境电商快速增长',
                subtitle: '数字贸易蓬勃发展',
                icon: '📦',
                value: '2.63万亿元',
                year: '2024年',
                sections: [
                    {
                        subtitle: '高速增长',
                        text: '2024年，我国跨境电商进出口2.63万亿元，增长10.8%。跨境电商作为数字贸易的重要组成部分，展现出强劲的发展势头。'
                    },
                    {
                        subtitle: '双向发展',
                        text: '跨境电商在"卖全球"方面潜力进一步释放，中国制造通过跨境电商平台走向世界各地。同时在"买全球"方面的优势也在持续发挥，为国内消费者带来更多优质进口商品。'
                    },
                    {
                        subtitle: '新型基础设施',
                        text: '全国已设立165个跨境电商综合试验区，建设了一批海外仓，构建起覆盖全球的跨境电商服务网络，为外贸高质量发展注入新动能。'
                    }
                ],
                tags: ['跨境电商', '数字贸易', '新动能']
            }
        ];

        return achievementList.find(a => a.id === id);
    },

    recordLearningProgress() {
        // 记录学习进度到全局状态
        try {
            const progress = app.getLearningProgress();
            const { type, id } = this.data;
            const key = `${type}_${id}`;

            if (!progress[key]) {
                progress[key] = {
                    type,
                    id,
                    title: this.data.detailData.title,
                    timestamp: new Date().getTime()
                };
                app.saveLearningProgress(progress);
            }
        } catch (error) {
            console.error('记录学习进度失败:', error);
        }
    },

    backToHome() {
        wx.switchTab({
            url: '/pages/index/index'
        });
    },

    onShareAppMessage() {
        const { detailData } = this.data;
        return {
            title: detailData ? detailData.title : '学习扩大对外开放知识',
            path: `/pages/detail/detail?type=${this.data.type}&id=${this.data.id}`
        };
    }
});
