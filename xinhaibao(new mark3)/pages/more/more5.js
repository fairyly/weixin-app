var app=getApp();
Page({
  data:{
      markheight:1980,
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
      wechat:'focus',
      weidian:'',
      taobao:'',
      QQ:'',
      weibo:'',
      listtext:'输入店铺名称',
      listp:'输入微信号',
      listselect:'wechat',
      wechatswitch:'on',
      wedianswitch:'off',
      taobaoswitch:'off',
      QQswitch:'off',
      weiboswitch:'off',
      wxvalue:'',
      wdvalue:'',
      tbvalue:'',
      qqvalue:'',
      wbvalue:'',
      distanceX:'',
      distanceY:'',
      newleft:50,
      newtop:10,
      xMove:0,
      yMove:0,

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
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
  bindshopname:function(e){
      var valueshop=e.detail.value;
      console.log(e)
      this.setData({
          listtext:valueshop
      })
  },
  bindselect:function(e){
      console.log(e)
      var that=this;
      var selectid=e.currentTarget.id;
      that.setData({
          listselect:selectid,
      })
      if(selectid=='wechat'){
          var wxp=that.data.wxvalue;
          ''==wxp && (wxp='输入微信号'),
          that.setData({
            wechat:'focus',
            weidian:'',
            taobao:'',
            QQ:'',
            weibo:'',
            wechatswitch:'on',
            wedianswitch:'off',
            taobaoswitch:'off',
            QQswitch:'off',
            weiboswitch:'off',
            listp:wxp,
        })
      }else if(selectid=='weidian'){
           var wdp=that.data.wdvalue;
          ''==wdp && (wdp='输入微店号'),
          that.setData({
            weidian:'focus',
            wechat:'',
            taobao:'',
            QQ:'',
            weibo:'',
            wechatswitch:'off',
            wedianswitch:'on',
            taobaoswitch:'off',
            QQswitch:'off',
            weiboswitch:'off',
            listp:wdp,
        })
      }else if(selectid=='taobao'){
           var tbp=that.data.tbvalue;
          ''==tbp && (tbp='输入淘宝店铺名'),
          that.setData({
            taobao:'focus',
            wechat:'',
            weidian:'',
            QQ:'',
            weibo:'',
            wechatswitch:'off',
            wedianswitch:'off',
            taobaoswitch:'on',
            QQswitch:'off',
            weiboswitch:'off',
            listp:tbp,
        })
      }else if(selectid=='QQ'){
           var qqp=that.data.qqvalue;
          ''==qqp && (qqp='输入QQ号'),
          that.setData({
            QQ:'focus',
            wechat:'',
            weidian:'',
            taobao:'',
            weibo:'',
            wechatswitch:'off',
            wedianswitch:'off',
            taobaoswitch:'off',
            QQswitch:'on',
            weiboswitch:'off',
            listp:qqp,
        })
      }else if(selectid=='weibo'){
           var wbp=that.data.wbvalue;
          ''==wbp && (wbp='输入微博号'),
          that.setData({
            weibo:'focus',
            wechat:'',
            weidian:'',
            taobao:'',
            QQ:'',
            wechatswitch:'off',
            wedianswitch:'off',
            taobaoswitch:'off',
            QQswitch:'off',
            weiboswitch:'on',
            listp:wbp,
        })
      }
  },
  bindwxinput:function(e){
      
      var wx=this.data.wxvalue=e.detail.value;
      console.log(e)
      this.setData({
          listp:wx,
      })
  },
  bindwdinput:function(e){
      var wd=this.data.wdvalue=e.detail.value;
      console.log(e)
      this.setData({
          listp:wd,
      })
  },
  bindtbinput:function(e){
      var tb=this.data.tbvalue=e.detail.value;
      console.log(e)
      this.setData({
          listp:tb,
      })
  },
  bindqqinput:function(e){
      var qq=this.data.qqvalue=e.detail.value;
      console.log(e)
      this.setData({
          listp:qq,
      })
  },
  bindwbinput:function(e){
      var wb=this.data.wbvalue=e.detail.value;
      console.log(e)
      this.setData({
          listp:wb,
      })
  },
  bindcr:function(){
      this.setData({
         hiddenstep4:true,
         hiddenstep21:false,
         hiddenstep22:true,
         markheight:1100
      })
  },
  touchstart:function(e){
      console.log(e);
      this.setData({
        distanceX:e.touches[0].clientX-e.currentTarget.offsetLeft,
        distanceY:e.touches[0].clientY-e.currentTarget.offsetTop,
      })
  },
  touchmove:function(e){
      console.log(e);
      // var xMove = e.touches[1].clientX - e.touches[0].clientX;
      // var yMove = e.touches[1].clientY - e.touches[0].clientY;
      // var distance = Math.sqrt(xMove * xMove + yMove * yMove);//暂时不支持多点触摸
      var distanceX=this.data.distanceX;
      var distanceY=this.data.distanceY;
      var l=e.touches[0].clientX-distanceX;
      var t=e.touches[0].clientY-distanceY
      if(l){
            this.setData({
                newleft:l,
                newtop:t
            })
      }
    //  if((l==0)||(t==0)){
    //      this.setData({
    //             newleft:0,
    //             newtop:0
    //         })
    //   }
  },
  createmark:function(){

  }
})