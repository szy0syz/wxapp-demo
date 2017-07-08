//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: { username: 'szy' }
  },

  onLoad: function () {
    
  },
  onShow: function () {
    console.log('onShow')
    if (app.globalData.userInfo === null) {
      wx.navigateTo({
        url: '../login/login',
      })
    } else {
      this.data.userInfo = app.globalData.userInfo;
    }
  }
})
