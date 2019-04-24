const db = wx.cloud.database();
const _ = db.command;
let plugin = requirePlugin("WechatSI");
let manager = plugin.getRecordRecognitionManager();
const innerAudioContext = wx.createInnerAudioContext();
let that;


Page({
  data: {
    current: 0,//当前所在滑块的 index
    scrollLeft: -90,//滚动条的位置,一个选项卡宽度是90（自定义来自css），按比例90*n设置位置
    navlist: ["第一单元", "第二单元", "第三单元", "第四单元", "第五单元", "第六单元", "第七单元", "第八单元"],
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
    let content = '';
    e.currentTarget.dataset.content.speak.forEach(word => {
      content = content + word + '。';
    })
    console.log(content);
    let flag = 0
    if (this.data.recording) {
      manager.stop
      flag = 1
    }

    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        console.log(" tts", res)
        innerAudioContext.autoplay = true
        innerAudioContext.src = res.filename
        innerAudioContext.onPlay(() => {
          console.log('开始播放')
        })

        wx.showLoading({
          title: '正在播放',
        })

        innerAudioContext.onError((res) => {
          if (res) {
            wx.hideLoading(),
              wx.showToast({
                title: '文本格式错误',
                image: '/images/fail.png',
              })
          }
        })

        innerAudioContext.onEnded(function () {
          wx.stopBackgroundAudio();

          manager.start({
            lang: "zh_CN"
          })

          wx.hideLoading()
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
    console.log(options.book)
    that = this;
    let book = '';

    if (options.book.search("su") != -1) { book += '苏教版' } else if (options.book.search("zh") != -1) { book += '浙教版' } else if (options.book.search("rn") != -1) { book += '人教版' } if (options.book.search("ch") != -1) { book += '语文' } else if (options.book.search("en") != -1) { book += '英语' } if (options.book.search("11") != -1) { book += '一年级上册' } else if (options.book.search("12") != -1) { book += '一年级下册' } else if (options.book.search("21") != -1) { book += '二年级上册' } else if (options.book.search("22") != -1) { book += '二年级下册' } else if (options.book.search("31") != -1) { book += '三年级上册' } else if (options.book.search("32") != -1) { book += '三年级下册' } else if (options.book.search("41") != -1) { book += '四年级上册' } else if (options.book.search("42") != -1) { book += '四年级下册' } else if (options.book.search("51") != -1) { book += '五年级上册' } else if (options.book.search("52") != -1) { book += '五年级下册' } else if (options.book.search("61") != -1) { book += '六年级上册' } else if (options.book.search("62") != -1) { book += '六年级下册' }
    wx.setNavigationBarTitle({
      title: book
    })
    let dbBook = 'talk_' + options.book;
    let conlist = [];
    let unitNum;
    db.collection(dbBook).get({
      success(res) {
        for (let i = 0; i < res.data[res.data.length - 1].unit; i ++) {
          conlist[i] = res.data.filter(object => object.unit == (i + 1));
        }
        console.log(conlist);
        that.setData({
          conlist: conlist
        })
      }
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