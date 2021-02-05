// pages/qljc/qljc.js
var app = getApp()

const db=wx.cloud.database({
  //这个是环境ID,不是环境名称
  env: 'qljc-0b2vv'
})
var photoaddr


Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    
   
  
  
    arr_sqxjcfx: ['/','由南往北', '由西往东', '由东往西', '由北往南'],
    index_sqxjcfx: 0,
    arr_hqxjcfx: ['/','由西往东', '由南往北', '由东往西', '由北往南'],
    index_hqxjcfx: 0,
    arr_qmjg: ['/','沥青砼', '水泥砼', '其他'],
    index_qmjg: 0,

    arr_jltx: ['/','简支梁', '连续梁', '先简支后连续', '箱涵', '系杆拱', '连续刚构', '刚架拱', '桁架拱', '实腹式拱', '空腹式拱', '悬臂梁', '板拱', '箱形拱', '肋拱', '吊杆拱', '双曲拱', '其他'],
    index_jltx: 0,
    arr_sgff: ['/','装配式', '整体现浇', '组合式', '其他'],
    index_sgff: 0,
    arr_hxlx: ['/','砼铰缝', '横隔板', '湿接缝', '其他'],
    index_hxlx: 0,
    arr_hjmxs: ['/','空心板', '实心板', 'T梁', '箱梁', '其他'],
    index_hjmxs: 0,
  
    arr_clxs: ['/','预应力钢筋砼', '普通钢筋砼', '钢', '木', '圬工', '其他'],
    index_clxs: 0,

    customItem: '全部',
    
    
    editTrue:true,

    showModalStatus: false,

    bridgeInfo: {
      //selector
      
      jcrq: '2020-01-01',
      jcsj: '00:00',
      jcdq: ['浙江省', '杭州市', '西湖区'],
      hqxjcfx: '',
      sqxjcfx: '',
      dldj: '',
      qmjg: '',
      ssfxs: '',
      zxjj: '',

      qtxs: '',
      qdxs: '',
      jltx: '',
      hjmxs: '',
      sgff: '',
      hxlx: '',
      zzxs: '',
      clxs: '',
      zlxs: '',
      qdsl: '',
      //input
      qlmc: '',
      Czmt:'',
      Clmt:'',
      qlks: '/',
      kjzh: '/',
      hxbz: '/',
      lgcc: '/',
      lysgd: '/',
      tempFilePaths: '/',
      lat:0,
      long:0,
      
      gldw:'',
      yhdw: '',
      sjdw:'',
      jsdw:'',
      jldw:'',
      sgdw:'',
      jzny:'',
      zzj:'',
      yhlb:'',
      yhdj:'',
     // dldj:'', //
      jglx:'',
      sjhz:'',
      xzbz:'',
      kzld:'',
    //  zxjj:'',//
   //   qlks:'',//
    //  kjzh:'',//
      qmmj:'',
      qlzc:'',
      qlzk:'',
      cxdjk:'',
      rxdjk:'',
      hddj:'',
      zgsw:'',
      csw:'',

    },
  },




  map:function(){
    app.globalData.count=0;
    console.log('1')
    wx.chooseLocation({
      type:'gcj02',                          //调用小程序地图API
      success:(res)=> {
        console.log('1')
        var latitude=res.latitude
        var longitude=res.longitude
        this.setData({
          lat:latitude.toFixed(5),           //获取纬度数据
          long:longitude.toFixed(5),         //获取经度数据
        })      
        this.setData({
          'bridgeInfo.lat': latitude.toFixed(5),     
          'bridgeInfo.long': longitude.toFixed(5),   //赋值给缓存
        })
      }    
    })


    var that = this;
    app.globalData.count=app.globalData.count+1;
    setTimeout(function () {
       if (that.data.editTrue == true) {
      that.setData({
        editTrue: false,
      })
     
 
    } else {
      that.setData({
        editTrue: true,
      })
    }

    if (app.globalData.count==1)
    {
      that.setData({
        editTrue: false,
      })

    }

    console.log(app.globalData.count)
    console.log(that.data.editTrue)
  },500) 
   
  },

  chooseimage1: function (e) {
    var that = this;
    var photoTempPath
    wx.chooseImage({
      sizeType: ['compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: result => {
        wx.getImageInfo({
          src: result.tempFilePaths[0],
          success: function (res) {
            that.setData({
              cHeight: res.height,
              cWidth:res.width
      
            })
            that.getCanvasImg(result.tempFilePaths, res.width, res.height, that.data.quality, function (res) {
              app.globalData.path = res.tempFilePaths
       
       
        that.setData({  
         path1:res.tempFilePath,
         'bridgeInfo.zmt': res.tempFilePath
        
        }) 
        console.log(res.tempFilePath)
            });
          }
        })
       
    
      }
      })
},



  /**
   * 质量压缩
   */
  getCanvasImg(tempFilePaths, canvasWidth, canvasHeight, quality, callback) {
    var that = this; 
    const ctx = wx.createCanvasContext('attendCanvasId');
    ctx.clearRect(0, 0, 800,600);
    ctx.drawImage(tempFilePaths[0], 0, 0, 800, 600);
    ctx.draw(false, function () {
      wx.canvasToTempFilePath({
        canvasId: 'attendCanvasId',
        fileType: 'jpg',
        quality: quality,
        success: function success(res) {
          callback && callback(res)
        }, fail: function (e) {
          wx.showToast({
            title: '图片上传失败，请重新上传！',
            icon: 'none'
          })
        }
      });
    });
  },
  chooseimage2: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: result => {
        wx.getImageInfo({
          src: result.tempFilePaths[0],
          success: function (res) {
            that.setData({
              cHeight: res.height,
              cWidth:res.width
             
            })
            that.getCanvasImg(result.tempFilePaths, res.width, res.height, that.data.quality, function (res) {
              app.globalData.path = res.tempFilePaths
       
           
        that.setData({  
         path2:res.tempFilePath,
         'bridgeInfo.lmt': res.tempFilePath
        }) 
        console.log(res.tempFilePath)
            });
          }
        })
      }
    })
  },
  /**
   * 质量压缩
   */
  getCanvasImg(tempFilePaths, canvasWidth, canvasHeight, quality, callback) {
    var that = this; 
    const ctx = wx.createCanvasContext('attendCanvasId');
    ctx.clearRect(0, 0, 800,600);
    ctx.drawImage(tempFilePaths[0], 0, 0, 800, 600);
    ctx.draw(false, function () {
      wx.canvasToTempFilePath({
        canvasId: 'attendCanvasId',
        fileType: 'jpg',
        quality: quality,
        success: function success(res) {
          callback && callback(res)
        }, fail: function (e) {
          wx.showToast({
            title: '图片上传失败，请重新上传！',
            icon: 'none'
          })
        }
      });
    });
  },

     

  bind_jcrq:function(e){
    this.setData({    
      'bridgeInfo.jcrq': e.detail.value,  
    })  
  },



