// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [
      {
        supplier: "商家1",
        state: "已完成",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "得力9585彩色加厚型垃圾袋", price: 3, number: 1},
          {name: "黑色折叠式雨伞", price: 19, number: 2},
        ],
        totalPrice: 41,
        totalNumber: 3,
        img: "/images/test-goods/garbage-bag.jpg"
      }, {
        supplier: "商家2",
        state: "已完成",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "得力9585彩色加厚型垃圾袋", price: 3, number: 3},
        ],
        totalPrice: 9, 
        totalNumber: 6,
        img: "/images/test-goods/umbrella.jpg"
      }, {
        supplier: "商家3",
        state: "已退款",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "得力9585彩色加厚型垃圾袋", price: 3, number: 1},
          {name: "黑色折叠式雨伞", price: 19, number: 3},
          {name: "番茄牌TOMATO事务用剪刀", price: 5, number: 2}
        ],
        totalPrice: 70,
        totalNumber: 6,
        img: "/images/test-goods/garbage-bag.jpg"
      }, {
        supplier: "商家4",
        state: "已退款",
        time: "2021-3-29 14:31:26",
        orders: [
          {name: "黑色折叠式雨伞", price: 19, number: 1},
          {name: "番茄牌TOMATO事务用剪刀", price: 5, number: 1}
        ],
        totalPrice: 24,
        totalNumber: 2,
        img: "/images/test-goods/scissors.jpg"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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