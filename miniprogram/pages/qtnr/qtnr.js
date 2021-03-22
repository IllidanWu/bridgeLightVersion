// pages/sbjg/sbjg.js
var app = getApp()
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
    // var that=this;
    // var items = JSON.parse(this.options.items);
    // that.setData({
    //  bridgeInfo:items
    // })
    var that=this;
    var items = JSON.parse(this.options.items);
    var bridgeActive=wx.getStorageSync("bridgeActive")
    var bridgeReveal=wx.getStorageSync("bridgeReveal")
    console.log(bridgeActive)
    console.log(bridgeActive)
    that.setData({
     bridgeInfo:items,
     bridgeActive,
     bridgeReveal
    })
  },
  bind_jskcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.jskcc':"请输入集水口尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.jskcc': e.detail.value,
      'bridgeReveal.jskcc': e.detail.value,
    })
    }
  },
  bind_jsksl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.jsksl':"请输入集水口数量",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.jsksl': e.detail.value,
      'bridgeReveal.jsksl': e.detail.value,
    })
    }
  },
  bind_xsgcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.xsgcc':"请输入泄水口尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.xsgcc': e.detail.value,
      'bridgeReveal.xsgcc': e.detail.value,
    })
    }
  },
  bind_xsgcd:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.xsgcd':"请输入泄水管长度",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.xsgcd': e.detail.value,
      'bridgeReveal.xsgcd': e.detail.value,
    })
    }
  },
  bind_lgzc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.lgzc':"请输入栏杆总长",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.lgzc': e.detail.value,
      'bridgeReveal.lgzc': e.detail.value,
    })
    }
  },
  bind_lgjg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.lgjg':"请输入栏杆结构",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.lgjg': e.detail.value,
      'bridgeReveal.lgjg': e.detail.value,
    })
    }
  },
  bind_dzcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.dzcc':"请输入端柱尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.dzcc': e.detail.value,
      'bridgeReveal.dzcc': e.detail.value,
    })
    }
  },
  bind_halx:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.halx':"请输入护岸类型",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.halx': e.detail.value,
      'bridgeReveal.halx': e.detail.value,
    })
    }
  },
  bind_ypdqlx:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.ypdqlx':"请输入引坡挡墙类型",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.ypdqlx': e.detail.value,
      'bridgeReveal.ypdqlx': e.detail.value,
    })
    }
  },
  bind_jsg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.jsg':"请输入给水管",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.jsg': e.detail.value,
      'bridgeReveal.jsg': e.detail.value,
    })
    }
  },
  bind_rqg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.rqg':"请输入燃气管",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.rqg': e.detail.value,
      'bridgeReveal.rqg': e.detail.value,
    })
    }
  },
  bind_dll:function(e){

    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.dll':"请输入电力缆",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.dll': e.detail.value,
      'bridgeReveal.dll': e.detail.value,
    })
    }
  },
  bind_txdl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.txdl':"请输入通信电缆",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.txdl': e.detail.value,
      'bridgeReveal.txdl': e.detail.value,
    })
    }
  },
  bind_qshj:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qshj':"请输入侵蚀环境",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qshj': e.detail.value,
      'bridgeReveal.qshj': e.detail.value,
    })
    }
  },
  bind_hdyj:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.hdyj':"请输入河道淤积",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.hdyj': e.detail.value,
      'bridgeReveal.hdyj': e.detail.value,
    })
    }
  },
  bind_hdcs:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.hdcs':"请输入河道冲刷",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.hdcs': e.detail.value,
      'bridgeReveal.hdcs': e.detail.value,
    })
    }
  },



  bind_Bqtnr:function(){
     var that=this;
     var items = JSON.stringify(this.data.bridgeInfo);
     wx.setStorageSync('bridgeReveal', this.data.bridgeReveal)
     wx.setStorageSync('bridgeActive', this.data.bridgeActive)
     app.globalData.backMain=1
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