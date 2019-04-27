let plugin = requirePlugin("WechatSI");
let manager = plugin.getRecordRecognitionManager();
const innerAudioContext = wx.createInnerAudioContext();
let that;
let content;


Page({
  data: {
    current: 0,//当前所在滑块的 index
    scrollLeft: -90,//滚动条的位置,一个选项卡宽度是90（自定义来自css），按比例90*n设置位置
    conlist: [],
  },

  //tab切换
  tab: function (event) {
    // console.log(event.target.dataset.current);
    this.setData({ current: event.target.dataset.current })
    //锚点处理
    this.setData({
      scrollLeft: event.target.dataset.current * 90 - 90,
    })
  },
  //滑动事件
  eventchange: function (event) {
    console.log(event.detail.current)
    this.setData({ current: event.detail.current })
    //锚点处理
    this.setData({
      scrollLeft: event.detail.current * 90 - 90,
    })
  },

  // 文字转语音（语音合成）
  wordtospeak: function (e) {
    let that = this
    content = '';
    for (let key in e.currentTarget.dataset.content.content) {
      content = content + e.currentTarget.dataset.content.content[key] + '。';
    }
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        console.log(" tts", res)
        innerAudioContext.src = res.filename;
        innerAudioContext.play();

        wx.showLoading({
          mask: true,
          title: '正在播放',
        })
      },
      fail: function (res) {
        console.log("fail tts", res)

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    });
    console.log(options.book);
    that = this;
    // setNavigationBarTitle
    let book = '';
    let bookLevel = {
      "11": "一年级上册",
      "12": "一年级下册",
      "21": "二年级上册",
      "22": "二年级下册",
      "31": "三年级上册",
      "32": "三年级下册",
      "41": "四年级上册",
      "42": "四年级下册",
      "51": "五年级上册",
      "52": "五年级下册",
      "61": "六年级上册",
      "62": "六年级下册"
    }
    if (options.book.search("ch") != -1) { book += '语文' } else if (options.book.search("en") != -1) { book += '英语' } 
    if (options.book.search("su") != -1) { book += '苏教版' } else if (options.book.search("zh") != -1) { book += '浙教版' } else if (options.book.search("rn") != -1) { book += '人教版' }
    for (let key in bookLevel) {
      if (options.book.search(key) != -1) {
        book += bookLevel[key]
      }
    }
    wx.setNavigationBarTitle({
      title: book
    })

    let dbBook = 'talk_' + options.book;
    let conlist = [];
    // 使用云函数,只能读100条
    wx.cloud.callFunction({
      name: 'getContent',
      data: {
        dbBook: dbBook
      }
    }).then(res => {
      that.setData({
        conlist: res.result
      });
        wx.hideLoading();
    })

    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      if (res) {
        console.log(res)
        wx.hideLoading(),
          wx.showToast({
            title: '文本格式错误',
            image: '/images/fail.png',
          })
      }
    })
    innerAudioContext.onEnded(function () {
      manager.start({
        lang: "zh_CN"
      })
      wx.hideLoading()
    })
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
    innerAudioContext.offPlay();
    innerAudioContext.offEnded();
    innerAudioContext.offError();
    innerAudioContext.stop();
    wx.stopBackgroundAudio();
    manager.start({
      lang: "zh_CN"
    })
    wx.hideLoading()

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