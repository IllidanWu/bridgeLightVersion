// pages/sbjg/sbjg.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr_zzxs: ['/','板式橡胶', '盆式橡胶', '钢', '油毛毡', '整体砼', '无', '其他'],
    index_zzxs: 0,
    arr_ssfxs: ['/','型钢', '简易割缝', '梳齿板', '橡胶板', '其他'],
    index_ssfxs: 0,
    customItem: '全部',
    bridge: {
      //selector
  
      //ybzl//
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

      //sbjg//
      zlxs: '',
      zlcc:'',
      zlsl:'',
      hlxs:'',
      zkqxjk:'',
      qxxg:'',
      gqskb:'',
      //zzxs:'',
      zssl:'',
      qljg:'',
      qmpzhd:'',
     // ssfxs:'',
      ssfsl:'',
      zqzp:'',
      zqhp:'',
      yqzp:'',
      yqhp:'',

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
 

  bind_zlxs:function(e){
    var that=this;
    this.setData({
      'bridge.zlxs': e.detail.value,
    })
  },
  bind_zlcc:function(e){
    var that=this;
    this.setData({
      'bridge.zlcc': e.detail.value,
    })
  },
  bind_zlsl:function(e){
    var that=this;
    this.setData({
      'bridge.zlsl': e.detail.value,
    })
  },
  bind_hlxs:function(e){
    var that=this;
    this.setData({
      'bridge.hlxs': e.detail.value,
    })
  },
  bind_zkqxjk:function(e){
    var that=this;
    this.setData({
      'bridge.zkqxjk': e.detail.value,
    })
  },
  bind_qxxg:function(e){
    var that=this;
    this.setData({
      'bridge.qxxg': e.detail.value,
    })
  },
  bind_gqskb:function(e){
    var that=this;
    this.setData({
      'bridge.gqskb': e.detail.value,
    })
  },
  bind_zzxs:function(e){
    var that=this;
    this.index_zzxs=e.detail.value
    this.setData(
      {
        index_zzxs:this.index_zzxs
      }
    )
    this.setData({
      'bridge.zzxs': this.data.arr_zzxs[this.data.index_zzxs],
    })
  },
  bind_zzsl:function(e){
    var that=this;
    this.setData({
      'bridge.zzsl': e.detail.value,
    })
  },
  bind_qmjg:function(e){
    var that=this;
    this.setData({
      'bridge.qmjg': e.detail.value,
    })
  },
  bind_qmpzhd:function(e){
    var that=this;
    this.setData({
      'bridge.qmpzhd': e.detail.value,
    })
  },
  bind_ssfxs:function(e){
    var that=this;
     this.index_ssfxs=e.detail.value
     this.setData(
       {
         index_ssfxs:this.index_ssfxs
       }
     )
    this.setData({
      'bridge.ssfxs': this.data.arr_ssfxs[this.data.index_ssfxs],
    })
  },

  bind_ssfsl:function(e){
    var that=this;
    this.setData({
      'bridge.ssfsl': e.detail.value,
    })
  },
  bind_zqzp:function(e){
    var that=this;
    this.setData({
      'bridge.zqzp': e.detail.value,
    })
  },
  bind_zqhp:function(e){
    var that=this;
    this.setData({
      'bridge.zqhb': e.detail.value,
    })
  },
  bind_yqzp:function(e){
    var that=this;
    this.setData({
      'bridge.yqzp': e.detail.value,
    })
  },
  bind_yqhp:function(e){
    var that=this;
    this.setData({
      'bridge.yqhp': e.detail.value,
    })
  },
  bind_Bsbjg:function(){
    
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