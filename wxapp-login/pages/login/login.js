//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    username: null,
    password: null
  },

  onLoad: function () {
    console.log('我是登录页')
  },

  getUsername: function (e) {
    this.setData({ username: e.detail.value})
  },

  getPassword: function (e) {
    this.setData({ password: e.detail.value })
  },

  handleClick: function () {
    app.globalData.userInfo = {
      username: this.data.username,
      password: this.data.password
    }
    console.log('longin.....')
    wx.navigateTo({
      url: '../user/user',
    })
  }


})
