// pages/qljc/qljc.js
var bridgename
var bridgeroad
var bridgeriver
var bridgeqlks
var bridgekjzh
var bridgehxbz
var bridgelgcc
var bridgelysgd
var bridgepsg
var bridgedbcd
var bridgeSrc
var app = getApp();
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
    isActive1: true,
    isActive2: true,
    editTrue: true,
    showModalStatus: false,
   bridgeSrc:"",
   bridgeADDR:"",
    arr_dldj: ['主干路', '快速路', '次干路', '支路', '街坊路'],
    index_dldj: 0,
    arr_ssfxs: ['型钢', '简易割缝', '梳齿板', '橡胶板', '其他'],
    index_ssfxs: 0,
    arr_sqxjcfx: ['由南往北', '由西往东', '由东往西', '由北往南'],
    index_sqxjcfx: 0,
    arr_hqxjcfx: ['由西往东', '由南往北', '由东往西', '由北往南'],
    index_hqxjcfx: 0,
    arr_qmjg: ['沥青砼', '水泥砼', '其他'],
    index_qmjg: 0,
    arr_qtxs: ['重力式', '轻型桥台', '桩柱式', '其他'],
    index_qtxs: 0,
    arr_qdxs: ['/', '桩柱式', '重力式', '薄壁墩', '其他'],
    index_qdxs: 0,
    arr_jltx: ['简支梁', '连续梁', '先简支后连续', '箱涵', '系杆拱', '连续刚构', '刚架拱', '桁架拱', '实腹式拱', '空腹式拱', '悬臂梁', '板拱', '箱形拱', '肋拱', '吊杆拱', '双曲拱', '其他'],
    index_jltx: 0,
    arr_sgff: ['装配式', '整体现浇', '组合式', '其他'],
    index_sgff: 0,
    arr_hxlx: ['砼铰缝', '横隔板', '湿接缝', '其他'],
    index_hxlx: 0,
    arr_hjmxs: ['空心板', '实心板', 'T梁', '箱梁', '其他'],
    index_hjmxs: 0,
    arr_zzxs: ['板式橡胶', '盆式橡胶', '钢', '油毛毡', '整体砼', '无', '其他'],
    index_zzxs: 0,
    arr_clxs: ['预应力钢筋砼', '普通钢筋砼', '钢', '木', '圬工', '其他'],
    index_clxs: 0,
    arr_zxjj: ['正交', '斜交'],
    index_zxjj: 0,
    region: ['浙江省', '杭州市', '西湖区'],
    customItem: '全部',
    
    
   

    

   
    inputInit: '',
    hiddenmodalput_szlm: true,
    hiddenmodalput_qlmc:true,
    hiddenmodalput_kyhl: true,
    hiddenmodalput_qlks: true,
    hiddenmodalput_kjzh: true,
    hiddenmodalput_hxbz: true,
    hiddenmodalput_lgcc: true,
    hiddenmodalput_lysgd: true,
    hiddenmodalput_psg: true,
    hiddenmodalput_dbcd: true
  },

  
  onLoad: function (options) {
    var that=this
    const _id=wx.getStorageSync('bridgeListID')
    var bridgeList = wx.getStorageSync('bridgeList')

    var time=wx.getStorageSync('bridgeListTime')
    
   this.Hello();
    console.log(time)
    var qlbh = wx.getStorageSync('qlbh', qlbh)
    console.log(_id)
    

if(app.globalData.reveal_lscx==0){
  var items = JSON.parse(this.options.items);
  that.setData({
   bridge:items
  })
   
    }
else if(  app.globalData.reveal_lscx==1){
  console.log('AMD')
  app.globalData.reveal_lscx=0;
  bridgeListCollection.doc(_id).get({
    success: res=>{
   bridgeSrc=res.data
      console.log(bridgeSrc)
      console.log(bridgeSrc)
      wx.setStorageSync('bridgeSrc',res.data);
      console.log(res.data)
      this.setData({
        bridge: bridgeSrc
      })
      console.log(bridge) 
      console.log(bridge)
    },
  fail:res =>{
console.log('error')
  }
    })
}

    this.setData(
      {
        bridgeInfo: bridgeList,
        qlbh: qlbh
       
      }
    )
    wx.getSavedFileList({
      success (res) {
        console.log(res.bridgeList)
      }
    })
    console.log(this.data.bridgeInfo)
  },

  g_map:function(){
    var qlbh = wx.getStorageSync('qlbh', qlbh)
    wx.chooseLocation({
      type:'gcj02',

      success:(res)=> {
        var latitude=res.latitude
        var longitude=res.longitude
        this.setData({
          lat:latitude.toFixed(5),
          long:longitude.toFixed(5),
        })
        
        this.setData({
          [`bridge.lat`]:latitude,
          [`bridge.long`]: longitude
        })
        console.log(latitude.toFixed(5))
        console.log(longitude.toFixed(5))
      }
     
    })
    var that = this;
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
  },500) 
  },
  g_chooseimage1: function (e) {
    var that = this;
    var qlbh = wx.getStorageSync('qlbh', qlbh)

    wx.chooseImage({
      sizeType: ['compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: result => {
        wx.getImageInfo({
          src: result.tempFilePaths[0],
          success: function (res) {
            let isActive1=false
            that.setData({
              cHeight: res.height,
              cWidth:res.width
             
            })
            that.getCanvasImg(result.tempFilePaths, res.width, res.height, that.data.quality, function (res) {
              app.globalData.path = res.tempFilePaths
       
       
        that.setData({  
          isActive1,
         path1:res.tempFilePath,
         [`bridge.zmt`]: res.tempFilePath
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
  g_chooseimage2: function (e) {
    var that = this;
    var qlbh = wx.getStorageSync('qlbh', qlbh)
    wx.chooseImage({
      sizeType: ['compressed'],  //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: result => {
        wx.getImageInfo({
          src: result.tempFilePaths[0],
          success: function (res) {
            let isActive2=false
            that.setData({
              cHeight: res.height,
              cWidth:res.width
             
            })
            that.getCanvasImg(result.tempFilePaths, res.width, res.height, that.data.quality, function (res) {
              app.globalData.path = res.tempFilePaths
       
            
        that.setData({  
          isActive2,
         path1:res.tempFilePath,
         [`bridge.lmt`]: res.tempFilePath
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
    var that=this;
    var qlbh = wx.getStorageSync('qlbh', qlbh)
    this.setData({    
      [`bridge.jcrq`]: e.detail.value,  
    })
    
  }
 ,



bind_jcsj:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
    [`bridge.jcsj`]: e.detail.value,
  })
  
  
},

bind_jcdq:function(e){
  var that=this;
  var region
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
    region: e.detail.value
    
  })
  console.log(e.detail.value)
  this.setData( {
      [`bridge.jcdq`]: this.data.region
    }
  )
},




/*注意点！准备提问！*/
bind_hqxjcfx: function(e) {
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
   this.index_hqxjcfx=e.detail.value
  this.setData({
    index_hqxjcfx: this.index_hqxjcfx
  })
  this.setData({
    [`bridge.hqxjcfx`]: this.data.arr_hqxjcfx[this.data.index_hqxjcfx],
  })
} ,
bind_sqxjcfx:function(e){
   var that=this;
   var qlbh = wx.getStorageSync('qlbh', qlbh)
   this.index_sqxjcfx=e.detail.value
   this.setData(
     {
       index_sqxjcfx:this.index_sqxjcfx
       
     }
   )
    

  this.setData({
    [`bridge.sqxjcfx`]: this.data.arr_sqxjcfx[this.data.index_sqxjcfx],
  })
},



 
 
g_qlmc: function() {
  this.setData({
      hiddenmodalput_qlmc: !this.data.hiddenmodalput_qlmc
  })
  
},
confirm_qlmc: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_qlmc: true,
      ['bridge.qlmc']: this.data.bridgename
  })
  console.log (this.data.bridgename)
  console.log (this.data.bridgeInfo)
},
m_qlmc:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgename': e.detail.value,
    }
  )
  console.log(bridgename)
  
},
cancel_qlmc: function() {
  this.setData({
      hiddenmodalput_qlmc: true
  })
},

g_szlm: function() {
  this.setData({
      hiddenmodalput_szlm: !this.data.hiddenmodalput_szlm
  })
},
confirm_szlm: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_szlm: true,
      [`bridge.szlm`]:this.data.bridgeroad
  })
  console.log (this.data.bridgeroad)
  console.log (this.data.bridgeInfo)
},
m_szlm:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgeroad': e.detail.value,
    }
  )
  console.log(bridgeroad)
},

cancel_szlm: function() {
  this.setData({
      hiddenmodalput_szlm: true
  })
},






bind_kyhl:function(e){
  var that=this;
  this.setData({
    'bridgeInfo.kyhl': e.detail.value,
  })

},

g_kyhl: function() {
  this.setData({
      hiddenmodalput_kyhl: !this.data.hiddenmodalput_kyhl
  })
},
confirm_kyhl: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_kyhl: true,
      [`bridge.kyhl`]:this.data.bridgeriver
  })
 
},
m_kyhl:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgeriver': e.detail.value,
    }
  )

},

