//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     imgUrls: [
       {
         src:'../../images/1.jpg',
         id:1
       },
       {
         src:'../../images/2.jpg',
         id:2
       },
       {
         src:'../../images/3.jpg',
         id:3
       }
        
      ],
     indicatorDots: true,
     autoplay: true,
     interval: 5000,
     duration: 1000
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  //事件处理函数
  morepage: function(e) {
    console.log(e);
    wx.switchTab({
      url: '../more/more',
      fuccess:function(s){console.log(s);},
     
       fail:function(f){console.log(f);},
       complete:function(c){console.log(c);}
    })
    // wx.scanCode({//扫码
    //   success: (res) => {
    //     console.log(res.result)
    //   }
    // })
  },
  edit:function(e){
    var pageId=e.target.id;
     console.log(pageId);
     wx.navigateTo({
      url: '../edit'+pageId+'/edit'+pageId
    });
  },
  onLoad: function () {
    console.log('onLoad')
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
      }
    })
  }
})
