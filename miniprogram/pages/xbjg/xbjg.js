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
    // let bridgeActive=JSON.parse(activeItem)
    console.log(bridgeActive)
    that.setData({
     bridgeInfo:items,
     bridgeActive,
     bridgeReveal
    })
  },
  bind_qdxs:function(e){
    var that=this;
    this.index_qdxs=e.detail.value
    this.setData(
      {
        index_qdxs:this.index_qdxs,
        'bridgeActive.qdxs': false
      }
    )
    this.setData({
      'bridgeInfo.qdxs': this.data.arr_qdxs[this.data.index_qdxs],
    })
  },
  bind_qdsl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qdsl':"请输入桥墩数量",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qdsl': e.detail.value,
      'bridgeReveal.qdsl': e.detail.value,
    })
    }
  },
  bind_qdbg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qdbg':"请输入桥墩标高",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qdbg': e.detail.value,
      'bridgeReveal.qdbg': e.detail.value,
    })
    }
  },
  bind_glcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.glcc':"请输入盖梁尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.glcc': e.detail.value,
      'bridgeReveal.glcc': e.detail.value,
    })
    }
  },
  bind_qdjdbg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qdjdbg':"请输入桥墩基底标高",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qdjdbg': e.detail.value,
      'bridgeReveal.qdjdbg': e.detail.value,
    })
    }
  },
  bind_qddbcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qdbcc':"请输入桥墩底板尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qddbcc': e.detail.value,
      'bridgeReveal.qddbcc': e.detail.value,
    })
    }
  },
  bind_qdjzcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qdjzcc':"请输入桥墩基桩尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qdjzcc': e.detail.value,
      'bridgeReveal.qdjzcc': e.detail.value,
    })
    }
  },
  bind_qdjzgs:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qdjzgs':"请输入桥墩基桩根数",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qdjzgs': e.detail.value,
      'bridgeReveal.qdjzgs': e.detail.value,
    })
    }
  },
  bind_tmcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.tmcc':"请输入台帽尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.tmcc': e.detail.value,
      'bridgeReveal.tmcc': e.detail.value,
    })
    }
  },
  bind_dtbhd:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.dtbhd':"请输入挡土板厚度",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.dtbhd': e.detail.value,
      'bridgeReveal.dtbhd': e.detail.value,
    })
    }
  },
  bind_qtxs:function(e){
    var that=this;
    this.index_qtxs=e.detail.value
    
    this.setData(
      {
        index_qtxs:this.index_qtxs,
        'bridgeActive.qtxs': false
      }
    )
    this.setData({
      'bridgeInfo.qtxs': this.data.arr_qtxs[this.data.index_qtxs],
      
    })
  },
  bind_qtsl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qtsl':"请输入桥台数量",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qtsl': e.detail.value,
      'bridgeReveal.qtsl': e.detail.value,
    })
    }
  },
  bind_qtbg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qtbg':"请输入桥台标高",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qtbg': e.detail.value,
      'bridgeReveal.qtbg': e.detail.value,
    })
    }
  },
  bind_qtjdbg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qtjdbg':"请输入桥台基底标高",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qtjdbg': e.detail.value,
      'bridgeReveal.qtjdbg': e.detail.value,
    })
    }
  },
  bind_qtdbcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qtdbcc':"请输入桥台底板尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qtdbcc': e.detail.value,
      'bridgeReveal.qtdbcc': e.detail.value,
    })
    }
  },
  bind_qtjzcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qtjzcc':"请输入桥台基桩尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qtjzcc': e.detail.value,
      'bridgeReveal.qtjzcc': e.detail.value,
    })
    }
  },
  bind_qtjzgs:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qtjcgs':"请输入桥台基桩根数",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qtjzgs': e.detail.value,
      'bridgeReveal.qtjzgs': e.detail.value,
    })
    }
  },
  // bind_dtbgs:function(e){
  //   if (e.detail.value==='')
  //   {
  //     this.setData({
  //      'bridgeReveal.dtbgs':"请输入桥墩标高",   
  //     })
  //   }
  //   else {
  //   this.setData({
  //     'bridgeInfo.dtbgs': e.detail.value,
  //     'bridgeReveal.dtbgs': e.detail.value,
  //   })
  //   }
  // },
  bind_yqxs:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yqxs':"请输入翼墙形式",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yqxs': e.detail.value,
      'bridgeReveal.yqxs': e.detail.value,
    })
    }
  },
  bind_yqcd:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yqcd':"请输入翼墙长度",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yqcd': e.detail.value,
      'bridgeReveal.yqcd': e.detail.value,
    })
    }
  },



  bind_Bxbjg:function(){
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