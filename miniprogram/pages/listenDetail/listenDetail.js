const db = wx.cloud.database();
const _ = db.command;
let plugin = requirePlugin("WechatSI");
let manager = plugin.getRecordRecognitionManager();
const innerAudioContext = wx.createInnerAudioContext();


let that;
let i;
let active;

Page({
  data: {
    i: -1,
    sum: 99,
    userCollect: [],
    content: [],
    steps: [],
    active: -1,
    show: true,
    submit: false
  },

  // 文字转语音（语音合成）
  wordToSpeak: function (word) {
    let that = this;

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
    that.wordToSpeak(this.data.speak[i+1]);
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
      that.wordToSpeak(this.data.speak[i-1]);
    } else {
      wx.showToast({
        icon: 'none',
        title: '没有上一个了！',
      })
    }
  },

  // 重复
  again: function (e) {
    i = this.data.i;
    if (i > -1) {
      that.wordToSpeak(this.data.speak[i]);
    } else {
      wx.showToast({
        icon: 'none',
        title: '请先开始噢！',
      })
    }
  },

  onLoad: function (options) {

    let content = [];
    let speak = [];
    let contentTemp = [];
    console.log(options);
    that = this;
    speak = options.speak.split('/');
    speak.pop();
    content = options.content.split('/');
    content.pop();
    this.setData({
      sum: content.length,
      speak: (speak.length == 0 ? content : speak),
      steps: content
    })
    for (let name of content) {
      let o = {};
      o['name'] = name;
      o['value'] = name;
      contentTemp.push(o);
    }
    that.setData({
      content: contentTemp
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

  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.content, values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      content: checkboxItems,
      userCollect: e.detail.value
    });
  },

  submit: function () {
    this.setData({
      submit: true
    })
    wx.showLoading({
      title: '提交中...',
      mask:true
    })
    let userCollectID;
    if (that.data.userCollect) {
      db.collection('userCollectList').add({
        data: {
          collect: that.data.userCollect
        },
        success(res) {
          wx.hideLoading();
          wx.showToast({
            title: '提交成功！',
            duration: 3000,
            mask: true
          })
          setTimeout(() => {
            wx.navigateBack({
            })
          }, 1000)     
        }
      })
    } else {
      wx.hideLoading();
      wx.showToast({
        title: '提交成功！',
        duration: 3000,
        mask: true
      })
      setTimeout(() => {
        wx.navigateBack({
        })    
      },1000)
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