cancel_kyhl: function() {
  this.setData({
      hiddenmodalput_kyhl: true
  })
},


g_qlks: function() {
  this.setData({
      hiddenmodalput_qlks: !this.data.hiddenmodalput_qlks
  })
},
confirm_qlks: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_qlks: true,
      [`bridge.qlks`]:this.data.bridgeqlks
  })
 
},
m_qlks:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgeqlks': e.detail.value,
    }
  )

},
cancel_qlks: function() {
  this.setData({
      hiddenmodalput_qlks: true
  })
},
g_kjzh: function() {
  this.setData({
      hiddenmodalput_kjzh: !this.data.hiddenmodalput_kjzh
  })
},
confirm_kjzh: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_kjzh: true,
      [`bridge.kjzh`]:this.data.bridgekjzh
  })
 
},
m_kjzh:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgekjzh': e.detail.value,
    }
  )

},
cancel_kjzh: function() {
  this.setData({
      hiddenmodalput_kjzh: true
  })
},


g_hxbz: function() {
  this.setData({
      hiddenmodalput_hxbz: !this.data.hiddenmodalput_hxbz
  })
},
confirm_hxbz: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_hxbz: true,
      [`bridge.hxbz`]:this.data.bridgehxbz
  })
 
},
m_hxbz:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgehxbz': e.detail.value,
    }
  )

},
cancel_hxbz: function() {
  this.setData({
      hiddenmodalput_hxbz: true
  })
},





