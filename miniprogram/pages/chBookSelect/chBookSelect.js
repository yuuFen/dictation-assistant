

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,//当前所在滑块的 index
    scrollLeft: 0,//滚动条的位置,一个选项卡宽度是90（自定义来自css），按比例90*n设置位置
    navlist: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
    conlist: [

      {
        moudles: [
          {
            url: '/pages/listen/listen?book=ch_su_11',
            src: '/img/book/ch_su_21.jpg',
            text: '苏教版一年级上册'
          },
          {
            url: '/pages/listen/listen?book=ch_su_12',
            src: '/img/book/ch_su_22.jpg',
            text: '苏教版一年级下册'
          }, 
          {
            url: '/pages/listen/listen?book=ch_zhe_11',
            src: '/img/book/ch_su_31.jpg',
            text: '浙教版一年级上册'
          },
          {
            url: '/pages/listen/listen?book=ch_zhe_12',
            src: '/img/book/ch_su_32.jpg',
            text: '浙教版一年级下册'
          },
        ]
      }, 
      {
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
          },
        ]
      }, 
      {
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
          },
        ]
      }, 
      {
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
          },
        ]
      },
      {
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
          },
        ]
      },
      {
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
          },
        ]
      }, 


    ],
    
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
  //tab切换
  tab: function (event) {
    console.log(event.target.dataset.current);
    this.setData({ current: event.target.dataset.current })
    //锚点处理
    this.setData({ scrollLeft: event.target.dataset.current * 90 })
  },
  //滑动事件
  eventchange: function (event) {
    console.log(event.detail.current)
    this.setData({ current: event.detail.current })
    //锚点处理
    this.setData({ scrollLeft: event.detail.current * 90 })
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