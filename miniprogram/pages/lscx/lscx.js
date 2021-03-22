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
var _id
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
    hiddenmodalput_dbcd: true,
    long: 0,
    lat:0
  },

  
  onLoad: function (options) {
    var that=this
    const _id=wx.getStorageSync('bridgeListID')
    this.setData({
      _id
    })
    var bridgeList = wx.getStorageSync('bridgeList')
   
if(app.globalData.reveal_lscx==0){
  var items = JSON.parse(this.options.items);
  that.setData({
   bridge:items,
   long: items.long.toFixed(5),
   lat: items.lat.toFixed(5)
  })

    }
else if(  app.globalData.reveal_lscx==1){
  // wx.setStorage({
  //   data: '',
  //   key: 'bridgeListID',
  // })
  console.log('AMD')
  app.globalData.reveal_lscx=0;
  bridgeListCollection.doc(_id).get({
    success: res=>{
   bridgeSrc=res.data
      console.log(bridgeSrc)
      console.log(bridgeSrc)
      wx.setStorageSync('bridgeSrc',res.data);
      console.log(res.data)
      var OCzmt=bridgeSrc.Czmt
      var OClmt=bridgeSrc.Clmt

      this.setData({
        bridge: bridgeSrc,
        OCzmt: OCzmt,
        OClmt: OClmt
      })
      this.setData({
        long: bridgeSrc.long.toFixed(5),
        lat: bridgeSrc.lat.toFixed(5)
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

      }
    )
  },
  g_map:function(){
   
    wx.chooseLocation({
      type:'gcj02',
      success:(res)=> {
        console.log(res)
        var latitude=res.latitude
        var longitude=res.longitude
        var lo=res.longitude
        var la=res.latitude
        this.setData({
          [`bridge.lat`]:la,
          [`bridge.long`]: lo
        })
        console.log(latitude)
        console.log(longitude)
        that.setData({
          lat:latitude.toFixed(5),
          long:longitude.toFixed(5),
        })  
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
         [`bridge.zmt`]: res.tempFilePath,
        }) 
        console.log(res.tempFilePath)
            });
          }
        })
      }
      
    })
  
  },

 
  g_chooseimage2: function (e) {
    var that = this;
   
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
          // wx.showToast({
          //   title: '图片上传失败，请重新上传！',
          //   icon: 'none'
          // })
        }
      });
    });
  },

  bind_jcrq:function(e){
   
    this.setData({    
      [`bridge.jcrq`]: e.detail.value,  
    })
    
  }
 ,



 
g_qlmc: function() {
  this.setData({
      hiddenmodalput_qlmc: !this.data.hiddenmodalput_qlmc
  })
  
},
confirm_qlmc: function() {
 
  this.setData({
      hiddenmodalput_qlmc: true,
      ['bridge.qlmc']: this.data.bridgename
  })
  console.log (this.data.bridgename)
  console.log (this.data.bridgeInfo)
},
m_qlmc:function(e){
  this.setData(
    {
        'bridgename': e.detail.value,
    }
  )
  
},
cancel_qlmc: function() {
  this.setData({
      hiddenmodalput_qlmc: true
  })
},









bind_amd:  async function(e) {
  var that=this
  var _id=that.data._id
  var isActive1=that.data.isActive1
  var isActive2=that.data.isActive2   
  var OCzmt=that.data.OCzmt
  var OClmt=that.data.OClmt
    var that = this
   var bridgeADDR=that.data.bridge
   console.log(bridgeADDR.zmt)
   console.log(bridgeADDR.lmt)

  if(isActive1!=1||isActive2!=1)
  {
    console.log('isActive=1')
   wx.showModal  ({
    title: '请确认修改',
    content: '是否修改?',
     success(res)   {
      if (res.confirm) {
        wx.showLoading({
          title:"正在上传......",
        })
        wx.cloud.deleteFile({
          fileList: [OClmt,OCzmt],
       }).then(res=>{
     that.uploadPhotoToDatabase1(bridgeADDR.zmt).then(res=>{
      that.uploadPhotoToDatabase2(bridgeADDR.lmt).then(res=>{
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
ssfsl: that.data.bridge.ssfsl,
qdbg: that.data.bridge.qdbg,
            }          
          }).then(res => {
            wx.redirectTo({
              url: '../history/history',
            })
              }).then(res=>
          {
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
      })
     }),
       console.log('AMD')
       }) 
      } else if (res.cancel) {
        console.log('save cancel')
      }
    }
  })
  }
  else{
    console.log('isActive=0')
   // saveBridgeList(bridgeInfo);
   wx.showModal  ({
    title: '请确认修改',
    content: '是否修改?',
     success(res)   {
      if (res.confirm) {
        wx.showLoading({
          title:"正在上传......",
        })

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
          }).then(res => {
            wx.redirectTo({
              url: '../history/history',
            })
              }).then(res=>
          {
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

     }),
       console.log('AMD')
      //  }) 
      } else if (res.cancel) {
        console.log('save cancel')
      }
    }
  })
  }
 
  },
  bind_ybzl: function(){
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/ybzl_g/ybzl_g?items=' +items
    }) 

  },
  bind_qtnr: function(){
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/qtnr_g/qtnr_g?items=' +items
    }) 

  },
  bind_sbjg: function(){
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/sbjg_g/sbjg_g?items=' +items
    }) 

  },
  bind_xbjg: function(){
    var items = JSON.stringify(this.data.bridge);
    wx.redirectTo({
      url: '/pages/xbjg_g/xbjg_g?items=' +items
    }) 

  },
  bind_delete: function(e){
    var that=this
    var bridge=that.data.bridge
     var _id=that.data._id
    wx.showModal  ({
      title: '请确删除该条记录',
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



  bind_history: function() {
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
 
  
  bind_qljc: function() {
    wx.showModal({
      title: '请确认',
      content: '是否前往?',
      success(res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '../qljc/qljc',
            success: (result)=>{
              app.globalData.backMain=0
              app.globalData.count=0
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
      cloudPath:"photoData/"+that.data.bridge.qlmc+"-正面图"+Date.now()+".jpg",
      filePath:address,
     }).then(res=>{
       console.log(res.fileID)
        this.setData(
          {
           'bridge.Czmt': res.fileID,
          }
        )    
      
      }).then(res=>{
        wx.hideLoading()
        wx.showToast({
          title:"图片上传成功！",
          duration:2000
        })
      }).catch(err=>{
          // wx.showToast({
          //   title:"上传失败，请检查网络！",
          //   icon:"none",
          //   duration:2000
          // })
        })
      },

 uploadPhotoToDatabase2: async  function(address) {
   console.log(address)
    var that=this
     await wx.cloud.uploadFile({
      cloudPath:"photoData/"+that.data.bridge.qlmc+"-立面图"+Date.now()+".jpg",
      filePath:address,
     }).then(res=>{ 
        this.setData(
          {
           'bridge.Clmt': res.fileID,
          }
        )
       
      }).then(res=>{
        wx.hideLoading()
        wx.showToast({
          title:"图片上传成功！",
          duration:2000
        })
      }).catch(err=>{
   
        })
        },

})


