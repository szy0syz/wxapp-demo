//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: { username: 'szy' }
  },

  onLoad: function () {
    console.log('login page -> onLoad')
    if (app.globalData.userInfo === null) {
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      this.data.userInfo = app.globalData.userInfo;
    }
  },
  onReady: function () {
    console.log('login page -> onReady')
  },
  onShow: function () {
    console.log('login page -> onShow')
    
  }
})
