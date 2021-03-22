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
    bridgeInfo: {
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
 

  bind_zlxs:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zlxs':"请输入主梁型式",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zlxs': e.detail.value,
      'bridgeReveal.zlxs': e.detail.value,
    })
    }
  },
  bind_zlcc:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zlcc':"请输入主梁尺寸",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zlcc': e.detail.value,
      'bridgeReveal.zlcc': e.detail.value,
    })
    }
  },
  bind_zlsl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zlsl':"请输入主梁数量",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zlsl': e.detail.value,
      'bridgeReveal.zlsl': e.detail.value,
    })
    }
  },
  bind_hlxs:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.hlxs':"请输入横梁形式",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.hlxs': e.detail.value,
      'bridgeReveal.hlxs': e.detail.value,
    })
    }
  },
  bind_zkqxjk:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zkqxjk':"请输入主跨桥下净空",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zkqxjk': e.detail.value,
      'bridgeReveal.zkqxjk': e.detail.value,
    })
    }
  },
  bind_qxxg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qxxg':"请输入桥下限高",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qxxg': e.detail.value,
      'bridgeReveal.qxxg': e.detail.value,
    })
    }
  },
  bind_gqskb:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.gqskb':"请输入拱桥矢跨比",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.gqskb': e.detail.value,
      'bridgeReveal.gqskb': e.detail.value,
    })
    }
  },
  bind_zzxs:function(e){
    var that=this;
    this.index_zzxs=e.detail.value
    this.setData(
      {
        index_zzxs:this.index_zzxs,
        'bridgeActive.zzxs': false
      }
    )
    this.setData({
      'bridgeInfo.zzxs': this.data.arr_zzxs[this.data.index_zzxs],
    })
  },
  bind_zzsl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zzsl':"请输入支座数量",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zzsl': e.detail.value,
      'bridgeReveal.zzsl': e.detail.value,
    })
    }
  },
  bind_qmjg:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qmjg':"请输入桥面结构",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qmjg': e.detail.value,
      'bridgeReveal.qmjg': e.detail.value,
    })
    }
  },
  bind_qmpzhd:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.qmpzhd':"请输入桥面铺装厚度",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.qmpzhd': e.detail.value,
      'bridgeReveal.qmpzhd': e.detail.value,
    })
    }
  },
  bind_ssfxs:function(e){
    var that=this;
     this.index_ssfxs=e.detail.value
     this.setData(
       {
         index_ssfxs:this.index_ssfxs,
         'bridgeActive.ssfxs': false
       }
     )
    this.setData({
      'bridgeInfo.ssfxs': this.data.arr_ssfxs[this.data.index_ssfxs],
    })
  },

  bind_ssfsl:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.ssfsl':"请输入伸缩缝数量",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.ssfsl': e.detail.value,
      'bridgeReveal.ssfsl': e.detail.value,
    })
    }
  },
  bind_zqzp:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zqzp':"请输入主桥纵坡",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zqzp': e.detail.value,
      'bridgeReveal.zqzp': e.detail.value,
    })
    }
  },
  bind_zqhp:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.zqhp':"请输入主桥横坡",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.zqhp': e.detail.value,
      'bridgeReveal.zqhp': e.detail.value,
    })
    }
  },
  bind_yqzp:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yqzp':"请输入引桥纵坡",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yqzp': e.detail.value,
      'bridgeReveal.yqzp': e.detail.value,
    })
    }
  },
  bind_yqhp:function(e){
    if (e.detail.value==='')
    {
      this.setData({
       'bridgeReveal.yqhp':"请输入引桥横坡",   
      })
    }
    else {
    this.setData({
      'bridgeInfo.yqhp': e.detail.value,
      'bridgeReveal.yqhp': e.detail.value,
    })
    }
  },
  bind_Bsbjg:function(){
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