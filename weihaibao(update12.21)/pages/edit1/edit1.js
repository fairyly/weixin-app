// const AV = require('../../utils/av-weapp.js');

Page({
  data:{
    imgsrc1:'../../images/m1.jpg',
    imgsrc2:'../../images/mpup2.jpg',
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
    distanceX:'',
    distanceY:'',
    newleft:0,
    newtop:0,
    xMove:0,
    yMove:0,
    distance:0,
    filesave:'',
    showimg:'',
    createpic1:true,
    savepic1:false,
    imgsave:false,
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("options");
    // AV.init({
    //   appId: 'X0hcE0MVCbiYRpXwATqLj6DL-gzGzoHsz',
    //   appKey: 'JNldVrxu3QrYbTGJIKAh59Mb',
    // });
  },
  up:function(e){
    console.log(e)
    var that=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          console.log(res)
          wx.setStorageSync('upimg1', res.tempFilePaths[0]);
          var tempFilePaths = res.tempFilePaths[0];
          // console.log(res);
          that.setData({
            imgsrc2:tempFilePaths
          })
          //  new AV.File('file-name', { 
          //   blob: { 
          //     uri: tempFilePaths, 
          //   }, 
          //   }).save().then( 
          //   file => console.log(file.url()) 
          //   ).catch(console.error); 
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
          var temp = res.tempFilePaths[0]
          // new AV.File('file-name', { 
          //   blob: { 
          //     uri: temp, 
          //   }, 
          //   }).save().then( 
          //   file => console.log(file.url()) 
          //   ).catch(console.error); 
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
    var that=this;
      this.setData({
        flag:true,
        show:false,
        createpic1:false,
        savepic1:true,
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
      var newleft=this.data.newleft;
      var newtop=this.data.newtop;
      console.log(p1);
      context.drawImage(imgsrc1,newleft,newtop,294,400);
      context.drawImage(m1bg,0,300,300,300);
     
      context.rect(30, 250, 236, 95)
      context.setFillStyle("#fff100")
      context.fill()

      context.setFontSize(14)
      context.setFillStyle("#000000")
      context.fillText(p1, 130, 270)

      context.setFontSize(28)
      context.setFillStyle("#000000")
      context.fillText(p2, 52, 300)

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
      
  },
  savefile:function(){
    var that=this;
    that.setData({
      savepic1:false
    })
    wx.canvasToTempFilePath({ 
        canvasId: 1,
        success: function (res) {
                console.log(res)
                console.log(res.tempFilePath); 
                 that.setData({filesave:res.tempFilePath,presrc:res.tempFilePath})
                wx.saveFile({
                  tempFilePath: res.tempFilePath,
                  success: function success(res) {
                    console.log('saved::' + res.savedFilePath);
                   wx.setStorageSync('showimg', res.savedFilePath);
                    that.setData({
                      filesave:res.savedFilePath,
                      showimg:res.savedFilePath,
                      flag:false,
                      imgsave:true,
                      })
                  },
                  complete: function fail(e) {
                    console.log(e.errMsg);
                  }
                }); 
         },
        fail: function (res) {
            console.log(res);  
            that.setData({filesave:res.errMsg})  
        }
      });
  },
  previewimg:function(e){
    console.log(e)
    var that=this;
    var current=e.target.dataset.src;
    console.log(that.data.presrc)
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls:[that.data.presrc],
      success: function(res) {
          console.log(res);
        },
        //也根本不走
        fail: function() {
          console.log('fail')
        }
    })

  },
  touchstart:function(e){
      // console.log(e);
      
      this.setData({
        event:e.touches[0].clientX+','+e.touches[0].clientY+',target:'+e.target.offsetLeft+','+e.target.offsetTop
,
        distanceX:e.touches[0].clientX-e.target.offsetLeft,
        distanceY:e.touches[0].clientY-e.target.offsetTop,
      })
  },
  touchmove:function(e){
      // console.log(e);
      // var xMove = e.touches[1].clientX - e.touches[0].clientX;

      // var yMove = e.touches[1].clientY - e.touches[0].clientY;
      // var distance = Math.sqrt(xMove * xMove + yMove * yMove);//暂时不支持多点触摸
      var distanceX=this.data.distanceX;
      var distanceY=this.data.distanceY;
      this.setData({
        event:e.touches[0].clientX+','+e.touches[0].clientY+',target:'+e.target.offsetLeft,
        newleft:e.touches[0].clientX-distanceX,
        newtop:e.touches[0].clientY-distanceY
      })
  },
})