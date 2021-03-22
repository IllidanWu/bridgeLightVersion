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
  bind_qdxs:function(e){
    var that=this;
    this.index_qdxs=e.detail.value
    this.setData(
      {
        index_qdxs:this.index_qdxs
      }
    )
    this.setData({
      'bridge.qdxs': this.data.arr_qdxs[this.data.index_qdxs],
    })
  },
  bind_qdsl:function(e){
    var that=this;
    this.setData({
      'bridge.qdsl': e.detail.value,
    })
  },
 

  bind_Bxbjg:function(){
   
     var that=this;
     var items = JSON.stringify(this.data.bridge);
     wx.redirectTo({
       url: '/pages/lscx/lscx?items=' +items
     })
     app.globalData.reveal_lscx=0;
  },
  
})