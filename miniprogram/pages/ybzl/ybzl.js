// pages/sbjg/sbjg.js
var app = getApp()
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
    bridgeActive:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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


  bind_gldw:function(e){

    // this.setData({
    //   'bridgeInfo.gldw': e.detail.value,
    // })
    if (e.detail.value==='')
  {
    this.setData({
     'bridgeReveal.gldw':"请输入管理单位",   
    })
  }
  else {
  this.setData({
    'bridgeInfo.gldw': e.detail.value,
    'bridgeReveal.gldw': e.detail.value,
  })
  }


  },

  bind_yhdw:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yhdw':"请输入养护单位",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yhdw': e.detail.value,
      'bridgeReveal.yhdw': e.detail.value,
    })
    }
  },
  bind_jsdw:function(e){
    if (e.detail.value==='')
  {
    this.setData({
     'bridgeReveal.jsdw':"请输入建设单位",   
    })
  }
  else {
  this.setData({
    'bridgeInfo.jsdw': e.detail.value,
    'bridgeReveal.jsdw': e.detail.value,
  })
  }
  },
  bind_sjdw:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.sjdw':"请输入设计单位",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.sjdw': e.detail.value,
      'bridgeReveal.sjdw': e.detail.value,
    })
    }
  },
  bind_jldw:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.jldw':"请输入监理单位",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.jldw': e.detail.value,
      'bridgeReveal.jldw': e.detail.value,
    })
    }
  },
  bind_sgdw:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.sgdw':"请输入施工单位",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.sgdw': e.detail.value,
      'bridgeReveal.sgdw': e.detail.value,
    })
    }
  },
  bind_jzny:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.jzny':"请输入建造年月",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.jzny': e.detail.value,
      'bridgeReveal.jzny': e.detail.value,
    })
    }
  },
  bind_zzj:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zzj':"请输入总造价",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zzj': e.detail.value,
      'bridgeReveal.zzj': e.detail.value,
    })
    }
  },
  bind_yhlb:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yhlb':"请输入养护类别",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yhlb': e.detail.value,
      'bridgeReveal.yhlb': e.detail.value,
    })
    }
  },
  bind_yhdj:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yhdj':"请输入养护等级",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yhdj': e.detail.value,
      'bridgeReveal.yhdj': e.detail.value,
    })
    }
  },
  bind_dldj:function(e){
    var that=this;
    this.index_dldj=e.detail.value
    this.setData(
      {
        index_dldj:this.index_dldj,
        'bridgeActive.dldj': false
      }
    )
    this.setData({
      'bridgeInfo.dldj': this.data.arr_dldj[this.data.index_dldj],
    })
  },
  bind_jglx:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.jglx':"请输入结构类型",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.jglx': e.detail.value,
      'bridgeReveal.jglx': e.detail.value,
    })
    }
  },
  bind_sjhz:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.sjhz':"请输入设计荷载",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.sjhz': e.detail.value,
      'bridgeReveal.sjhz': e.detail.value,
    })
    }
  },
  bind_xzbz:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.xzbz':"请输入限载标准",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.xzbz': e.detail.value,
      'bridgeReveal.xzbz': e.detail.value,
    })
    }
  },
  bind_kzld:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.kzld':"请输入抗震烈度",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.kzld': e.detail.value,
      'bridgeReveal.kzld': e.detail.value,
    })
    }
  },

  bind_zxjj:function(e){
    var that=this;
     this.index_zxjj=e.detail.value
     this.setData(
       {
         index_zxjj:this.index_zxjj,
         'bridgeActive.zxjj': false
       }
     )
    this.setData({
      'bridgeInfo.zxjj': this.data.arr_zxjj[this.data.index_zxjj],
    })
  },
  bind_qlks:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qlks':"请输入桥梁跨数",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qlks': e.detail.value,
      'bridgeReveal.qlks': e.detail.value,
    })
    }
  },
  bind_kjzh:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.kjzh':"请输入跨径组合",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.kjzh': e.detail.value,
      'bridgeReveal.kjzh': e.detail.value,
    })
    }
  },
  bind_qmmj:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qmmj':"请输入桥面面积",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qmmj': e.detail.value,
      'bridgeReveal.qmmj': e.detail.value,
    })
    }
  },
  bind_qlzc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qlzc':"请输入桥梁总长",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qlzc': e.detail.value,
      'bridgeReveal.qlzc': e.detail.value,
    })
    }
  },
  bind_qlzk:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qlzk':"请输入桥梁总宽",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qlzk': e.detail.value,
      'bridgeReveal.qlzk': e.detail.value,
    })
    }
  },
  bind_cxdjk:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.cxdjk':"请输入车行道净宽",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.cxdjk': e.detail.value,
      'bridgeReveal.cxdjk': e.detail.value,
    })
    }
  },
  bind_rxdjk:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.rxdjk':"请输入人行道净宽",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.rxdjk': e.detail.value,
      'bridgeReveal.rxdjk': e.detail.value,
    })
    }
  },
  bind_hddj:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.hddj':"请输入河道等级",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.hddj': e.detail.value,
      'bridgeReveal.hddj': e.detail.value,
    })
    }
  },
  bind_zgsw:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zgsw':"请输入最高水位",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zgsw': e.detail.value,
      'bridgeReveal.zgsw': e.detail.value,
    })
    }
  },
  bind_csw:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.csw':"请输入常水位",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.csw': e.detail.value,
      'bridgeReveal.csw': e.detail.value,
    })
    }
  },



  bind_Bybzl:function(){
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