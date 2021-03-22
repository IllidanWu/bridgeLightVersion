// pages/bridgeMap/bridgeMap.js
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

  /**
   * 页面的初始数据
   */
  data: {
    markers: [
      {
        iconPath: "",
        id:"",
        _id:"",
        name: "",
        latitude: 0,
        longitude: 0,
        width: 25,
        height: 25,
        callout: {
          anchorY: 60,
          anchorX: 0,
          content:"",
          fontSize: 5,
          color: '#fff',
          borderRadius:5,
          display: 'ALWAYS',
          textAlign: 'center'
        }
      },
  ],
  },
  regionchange(e) {
    console.log(e.type)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let i=0;
    var immediate=[]
    wx.cloud.callFunction({
      name:'getBridgeList',
      complete:res => {
        console.log(res)
        let bridgeData=res.result.data
        bridgeData.forEach(function(item,idnex){
          let bridgeItem= {callout:{}}
           console.log(item)
           bridgeItem.iconPath=item.Czmt
           bridgeItem.id=i
           bridgeItem._id=item._id
           bridgeItem.name=item.qlmc
           bridgeItem.width=25,
           bridgeItem.height=25,
           bridgeItem.latitude=item.lat
           bridgeItem.longitude=item.long
           bridgeItem.callout.content=item.qlmc
           bridgeItem.callout.anchorY= -4,
           bridgeItem.callout.anchorX= 0,
           bridgeItem.callout.content=item.qlmc,
           bridgeItem.callout.fontSize= 10,
           bridgeItem.callout.color='#fff',
           bridgeItem.callout.borderRadius=5,
           bridgeItem.callout.borderColor= '#0060ff'
           bridgeItem.callout.bgColor='#0060ff'
           bridgeItem.callout.display= 'ALWAYS',
           bridgeItem.callout.textAlign='center'
           immediate.push(bridgeItem)
           i++
        })
        
          this.setData({
            markers:immediate
          })
     

        // console.log(bridgeData.length)
        // for (let i=0; i<bridgeData.length;i++){
        //   console.log(bridgeData[i])
        //    markers[i].iconPath=(bridgeData.Czmt)
        //    markers[i].id=bridgeData._id
        //    markers[i].name=bridgeData.qlmc
        //    markers[i].latitude=bridgeData.lat
        //    markers[i].longitude=bridgeData.long
        //    markers[i].width=50
        //    markers[i].height=50
        // }
        
         console.log(res.result.data)
      }
 
    })
  },
  markertap(event) {
    console.log(event.detail.markerId)
    const markers = this.data.markers;
		for (let i = 0; i < markers.length; i++) { // 本示例只有一个marker，可用于处理单marker和多marker情况
			if (event.detail.markerId === markers[i].id) {
        console.log(markers[i]._id)
        wx.setStorageSync('bridgeListID',markers[i]._id);
        wx.navigateTo({
          url: '../record/record',
          success: (result) => {
            console.log("成功跳转");
          },
          fail: (res) => {},
          complete: (res) => {},
        })
				// qqmapsdk.reverseGeocoder({ // 调用逆地址解析
				// 	location: {
				// 		latitude: markers[i].latitude,
				// 		longitude: markers[i].longitude
				// 	},
				// 	success: res => {
				// 		if (res.result && res.result.formatted_addresses) { // 避免名称无数据处理
				// 			this.setData({
				// 				markerCallbackTxt: res.result.formatted_addresses.recommend
				// 			});
				// 		} else {
				// 			this.setData({
				// 				markerCallbackTxt: res.result.address
				// 			});
				// 		}
				// 	}
				// });
			}
		}
  },
  callouttap(event) {
    console.log(event.detail.markerId)
    const markers = this.data.markers;
		for (let i = 0; i < markers.length; i++) { // 本示例只有一个marker，可用于处理单marker和多marker情况
			if (event.detail.markerId === markers[i].id) {
        console.log(markers[i]._id)
        wx.setStorageSync('bridgeListID',markers[i]._id);
        wx.navigateTo({
          url: '../record/record',
          success: (result) => {
            console.log("成功跳转");
          },
          fail: (res) => {},
          complete: (res) => {},
        })
			}
		}
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