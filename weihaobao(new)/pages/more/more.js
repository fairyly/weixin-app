Page({
  data:{
    moreImg:[
      {
        src:"/images/1.jpg",
        id:1
      },
      {
        src:"/images/2.jpg",
        id:2
      },
      {
        src:"/images/3.jpg",
        id:3
      },
      ]
  },
  edit:function(e){
    var pageId=e.target.id;
     console.log(pageId);
     wx.navigateTo({
      url: '../edit'+pageId+'/edit'+pageId
    });
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
   
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  
})