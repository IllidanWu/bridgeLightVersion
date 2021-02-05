// pages/sbjg/sbjg.js
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
    bridgeInfo: {
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
     bridgeInfo:items
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
      'bridgeInfo.qdxs': this.data.arr_qdxs[this.data.index_qdxs],
    })
  },
  bind_qdsl:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qdsl': e.detail.value,
    })
  },
  bind_qdbg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qdbg': e.detail.value,
    })
  },
  bind_glcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.glcc': e.detail.value,
    })
  },
  bind_qdjdbg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qdjdbg': e.detail.value,
    })
  },
  bind_qddbcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qddbcc': e.detail.value,
    })
  },
  bind_qdjzcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qdjzcc': e.detail.value,
    })
  },
  bind_qdjzgs:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qdjzgs': e.detail.value,
    })
  },
  bind_tmcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.tmcc': e.detail.value,
    })
  },
  bind_dtbhd:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.dtbhd': e.detail.value,
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
      'bridgeInfo.qtxs': this.data.arr_qtxs[this.data.index_qtxs],
      
    })
  },
  bind_qtsl:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qtsl': e.detail.value,
    })
  },
  bind_qtbg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qtbg': e.detail.value,
    })
  },
  bind_qtjdbg:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qtjdbg': e.detail.value,
    })
  },
  bind_qtdbcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qtdbcc': e.detail.value,
    })
  },
  bind_qtjzcc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qtjzcc': e.detail.value,
    })
  },
  bind_qtjzgs:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qtjzgs': e.detail.value,
    })
  },
  bind_dtbgs:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.dtbgs': e.detail.value,
    })
  },
  bind_yqxs:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.yqxs': e.detail.value,
    })
  },
  bind_yqcd:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.yqcd': e.detail.value,
    })
  },



  bind_Bxbjg:function(){
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