g_lgcc: function() {
  this.setData({
      hiddenmodalput_lgcc: !this.data.hiddenmodalput_lgcc
  })
},
confirm_lgcc: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_lgcc: true,
      [`bridge.lgcc`]:this.data.bridgelgcc
  })
 
},
m_lgcc:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgelgcc': e.detail.value,
    }
  )

},
cancel_lgcc: function() {
  this.setData({
      hiddenmodalput_lgcc: true
  })
},


g_lysgd: function() {
  this.setData({
      hiddenmodalput_lysgd: !this.data.hiddenmodalput_lysgd
  })
},
confirm_lysgd: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_lysgd: true,
      [`bridge.lysgd`]:this.data.bridgelysgd
  })
 
},
m_lysgd:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgelysgd': e.detail.value,
    }
  )

},
cancel_lysgd: function() {
  this.setData({
      hiddenmodalput_lysgd: true
  })
},



g_psg: function() {
  this.setData({
      hiddenmodalput_psg: !this.data.hiddenmodalput_psg
  })
},
confirm_psg: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_psg: true,
      [`bridge.psg`]:this.data.bridgepsg
  })
 
},
m_psg:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgepsg': e.detail.value,
    }
  )

},
cancel_psg: function() {
  this.setData({
      hiddenmodalput_psg: true
  })
},



g_dbcd: function() {
  this.setData({
      hiddenmodalput_dbcd: !this.data.hiddenmodalput_dbcd
  })
},
confirm_dbcd: function() {
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.setData({
      hiddenmodalput_dbcd: true,
      [`bridge.dbcd`]:this.data.bridgedbcd
  })
 
},
m_dbcd:function(e){
  var that=this;
  
  this.setData(
    {
        'bridgedbcd': e.detail.value,
    }
  )

},
cancel_dbcd: function() {
  this.setData({
      hiddenmodalput_dbcd: true
  })
},


bind_dldj:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_dldj=e.detail.value
  this.setData(
    {
      index_dldj:this.index_dldj
    }
  )
  this.setData({
    [`bridge.dldj`]: this.data.arr_dldj[this.data.index_dldj],
  })
},

