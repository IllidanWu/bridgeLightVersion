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


  bind_gldw:function(e){
    var that=this;
    this.setData({
      'bridge.gldw': e.detail.value,
    })
  },

  

  bind_Bybzl:function(){
   
     var that=this;
     var items = JSON.stringify(this.data.bridge);
     wx.redirectTo({
       url: '/pages/lscx/lscx?items=' +items
     })
     app.globalData.reveal_lscx=0;
  },
  
})