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
      qlks: '',
      kjzh: '',
      hxbz: '',
      lgcc: '',
      lysgd: '',
      tempFilePaths: '',
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

      jglx:'',
      sjhz:'',
      xzbz:'',
      kzld:'',

      qmmj:'',
      qlzc:'',
      qlzk:'',
      cxdjk:'',
      rxdjk:'',
      hddj:'',
      zgsw:'',
      csw:'',

      jskcc:'',
      jsksl:'',
      xsgcc:'',
      xsgcd:'',
      lgzc:'',
      lgjg:'',
      dzcc:'',
      halx:'',
      ypdqlx:'',
      jsg:'',
      rqg:'',
      dll:'',
      txdl:'',
      qshj:'',
      hdyj:'',
      hdcs:'',
      //
      gldw:'',
      yhdw: '',
      jsdw:'',
      sjdw:'',
      jldw:'',
      sgdw:'',
      jzny:'',
      zzj:'',
      yhlb:'',
      yhdj:'',

      jglx:'',
      sjhz:'',
      xzbz:'',
      kzld:'',

      qmmj:'',
      qlzc:'',
      qlzk:'',
      cxdjk:'',
      rxdjk:'',
      hddj:'',
      zgsw:'',
      csw:'',

      zlxs: '',
      zlcc:'',
      zlsl:'',
      hlxs:'',
      zkqxjk:'',
      qxxg:'',
      gqskb:'',
      zzxs:'',
      zssl:'',
      qljg:'',
      qmpzhd:'',
      ssfsl:'',
      zqzp:'',
      zqhp:'',
      yqzp:'',
      yqhp:'',
      qdxs:'',
     qdsl:'',
     glcc:'',
     qdjdbg:'',
     qddbcc:'',
     qdjzcc:'',
     qdjzgs:'',
     qtxs:'',
     qtsl:'',
     qtbg:'',
     qtjdbg:'',
     tmcc:'',
     qtjzcc:'',
     qtdbcc:'',
     qtjzgs:'',
     dtbhd:'',
     yqxs:'',
     yqcd:'',
     szlm:'',
     kyhl:'',
