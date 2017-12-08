// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this
    wx.request({
      url: 'https://www.100txy.com/weixin/weather_life', //真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        console.log(res.data)
        that.setData({
          Industry: res.data //设置数据
        })
      },
      fail: function (err) {
        console.log(err)
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
    wx.showToast({
      title: "加载中......",
      icon: "loading",
      duration: 5000
    })
    var that = this
    wx.request({
      url: 'https://www.100txy.com/weixin/weather_life', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('会员信息', res.data)
        that.setData({
          Industry: res.data //设置数据
        })
        //关掉加载的弹框
        wx.hideToast()
      },
      fail: function (err) {
        console.log(err)
      }
    })
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