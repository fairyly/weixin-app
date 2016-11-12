
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
      hidden:true,
      ff:1,
      scrollHeight:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getSystemInfo({
          success:function(res){
              console.info(res.windowHeight);
              that.setData({
                  scrollHeight:res.windowHeight
              });
          }
      });
   var that = this;
      that.setData({
                    hidden:false
                });
      wx.request({
        //   url:'http://www.imooc.com/course/ajaxlist',
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
                    hidden:true
                });
            }
        });
  },
  bindLoad:function(e){
      var that = this;
      that.setData({
                    hidden:false
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
                    hidden:true
                });
            }
        });
     console.log("loading")
  },
  scroll:function(event){
      console.log("scroll")
      var that = this;
      this.setData({
        //   hidden:false,
          ff:2
      })
     
  },
  refresh:function(event){
      console.log("refesh")
      this.setData({
          hidden:false
      })
  }
})