bind_jcsj:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.jcsj': e.detail.value,
  })
  
},

bind_jcdq:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.jcdq': e.detail.value,
  })
},




/*注意点！准备提问！*/
bind_hqxjcfx: function(e) {
  var that=this;
   this.index_hqxjcfx=e.detail.value
  this.setData({
    index_hqxjcfx: this.index_hqxjcfx
  })
  this.setData({
    'bridgeInfo.hqxjcfx': this.data.arr_hqxjcfx[this.data.index_hqxjcfx],
  })
} ,
bind_sqxjcfx:function(e){
   var that=this;
   this.index_sqxjcfx=e.detail.value
   this.setData(
     {
       index_sqxjcfx:this.index_sqxjcfx
       
     }
   )
    

  this.setData({
    'bridgeInfo.sqxjcfx': this.data.arr_sqxjcfx[this.data.index_sqxjcfx],
  })
},


bind_qlmc:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.qlmc': e.detail.value,
  })

},


  

  
bind_szlm:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.szlm': e.detail.value,
  })

},
bind_kyhl:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.kyhl': e.detail.value,
  })

},


bind_hxbz:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.hxbz': e.detail.value,
  })

},
bind_lgcc:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.lgcc': e.detail.value,
  })

},
bind_lysgd:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.lysgd': e.detail.value,
  })

},
bind_psg:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.psg': e.detail.value,
  })

},
bind_dbcd:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.dbcd': e.detail.value,
  })

},



bind_qmjg:function(e){
  var that=this;
  this.index_qmjg=e.detail.value
  this.setData(
    {
      index_qmjg:this.index_qmjg
    }
  )
  this.setData({
    'bridgeInfo.qmjg': this.data.arr_qmjg[this.data.index_qmjg],
  })
},










bind_jltx:function(e){
  var that=this;
     this.index_jltx=e.detail.value
     this.setData(
       {
         index_jltx:this.index_jltx
       }
     )
  this.setData({
    'bridgeInfo.jltx': this.data.arr_jltx[this.data.index_jltx],
  })
},

bind_hjmxs:function(e){
  var that=this;
    this.index_hjmxs=e.detail.value
    this.setData(
      {
        index_hjmxs:this.index_hjmxs
      }
    )
  this.setData({
    'bridgeInfo.hjmxs': this.data.arr_hjmxs[this.data.index_hjmxs],
  })
},

bind_sgff:function(e){
  var that=this;
  this.index_sgff=e.detail.value
  this.setData(
    {
      index_sgff:this.index_sgff
    }
  )
  this.setData({
    'bridgeInfo.sgff': this.data.arr_sgff[this.data.index_sgff],
  })
},

bind_hxlx:function(e){
  var that=this; 
   this.index_hxlx=e.detail.value
   this.setData(
     {
       index_hxlx:this.index_hxlx
     }
   )
  this.setData({
    'bridgeInfo.hxlx': this.data.arr_hxlx[this.data.index_hxlx],
  })
},



bind_clxs:function(e){
  var that=this;
  this.index_clxs=e.detail.value
  this.setData(
    {
      index_clxs:this.index_clxs
    }
  )
  this.setData({
    'bridgeInfo.clxs': this.data.arr_clxs[this.data.index_clxs],
  })
},


