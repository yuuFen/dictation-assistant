const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    moudles: [
      {
        url: '/pages/chBookSelect/chBookSelect',
        src: '/img/listen.png',
        text: '语音听写'
      },
      {
        url: '/pages/talk/talk',
        src: '/img/talk.png',
        text: '对话练习'
      },
      {
        url: '/pages/speak/speak',
        src: '/img/speak.png',
        text: '课文朗读'
      },
      {
        url: '/pages/write/write',
        src: '/img/write.png',
        text: '笔画练习'
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