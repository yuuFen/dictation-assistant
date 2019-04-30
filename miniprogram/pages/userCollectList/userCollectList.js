let that;


Page({

  data: {
    collect: ['']
  },

  onLoad: function (options) {
    that = this;
    let collectArr = [];
    let collectObj = {};
    let collect = [];
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: 'getUserCollectList',
      data: {},
      success: res => {
        // 统计词语以及出现次数
        if (res.result.data[0]) {
          collectArr = res.result.data[0].collect;
          for (let i = 0, l = collectArr.length; i < l; i++) {
            let item = collectArr[i];
            collectObj[item] = (collectObj[item] + 1) || 1;
          }
          for (let i in collectObj) {
            let o = {};
            o['count'] = collectObj[i];
            o['name'] = i;
            collect.push(o);
          }
        }
        that.setData({
          collect: collect,
        });
        wx.hideLoading();
        console.log(that.data.collect);
      },
      fail: err => {
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