bind_qmjg:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_qmjg=e.detail.value
  this.setData(
    {
      index_qmjg:this.index_qmjg
    }
  )
  this.setData({
    [`bridge.qmjg`]: this.data.arr_qmjg[this.data.index_qmjg],
  })
},

bind_ssfxs:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
   this.index_ssfxs=e.detail.value
   this.setData(
     {
       index_ssfxs:this.index_ssfxs
     }
   )
  this.setData({
    [`bridge.ssfxs`]: this.data.arr_ssfxs[this.data.index_ssfxs],
  })
},

bind_zxjj:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
   this.index_zxjj=e.detail.value
   this.setData(
     {
       index_zxjj:this.index_zxjj
     }
   )
  this.setData({
    [`bridge.zxjj`]: this.data.arr_zxjj[this.data.index_zxjj],
  })
},


bind_qtxs:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_qtxs=e.detail.value
  
  this.setData(
    {
      index_qtxs:this.index_qtxs
    }
  )
  this.setData({
    [`bridge.qtxs`]: this.data.arr_qtxs[this.data.index_qtxs],
    
  })
},

bind_qdxs:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_qdxs=e.detail.value
  this.setData(
    {
      index_qdxs:this.index_qdxs
    }
  )
  this.setData({
    [`bridge.qdxs`]: this.data.arr_qdxs[this.data.index_qdxs],
  })
},

bind_jltx:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
     this.index_jltx=e.detail.value
     this.setData(
       {
         index_jltx:this.index_jltx
       }
     )
  this.setData({
    [`bridge.jltx`]: this.data.arr_jltx[this.data.index_jltx],
  })
},

bind_hjmxs:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
    this.index_hjmxs=e.detail.value
    this.setData(
      {
        index_hjmxs:this.index_hjmxs
      }
    )
  this.setData({
    [`bridge.hjmxs`]: this.data.arr_hjmxs[this.data.index_hjmxs],
  })
},

bind_sgff:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_sgff=e.detail.value
  this.setData(
    {
      index_sgff:this.index_sgff
    }
  )
  this.setData({
    [`bridge.sgff`]: this.data.arr_sgff[this.data.index_sgff],
  })
},

bind_hxlx:function(e){
  var that=this; 
  var qlbh = wx.getStorageSync('qlbh', qlbh)
   this.index_hxlx=e.detail.value
   this.setData(
     {
       index_hxlx:this.index_hxlx
     }
   )
  this.setData({
    [`bridge.hxlx`]: this.data.arr_hxlx[this.data.index_hxlx],
  })
},

bind_zzxs:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_zzxs=e.detail.value
  this.setData(
    {
      index_zzxs:this.index_zzxs
    }
  )
  this.setData({
    [`bridge.zzxs`]: this.data.arr_zzxs[this.data.index_zzxs],
  })
},

bind_clxs:function(e){
  var that=this;
  var qlbh = wx.getStorageSync('qlbh', qlbh)
  this.index_clxs=e.detail.value
  this.setData(
    {
      index_clxs:this.index_clxs
    }
  )
  this.setData({
    [`bridge.clxs`]: this.data.arr_clxs[this.data.index_clxs],
  })
},





