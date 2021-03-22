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

})