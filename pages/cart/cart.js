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
    // carts: [
    //   {
    //     name: "得力9585彩色加厚型垃圾袋",
    //     price: 3,
    //     number: 1,
    //     img: "/images/test-goods/garbage-bag.jpg"
    //   }, {
    //     name: "黑色折叠式雨伞",
    //     price: 19,
    //     number: 2,
    //     img: "/images/test-goods/umbrella.jpg"
    //   }, {
    //     name: "番茄牌TOMATO事务用剪刀",
    //     price: 5,
    //     number: 1,
    //     img: "/images/test-goods/scissors.jpg"
    //   }
    // ],
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
    // wx.showToast({
    //   title: '去结算',
    //   icon: 'success',
    //   duration: 3000
    // });
    wx.requestPayment(
      {
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success':function(res){
        console.log(res)
      },
      fail: function(res) {
        wx.showModal({
          title:'支付提示',
          content:'<text>',
          showCancel: false
        })
      },
      'complete':function(res){}
      })
  },

  /**
   * 更新总价
   */
  updateTotalPrice: function() {
    var price = 0;
    this.data.carts.forEach(function(item) {
      price += item.price * item.number;
    });
    this.setData({
      totalMoney: price
    })
  }
})