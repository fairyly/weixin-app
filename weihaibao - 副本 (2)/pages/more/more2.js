
var util = require('../../utils/util.js')
var app = getApp()
Page({
   data:{
    moreImg:[
      {
        src:"/images/1.jpg",
        id:1
      },
      {
        src:"/images/f2.jpg",
        id:2
      },
      {
        src:"/images/f1.jpg",
        id:3
      },
      {
        src:"/images/f3.jpg",
        id:3
      },
      ],
      date:'',
      hidden:true,
      loadhidden:false
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("more2")
    var that=this;
    var dd;
    function dt(){
      dd=util.formatTime(new Date());
      that.setData({
        date:dd
      })
    }
    
    var t=setInterval(dt,1000);
    console.log(this.data.date)
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
  scrolltop:function(e){
    console.log(e)
  },
  lower:function(e){
    console.log(e)
  },
  scroll:function(e){
    console.log(e)
    // this.setData({hidden:false})
  },
  loadmore:function(){
     var that = this;
      that.setData({
                    hidden:false,
                    loadhidden:true
                });
      wx.request({
          url:'http://www.imooc.com/course/ajaxlist',
          data:{

          },
            // url:'http://www.imooc.com/course/ajaxlist',
             header: {
                'Content-Type': 'application/json'
            },
            success:function(res){
                console.log(res);
                var list = that.data.moreImg;
                for(var i = 0; i < res.data.list.length; i++){
                    list.push(res.data.list[i]);
                }
                that.setData({
                    moreImg : list
                });
                that.setData({
                    hidden:true
                });
            },
            fail:function(){
                console.log("error")
            },
            complete:function(){
                 that.setData({
                    hidden:true,
                    loadhidden:false
                });
            }
        });
  }
})