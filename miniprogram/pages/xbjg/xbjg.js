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
  
})