gldw:'',
yhdw: '',
jsdw:'',
sjdw:'',
jldw:'',
sgdw:'',
jzny:'',
zzj:'',
yhlb:'',
yhdj:'',
jglx:'',
sjhz:'',
xzbz:'',
kzld:'',
qmmj:'',
qlzc:'',
qlzk:'',
cxdjk:'',
rxdjk:'',
hddj:'',
zgsw:'',
csw:'',
    },
    lat:0,
    long:0,
    isActive_qlmc: true,
   
    bridgeReveal:{
    qlmc: "请输入桥梁名称",
    szlm: "请输入所在路名",
    kyhl: "请输入跨越河流",
    hqxjcfx: "请选择横桥向检测方向",
    sqxjcfx: "请选择顺桥向检测方向",
    qmjg: "请选择桥面结构",
    dldj: "请选择道路等级",
    ssfxs: "请选择伸缩缝型式",
    zxjj: "请选择正斜交角",
    qtxs: "请输入桥台型式",
    qdxs: "请输入桥墩型式",
    jltx: "请选择静力体系",
    hjmxs: "请选择横截面型式",
    sgff: "请选择施工方法",
    hxlx: "请选择横向联系",
    zzxs: "请输入支座形式",
    clxs: "请选择材料型式",
    zlxs: "请输入主梁型式",
    qdsl: "请输入桥墩数量",
    //input

    qlks: "请输入桥梁跨数",
    kjzh: "请输入跨径组合",
    hxbz: "请输入横向布置",
    lgcc: "请输入栏杆尺寸",
    lysgd: "请输入路沿石高度",
    dbcd: "请输入搭板长度",
    gldw:"请输入管理单位",
    yhdw: "请输入养护单位",
    sjdw:"请输入设计单位",
    jsdw:"请输入建设单位",
    jldw:"请输入监理单位",
    sgdw:"请输入施工单位",
    jzny:"请输入建造年月",
    zzj:"请输入总造价",
    yhlb:"请输入养护类别",
    yhdj:"请输入养护等级",
    jglx:"请输入结构类型",
    sjhz:"请输入设计荷载",
    xzbz:"请输入限载标准",
    kzld:"请输入抗震烈度",
    qmmj:"请输入桥面面积",
    qlzc:"请输入桥梁总长",
    qlzk:"请输入桥梁总宽",
    cxdjk:"请输入车行道净宽",
    rxdjk:"请输入人行道净宽",
    hddj:"请输入河道等级",
    zgsw:"请输入最高水位",
    csw:"请输入常水位",

    jskcc:"请输入集水口尺寸",
    jsksl:"请输入集水口数量",
    xsgcc:"请输入泄水管尺寸",
    xsgcd:"请输入泄水管长度",
    lgzc:"请输入栏杆总长",
    lgjg:"请输入栏杆结构",
    dzcc:"请输入短柱尺寸",
    halx:"请输入护岸类型",
    ypdqlx:"请输入引坡挡墙类型",
    jsg:"请输入给水管",
    rqg:"请输入燃气管",
    dll:"请输入电力缆",
    txdl:"请输入通信电缆",
    qshj:"请输入侵蚀环境",
    hdyj:"请输入河道淤积",
    hdcs:"请输入河道冲刷",
    //

    psg:"请输入排水口尺寸和个数",

    //sbjg//
    zlxs: "请输入主梁型式",
    zlcc:"请输入主梁尺寸",
    zlsl:"请输入主梁数量",
    hlxs:"请输入横梁形式",
    zkqxjk:"请输入主跨桥下净空",
    qxxg:"请输入桥下限高",
    gqskb:"请输入拱桥矢跨比",
    zzxs:"请选择支座型式",
    zzsl:"请输入支座数量",
    qmjg:"请输入桥面结构",
    qmpzhd:"请输入桥面铺装厚度",
   // ssfxs:'',
    ssfsl:"请输入伸缩缝数量",
    zqzp:"请输入主桥纵坡",
    zqhp:"请输入主桥横坡",
    yqzp:"请输入引桥纵坡",
    yqhp:"请输入引桥横坡",
    //
    qdxs:"请选择桥墩型式",
    qdbg: "请输入桥墩标高",
   qdsl:"请输入桥墩数量",
   glcc:"请输入盖梁尺寸",
   qdjdbg:"请输入桥墩基底标高",
   qddbcc:"请输入桥墩底板尺寸",
   qdjzcc:"请输入桥墩基桩尺寸",
   qdjzgs:"请输入桥墩基桩根数",
   qtxs:"请选择桥台型式",
   qtsl:"请输入桥台数量",
   qtbg:"请输入桥台标高",
   qtjdbg:"请输入桥台基底标高",
   tmcc:"请输入台帽尺寸",
   qtjzcc:"请输入桥台基桩尺寸",
   qtdbcc:"请输入桥台标高尺寸",
   qtjzgs:"请输入桥台基桩根数",
   dtbhd:"请输入挡土板厚度",
   yqxs:"请输入翼墙形式",
   yqcd:"请输入翼墙长度",

    },
    bridgeActive:
    {
     hqxjcfx: true,
     sqxjcfx: true,
     qmjg:  true,
     jltx: true,
     hjmxs: true,
     sgff: true,
     hxlx: true,
     clxs: true,
     qlmc: true,
     szlm: true,
     dldj: true,
     zxjj: true,
     zzxs: true,
     qdxs: true,
     qtxs: true ,
     ssfxs: true 
    }
  },

  map:function(){
    var lat
    app.globalData.count=0;
    wx.chooseLocation({
      type:'gcj02',                          //调用小程序地图API
      success:(res)=> {
        console.log(res)
        var latitude=res.latitude? res.latitude:this.data.bridgeInfo.lat
        var longitude=res.longitude?res.longitude:this.data.bridgeInfo.long
        var lo=res.longitude
        var la=res.latitude
        this.setData({
          lat:latitude.toFixed(5),           //获取纬度数据
          long:longitude.toFixed(5)         //获取经度数据
        })      
        this.setData({
          'bridgeInfo.lat': la,     
          'bridgeInfo.long': lo,   //赋值给缓存
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
    if (app.globalData.count===1)
    {
      that.setData({
        editTrue: false,
      })
    }
    console.log(app.globalData.count)
    console.log(that.data.editTrue)
  },800) 
   
  },

  chooseimage1: function (e) {
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
            });
          }
        })
      }
    })
  },
 

     







bind_qlmc:function(e){
  if (e.detail.value==='')
  {
    this.setData({
     'bridgeReveal.qlmc':"请输入桥梁名称",   
    //  'bridgeActive.qlmc': true
    })
  }
  else {
  this.setData({
    // isActive_qlmc:false,
    'bridgeInfo.qlmc': e.detail.value,
    'bridgeReveal.qlmc': e.detail.value,
  //  'bridgeActive.qlmc': false
  })
  }
},













