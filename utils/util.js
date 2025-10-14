// utils/util.js

/**
 * 格式化时间
 */
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
}

/**
 * 格式化日期
 */
const formatDate = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `${year}-${formatNumber(month)}-${formatNumber(day)}`
}

/**
 * 计算学习进度百分比
 */
const calculateProgress = (completed, total) => {
    if (total === 0) return 0
    return Math.round((completed / total) * 100)
}

/**
 * 存储数据到本地
 */
const setStorage = (key, data) => {
    try {
        wx.setStorageSync(key, data)
        return true
    } catch (e) {
        console.error('存储失败:', e)
        return false
    }
}

/**
 * 从本地获取数据
 */
const getStorage = (key, defaultValue = null) => {
    try {
        const value = wx.getStorageSync(key)
        return value || defaultValue
    } catch (e) {
        console.error('读取失败:', e)
        return defaultValue
    }
}

/**
 * 显示提示框
 */
const showToast = (title, icon = 'none', duration = 2000) => {
    wx.showToast({
        title: title,
        icon: icon,
        duration: duration
    })
}

/**
 * 显示加载中
 */
const showLoading = (title = '加载中...') => {
    wx.showLoading({
        title: title,
        mask: true
    })
}

/**
 * 隐藏加载
 */
const hideLoading = () => {
    wx.hideLoading()
}

/**
 * 显示确认对话框
 */
const showConfirm = (content, title = '提示') => {
    return new Promise((resolve, reject) => {
        wx.showModal({
            title: title,
            content: content,
            success: (res) => {
                if (res.confirm) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}

/**
 * 防抖函数
 */
const debounce = (fn, delay = 500) => {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

/**
 * 节流函数
 */
const throttle = (fn, delay = 500) => {
    let last = 0
    return function (...args) {
        const now = Date.now()
        if (now - last >= delay) {
            fn.apply(this, args)
            last = now
        }
    }
}

/**
 * 深拷贝
 */
const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item))
    }
    const cloneObj = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key])
        }
    }
    return cloneObj
}

module.exports = {
    formatTime,
    formatDate,
    calculateProgress,
    setStorage,
    getStorage,
    showToast,
    showLoading,
    hideLoading,
    showConfirm,
    debounce,
    throttle,
    deepClone
}
