// pages/record/record.js
wx.cloud.init();
    //1、引用数据库
    const db = wx.cloud.database({
      //这个是环境ID,不是环境名称
      env: 'qljc-0b2vv'
    })
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


   // 初始化 cloud

//2、开始查询数据了  yyyyy对应的是集合的名称

const bridgeListCollection=db.collection('bridgeList')

var bridgeSrc
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: ['','']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var swiperList
console.log(options.scene)
console.log(options)
const _id=options.scene

this.setData({
  _id,
})
bridgeListCollection.doc(_id).get({
  success: res=>{
 bridgeSrc=res.data

    console.log(bridgeSrc)
    console.log(bridgeSrc)
    console.log(bridgeSrc.Czmt)

    console.log(bridgeSrc.Czmt)
    console.log(bridgeSrc.Clmt)
    wx.setStorageSync('bridgeSrc',res.data);
    console.log(res.data)
    this.setData({
      bridge: bridgeSrc,
      'swiperList.Czmt': bridgeSrc.Czmt,
      'swiperList.Clmt': bridgeSrc.Clmt,
      long: bridgeSrc.long.toFixed(5),
      lat: bridgeSrc.lat.toFixed(5)
    })



    
  },
fail:res =>{
console.log('error')
}
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
  onShow: function (res) {
     console.log(res)
  },
})
 