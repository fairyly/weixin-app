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
  //事件处理函数
  morepage: function() {
    wx.navigateTo({
      url: '../more/more'
    })
  },
  edit:function(e){
    var pageId=e.target.id;
     console.log(pageId);
     wx.navigateTo({
      url: '../edit/edit'+pageId
    });
  },
  onLoad: function () {
    console.log('onLoad')
    
  }
})
