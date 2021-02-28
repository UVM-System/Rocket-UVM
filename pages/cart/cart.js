// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [
      {
        img: "/images/goods/maidong.jpg",
        name: "脉动",
        price: 3,
        number: 9
      },{
        img: "/images/goods/KSFH.jpg",
        name: "康师傅红茶",
        price: 3,
        number: 3
      }, {
        img: "/images/goods/fenda.jpg",
        name: "芬达",
        price: 3,
        number: 9
      },{
        img: "/images/goods/jiaduobao.jpg",
        name: "加多宝",
        price: 3,
        number: 8
      }, {
        img: "/images/goods/LLDS.jpg",
        name: "维他命",
        price: 3,
        number: 3
      }, {
        img: "/images/goods/MZY.jpg",
        name: "美汁源",
        price: 3,
        number: 9
      },{
        img: "/images/goods/TYCL.jpg",
        name: "统一CL",
        price: 3,
        number: 8
      }, {
        img: "/images/goods/TYYC.jpg",
        name: "统一YC",
        price: 3,
        number: 3
      }, {
        img: "/images/goods/yingyangkuaixian.jpg",
        name: "营养快线",
        price: 3,
        number: 3
      }
    ],
    totalMoney: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.updateTotalPrice();
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

  toPay: function() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
  },

  /**
   * 更新总价
   */
  updateTotalPrice: function() {
    var price = 0;
    console.log(this.data.carts);
    this.data.carts.forEach(function(item) {
      price += item.price * item.number;
    });
    this.setData({
      totalMoney: price
    })
  }
})