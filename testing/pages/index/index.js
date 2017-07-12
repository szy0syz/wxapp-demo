//index.js
//获取应用实例
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    contentItems: [
      { title: '我是第一个图的标题', img: '/images/sj01.jpg' },
      { title: '我是第二个图的标题', img: '/images/sj02.jpg' },
      { title: '我是第三个图的标题', img: '/images/sj03.jpg' },
      { title: '我是第四个图的标题', img: '/images/sj04.jpg' }
    ],
    listItems: [
      { title: '我是第一个图的标题', img: '/images/l01.jpg', desc: '我是超级详细的描述文本字符串哈哈哈哈哈', avatar: '/images/avatar1.jpg' },
      { title: '我是第二个图的标题', img: '/images/l02.jpg', desc: '我是超级详细的描述文本字符串哈哈哈哈哈', avatar: '/images/avatar2.jpg' },
      { title: '我是第三个图的标题', img: '/images/l03.jpg', desc: '我是超级详细的描述文本字符串哈哈哈哈哈', avatar: '/images/avatar3.jpg' },
      { title: '我是第四个图的标题', img: '/images/l01.jpg', desc: '我是超级详细的描述文本字符串哈哈哈哈哈', avatar: '/images/avatar1.jpg' },
      { title: '我是第五个图的标题', img: '/images/l02.jpg', desc: '我是超级详细的描述文本字符串哈哈哈哈哈', avatar: '/images/avatar2.jpg' },
      { title: '我是第六个图的标题', img: '/images/l03.jpg', desc: '我是超级详细的描述文本字符串哈哈哈哈哈', avatar: '/images/avatar3.jpg' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
