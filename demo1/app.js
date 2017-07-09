App({
  onLaunch: function (options) {
    // Do something initial when launch.
  },
  onShow: function (options) {
    // Do something when show.
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
    console.log(msg)
  },
  globalData: {
    userInfo: null
  },
  getUser: function(cb) {
    var _this = this
    if (this.globalData.userInfo) {
      typeof cb === 'function' && cb(this.globalData.userInfo)
    } else {
      wx.getUserInfo({
        success: function (res) {
          console.dir(res.userInfo)
          _this.globalData.userInfo = res.userInfo
          cb(res.userInfo)
        }
      })
    }
  }
})