bind_rst: function(e) {
  wx.showModal({
    title: '请确认',
    content: '是否前往?',
    success:res => {
      console.log(bridgeInfo)
      if (res.confirm) {
        wx.redirectTo({
          url: '../qljc/qljc',
        })
}else if (res.cancel) {
    console.log('modify cancel')
  }
    }
  })
},



 bind_amd: async function(e) {
  var that = this
  this.setData(
    {
      'bridgeInfo.time': Date.parse(new Date())/1000,
      'bridgeInfo.Cwordid': '',
      'bridgeInfo.Cqrcode':'',
      // 'bridgeINfo.OCzmt': '',
      // 'bridgeInfo.OClmt': ''
    }
  )

  for(var key in that.data.bridgeInfo){
    //这里的key是bridgeInfo里面的键
    if(that.data.bridgeInfo[key]==="")
    that.data.bridgeInfo[key]='/'
  }
  var bridgePic = that.data.bridgeInfo
  wx.showModal  ({
    title: '请确认提交',
    content: '是否提交?',
     success(res)   {
      if (res.confirm) {
        wx.showLoading({
          title:"正在上传......",
        }) 
     that.uploadPhotoToDatabase1(bridgePic.zmt).then(res=>{
      that.uploadPhotoToDatabase2(bridgePic.lmt).then(res=>{
        wx.setStorageSync('bridgeList', bridgePic);
       wx.removeStorageSync('bridgeReveal')
       wx.removeStorageSync('bridgeActive')
        db.collection("bridgeList").add(
          {
            data:bridgePic                        //上传桥梁信息
          }        
        ).then(res=>{
          wx.redirectTo({
            url: '../history/history',
          })
        }).then(res=>{
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
      })
    })
    }else if (res.cancel) {
        console.log('save cancel')
      }
    }
  })
 },
    uploadPhotoToDatabase1: async  function(address) {
              var that=this
               await wx.cloud.uploadFile({
                cloudPath:"photoData/"+that.data.bridgeInfo.qlmc+"-正面图"+Date.now()+".jpg",
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
                
   uploadPhotoToDatabase2: async function(address) {
      var that=this
      wx.showLoading({
        title:"正在上传图片......",
      }).catch(err=>{
        wx.showToast({
          title:"上传失败！",
          icon:"none",
          duration:2000
        })
      })
     await  wx.cloud.uploadFile({
        cloudPath:"photoData/"+that.data.bridgeInfo.qlmc+"-立面图"+Date.now()+".jpg",
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
              title:"图片上传失败，请检查网络！",
              icon:"none",
              duration:2000
            })
          })
          },
       

  
  bind_history: function() {
    wx.showModal({
      title: '请确认',
      content: '是否前往?',
      success(res) {
        if (res.confirm) {
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
   console.log(app.globalData.backMain)
   if(app.globalData.backMain===1){
    var bridgeReveal=wx.getStorageSync("bridgeReveal")||[]
    var  bridgeActive=wx.getStorageSync("bridgeActive")||[]

    this.setData({
      bridgeActive,
      bridgeReveal,
    })
    console.log(bridgeActive)
    console.log(bridgeReveal)
   }

   var items = JSON.parse(this.options.items);
   that.setData({
    bridgeInfo:items
   })
   var latitude=items.lat||0
   var longitude=items.long||0

this.setData({
 lat:latitude.toFixed(5),           //获取纬度数据
 long:longitude.toFixed(5)         //获取经度数据
})

     console.log(latitude)
     console.log(longitude)
  },




  bind_sbjg: function(){
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.setStorage({
      data: this.data.bridgeActive,
      key: 'bridgeActive',
    })
    wx.setStorage({
      data: this.data.bridgeReveal,
      key: 'bridgeReveal',
    })
    wx.redirectTo({
      url: '/pages/sbjg/sbjg?items=' +items
    }) 
 

  },

  bind_xbjg: function(){
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.setStorage({
      data: this.data.bridgeActive,
      key: 'bridgeActive',
    })
    wx.setStorage({
      data: this.data.bridgeReveal,
      key: 'bridgeReveal',
    })
    wx.redirectTo({
      url: '/pages/xbjg/xbjg?items=' +items
    }) 

  },

  bind_ybzl: function(){
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.setStorage({
      data: this.data.bridgeActive,
      key: 'bridgeActive',
    })
    wx.setStorage({
      data: this.data.bridgeReveal,
      key: 'bridgeReveal',
    })
    wx.redirectTo({
      url: '/pages/ybzl/ybzl?items=' +items
    }) 

  },

  bind_qtnr: function(){
    var items = JSON.stringify(this.data.bridgeInfo);
    wx.setStorage({
      data: this.data.bridgeActive,
      key: 'bridgeActive',
    })
    wx.setStorage({
      data: this.data.bridgeReveal,
      key: 'bridgeReveal',
    })
    wx.redirectTo({
      url: '/pages/qtnr/qtnr?items=' +items
    }) 
 

  },


 
})

