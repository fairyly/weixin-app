var app=getApp();
Page({
  data:{
      hiddenstep1:false,
      hiddenstep2:true,
      imgsrc:'',
      hiddenstep21:false,
      hiddenstep22:true,
      listid:'',
      listsrc:'',
      listcolor:'',
      colors:'',
      hiddenstep3:true,
      hiddenlistmark:true,
      hiddenstep4:true,
      list1src:'/images/waterstyle036_bg.png',
      list2src:'/images/waterstyle143_bg.png',
      list3src:'/images/waterstyle168_bg.png',
      list4src:'/images/waterstyle166_bg.png',
      list1color:'#e81126',
      list2color:'#ffa6af',
      list3color:'#000000',
      list4color:'#ffffff',
      focuswx:'focus',
      focuswd:'',
      focustb:'',
      focusqq:'',
      focuswb:'',

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
  uploadpic:function(){
      var that=this;
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            console.log(res)
            var tempFilePaths = res.tempFilePaths[0];
            that.setData({
                imgsrc:tempFilePaths,
                hiddenstep1:true,
                hiddenstep2:false,
                hiddenstep21:true,
                hiddenstep22:false
            })
            wx.setStorageSync('uploadimg', res.tempFilePaths[0]);
        }
      })
  },
  addmark:function(e){
      var that=this;
      console.log(e)
      that.setData({
         hiddenstep2:true,
         hiddenstep3:false
      })
  },
  selectlist:function(e){
      var that=this;
      console.log(e);
      var id=e.currentTarget.id;
      console.log(e.currentTarget.id)
      that.setData({
         hiddenstep2:false,
         hiddenstep3:true,
         hiddenstep21:true,
         hiddenstep22:true,
         hiddenlistmark:false,
         hiddenstep4:false
      })
      if(id=='list1'){
          that.setData({
              listid:id,
              listsrc:that.data.list1src,
              listcolor:that.data.list1color,
              colors:'red',
          })
      }else if(id=='list2'){
          that.setData({
              listid:id,
              listsrc:that.data.list2src,
              listcolor:that.data.list2color,
              colors:'pink',
          })
      }else if(id=='list3'){
          that.setData({
              listid:id,
              listsrc:that.data.list3src,
              listcolor:that.data.list3color,
              colors:'black',
          })
      }else if(id=='list4'){
          that.setData({
              listid:id,
              listsrc:that.data.list4src,
              listcolor:that.data.list4color,
              colors:'white',
          })
      }
  },
  createmark:function(){

  }
})