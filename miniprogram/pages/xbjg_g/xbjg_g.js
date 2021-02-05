// pages/sbjg/sbjg.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_qtxs: ['/','重力式', '轻型桥台', '桩柱式', '其他'],
    index_qtxs: 0,
    arr_qdxs: ['/', '桩柱式', '重力式', '薄壁墩', '其他'],
    index_qdxs: 0,
    customItem: '全部',
    bridge: {
     qdxs:'',
     qdsl:'',
     glcc:'',
     qdjdbg:'',
     qddbcc:'',
     qdjzcc:'',
     qdjzgs:'',
     qtxs:'',
     qtsl:'',
     qtbg:'',
     qtjdbg:'',
     tmcc:'',
     qtjzzc:'',
     qtdbcc:'',
     qtjzgs:'',
     dtbhd:'',
     yqxs:'',
     yqcd:'',
     
        },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var items = JSON.parse(this.options.items);
    that.setData({
     bridge:items
    })
  },
  bind_qdxs:function(e){
    var that=this;
    this.index_qdxs=e.detail.value
    this.setData(
      {
        index_qdxs:this.index_qdxs
      }
    )
    this.setData({
      'bridge.qdxs': this.data.arr_qdxs[this.data.index_qdxs],
    })
  },
  bind_qdsl:function(e){
    var that=this;
    this.setData({
      'bridge.qdsl': e.detail.value,
    })
  },
  bind_qdbg:function(e){
    var that=this;
    this.setData({
      'bridge.qdbg': e.detail.value,
    })
  },
  bind_glcc:function(e){
    var that=this;
    this.setData({
      'bridge.glcc': e.detail.value,
    })
  },
  bind_qdjdbg:function(e){
    var that=this;
    this.setData({
      'bridge.qdjdbg': e.detail.value,
    })
  },
  bind_qddbcc:function(e){
    var that=this;
    this.setData({
      'bridge.qddbcc': e.detail.value,
    })
  },
  bind_qdjzcc:function(e){
    var that=this;
    this.setData({
      'bridge.qdjzcc': e.detail.value,
    })
  },
  bind_qdjzgs:function(e){
    var that=this;
    this.setData({
      'bridge.qdjzgs': e.detail.value,
    })
  },
  bind_tmcc:function(e){
    var that=this;
    this.setData({
      'bridge.tmcc': e.detail.value,
    })
  },
  bind_dtbhd:function(e){
    var that=this;
    this.setData({
      'bridge.dtbhd': e.detail.value,
    })
  },
  bind_qtxs:function(e){
    var that=this;
    this.index_qtxs=e.detail.value
    
    this.setData(
      {
        index_qtxs:this.index_qtxs
      }
    )
    this.setData({
      'bridge.qtxs': this.data.arr_qtxs[this.data.index_qtxs],
      
    })
  },
  bind_qtsl:function(e){
    var that=this;
    this.setData({
      'bridge.qtsl': e.detail.value,
    })
  },
  bind_qtbg:function(e){
    var that=this;
    this.setData({
      'bridge.qtbg': e.detail.value,
    })
  },
  bind_qtjdbg:function(e){
    var that=this;
    this.setData({
      'bridge.qtjdbg': e.detail.value,
    })
  },
  bind_qtdbcc:function(e){
    var that=this;
    this.setData({
      'bridge.qtdbcc': e.detail.value,
    })
  },
  bind_qtjzcc:function(e){
    var that=this;
    this.setData({
      'bridge.qtjzcc': e.detail.value,
    })
  },
  bind_qtjzgs:function(e){
    var that=this;
    this.setData({
      'bridge.qtjzgs': e.detail.value,
    })
  },
  bind_dtbgs:function(e){
    var that=this;
    this.setData({
      'bridge.dtbgs': e.detail.value,
    })
  },
  bind_yqxs:function(e){
    var that=this;
    this.setData({
      'bridge.yqxs': e.detail.value,
    })
  },
  bind_yqcd:function(e){
    var that=this;
    this.setData({
      'bridge.yqcd': e.detail.value,
    })
  },



  bind_Bxbjg:function(){
   
     var that=this;
     var items = JSON.stringify(this.data.bridge);
     wx.redirectTo({
       url: '/pages/lscx/lscx?items=' +items
     })
     app.globalData.reveal_lscx=0;
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