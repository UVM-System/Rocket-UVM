const utils = require("../../utils/utils.js");

// pages/cart/cart.js
require("../../utils/utils.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    carts: [
      {
        img: "/images/goods/MD.jpg",
        name: "脉动",
        price: 3,
        number: 9
      },{
        img: "/images/goods/KSFBHC.jpg",
        name: "康师傅冰红茶",
        price: 3,
        number: 3
      }, {
        img: "/images/goods/FANTA.jpg",
        name: "芬达",
        price: 3,
        number: 9
      },{
        img: "/images/goods/JDB.jpg",
        name: "加多宝",
        price: 3,
        number: 8
      }, {
        img: "/images/goods/VTMSSL.jpg",
        name: "维他命",
        price: 3,
        number: 3
      }, {
        img: "/images/goods/MZYGLC.jpg",
        name: "美汁源果粒橙",
        price: 3,
        number: 9
      },{
        img: "/images/goods/TYNL.jpg",
        name: "统一NL",
        price: 3,
        number: 8
      }, {
        img: "/images/goods/TYASM.jpg",
        name: "统一阿萨姆",
        price: 3,
        number: 3
      }, {
        img: "/images/goods/YYKX.jpg",
        name: "营养快线",
        price: 3,
        number: 3
      }
    ],
    totalMoney: 0,
    realTime: null,//实时数据对象(用于关闭实时刷新方法)
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
    var self = this
    /**
     * 防止用户拿不到最新数据(因为页面切换会重新计时)
     * 无条件请求一次最新数据
     */
    wx.request({
      url: "http://10.250.164.198:8000/result",
      success: function (res) {
        self.setData({
          carts: res.data.change,
        })
      }
    })
    /**
     * 每隔一段时间请求服务器刷新数据(客户状态)
     * 当页面显示时开启定时器(开启实时刷新)
     * 每隔1分钟请求刷新一次
     * @注意：用户切换后页面会重新计时
     */
    this.data.realTime = setInterval(function () {
      // 请求服务器数据
      wx.request({
        url: "http://10.250.164.198:8000/result",
        success: function (res) {
          self.setData({
            carts: res.data.change,
          })
        }
      })
      console.log(self.data.change)
      // 反馈提示
      wx.showToast({
        title: '数据已更新！'
      })
      self.updateTotalPrice();
    }, 6000)//间隔时间
    // 更新数据
    this.setData({
      realTime: this.data.realTime,//实时数据对象(用于关闭实时刷新方法)
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    /**
     * 当页面隐藏时关闭定时器(关闭实时刷新)
     * 切换到其他页面了
     */
    clearInterval(this.data.realTime)
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
/**
 * 基于云开发的微信支付
 */
// 调用云开发统一下单函数，得到支付API所需参数payment
  submitOrder: function() {
    wx.showLoading({
      title: '加载中……',
    })
    let that = this;
    var body = "测试订单"; // 订单支付内容
    wx.cloud.callFunction({
      name: "pay",
      data: {
        body: body,
        orderId: "" + that.getRandomOrderId(), // 不大于32位的订单号
        // money: that.data.totalMoney * 100, // 支付金额，接口单位是分，故*100
        money: 0.01 * 100, // 支付金额，接口单位是分，故*100
        nonceStr: utils.randomStr(32), // 不长于32位的随机字符串
      },
      success:(res) => {
        wx.hideLoading({
          complete: (res) => {},
        })
        console.log("订单提交成功！", res.result)
        that.pay(res.result)
      },
      fail:(res) => {
        wx.hideLoading({
          complete: (res) => {},
        })
        console.log("订单提交失败！", res)
      }
    })
  },
// 调用支付API
  pay: function(payData){
    const payment = payData.payment;
    wx.requestPayment({
      ...payment,
      success:(res) => {
        console.log("支付成功！", res)
        // 跳转到支付成功页面
      },
      fail:(res) => {
        console.log("支付失败！", res)
        // 跳转到支付失败页面
      }
    })
  },
  /**
   * 随机数+系统时间戳生成不重复的商品订单号
   */
  getRandomOrderId: function() {
    const date = new Date();
    let year = `${date.getFullYear()}`;
    let month = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1}`;
    let day = `${date.getDate() < 10 ? `0${date.getDate()}`: date.getDate()}`;
    let hour = `${date.getHours() < 10 ? `0${date.getHours()}`: date.getHours()}`;
    let minute = `${date.getMinutes() < 10 ? `0${date.getMinutes()}`: date.getMinutes()}`;
    let second = `${date.getSeconds() < 10 ? `0${date.getSeconds()}`: date.getSeconds()}`;
    let formatDate = `${year}${month}${day}${hour}${minute}${second}`;
    return `${Math.round(Math.random() * 1000)}${formatDate + Math.round(Math.random() * 89 + 100).toString()}`;
  },
  toPay: function() {
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