const config = require("../../config.js");
// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orders: [],
    history: [
      {
        supplier: "商家1",
        state: "已完成",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "脉动", price: 3, number: 9},
          {name: "康师傅红茶", price: 3, number: 3},
        ],
        totalPrice: 36,
        totalNumber: 12,
        img: "/images/goods/maidong.jpg"
      }, {
        supplier: "商家2",
        state: "已完成",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "芬达", price: 3, number: 9},
        ],
        totalPrice: 27, 
        totalNumber: 9,
        img: "/images/goods/fenda.jpg"
      }, {
        supplier: "商家3",
        state: "已退款",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "加多宝", price: 3, number: 8},
          {name: "芬达", price: 3, number: 2},
          {name: "康师傅红茶", price: 3, number: 2}
        ],
        totalPrice: 36,
        totalNumber: 12,
        img: "/images/goods/jiaduobao.jpg"
      }, {
        supplier: "商家4",
        state: "已退款",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "美汁源", price: 3, number: 1},
          {name: "康师傅红茶", price: 3, number: 1}
        ],
        totalPrice: 6,
        totalNumber: 2,
        img: "/images/goods/MZY.jpg"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据userId请求历史订单
    var userId = wx.getStorageSync('uvmUserId');
    wx.request({
      url: config.baseUrl + "/order/orderList",
      method: 'GET', 
      data: {
        'UserId': userId
      },
      success: res => {
        console.log(res)
        // 获得订单信息
        var rawOrders = res.data.data.orders,
      },
      fail: res => {

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

  },
})