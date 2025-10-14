// pages/detail/detail.js
Page({
    data: {
        type: '',
        id: 0,
        detailData: null
    },

    onLoad(options) {
        const { type, id } = options
        this.setData({
            type: type,
            id: parseInt(id)
        })
        this.loadDetail()
    },

    loadDetail() {
        // 根据类型加载不同的详情数据
        // 这里简化处理，实际应用中应该从数据源获取
        wx.showLoading({
            title: '加载中...'
        })

        setTimeout(() => {
            wx.hideLoading()
            wx.showToast({
                title: '详情页面开发中',
                icon: 'none'
            })
        }, 1000)
    },

    onShareAppMessage() {
        return {
            title: '详情内容',
            path: `/pages/detail/detail?type=${this.data.type}&id=${this.data.id}`
        }
    }
})
