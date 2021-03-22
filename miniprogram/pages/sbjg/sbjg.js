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
  
})