// static/data/quiz-questions.js
// 对外开放与经济发展知识题库

const quizQuestions = [
    {
        id: 1,
        question: '习近平主席提出"一带一路"倡议是在哪一年？',
        options: ['2012年', '2013年', '2014年', '2015年'],
        correctAnswer: 1,
        explanation: '"一带一路"倡议由习近平主席于2013年提出，旨在推动沿线各国实现经济政策协调，开展更大范围、更高水平、更深层次的区域合作。',
        difficulty: 'easy'
    },
    {
        id: 2,
        question: '2024年中国货物贸易进出口总值达到多少万亿元人民币？',
        options: ['39.10万亿', '41.76万亿', '43.85万亿', '45.20万亿'],
        correctAnswer: 2,
        explanation: '2024年，我国外贸实现总量、增量、质量的"三量"齐升，全年进出口总值达到43.85万亿元人民币，同比增长5%，规模再创历史新高。',
        difficulty: 'medium'
    },
    {
        id: 3,
        question: '截至目前，中国已设立多少个自由贸易试验区？',
        options: ['11个', '18个', '21个', '25个'],
        correctAnswer: 2,
        explanation: '自2013年上海自贸试验区设立以来，我国已在全国设立21个自贸试验区，形成了覆盖东西南北中的改革开放创新格局。',
        difficulty: 'easy'
    },
    {
        id: 4,
        question: '以下哪项不是"一带一路"倡议的"五通"内容？',
        options: ['政策沟通', '设施联通', '技术互通', '民心相通'],
        correctAnswer: 2,
        explanation: '"一带一路"倡议强调"五通"：政策沟通、设施联通、贸易畅通、资金融通、民心相通。',
        difficulty: 'medium'
    },
    {
        id: 5,
        question: '中国连续多少年保持全球第一货物贸易大国地位？',
        options: ['5年', '6年', '7年', '8年'],
        correctAnswer: 3,
        explanation: '中国已连续8年保持全球第一货物贸易大国地位，对外贸易实现了历史性跨越。',
        difficulty: 'easy'
    },
    {
        id: 6,
        question: 'RCEP区域全面经济伙伴关系协定何时正式生效？',
        options: ['2020年1月1日', '2021年1月1日', '2022年1月1日', '2023年1月1日'],
        correctAnswer: 2,
        explanation: 'RCEP于2022年1月1日正式生效，标志着全球最大的自由贸易协定正式启动。',
        difficulty: 'easy'
    },
    {
        id: 7,
        question: '海南自由贸易港建设的目标是到2035年成为什么？',
        options: ['国际金融中心', '我国开放型经济新高地', '全球贸易枢纽', '世界旅游目的地'],
        correctAnswer: 1,
        explanation: '按照规划，到2035年海南自由贸易港将成为我国开放型经济新高地。',
        difficulty: 'medium'
    },
    {
        id: 8,
        question: '以下哪项是习近平新时代对外开放思想的核心理念？',
        options: ['单边主义', '保护主义', '构建人类命运共同体', '以邻为壑'],
        correctAnswer: 2,
        explanation: '构建人类命运共同体是习近平新时代中国特色社会主义思想的重要组成部分，体现了中国对外开放的核心理念。',
        difficulty: 'easy'
    },
    {
        id: 9,
        question: '《外商投资法》于哪一年开始施行？',
        options: ['2018年', '2019年', '2020年', '2021年'],
        correctAnswer: 2,
        explanation: '《外商投资法》于2020年1月1日起施行，确立了我国新型外商投资法律制度的基本框架。',
        difficulty: 'easy'
    },
    {
        id: 10,
        question: '中欧班列累计开行超过多少列？',
        options: ['5万列', '6万列', '7万列', '8万列'],
        correctAnswer: 2,
        explanation: '截至2023年底，中欧班列累计开行超过7万列，成为"一带一路"建设的标志性成果。',
        difficulty: 'medium'
    },
    {
        id: 11,
        question: 'RCEP涵盖多少个成员国？',
        options: ['10个', '12个', '15个', '18个'],
        correctAnswer: 2,
        explanation: 'RCEP涵盖15个成员国，包括东盟10国和中国、日本、韩国、澳大利亚、新西兰。',
        difficulty: 'easy'
    },
    {
        id: 12,
        question: '中国正式加入世界贸易组织（WTO）是在哪一年？',
        options: ['1999年', '2000年', '2001年', '2002年'],
        correctAnswer: 2,
        explanation: '中国于2001年12月11日正式加入世界贸易组织，标志着对外开放进入新阶段。',
        difficulty: 'easy'
    },
    {
        id: 13,
        question: '2024年我国出口规模首次突破多少万亿元？',
        options: ['20万亿', '22万亿', '25万亿', '28万亿'],
        correctAnswer: 2,
        explanation: '2024年，我国出口规模首次突破25万亿元，达到25.45万亿元，同比增长7.1%，连续8年保持增长。',
        difficulty: 'medium'
    },
    {
        id: 14,
        question: '全国有多少个综合保税区？',
        options: ['120个', '145个', '167个', '185个'],
        correctAnswer: 2,
        explanation: '目前，167个综合保税区分布在我国31个省区市，在促进制度型开放和产业转型升级方面发挥了重要作用。',
        difficulty: 'medium'
    },
    {
        id: 15,
        question: '2024年跨境电商进出口总额达到多少万亿元？',
        options: ['1.85万亿', '2.15万亿', '2.63万亿', '3.12万亿'],
        correctAnswer: 2,
        explanation: '根据初步统计，2024年，我国跨境电商进出口2.63万亿元，增长10.8%。',
        difficulty: 'medium'
    },
    {
        id: 16,
        question: '构建人类命运共同体的"五个世界"不包括以下哪项？',
        options: ['持久和平的世界', '普遍安全的世界', '共同繁荣的世界', '军事同盟的世界'],
        correctAnswer: 3,
        explanation: '构建人类命运共同体的"五个世界"是：持久和平、普遍安全、共同繁荣、开放包容、清洁美丽的世界。',
        difficulty: 'medium'
    },
    {
        id: 17,
        question: '到2030年，中国自发展中国家累计进口有望超过多少美元？',
        options: ['5万亿', '6万亿', '8万亿', '10万亿'],
        correctAnswer: 2,
        explanation: '到2030年，仅自发展中国家累计进口就有望超过8万亿美元。',
        difficulty: 'hard'
    },
    {
        id: 18,
        question: '2024年RCEP区域内贸易总额达到多少万亿美元？',
        options: ['4.2万亿', '5.0万亿', '5.7万亿', '6.5万亿'],
        correctAnswer: 2,
        explanation: '2024年，RCEP区域内贸易总额达到5.7万亿美元，吸引外商直接投资和对外直接投资全球占比均超过30%。',
        difficulty: 'medium'
    },
    {
        id: 19,
        question: '以下哪个不是改革开放初期设立的经济特区？',
        options: ['深圳', '珠海', '厦门', '上海'],
        correctAnswer: 3,
        explanation: '改革开放初期设立的经济特区包括深圳、珠海、汕头、厦门和海南。上海不是最早的经济特区。',
        difficulty: 'easy'
    },
    {
        id: 20,
        question: '习近平总书记强调，中国开放的大门会怎样？',
        options: ['视情况而定', '不会关闭，只会越开越大', '适度开放', '有选择性开放'],
        correctAnswer: 1,
        explanation: '习近平总书记多次强调："中国开放的大门不会关闭，只会越开越大。"',
        difficulty: 'easy'
    },
    {
        id: 21,
        question: '"一带一路"倡议已有多少个国家和国际组织签署合作文件？',
        options: ['100多个', '120多个', '150多个', '180多个'],
        correctAnswer: 2,
        explanation: '截至目前，已有150多个国家和30多个国际组织与中国签署"一带一路"合作文件。',
        difficulty: 'medium'
    },
    {
        id: 22,
        question: '自贸试验区累计形成多少项制度创新成果向全国复制推广？',
        options: ['180项', '220项', '278项', '315项'],
        correctAnswer: 2,
        explanation: '自贸试验区累计形成278项制度创新成果向全国复制推广。',
        difficulty: 'hard'
    },
    {
        id: 23,
        question: '2024年综合保税区进出口总额达到多少万亿元？',
        options: ['5.2万亿', '6.0万亿', '6.7万亿', '7.5万亿'],
        correctAnswer: 2,
        explanation: '2024年，综合保税区合计进出口6.7万亿元，增长4.7%。',
        difficulty: 'medium'
    },
    {
        id: 24,
        question: '以下哪项不是全球三大倡议之一？',
        options: ['全球发展倡议', '全球安全倡议', '全球文明倡议', '全球经济倡议'],
        correctAnswer: 3,
        explanation: '习近平总书记先后提出全球发展倡议、全球安全倡议和全球文明倡议，被称为"三大全球倡议"。',
        difficulty: 'medium'
    },
    {
        id: 25,
        question: '中国在全球服务贸易中排名第几？',
        options: ['第1位', '第2位', '第3位', '第4位'],
        correctAnswer: 1,
        explanation: '中国服务贸易排名全球第2位，持续快速增长。',
        difficulty: 'easy'
    },
    {
        id: 26,
        question: '到2030年，RCEP区域有望贡献全球约多少比例的经济增长？',
        options: ['25.5%', '28.3%', '32.7%', '36.8%'],
        correctAnswer: 2,
        explanation: '据国际货币基金组织测算，到2030年，RCEP区域有望贡献全球约32.7%的经济增长。',
        difficulty: 'hard'
    },
    {
        id: 27,
        question: '2024年电动汽车出口量首次突破多少万辆？',
        options: ['150万', '180万', '200万', '250万'],
        correctAnswer: 2,
        explanation: '2024年，电动汽车出口量首次突破200万辆，如果把这些汽车首尾相连，可以从北京到罗马。',
        difficulty: 'medium'
    },
    {
        id: 28,
        question: '构建人类命运共同体理念已连续多少年写入联大决议？',
        options: ['5年', '6年', '8年', '10年'],
        correctAnswer: 2,
        explanation: '构建人类命运共同体理念已连续8年写入联大决议，日益成为当今世界具有重大标识意义的国际公共产品。',
        difficulty: 'hard'
    },
    {
        id: 29,
        question: '以下哪个不是海南自由贸易港的政策特点？',
        options: ['零关税', '低税率', '简税制', '高补贴'],
        correctAnswer: 3,
        explanation: '海南自由贸易港的政策特点包括零关税、低税率、简税制、贸易投资自由化等。',
        difficulty: 'medium'
    },
    {
        id: 30,
        question: '中欧班列通达欧洲多少个国家？',
        options: ['15个', '20个', '25个', '30个'],
        correctAnswer: 2,
        explanation: '截至2023年底，中欧班列已通达欧洲25个国家200多个城市。',
        difficulty: 'medium'
    },
    {
        id: 31,
        question: '全球发展倡议动员了多少亿美元发展资金？',
        options: ['100亿', '150亿', '近200亿', '250亿'],
        correctAnswer: 2,
        explanation: '全球发展倡议动员近200亿美元发展资金，开展1100多个项目惠及多国民众。',
        difficulty: 'hard'
    },
    {
        id: 32,
        question: '《外商投资法》实行的管理制度是什么？',
        options: ['审批制', '核准制', '准入前国民待遇加负面清单', '注册制'],
        correctAnswer: 2,
        explanation: '《外商投资法》实行准入前国民待遇加负面清单管理制度，大幅放宽市场准入。',
        difficulty: 'medium'
    },
    {
        id: 33,
        question: '2024年自由贸易试验区进出口总额达到多少万亿元？',
        options: ['6.85万亿', '7.45万亿', '8.45万亿', '9.25万亿'],
        correctAnswer: 2,
        explanation: '2024年，自由贸易试验区合计进出口8.45万亿元，增长10.3%。',
        difficulty: 'medium'
    },
    {
        id: 34,
        question: '横琴粤澳深度合作区实施的管理政策是什么？',
        options: ['一国两制', '分线管理', '特区管理', '自由港管理'],
        correctAnswer: 1,
        explanation: '横琴粤澳深度合作区实施分线管理政策，有效推动了"琴澳一体化"。',
        difficulty: 'medium'
    },
    {
        id: 35,
        question: '以下哪项不是构建人类命运共同体的实现路径？',
        options: ['推动共商共建共享的全球治理', '践行全人类共同价值', '推动构建新型国际关系', '实施单边制裁'],
        correctAnswer: 3,
        explanation: '构建人类命运共同体的实现路径包括推动共商共建共享的全球治理、践行全人类共同价值、推动构建新型国际关系等。',
        difficulty: 'easy'
    },
    {
        id: 36,
        question: '浦东新区的开发开放始于哪一年？',
        options: ['1988年', '1990年', '1992年', '1995年'],
        correctAnswer: 1,
        explanation: '1990年，党中央、国务院决定开发开放上海浦东，这是20世纪90年代的关键事件。',
        difficulty: 'medium'
    },
    {
        id: 37,
        question: '中国国际进口博览会（CIIE）每年在哪里举办？',
        options: ['北京', '上海', '广州', '深圳'],
        correctAnswer: 1,
        explanation: '中国国际进口博览会每年在上海举办，是中国主动向世界开放市场的重大举措。',
        difficulty: 'easy'
    },
    {
        id: 38,
        question: '"开放带来进步，封闭必然落后"这一论断出自谁？',
        options: ['邓小平', '江泽民', '胡锦涛', '习近平'],
        correctAnswer: 3,
        explanation: '"开放带来进步，封闭必然落后"是习近平总书记关于对外开放的重要论述。',
        difficulty: 'easy'
    },
    {
        id: 39,
        question: '在构建"双循环"新发展格局中，对外开放的作用是什么？',
        options: ['可有可无', '次要地位', '战略支撑', '临时措施'],
        correctAnswer: 2,
        explanation: '高水平对外开放是构建"双循环"新发展格局的战略支撑和重要组成部分。',
        difficulty: 'medium'
    },
    {
        id: 40,
        question: '2024年海南自由贸易港进出口增长率是多少？',
        options: ['10%', '15%', '20%', '25%'],
        correctAnswer: 2,
        explanation: '海南自由贸易港建设稳步推进，2024年全年进出口2776.5亿元，增长20%。',
        difficulty: 'medium'
    },
    {
        id: 41,
        question: '全人类共同价值不包括以下哪项？',
        options: ['和平', '发展', '公平', '霸权'],
        correctAnswer: 3,
        explanation: '全人类共同价值包括和平、发展、公平、正义、民主、自由等。',
        difficulty: 'easy'
    },
    {
        id: 42,
        question: '中国促成沙特和伊朗恢复外交关系是在哪一年？',
        options: ['2021年', '2022年', '2023年', '2024年'],
        correctAnswer: 2,
        explanation: '2023年，中国成功斡旋沙特和伊朗恢复外交关系，为地区和平稳定作出重要贡献。',
        difficulty: 'medium'
    },
    {
        id: 43,
        question: '中国对外贸易在2024年四季度的增速是多少？',
        options: ['5.2%', '7.3%', '9.2%', '11.5%'],
        correctAnswer: 2,
        explanation: '2024年四季度出口增长9.2%，较前三季度加快了2.9个百分点。',
        difficulty: 'hard'
    },
    {
        id: 44,
        question: '以下哪个不是中国特色社会主义对外开放的基本原则？',
        options: ['互利共赢', '共同发展', '和平共处', '单边优先'],
        correctAnswer: 3,
        explanation: '中国特色社会主义对外开放坚持互利共赢、共同发展、和平共处等基本原则。',
        difficulty: 'easy'
    },
    {
        id: 45,
        question: '构建人类命运共同体科学体系的"四梁八柱"是在哪次会议上明确的？',
        options: ['党的二十大', '2023年中央外事工作会议', '2024年两会', '博鳌亚洲论坛'],
        correctAnswer: 1,
        explanation: '习近平总书记在2023年12月召开的中央外事工作会议上明确了构建人类命运共同体科学体系的"四梁八柱"。',
        difficulty: 'hard'
    },
    {
        id: 46,
        question: '2024年电动摩托车和自行车出口值首次突破多少亿元？',
        options: ['200亿', '300亿', '400亿', '500亿'],
        correctAnswer: 2,
        explanation: '2024年，电动摩托车和自行车热销海外市场，出口值首次突破400亿元。',
        difficulty: 'medium'
    },
    {
        id: 47,
        question: '"一带一路"倡议的核心理念是什么？',
        options: ['中国主导', '共商共建共享', '单边发展', '区域霸权'],
        correctAnswer: 1,
        explanation: '"一带一路"倡议坚持共商共建共享原则，推动沿线各国共同发展。',
        difficulty: 'easy'
    },
    {
        id: 48,
        question: '中国在服务贸易领域，数字服务增长率达到多少？',
        options: ['8.5%', '10.2%', '12.8%', '15.2%'],
        correctAnswer: 3,
        explanation: '数字服务、知识密集型服务贸易成为新的增长点，数字服务增长15.2%。',
        difficulty: 'hard'
    },
    {
        id: 49,
        question: '以下哪项措施不属于海南自由贸易港的开放政策？',
        options: ['零关税', '数据跨境流动', '封闭管理', '贸易投资自由化'],
        correctAnswer: 2,
        explanation: '海南自由贸易港实施高水平开放政策，包括零关税、低税率、数据跨境流动、贸易投资自由化等。',
        difficulty: 'easy'
    },
    {
        id: 50,
        question: 'RCEP对全球外商直接投资和对外直接投资的占比是多少？',
        options: ['超过20%', '超过25%', '超过30%', '超过35%'],
        correctAnswer: 2,
        explanation: 'RCEP区域吸引外商直接投资和对外直接投资全球占比均超过30%。',
        difficulty: 'medium'
    }
];

module.exports = {
    quizQuestions
};
