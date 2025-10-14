// app.js
App({
    onLaunch() {
        // 展示本地存储能力
        const logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                console.log('登录成功', res.code)
            }
        })
    },

    globalData: {
        userInfo: null,
        // 全局配置
        appName: '对外开放与经济发展学习平台',
        theme: {
            primaryColor: '#C8232C',
            secondaryColor: '#FFD700'
        },
        // 学习进度
        learningProgress: {
            policyRead: [],
            achievementViewed: [],
            quizCompleted: []
        }
    },

    // 保存学习进度
    saveLearningProgress(type, id) {
        const progress = this.globalData.learningProgress
        if (!progress[type].includes(id)) {
            progress[type].push(id)
            wx.setStorageSync('learningProgress', progress)
        }
    },

    // 获取学习进度
    getLearningProgress() {
        const progress = wx.getStorageSync('learningProgress')
        if (progress) {
            this.globalData.learningProgress = progress
        }
        return this.globalData.learningProgress
    }
})
