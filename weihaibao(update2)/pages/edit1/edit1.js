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
    p2input:false,
    p3input:false,
    p5input:false,
    p7input:false,
    p9input:false,
    aufocus1:false
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
      aufocus1:true,
      p2input:false,
      aufocus2:false,
      p3input:false,
      aufocus3:false,
      p5input:false,
      aufocus5:false,
      p7input:false,
      aufocus7:false,
      p9input:false,
      aufocus9:false
    })
  },
  bindKeyInput1:function(e){
    console.log(e.detail.value)
    this.setData({
      p1:e.detail.value
    })
  },
  confirm1:function(){
    this.setData({
      p1input:false,
      aufocus1:false
    })
  },
  input2:function(){
    this.setData({
      p2input:true,
      aufocus2:true,
      p1input:false,
      aufocus1:false,
      p3input:false,
      aufocus3:false,
      p5input:false,
      aufocus5:false,
      p7input:false,
      aufocus7:false,
      p9input:false,
      aufocus9:false
    })
  },
  bindKeyInput2:function(e){
    console.log(e.detail.value)
    this.setData({
      p2:e.detail.value
    })
  },
  confirm2:function(){
    this.setData({
      p2input:false,
      aufocus2:false
    })
  },
  input3:function(){
    this.setData({
      p3input:true,
      aufocus3:true,
      p1input:false,
      aufocus1:false,
      p2input:false,
      aufocus2:false,
      p5input:false,
      aufocus5:false,
      p7input:false,
      aufocus7:false,
      p9input:false,
      aufocus9:false
    })
  },
  bindKeyInput3:function(e){
    console.log(e.detail.value)
    this.setData({
      p3:e.detail.value
    })
  },
  confirm3:function(){
    this.setData({
      p3input:false,
      aufocus3:false
    })
  },
  input5:function(){
    this.setData({
      p5input:true,
      aufocus5:true,
      p1input:false,
      aufocus1:false,
      p2input:false,
      aufocus2:false,
      p3input:false,
      aufocus3:false,
      p7input:false,
      aufocus7:false,
      p9input:false,
      aufocus9:false
    })
  },
  bindKeyInput5:function(e){
    console.log(e.detail.value)
    this.setData({
      p5:e.detail.value
    })
  },
  confirm5:function(){
    this.setData({
      p5input:false,
      aufocus5:false
    })
  },
  input7:function(){
    this.setData({
      p7input:true,
      aufocus7:true,
      p1input:false,
      aufocus1:false,
      p2input:false,
      aufocus2:false,
      p3input:false,
      aufocus3:false,
      p5input:false,
      aufocus5:false,
      p9input:false,
      aufocus9:false
    })
  },
  bindKeyInput7:function(e){
    console.log(e.detail.value)
    this.setData({
      p7:e.detail.value
    })
  },
  confirm7:function(){
    this.setData({
      p7input:false,
      aufocus7:false
    })
  },
  input9:function(){
    this.setData({
      p9input:true,
      aufocus9:true,
      p1input:false,
      aufocus1:false,
      p2input:false,
      aufocus2:false,
      p3input:false,
      aufocus3:false,
      p5input:false,
      aufocus5:false,
      p7input:false,
      aufocus7:false,
    })
  },
  bindKeyInput9:function(e){
    console.log(e.detail.value)
    this.setData({
      p9:e.detail.value
    })
  },
  confirm9:function(){
    this.setData({
      p9input:false,
      aufocus9:false
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
      context.drawImage(imgsrc1,0,0,300,400);
     
      context.setFillStyle("#ff0000")
      context.rect(0, 300, 300, 285)
      context.fill()

      context.setFillStyle("#fff100")
      context.rect(30, 300, 236, 95)
      context.fill()

      context.setFontSize(14)
      context.setFillStyle("#000000")
      context.fillText(p1, 50, 350)

      context.drawImage(imgsrc2,100,500,100,100);

      wx.drawCanvas({
        canvasId: 1,
        actions: context.getActions()
      })
      wx.canvasToTempFilePath(1)
  }

})