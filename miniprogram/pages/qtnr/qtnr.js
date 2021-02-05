// pages/sbjg/sbjg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bridgeInfo: {
      //selector
  

     jskcc:'',
    jsksl:'',
    xsgcc:'',
    xsgcd:'',
    lgzc:'',
    lgjg:'',
    dzcc:'',
    halx:'',
    ypdqlx:'',
    jsg:'',
    rqg:'',
    dll:'',
    txdl:'',
    qshj:'',
    hdyj:'',
    hdcs:''
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var items = JSON.parse(this.options.items);
    that.setData({
     bridgeInfo:items
    })
  },
  bind_jskcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jskcc': e.detail.value,
    })
  },
  bind_jsksl:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jsksl': e.detail.value,
    })
  },
  bind_xsgcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.xsgcc': e.detail.value,
    })
  },
  bind_xsgcd:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.xsgcd': e.detail.value,
    })
  },
  bind_lgzc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.lgzc': e.detail.value,
    })
  },
  bind_lgjg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.lgjg': e.detail.value,
    })
  },
  bind_dzcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.dzcc': e.detail.value,
    })
  },
  bind_halx:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.halx': e.detail.value,
    })
  },
  bind_ypdqlx:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.ypdqlx': e.detail.value,
    })
  },
  bind_jsg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jsg': e.detail.value,
    })
  },
  bind_rqg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.rqg': e.detail.value,
    })
  },
  bind_dll:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.dll': e.detail.value,
    })
  },
  bind_txdl:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.txdl': e.detail.value,
    })
  },
  bind_qshj:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qshj': e.detail.value,
    })
  },
  bind_hdyj:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.hdyj': e.detail.value,
    })
  },
  bind_hdcs:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.hdcs': e.detail.value,
    })
  },



  bind_Bqtnr:function(){
     var that=this;
     var items = JSON.stringify(this.data.bridgeInfo);
     wx.redirectTo({
       url: '/pages/qljc/qljc?items=' +items
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

  }
})