bind_amd:  async function(e) {
  const _id=wx.getStorageSync('bridgeListID')        
    var that = this
   var bridgeADDR=that.data.bridge
   console.log(bridgeADDR)
   var qlbh = wx.getStorageSync('qlbh', qlbh)


        await this.uploadPhotoToDatabase1(bridgeADDR.zmt),
        await this.uploadPhotoToDatabase2(bridgeADDR.lmt)


 
    // saveBridgeList(bridgeInfo);
    wx.showModal  ({
      title: '请确认修改',
      content: '是否修改?',
       success(res)   {
        if (res.confirm) {

          console.log(_id)
          bridgeListCollection.doc(_id).update(
            {
        
              data:{          
Clmt:that.data.bridge.Clmt,
Czmt: that.data.bridge.Czmt,
clxs:that.data.bridge.clxs,
csw: that.data.bridge.csw,
cxdjk: that.data.bridge.cxdjk,
dbcd:that.data.bridge.dbcd,
dldj:that.data.bridge.dldj,
dll: that.data.bridge.dll,
dtbhd: that.data.bridge.dtbhd,
dzcc: that.data.bridge.dzcc,
glcc:that.data.bridge.glcc,
gldw: that.data.bridge.gldw,
gqskb: that.data.bridge.gqskb,
halx:that.data.bridge.halx,
hdcs: that.data.bridge.hdcs,
hddj: that.data.bridge.hddj,
hdyj: that.data.bridge.hdyj,
hjmxs: that.data.bridge.hjmxs,
hlxs: that.data.bridge.hlxs,
hqxjcfx:that.data.bridge.hqxjcfx,
hxbz: that.data.bridge.hxbz,
hxlx: that.data.bridge.hxlx,
jcdq:that.data.bridge.jcdq,
jcrq:that.data.bridge.jcrq,
jcsj: that.data.bridge.jcsj,
jglx:that.data.bridge.jglx,
jldw: that.data.bridge.jldw,
jltx: that.data.bridge.jltx,
jsdw: that.data.bridge.jsdw,
jsg:that.data.bridge.jsg,
jskcc: that.data.bridge.jskcc,
jsksl: that.data.bridge.jsksl,
jzny: that.data.bridge.jzny,
kjzh: that.data.bridge.kjzh,
kyhl:that.data.bridge.kyhl,
kzld: that.data.bridge.kzld,
lat: that.data.bridge.lat,
lgcc:that.data.bridge.lgcc,
lgjg: that.data.bridge.lgjg,
lgzc: that.data.bridge.lgzc,
lmt: that.data.bridge.lmt,
long: that.data.bridge.long,
lysgd: that.data.bridge.lysgd,
psg: that.data.bridge.psg,
qddbcc: that.data.bridge.qddbcc,
qdjdbg: that.data.bridge.qdjdbg,
qdjzcc: that.data.bridge.qdjzcc,
qdjzgs: that.data.bridge.qdjzgs,
qdsl: that.data.bridge.qdsl,
qdxs: that.data.bridge.qdxs,
qlks: that.data.bridge.qlks,
qlmc: that.data.bridge.qlmc,
qlzc: that.data.bridge.qlzc,
qlzk: that.data.bridge.qlzk,
qmjg: that.data.bridge.qmjg,
qmmj: that.data.bridge.qmmj,
qmpzhd: that.data.bridge.qmpzhd,
qshj:that.data.bridge.qshj,
qtbg: that.data.bridge.qtbg,
qtdbcc: that.data.bridge.qtdbcc,
qtjdbg: that.data.bridge.qtjdbg,
qtjzcc: that.data.bridge.qtjzcc,
qtjzgs: that.data.bridge.qtjzgs,
qtsl: that.data.bridge.qtsl,
qtxs: that.data.bridge.qtxs,
qxxg: that.data.bridge.qxxg,
rqg: that.data.bridge.rqg,
rxdjk: that.data.bridge.rxdjk,
sgdw: that.data.bridge.sgdw,
sgff: that.data.bridge.sgff,
sjdw: that.data.bridge.sjdw,
sjhz: that.data.bridge.sjhz,
sqxjcfx: that.data.bridge.sqxjcfx,
ssfxs: that.data.bridge.ssfxs,
szlm: that.data.bridge.szlm,
tempFilePaths: that.data.bridge.tempFilePaths,
time: that.data.bridge.time,
tmcc: that.data.bridge.tmcc,
txdl: that.data.bridge.txdl,
xsgcc: that.data.bridge.xsgcc,
xsgcd: that.data.bridge.xsgcd,
xzbz: that.data.bridge.xzbz,
yhdj: that.data.bridge.yhdj,
yhdw: that.data.bridge.yhdw,
yhlb: that.data.bridge.yhlb,
ypdqlx: that.data.bridge.ypdqlx,
yqcd: that.data.bridge.yqcd,
yqhp: that.data.bridge.yqhp,
yqxs: that.data.bridge.yqxs,
yqzp: that.data.bridge.yqzp,
zgsw: that.data.bridge.zgsw,
zkqxjk: that.data.bridge.zkqxjk,
zlcc: that.data.bridge.zlcc,
zlsl: that.data.bridge.zlsl,
zlxs: that.data.bridge.zlxs,
zmt: that.data.bridge.zmt,
zqhb: that.data.bridge.zqhb,
zqzp: that.data.bridge.zqzp,
zxjj: that.data.bridge.zxjj,
zzj: that.data.bridge.zzj,
zzsl: that.data.bridge.zzsl,
zzxs: that.data.bridge.zzxs,
              }          
            
            }).then(res=>
            {
            console.log(that.data.bridge)
            }
            )        

          console.log('save confirm')
          console.log('form发生了submit事件，携带数据为：', e.detail.value);  
        
   
         
        } else if (res.cancel) {
          console.log('save cancel')
        }
      }
    })
  },
  bind_ybzl: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/ybzl_g/ybzl_g?items=' +items
    }) 

  },
  bind_qtnr: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/qtnr_g/qtnr_g?items=' +items
    }) 

  },
  bind_sbjg: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/sbjg_g/sbjg_g?items=' +items
    }) 

  },
  bind_xbjg: function(){
    var that=this;
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/xbjg_g/xbjg_g?items=' +items
    }) 

  },
