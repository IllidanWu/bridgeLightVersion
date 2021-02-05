// pages/test/test.js

Page({
 
  /**
   * 页面的初始数据
   */
  data: {

  },


  http:function(event){
    wx.cloud.callFunction({
      name:'http'
    }).then(res=>{
      console.log(res)
    })

  }
})
