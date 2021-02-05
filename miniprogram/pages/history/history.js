// pages/history/history.js
var qlbh
var app = getApp();

var bridgeList
  // 初始化 cloud
wx.cloud.init();
//1、引用数据库
const db = wx.cloud.database({
  //这个是环境ID,不是环境名称
  env: 'qljc-0b2vv'
})
//2、开始查询数据了  yyyyy对应的是集合的名称
db.collection('bridgeList').get({
  //如果查询成功的话
  success(res) {
    //将获得的数据集加入到原来的数据集中
    bridgeList.push(res.data)
    //调试一下，是否加入
    //这里需要多多注意一下，数据加入后都是在下标1里面的
    console.log(bridgeList)
  },
})
const bridgeListCollection=db.collection('bridgeList')
Page({




bind_touch:function(e){
   wx.setStorageSync('bridgeListTime',e.currentTarget.dataset.time);
   wx.setStorageSync('bridgeListID',e.currentTarget.dataset.id);
  wx.setStorageSync('qlbh',e.target.dataset.index);
  console.log(qlbh)
  console.log(e.target.dataset.index)
  console.log(e.currentTarget.dataset.id)
  const id=wx.getStorageSync('bridgeListID')
  {
   
    app.globalData.reveal_lscx=1;
  wx.redirectTo({
    url: '../lscx/lscx',
    success: (result) => {
     
      console.log(bridgeList[qlbh])
    },
    fail: () => { },
    complete: () => { }
  });
  // this.setData({
    // bridgeList:wx.getStorageSync("bridgeList")||[]
    // bridgeInfo.jcsj=bridgeList[this.data.qlbh].jcsj
  // });
}
},


  bind_clear:function(){
    var that=this

    wx.showModal({
      title: '请确认清空记录',
      content: '是否要清空记录？',
      success(res) {

        if (res.confirm) {
          console.log('clear confirm')
          try{
            wx.clearStorageSync()
            that.setData({
              bridgeList:wx.getStorageSync("bridgeList")||[]
            })
            // console.log('success')
          }catch(e){
            console.log(e)
          }
        } else if (res.cancel) {
          console.log('clear cancel')
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    bridgeListCollection.count().then(res=>{
      
      console.log(res)
    }
  )

    bridgeListCollection.get().then(res=>{
      console.log(res);
      this.setData({
        bridgeListData: res.data,
      })
    })
    this.setData({
      bridgeList:wx.getStorageSync("bridgeList")||[],
    })
  },
 
  bind_qljc: function() {
    var that = this
   
    wx.redirectTo({
      url: '../qljc/qljc',
      success: (result)=>{
        app.globalData.count=0
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  
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