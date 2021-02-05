// pages/sbjg/sbjg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_dldj: ['/','主干路', '快速路', '次干路', '支路', '街坊路'],
    index_dldj: 0,
    arr_zxjj: ['/','正交', '斜交'],
    index_zxjj: 0,
    customItem: '全部',
    bridgeInfo: {
      //selector
      
    
      
      gldw:'',
      yhdw: '',
      jsdw:'',
      sjdw:'',
      jldw:'',
      sgdw:'',
      jzny:'',
      zzj:'',
      yhlb:'',
      yhdj:'',
     // dldj:'', //
      jglx:'',
      sjhz:'',
      xzbz:'',
      kzld:'',
    //  zxjj:'',//
   //   qlks:'',//
    //  kjzh:'',//
      qmmj:'',
      qlzc:'',
      qlzk:'',
      cxdjk:'',
      rxdjk:'',
      hddj:'',
      zgsw:'',
      csw:'',

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


  bind_gldw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.gldw': e.detail.value,
    })
  },

  bind_yhdw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.yhdw': e.detail.value,
    })
  },
  bind_jsdw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jsdw': e.detail.value,
    })
  },
  bind_sjdw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.sjdw': e.detail.value,
    })
  },
  bind_jldw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jldw': e.detail.value,
    })
  },
  bind_sgdw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.sgdw': e.detail.value,
    })
  },
  bind_jzny:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jzny': e.detail.value,
    })
  },
  bind_zzj:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.zzj': e.detail.value,
    })
  },
  bind_yhlb:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.yhlb': e.detail.value,
    })
  },
  bind_yhdj:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.yhdj': e.detail.value,
    })
  },
  bind_dldj:function(e){
    var that=this;
    this.index_dldj=e.detail.value
    this.setData(
      {
        index_dldj:this.index_dldj
      }
    )
    this.setData({
      'bridgeInfo.dldj': this.data.arr_dldj[this.data.index_dldj],
    })
  },
  bind_jglx:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.jglx': e.detail.value,
    })
  },
  bind_sjhz:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.sjhz': e.detail.value,
    })
  },
  bind_xzbz:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.xzbz': e.detail.value,
    })
  },
  bind_kzld:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.kzld': e.detail.value,
    })
  },

  bind_zxjj:function(e){
    var that=this;
     this.index_zxjj=e.detail.value
     this.setData(
       {
         index_zxjj:this.index_zxjj
       }
     )
    this.setData({
      'bridgeInfo.zxjj': this.data.arr_zxjj[this.data.index_zxjj],
    })
  },
  bind_qlks:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qlks': e.detail.value,
    })
  },
  bind_kjzh:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.kjzh': e.detail.value,
    })
  },
  bind_qmmj:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qmmj': e.detail.value,
    })
  },
  bind_qlzc:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qlzc': e.detail.value,
    })
  },
  bind_qlzk:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.qlzk': e.detail.value,
    })
  },
  bind_cxdjk:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.cxdjk': e.detail.value,
    })
  },
  bind_rxdjk:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.rxdjk': e.detail.value,
    })
  },
  bind_hddj:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.hddj': e.detail.value,
    })
  },
  bind_zgsw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.zgsw': e.detail.value,
    })
  },
  bind_csw:function(e){
    var that=this;
    this.setData({
      'bridgeInfo.csw': e.detail.value,
    })
  },



  bind_Bybzl:function(){
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