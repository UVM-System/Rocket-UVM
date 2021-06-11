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
    totalMoney: 0,
    realTime: null,//实时数据对象(用于关闭实时刷新方法)
    change: {},
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
      url: "http://127.0.0.1:8000/result",
      success: function (res) {
        self.setData({
          change: res.data.change,
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
        url: "http://127.0.0.1:8000/result",
        success: function (res) {
          self.setData({
            change: res.data.change,
          })
        }
      })
      console.log(self.data.change)
      // 反馈提示
      wx.showToast({
        title: '数据已更新！'
      })
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