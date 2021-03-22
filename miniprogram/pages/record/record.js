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
    var app = getApp();


   // 初始化 cloud

//2、开始查询数据了  yyyyy对应的是集合的名称

const bridgeListCollection=db.collection('bridgeList')

var bridgeSrc
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: ['',''],
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // this.setData({
    //   bridge:this.data.bridgeSrc
    // })
console.log(options.scene)
console.log(options)
const _id=wx.getStorageSync('bridgeListID')
this.setData({
  _id
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


  bind_word:  function(event){
    wx.showLoading({
      title:"正在生成Word......",
    }).catch(err=>{
      wx.showToast({
        title:"生成失败！",
        icon:"none",
        duration:2000
      })
    })
    var that=this
    //const _id=wx.getStorageSync('bridgeListID')  
    var _id=that.data._id
    var that = this
    var bridge=that.data.bridge
    var fileID
    console.log(bridge)
            wx.cloud.callFunction({
               name:'wordGen',
               data: bridge ,
              success:function(res){
                console.log(res)
                console.log(res.result)
                fileID=res.result
                console.log(fileID)
                wx.cloud.downloadFile({
                  fileID: fileID
                }).then(res => {
                  console.log(res)
                      wx.openDocument({
                        filePath: res.tempFilePath,
                        showMenu: true,
                        success: function (res) {
                          console.log('打开文档成功')
                        }
                      })
                    }).then(res => {
                      that.setData({
                        'bridge.Cwordid': fileID,
                      })   
                      bridgeListCollection.doc(_id).update(
                        {
                          data:{ 
                            Cwordid:fileID
                          }
                        })
                        
                        })
                        wx.hideLoading()
                        wx.showToast({
                          title:"Word生成成功！",
                          duration:2000
                        }).catch(err=>{
                        wx.showToast({
                          title:"Word生成失败，请检查网络！",
                          icon:"none",
                          duration:2000
                        })
                      })
                  },   
                 
                  fail: console.error
                })
      
      },
      bind_delete: function(e){
        var that=this
        console.log(that.data.bridge);
        var bridge=that.data.bridge
         var _id=that.data._id
        wx.showModal  ({
          title: '请确认删除该条记录',
          content: '是否删除?',
           success(res)   {
            if (res.confirm) {
        wx.showLoading({
          title:"正在删除......",
        }).catch(err=>{
          wx.showToast({
            title:"删除失败！",
            icon:"none",
            duration:2000
          })
        })
       console.log(bridge);
        //const _id=wx.getStorageSync('bridgeListID')
        wx.cloud.deleteFile({
          fileList: [bridge.Cwordid,bridge.Clmt,bridge.Czmt,bridge.Cqrcode],
       }).then(res => {
         bridgeListCollection.doc(_id).remove({
           success: res => {
             that.setData(
               {
                 bridge:''
               }
             )
             wx.showToast({
               title: '删除成功'
             }).then(res => {
              wx.redirectTo({
                url: '../history/history',
              })
                })
       }
        } )
       })
      } else if (res.cancel) {
        console.log('save cancel')
      }
    }
    })
       },

      bind_record: function (e){
        wx.showLoading({
          title:"正在生成桥梁二维码......",
        }).catch(err=>{
          wx.showToast({    
            title:"生成失败！",
            icon:"none",
            duration:2000
          })
        })
        var that=this
        console.log('do?')
    //  const _id=wx.getStorageSync('bridgeListID')  
    var _id=that.data._id
      console.log(_id)
      var that = this
      var bridge=that.data.bridge
      var fileID
      console.log('do?')
      wx.cloud.callFunction({
        name: 'qrCode',
        data:{
          page: 'pages/Qrcode/Qrcode',
          scene: _id,
          qlmc: bridge.qlmc
        },
        success:function(res){
          fileID=res.result
          console.log(fileID)
          wx.cloud.downloadFile({
            fileID: fileID
          }).then(res => {
            console.log('WorkS')
            console.log(res.tempFilePath)
              wx.previewImage({
                urls: [res.tempFilePath]
              })
          }).then(res => {
            console.log('Really?')
            that.setData({
              'bridge.Cqrcode': fileID,
            })   
            bridgeListCollection.doc(_id).update(
              {
                data:{ 
                  Cqrcode:fileID
                }
              })  
              wx.hideLoading()
              wx.showToast({
                title:"二维码生成成功！",
                duration:2000
              }).catch(err=>{
              wx.showToast({
                title:"二维码生成失败，请检查网络！",
                icon:"none",
                duration:2000
              })
            })
              })
        }
      }).then(res=>{
        console.log('成功',res)
    
      }).catch(res=>{
        console.log('失败',res)
      })
    },
    bind_modify: function(e){
      var that=this
      var _id=that.data._id
    wx.showModal({
      title: '请确认',
      content: '是否前往?',
      success:res => {
        if (res.confirm) { 
          console.log(_id)
          wx.setStorageSync('bridgeListID',_id);
         app.globalData.reveal_lscx=1;
          wx.redirectTo({
            url: '../lscx/lscx',
          })
  }else if (res.cancel) {
      console.log('modify cancel')
    }
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
     console.log(res)
  },
})
 