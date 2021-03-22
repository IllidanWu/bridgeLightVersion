
var app = getApp();
wx.cloud.init();


// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //取消按钮是否显示
    isFofus:false,
   goods:[],
   //输入框的值
   inpValue:""
  },
  TimeId:-1,
 // 输入框的值 改变就会出发的事件
 handleInput(e){

       //1、引用数据库


   //1获取输入框的值

   const {value}=e.detail;
   console.log("查询的内容",value)
   //2检测合法性
   if(!value.trim()){
     //值不合法
    this.setData(
      {
        goods:[],
        isFofus:false
      }
    )
     return;
   }
   //3准备发送请求 准备获取数据
   this.setData({
     isFocus:true
   })
   clearTimeout(this.TimeId);
   this.TimeId=setTimeout(()=>{
    wx.showLoading({
      title:"正在搜索......",
    })
    const db = wx.cloud.database({
      //这个是环境ID,不是环境名称
      env: 'qljc-0b2vv'
    })
    const _=db.command
     db.collection('bridgeList').where(_.or([{
         qlmc:db.RegExp({
            regexp: '.*' + value,
            options: 'i',
         })
        },
        {
          jcdq:db.RegExp({
            regexp: '.*' + value,
            options: 'i',
         })       
     },
     {
        kyhl:db.RegExp({
        regexp: '.*' + value,
        options: 'i',
     })       
 },
    {
      gldw:db.RegExp({
        regexp: '.*' + value,
        options: 'i',
     })  
    }])).get({
       success: res =>{
        console.log(res)
        this.setData({
          bridgeData: res.data
        })
        wx.hideLoading({
          success: (res) => {},
        })
       },
       fail:err =>{
         console.log(err)
       }
     })
     
   },1000).then(res=>{

   });
    
 },
 bind_touch:function(e){
  wx.setStorageSync('bridgeListID',e.currentTarget.dataset.id);
 console.log(e.target.dataset.index)
 console.log(e.currentTarget.dataset.id)
 const id=wx.getStorageSync('bridgeListID')
 {
  
   app.globalData.reveal_lscx=1;
 wx.navigateTo({
   url: '../record/record',
   success: (result) => {
    wx.redirectTo({
      url: '../record/record',
     })
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
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  handleCancel(){
  this.setData(
    {
      inpValue:"",
      isFocus:false,
      bridgeData:""
    }
  )
  }
})