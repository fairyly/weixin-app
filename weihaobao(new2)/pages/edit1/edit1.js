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
    aufocus1:false,
    m1bg:'/images/m1bg.jpg',
    event:'',
    disanceX:'',
    distanceY:'',
    newleft:'',
    newtop:'',
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
    // wx.navigateTo({
    //   url: './test',
      
    // })
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
        show:false
      });
      var context = wx.createContext();
      // var img1=wx.getStorageSync('upimg1');
      // var img2=wx.getStorageSync('upimg2');
      var imgsrc1=this.data.imgsrc1;
      var imgsrc2=this.data.imgsrc2;
      var p1=this.data.p1;
      var p2=this.data.p2;
      var p3=this.data.p3;
      var m1bg=this.data.m1bg;
      var p4=this.data.p4;
      var p5=this.data.p5;
      var p6=this.data.p6;
      var p7=this.data.p7;
      var p8=this.data.p8;
      var p9=this.data.p9;
      console.log(p1);
      context.drawImage(imgsrc1,0,0,294,400);
      context.drawImage(m1bg,0,300,300,300);
      // var array = ["0,300,300,285","30,250,236,95"];  
      // var colors = ["#ff0000", "#fff100"];  
      // for(var i=0;i<colors.length;i++){
      //    context.beginPath();  
      //    context.setFillStyle(colors[i]);
      //    context.rect(array[i])
      //    console.log(colors[i]+','+array[i]);
      //    context.fill();
      //    context.closePath();  
      // }
      
      // context.rect(0, 300, 300, 285)
      // context.setFillStyle("#ff0000")
      // context.fill();
     
      context.rect(30, 250, 236, 95)
      context.setFillStyle("#fff100")
      context.fill()

      context.setFontSize(14)
      context.setFillStyle("#000000")
      context.fillText(p1, 130, 270)

      context.setFontSize(28)
      context.setFillStyle("#000000")
      context.fillText(p2, 52, 300)
      // context.setStrokeStyle("#000000")
      // context.stroke()

      context.setFontSize(10)
      context.setFillStyle("#000000")
      context.fillText(p3, 75, 320)

      context.beginPath()
      context.setLineWidth(1)
      context.moveTo(60, 310)
      context.lineTo(240, 310)
      context.stroke()
      context.closePath();

      context.setFontSize(10)
      context.setFillStyle("#fe86a0")
      context.fillText(p4, 137, 360)

      context.setFontSize(12)
      context.setFillStyle("#000000")
      context.fillText(p5, 120, 375)

      context.setFontSize(10)
      context.setFillStyle("#fe86a0")
      context.fillText(p6, 140, 395)

      context.setFontSize(12)
      context.setFillStyle("#000000")
      context.fillText(p7, 120, 410)

      context.setFontSize(10)
      context.setFillStyle("#fe86a0")
      context.fillText(p8, 137, 430)

      context.setFontSize(12)
      context.setFillStyle("#000000")
      context.fillText(p9, 110, 445)

      context.drawImage(imgsrc2,95,460,100,100);

      wx.drawCanvas({
        canvasId: 1,
        actions: context.getActions()
      })
      wx.canvasToTempFilePath({ canvasId: 1});
  },
  touchstart:function(e){
      console.log(e);
      
      this.setData({
        event:e.touches[0].clientX+','+e.touches[0].clientY+',target:'+e.target.offsetLeft+','+e.target.offsetTop
,
        distanceX:e.touches[0].clientX-e.target.offsetLeft,
        distanceY:e.touches[0].clientY-e.target.offsetTop,
      })
  },
  touchmove:function(e){
      console.log(e);
      this.setData({
        event:e.touches[0].clientX+','+e.touches[0].clientY+',target:'+e.target.offsetLeft,
        newleft:e.touches[0].clientX-distanceX,
        newtop:e.touches[0].clientY-distanceY
      })
  },
})