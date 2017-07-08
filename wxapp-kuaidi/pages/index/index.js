//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    expressInfo: null,
    expressNu: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  getExpressNu: function (e) {
    this.setData({ expressNu: e.detail.value})
  },
  getExpressInfo: function (nu, cb) {
    // 来个私有作用域
    var that = this;
    wx.request({
      url: 'https://ali-deliver.showapi.com/showapi_expInfo?com=zhongtong&nu=' + this.data.expressNu, //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'Authorization': 'APPCODE 1e37be95b6254fd184067e20b87d1381'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({expressInfo: res.data})
      }
    })
  }
})
