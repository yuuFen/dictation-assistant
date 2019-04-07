Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: [
      {
        type: '单项选择',
        title: '「云开发」提供的一站式开发服务。打通了小程序前端与云资源的链路，让开发者无需管理后端服务架构，即可轻松拥有各种后端能力，极大减轻开发过程中的______。',
        optionA: '我是选项A',
        optionB: '我是选项B',
        optionC: '我是选项C我是选项C我是选项C我是选项C我是选项C我是选项C我是选项C',
        optionD: '我是选项D',
        answer: 'D'
      },
      {
        type: '单项选择',
        title: '「云开发」提管理后端服务架构，即可轻松拥有各种后端能力，极大减轻开发过程中的______。',
        optionA: '我选项A',
        optionB: '我选项B',
        optionC: '我是选项C我是选项C我是选项C我是选项C',
        optionD: '我选项D',
        answer: 'C'
      },
      {
        type: '单项选择',
        title: '「云开发」提供的一站式开发服务。打通了小程序前端与云资源的链路，让开发者无需管理后端服务架构，即可轻松拥有各种后端能力，极大减轻开发过程中的______。',
        optionA: '我是选项A',
        optionB: '我是选项B',
        optionC: '我是选项C我是选项C我是选项C我是选项C我是选项C我是选项C我是选项C',
        optionD: '我是选项D',
        answer: 'D'
      }, 
      {
        type: '单项选择',
        title: '「云开发」提供的一站式开发服务。打通了小程序前端与云资源的链路，让开发者无需管理后端服务架构，即可轻松拥有各种后端能力，极大减轻开发过程中的______。',
        optionA: '我是选项A',
        optionB: '我是选项B',
        optionC: '我是选项C我是选项C我是选项C我是选项C我是选项C我是选项C我是选项C',
        optionD: '我是选项D',
        answer: 'D'
      }
    ],
    _selection: '',
    accuracy: '',
  },
  
  select: function (e) {
    // console.log(e.target.dataset.selection)
    // 通过url修改data在获取data并修改
    // 可以实现题目正误的储存以及后退即上一题
    this.setData({
      _selection: e.target.dataset.selection
    })
    if (this.data._selection == this.data.questions[this.data.index].answer) {
      this.setData({
        'accuracy': this.data.accuracy + 'r',
      })
    }
    else {
      this.setData({
        'accuracy': this.data.accuracy + 'f',
      })
    }
    console.log(this.data.accuracy)
    if (this.data.index + 1 < this.data.questions.length) {
      wx.navigateTo({
        url: '/pages/level/level?index=' + (this.data.index + 1) + '&accuracy=' + this.data.accuracy + '&subject=' + this.data.subject,
      })
    }
  }, 
  submit: function (e) {
    wx.navigateTo({
      url: '/pages/level_submit/level_submit?accuracy=' + this.data.accuracy,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var length = this.data.questions.length;
    this.setData({ 
      'length': length,
      'index': options.index*1,  
      'accuracy': options.accuracy,
      'subject': options.subject,
    })
    this.setData({
      'question': this.data.questions[this.data.index],
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
  onShow: function (options) {
    //按返回时数据不会刷新，暂时搁置该bug

    //可利用本地缓存来储存用户选项
    //也可将accuracy长度与index相关联
    //也可自定义返回键，返回时传参
    //也可储存业面栈
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

  },
})