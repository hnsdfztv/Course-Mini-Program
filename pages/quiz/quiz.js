// pages/quiz/quiz.js
const app = getApp()
const { quizQuestions } = require('../../static/data/quiz-questions.js')

Page({
    data: {
        quizStarted: false,
        quizCompleted: false,
        currentQuestion: 0,
        score: 0,
        userAnswers: [],
        timeLeft: 900, // 15分钟（题目增多，时间延长）
        timer: null,
        totalQuestions: 20, // 每次测验20道题
        allQuestions: quizQuestions,
        questions: [
            {
                id: 1,
                question: '习近平主席提出"一带一路"倡议是在哪一年？',
                options: ['2012年', '2013年', '2014年', '2015年'],
                correctAnswer: 1,
                explanation: '"一带一路"倡议由习近平主席于2013年提出，旨在推动沿线各国实现经济政策协调，开展更大范围、更高水平、更深层次的区域合作。'
            },
            {
                id: 2,
                question: '截至目前，中国已设立多少个自由贸易试验区？',
                options: ['11个', '18个', '21个', '25个'],
                correctAnswer: 2,
                explanation: '自2013年上海自贸试验区设立以来，我国已在全国设立21个自贸试验区，形成了覆盖东西南北中的改革开放创新格局。'
            },
            {
                id: 3,
                question: '以下哪项不是"一带一路"倡议的"五通"内容？',
                options: ['政策沟通', '设施联通', '技术互通', '民心相通'],
                correctAnswer: 2,
                explanation: '"一带一路"倡议强调"五通"：政策沟通、设施联通、贸易畅通、资金融通、民心相通。技术互通不在其中。'
            },
            {
                id: 4,
                question: '中国连续多少年保持全球第一货物贸易大国地位？',
                options: ['5年', '6年', '7年', '8年'],
                correctAnswer: 2,
                explanation: '中国已连续7年保持全球第一货物贸易大国地位，对外贸易实现了历史性跨越。'
            },
            {
                id: 5,
                question: 'RCEP区域全面经济伙伴关系协定何时正式生效？',
                options: ['2020年1月', '2021年1月', '2022年1月', '2023年1月'],
                correctAnswer: 2,
                explanation: 'RCEP于2022年1月1日正式生效，标志着全球最大的自由贸易协定正式启动。'
            },
            {
                id: 6,
                question: '海南自由贸易港建设的目标是到2035年成为什么？',
                options: ['国际金融中心', '我国开放型经济新高地', '全球贸易枢纽', '世界旅游目的地'],
                correctAnswer: 1,
                explanation: '按照规划，到2035年海南自由贸易港将成为我国开放型经济新高地。'
            },
            {
                id: 7,
                question: '以下哪项是习近平新时代对外开放思想的核心理念？',
                options: ['单边主义', '保护主义', '构建人类命运共同体', '以邻为壑'],
                correctAnswer: 2,
                explanation: '构建人类命运共同体是习近平新时代中国特色社会主义思想的重要组成部分，体现了中国对外开放的核心理念。'
            },
            {
                id: 8,
                question: '《外商投资法》于哪一年开始施行？',
                options: ['2018年', '2019年', '2020年', '2021年'],
                correctAnswer: 2,
                explanation: '《外商投资法》于2020年1月1日起施行，确立了我国新型外商投资法律制度的基本框架。'
            },
            {
                id: 9,
                question: '中欧班列累计开行超过多少列？',
                options: ['5万列', '6万列', '7万列', '8万列'],
                correctAnswer: 2,
                explanation: '截至2023年底，中欧班列累计开行超过7万列，成为"一带一路"建设的标志性成果。'
            },
            {
                id: 10,
                question: 'RCEP涵盖多少个成员国？',
                options: ['10个', '12个', '15个', '18个'],
                correctAnswer: 2,
                explanation: 'RCEP涵盖15个成员国，包括东盟10国和中国、日本、韩国、澳大利亚、新西兰。'
            }
        ]
    },

    onLoad() {
        // 加载之前的测验记录
        this.loadQuizHistory()
    },

    onUnload() {
        if (this.data.timer) {
            clearInterval(this.data.timer)
        }
    },

    // 加载测验历史
    loadQuizHistory() {
        const history = wx.getStorageSync('quizHistory') || []
        this.setData({
            quizHistory: history
        })
    },

    // 随机抽取题目
    getRandomQuestions() {
        const shuffled = [...this.data.allQuestions].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, this.data.totalQuestions)
    },

    // 开始测验
    startQuiz() {
        const selectedQuestions = this.getRandomQuestions()
        this.setData({
            quizStarted: true,
            questions: selectedQuestions,
            currentQuestion: 0,
            score: 0,
            userAnswers: [],
            timeLeft: 900,
            quizCompleted: false
        })
        this.startTimer()
    },

    // 开始计时
    startTimer() {
        this.data.timer = setInterval(() => {
            if (this.data.timeLeft > 0) {
                this.setData({
                    timeLeft: this.data.timeLeft - 1
                })
            } else {
                this.submitQuiz()
            }
        }, 1000)
    },

    // 选择答案
    selectAnswer(e) {
        const answer = e.currentTarget.dataset.answer
        const currentQuestion = this.data.currentQuestion
        const userAnswers = this.data.userAnswers
        userAnswers[currentQuestion] = answer

        this.setData({
            userAnswers: userAnswers
        })
    },

    // 上一题
    prevQuestion() {
        if (this.data.currentQuestion > 0) {
            this.setData({
                currentQuestion: this.data.currentQuestion - 1
            })
        }
    },

    // 下一题
    nextQuestion() {
        if (this.data.currentQuestion < this.data.questions.length - 1) {
            this.setData({
                currentQuestion: this.data.currentQuestion + 1
            })
        }
    },

    // 提交测验
    submitQuiz() {
        if (this.data.timer) {
            clearInterval(this.data.timer)
        }

        // 计算分数
        let score = 0
        const scorePerQuestion = 100 / this.data.questions.length
        this.data.questions.forEach((question, index) => {
            if (this.data.userAnswers[index] === question.correctAnswer) {
                score += scorePerQuestion
            }
        })
        score = Math.round(score)        // 保存测验记录
        const history = wx.getStorageSync('quizHistory') || []
        history.unshift({
            date: new Date().toLocaleString('zh-CN'),
            score: score,
            totalQuestions: this.data.questions.length,
            timeUsed: 900 - this.data.timeLeft
        })
        wx.setStorageSync('quizHistory', history.slice(0, 10)) // 只保留最近10次

        // 记录学习进度
        app.saveLearningProgress('quizCompleted', Date.now())

        this.setData({
            score: score,
            quizCompleted: true
        })

        // 显示完成提示
        if (score >= 80) {
            wx.showToast({
                title: '成绩优秀！',
                icon: 'success'
            })
        } else if (score >= 60) {
            wx.showToast({
                title: '成绩良好！',
                icon: 'success'
            })
        } else {
            wx.showToast({
                title: '继续努力！',
                icon: 'none'
            })
        }
    },

    // 重新测验
    retakeQuiz() {
        this.startQuiz()
    },

    // 查看解析
    viewExplanation(e) {
        const index = e.currentTarget.dataset.index
        const question = this.data.questions[index]
        wx.showModal({
            title: '答案解析',
            content: question.explanation,
            showCancel: false,
            confirmText: '知道了'
        })
    },

    // 分享功能
    onShareAppMessage() {
        return {
            title: '对外开放知识测验',
            path: '/pages/quiz/quiz'
        }
    }
})
