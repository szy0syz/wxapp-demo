//app.js
App({
  onLaunch: function() {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now()) // 加在数组第一个
    //WebDataBase 关闭浏览器也存在
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function(cb) {
    var that = this //为了在异步中使用，闭包
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          // 上级作用域拿this，当前app实例
          that.globalData.userInfo = res.userInfo
          // cb必须是function才执行
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },
  // 全局数据
  globalData: {
    userInfo: null
  }
})
