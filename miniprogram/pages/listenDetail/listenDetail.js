const db = wx.cloud.database();
const _ = db.command;
let plugin = requirePlugin("WechatSI");
let manager = plugin.getRecordRecognitionManager();
const innerAudioContext = wx.createInnerAudioContext();

let content;
let speak;
let that;
let i;
let active;

Page({
  data: {
    i: -1,
    sum: 99,
    content: [],
    speak:[],
    steps: [],
    active: -1,
    show: true
  },

  // 文字转语音（语音合成）
  wordToSpeak: function (word) {
    let that = this

    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: word,
      success: function (res) {
        console.log(" tts", res)
        innerAudioContext.autoplay = true
        innerAudioContext.src = res.filename
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

  // 下一个
  nextWord: function (e) {
    active = this.data.active;
    i = this.data.i;
    this.setData({
      active: ++active,
      i: i+1
    });
    that.wordToSpeak(speak[i+1]);
  },

  // 上一个
  preWord: function (e) {
    i = this.data.i;
    i = this.data.i;
    if (i > 0) {
      this.setData({
        active: --active,
        i: i - 1
      });
      that.wordToSpeak(speak[i-1]);
    } else {
      wx.showToast({
        icon: 'none',
        title: '已经是第一个了！',
      })
    }
  },

  // 重复
  again: function (e) {
    i = this.data.i;
    if (i > -1) {
      that.wordToSpeak(speak[i]);
    }
  },

  onLoad: function (options) {
    console.log(options);
    that = this;
    speak = options.speak.split('/');
    speak.pop(); 
    content = options.content.split('/');
    content.pop();
    this.setData({
      sum: speak.length,
      speak: speak,
      content: content,
      steps: content
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
      wx.stopBackgroundAudio();

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