let that;
let collect;
Page({

  data: {
    collect: {}
  },

  onLoad: function (options) {
    that = this;
    wx.cloud.callFunction({
      name: 'getUserCollectList',
      data: {},
      success: res => {
          collect = res.result.data[0].collect
          // arr转json对象，key为内容，value为次数；或者保存为两个arr数组
          // 把第一项push入数组1，删除并统计相同元素，push进数组2，再把第一项push入数组1

      },
      fail: err => {
        console.error('[云函数] [getUserCollectList] 调用失败', err)
      }
    })
  },

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