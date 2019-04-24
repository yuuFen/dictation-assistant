const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    moudles: [
      {
        url: '/pages/chBookSelect/chBookSelect?func=listenAndWrite',
        src: '/img/listen.png',
        text: '语音听写'
      },
      {
        url: '/pages/chBookSelect/chBookSelect?func=listenAndTalk',
        src: '/img/talk.png',
        text: '字词跟读'
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