bind_delete: function(e){
 var that=this
 const _id=wx.getStorageSync('bridgeListID')
  bridgeListCollection.doc(_id).remove({
    success: res => {
      that.setData(
        {
          bridge:''
        }
      )
      wx.showToast({
        title: '删除成功'
      }) 
}
 } )
},

async Hello(){
// 初始化 Cloud 实例
// 容器调用必填环境id，不能为空
var c1 = new wx.cloud.Cloud({
  resourceEnv: 'qljc-0b2vv'
})
await c1.init()

// 返回值同 wx.request
const res = await c1.callContainer({
  path: '//nodejs-hello-world', // 填入容器的访问路径（云托管-服务列表-路径）
  // 其余参数同 wx.request
  method: 'POST',
})

console.log(res)
  
  console.log(res)
  console.log(res.data)
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
 
  bind_rst: function(e) {
    var that=this
    var qlbh = wx.getStorageSync('qlbh', qlbh)
    this.setData(
      {
      [`bridge.jcsj`]: '00:00',   
      [`bridge.jcrq`]: '2020-01-01',
      [`bridge.jcdq`]: ['浙江省', '杭州市', '西湖区'],
      [`bridge.hqxjcfx`]: '/',
      [`bridge.sqxjcfx`]: '/',
      [`bridge.dldj`]: '/',
      [`bridge.qmjg`]: '/',
      [`bridge.ssfxs`]: '/',
      [`bridge.zxjj`]: '/',
      [`bridge.qtxs`]: '/',
      [`bridge.qdxs`]: '/',
      [`bridge.jltx`]: '/',
      [`bridge.hjmxs`]: '/',
      [`bridge.sgff`]: '/',
      [`bridge.hxlx`]: '/',
      [`bridge.zzxs`]: '/',
      [`bridge.clxs`]: '/',
      [`bridge.long`] : '0',
      [`bridge.lat`] : '0',
      [`bridge.zmt`]: '',
      [`bridge.lmt`]: '',
      [`bridge.qlmc`]: '',
      [`bridge.szlm`]: '',
      [`bridge.kyhl`]: '',
      [`bridge.qlks`]: '',
      [`bridge.kjzh`]: '',
      [`bridge.hxbz`]: '',
      [`bridge.lgcc`]: '',
      [`bridge.lysgd`]: '',
      [`bridge.psg`]: '',
      [`bridge.dbcd`]: ''
      }
    )
  },
  bind_record: function() {
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
            url: '../qljc/qljc',
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

  

  uploadPhotoToDatabase1: async  function(address) {
    console.log(address)
    var that=this

  
    
     await wx.cloud.uploadFile({
      cloudPath:"photoData/"+that.data.bridge.qlmc+"zmt"+Date.now()+".jpg",
      filePath:address,
     }).then(res=>{

        this.setData(
          {
           'bridge.Czmt': res.fileID,
          }
        )    

        wx.hideLoading()
        wx.showToast({
          icon:"loading",
          duration:500
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
   console.log(address)
    var that=this
     await wx.cloud.uploadFile({
      cloudPath:"photoData/"+that.data.bridge.qlmc+"lmt"+Date.now()+".jpg",
      filePath:address,
     }).then(res=>{

        this.setData(
          {
           'bridge.Clmt': res.fileID,
          }
        )

        wx.hideLoading()
        wx.showToast({
          icon:"loading",
          duration:500
        })
      }).catch(err=>{
          wx.showToast({
            title:"上传失败，请检查网络！",
            icon:"none",
            duration:2000
          })
        })
        },

}) 