bind_rst: function(e) {
  var that=this
  this.setData(
    {
      'bridgeInfo.jcsj': '00:00',
      'bridgeInfo.jcrq': '2020-01-01',
      'bridgeInfo.jcsj': '00:00',
      'bridgeInfo.jcdq': ['浙江省', '杭州市', '西湖区'],
      'bridgeInfo.hqxjcfx': '/',
      'bridgeInfo.sqxjcfx': '/',
      'bridgeInfo.dldj': '/',
      'bridgeInfo.qmjg': '/',
      'bridgeInfo.ssfxs': '/',
      'bridgeInfo.zxjj': '/',

      'bridgeInfo.qtxs': '/',
      'bridgeInfo.qdxs': '/',
      'bridgeInfo.jltx': '/',
      'bridgeInfo.hjmxs': '/',
      'bridgeInfo.sgff': '/',
      'bridgeInfo.hxlx': '/',
      'bridgeInfo.zzxs': '/',
      'bridgeInfo.clxs': '/',
      'long' : '0',
      'lat' : '0',
      'path1': '',
      'path2': ''
    }
  )
  var that=this
  that.setData({
    editTrue: true,
  })
},



 bind_amd: async function(e) {
  var that = this
  this.setData(
    {
      'bridgeInfo.time': Date.parse(new Date())/1000
    }
  )
  var bridgeList=wx.getStorageSync('bridgeList') || [] 
  var bridgePic = that.data.bridgeInfo
  bridgeList.push(bridgePic);                                //获取本地缓存数据
  var address_zmt=bridgePic.zmt
  var address_lmt=bridgePic.lmt                      //获取图片缓存地址
             
  await this.uploadPhotoToDatabase1(address_zmt)
  console.log(address_zmt)
  await this.uploadPhotoToDatabase2(address_lmt)

  wx.setStorageSync('bridgeList', bridgeList);
        db.collection("bridgeList").add(
          {
            data:this.data.bridgeInfo                         //上传桥梁信息
          }        
        ).then(res=>{
        })
    },



    uploadPhotoToDatabase1: async  function(address) {
      var that=this

      wx.showLoading({
        title:"正在上传......",
      }).catch(err=>{
        wx.showToast({
          title:"上传失败！",
          icon:"none",
          duration:2000
        })
      })
      
       await wx.cloud.uploadFile({
        cloudPath:"photoData/"+that.data.bridgeInfo.qlmc+"zmt"+Date.now()+".jpg",
        filePath:address,
       }).then(res=>{

          this.setData(
            {
             'bridgeInfo.Czmt': res.fileID,
            }
          )    

          wx.hideLoading()
          wx.showToast({
            title:"上传成功！",
            duration:2000
          })
        }).catch(err=>{
            wx.showToast({
              title:"上传失败，请检查网络！",
              icon:"none",
              duration:2000
            })
          })
        },
  
   uploadPhotoToDatabase2: async  function(address) {
      var that=this

      wx.showLoading({
        title:"正在上传......",
      }).catch(err=>{
        wx.showToast({
          title:"上传失败！",
          icon:"none",
          duration:2000
        })
      })
      
       await wx.cloud.uploadFile({
        cloudPath:"photoData/"+that.data.bridgeInfo.qlmc+"lmt"+Date.now()+".jpg",
        filePath:address,
       }).then(res=>{

          this.setData(
            {
             'bridgeInfo.Clmt': res.fileID,
            }
          )

          wx.hideLoading()
          wx.showToast({
            title:"上传成功！",
            duration:2000
          })
        }).catch(err=>{
            wx.showToast({
              title:"上传失败，请检查网络！",
              icon:"none",
              duration:2000
            })
          })
          },
        

  
  bind_history: function() {
    var that = this
    wx.showModal({
      title: '请确认',
      content: '是否前往?',
      success(res) {

        if (res.confirm) {
         
          console.log('history confirm')
          var bridgeList = wx.getStorageSync('bridgeList') || [] //获取本地缓存

          wx.setStorageSync('bridgeList', bridgeList);
          wx.redirectTo({
            url: '../history/history',
            success: (result)=>{
              
            },
           
            fail: ()=>{},
            complete: ()=>{}
          });

        } else if (res.cancel) {
          console.log('modify cancel')
        }
      }
    })
  },
 


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that=this;
   if (app.globalData.count==1){
    that.setData({
      editTrue: false,
    })
   }
   console.log(app.globalData.count)
   console.log(that.data.editTrue)

   var items = JSON.parse(this.options.items);
   that.setData({
    bridgeInfo:items
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },



  bind_sbjg: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.redirectTo({
      url: '/pages/sbjg/sbjg?items=' +items
    }) 

  },

  bind_xbjg: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.redirectTo({
      url: '/pages/xbjg/xbjg?items=' +items
    }) 
 
  },

  bind_ybzl: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.redirectTo({
      url: '/pages/ybzl/ybzl?items=' +items
    }) 

  },

  bind_qtnr: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.redirectTo({
      url: '/pages/qtnr/qtnr?items=' +items
    }) 

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

