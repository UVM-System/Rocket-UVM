// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUseGetUserProfile: false, // 是否可以使用getUserProfile
    userInfo: null,
    nickName: null,
    avatarUrl: null,
    options: [
      // 注意，主页面之间的跳转不能使用 navigator
      {
        option: "历史订单",
        url: "/pages/history/history"
      }, {
        option: "联系客服",
        url: "/pages/details/details"
      }, {
        option: "关于我们",
        url: "/pages/details/details"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let self = this;
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  
  // 用户授权、登录；新版本推荐使用getUserProfile
  bindGetUserProfile: function(e){
    wx.getUserProfile({
      // 授权显示用户基本信息
      desc: '授权展示用户信息',
      success: (res) => {
        console.log(res),
        this.setData({
          userInfo: res.userInfo,
          avatarUrl: res.userInfo.avatarUrl,
          nickName: res.userInfo.nickName
        });
        wx.login({
          // 获取code，发送到后台，并接收用户ID
          success: function(res) {
          // 将code发送到后端，并获取用户id
          if(res.code){
            wx.request({
              url: 'http://127.0.0.1:8000',
              data: {
                code: res.code
              },
              success: function(res){
                // fail处理不了404错误，用code来判断
                if(res.code == 1){
                  // 把用户ID存入本地
                  wx.setStorageSync('uvmUserId', res.id)
                }else{
                  // 后端登录失败
                  console.log("后端登录失败")
                }
              },
            });
          }
        }
        })
      }
    })
  },

  bindGetUserInfo: function(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      avatarUrl: e.detail.userInfo.avatarUrl,
      nickName: e.detail.userInfo.nickName
    });    
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

  }
})