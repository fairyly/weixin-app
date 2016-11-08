Page({
  data:{
    imgsrc1:'/images/m1.jpg',
    imgsrc2:'/images/mpup2.jpg',
    p1:'红领巾',
    p2:'红领巾联盟商店',
    p3:'HONGLINGJIN LIANMENG SHOP',
    p4:'微信',
    p5:'wx888888',
    p6:'QQ',
    p7:'88888888',
    p8:'电话',
    p9:'18888888888',
    show:true,
    flag:false,
    p1input:false,
    aufocus:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("options");
  },
  up:function(){
    var that=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          wx.setStorageSync('upimg1', res.tempFilePaths[0]);
          var tempFilePaths = res.tempFilePaths[0];
          // console.log(res);
          that.setData({
            imgsrc2:tempFilePaths
          })
      }
    })
  },
  up2:function(){
    var that=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          wx.setStorageSync('upimg2', res.tempFilePaths[0]);
          var tempFilePaths = res.tempFilePaths[0]
          // console.log(tempFilePaths+','+tempFilePaths[0]);
          that.setData({
            imgsrc1:tempFilePaths
          })
      }
    })
  },
  input1:function(){
    this.setData({
      p1input:true,
      aufocus:true
    })
  },
  bindKeyInput1:function(e){
    console.log(e.detail.value)
    this.setData({
      p1:e.detail.value
    })
  },
  confirm:function(){
    this.setData({
      p1input:false,
      aufocus:true
    })
  },
  create:function(){
      this.setData({
        flag:true,
        // show:false
      });
      var context = wx.createContext();
      // var img1=wx.getStorageSync('upimg1');
      // var img2=wx.getStorageSync('upimg2');
      var imgsrc1=this.data.imgsrc1;
      var imgsrc2=this.data.imgsrc2;
      var p1=this.data.p1;
      console.log(p1);
      context.drawImage(imgsrc1,0,0,150,200);
      context.drawImage(imgsrc2,100,500,100,100);

      context.setFillStyle("#fff100")
      context.rect(30, 100, 236, 95)
      context.fill()

      context.setFontSize(14)
      context.setFillStyle("#000000")
      context.fillText(p1, 50, 150)

      

      wx.drawCanvas({
        canvasId: 1,
        actions: context.getActions()
      })
      wx.canvasToTempFilePath(1)
  }

})