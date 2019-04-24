

Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,//当前所在滑块的 index
    scrollLeft: -90,//滚动条的位置,一个选项卡宽度是90（自定义来自css），按比例90*n设置位置
    navlist: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
    //课本列表
    conlist: []
  },
  //tab切换
  tab: function (event) {
    console.log(event.target.dataset.current);
    this.setData({ current: event.target.dataset.current })
    //锚点处理
    this.setData({ scrollLeft: event.target.dataset.current * 90 - 90 })
  },
  //滑动事件
  eventchange: function (event) {
    console.log(event.detail.current)
    this.setData({ current: event.detail.current })
    //锚点处理
    this.setData({ scrollLeft: event.detail.current * 90 - 90 })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.func)
    if (options.func == 'listenAndWrite') {
      wx.setNavigationBarTitle({
        title: '语音听写'
      })
      this.setData({
        conlist: [
          {
            moudles: [
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_11',
                src: '/img/book/ch_su_11.jpg',
                text: '苏教版一年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_12',
                src: '/img/book/ch_su_12.jpg',
                text: '苏教版一年级下册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_11',
                src: '/img/book/ch_rn_11.jpg',
                text: '人教版一年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_12',
                src: '/img/book/ch_rn_12.jpg',
                text: '人教版一年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_21',
                src: '/img/book/ch_su_21.jpg',
                text: '苏教版二年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_22',
                src: '/img/book/ch_su_22.jpg',
                text: '苏教版二年级下册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_21',
                src: '/img/book/ch_rn_21.jpg',
                text: '人教版二年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_22',
                src: '/img/book/ch_rn_22.jpg',
                text: '人教版二年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_31',
                src: '/img/book/ch_su_31.jpg',
                text: '苏教版三年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_32',
                src: '/img/book/ch_su_32.jpg',
                text: '苏教版三年级下册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_31',
                src: '/img/book/ch_rn_31.jpg',
                text: '人教版三年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_32',
                src: '/img/book/ch_rn_32.jpg',
                text: '人教版三年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_41',
                src: '/img/book/ch_su_41.jpg',
                text: '苏教版四年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_42',
                src: '/img/book/ch_su_42.jpg',
                text: '苏教版四年级下册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_41',
                src: '/img/book/ch_rn_41.jpg',
                text: '人教版四年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_42',
                src: '/img/book/ch_rn_42.jpg',
                text: '人教版四年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_51',
                src: '/img/book/ch_su_51.jpg',
                text: '苏教版五年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_52',
                src: '/img/book/ch_su_52.jpg',
                text: '苏教版五年级下册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_51',
                src: '/img/book/ch_rn_51.jpg',
                text: '人教版五年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_52',
                src: '/img/book/ch_rn_52.jpg',
                text: '人教版五年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_61',
                src: '/img/book/ch_su_61.jpg',
                text: '苏教版六年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_su_62',
                src: '/img/book/ch_su_62.jpg',
                text: '苏教版六年级下册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_61',
                src: '/img/book/ch_rn_61.jpg',
                text: '人教版六年级上册'
              },
              {
                url: '/pages/listenAndWrite/listenAndWrite?book=ch_rn_62',
                src: '/img/book/ch_rn_62.jpg',
                text: '人教版六年级下册'
              }
            ]
          },
        ],
      })
    } else if (options.func == 'listenAndTalk') {
      wx.setNavigationBarTitle({
        title: '字词跟读'
      })
      this.setData({
        conlist: [
          {
            moudles: [
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_11',
                src: '/img/book/ch_su_11.jpg',
                text: '苏教版一年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_12',
                src: '/img/book/ch_su_12.jpg',
                text: '苏教版一年级下册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_11',
                src: '/img/book/ch_rn_11.jpg',
                text: '人教版一年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_12',
                src: '/img/book/ch_rn_12.jpg',
                text: '人教版一年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_21',
                src: '/img/book/ch_su_21.jpg',
                text: '苏教版二年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_22',
                src: '/img/book/ch_su_22.jpg',
                text: '苏教版二年级下册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_21',
                src: '/img/book/ch_rn_21.jpg',
                text: '人教版二年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_22',
                src: '/img/book/ch_rn_22.jpg',
                text: '人教版二年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_31',
                src: '/img/book/ch_su_31.jpg',
                text: '苏教版三年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_32',
                src: '/img/book/ch_su_32.jpg',
                text: '苏教版三年级下册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_31',
                src: '/img/book/ch_rn_31.jpg',
                text: '人教版三年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_32',
                src: '/img/book/ch_rn_32.jpg',
                text: '人教版三年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_41',
                src: '/img/book/ch_su_41.jpg',
                text: '苏教版四年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_42',
                src: '/img/book/ch_su_42.jpg',
                text: '苏教版四年级下册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_41',
                src: '/img/book/ch_rn_41.jpg',
                text: '人教版四年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_42',
                src: '/img/book/ch_rn_42.jpg',
                text: '人教版四年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_51',
                src: '/img/book/ch_su_51.jpg',
                text: '苏教版五年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_52',
                src: '/img/book/ch_su_52.jpg',
                text: '苏教版五年级下册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_51',
                src: '/img/book/ch_rn_51.jpg',
                text: '人教版五年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_52',
                src: '/img/book/ch_rn_52.jpg',
                text: '人教版五年级下册'
              }
            ]
          },
          {
            moudles: [
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_61',
                src: '/img/book/ch_su_61.jpg',
                text: '苏教版六年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_su_62',
                src: '/img/book/ch_su_62.jpg',
                text: '苏教版六年级下册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_61',
                src: '/img/book/ch_rn_61.jpg',
                text: '人教版六年级上册'
              },
              {
                url: '/pages/listenAndTalk/listenAndTalk?book=ch_rn_62',
                src: '/img/book/ch_rn_62.jpg',
                text: '人教版六年级下册'
              }
            ]
          },
        ],
      })
    }
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