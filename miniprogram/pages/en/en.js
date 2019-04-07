const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    moudles: [
      {
        url: '/pages/en/en',
        src: '/img/en.png',
        text: '英语'
      },
      {
        url: '/pages/ch/ch',
        src: '/img/ch.png',
        text: '语文'
      }
    ]
  },

  onLoad: function (options) {

  },
  toown: function () {
    wx.navigateTo({
      url: '../own/own'
    })
  },

  onReady: function () {

  },


  onShow: function () {

  },


  onHide: function () {

  },


  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})