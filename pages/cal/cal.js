Page({
  data:{
    result:0,
    id1:"+",
    id2:"+/-",
    id3:"back",
    id4:"clean",
    id5:"-",
    id6:"7",
    id7:"8",
    id8:"9",
    id9:"*",
    id10:"4",
    id11:"5",
    id12:"6",
    id13:"/",
    id14:"1",
    id15:"2",
    id16:"3",
    id17:"=",
    id18:".",
    id19:"0",
    lastOp:false,
    arr:[]
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
  add:function(e){
      var id=e.target.id;
      console.log(id);
      if(id==this.data.id3){
          var data=this.data.result;
          if(data==0){
              return;
          }
          data=data.substring(0,data.length-1);
          if(data==""||data=="-"){
              data=0
          }
           this.setData({
                result:data
            });
            this.data.arr.pop();
      }else if(id==this.data.id4){
          this.setData({
                result:"0"
            });
            this.data.arr.length = 0;
      }else if(id==this.data.id2){
          var data=this.data.result;
          if(data==0){
              return;
          }
          var first=data.substring(0,1);
          if(first=="-"){
              data=data.substring(1,data.length);
              this.data.arr.shift();
          }else{
              data="-"+data;
              this.data.arr.unshift("-");
          }
          this.setData({
                result:data
            })
      }else if(id==this.data.id17){
          var data=this.data.result;
          if(data==0){
              return;
          }
          var lastWord = data.charAt(data.length);
      if(isNaN(lastWord)){
        return;
      }

      var num = "";

      var lastOperator = "";
      var arr = this.data.arr;
      var optarr = [];
      for(var i in arr){
        if(isNaN(arr[i]) == false || arr[i] == this.data.id2 || arr[i] == this.data.id18){
          num += arr[i];
        }else{
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      var result = Number(optarr[0])*1.0;
      console.log(result);
      for(var i=1; i<optarr.length; i++){
        if(isNaN(optarr[i])){
            if(optarr[1] == this.data.id1){
                result += Number(optarr[i + 1]);
            }else if(optarr[1] == this.data.id5){
                result -= Number(optarr[i + 1]);
            }else if(optarr[1] == this.data.id9){
                result *= Number(optarr[i + 1]);
            }else if(optarr[1] == this.data.id13){
                result /= Number(optarr[i + 1]);
            }
        }
      }
      //存储历史记录
    //   this.data.logs.push(data + result);
    //   wx.setStorageSync("calclogs",this.data.logs);

      this.data.arr.length = 0;
      this.data.arr.push(result);

      this.setData({result:result+""});
      }
      else{
          if(id==this.data.id1||id==this.data.id5||id==this.data.id9||id==this.data.id13)
          {
              if(this.data.lastOp==true||this.data.result==0){
                  return;
              }
          }
          var old=this.data.result;
            var data;
            if(old==0){
                data=id
            }else{
                data=old+id;
            }
            this.setData({
                result:data
            })
            this.data.arr.push(id);

            if(id==this.data.id1||id==this.data.id5||id==this.data.id9||id==this.data.id13)
            {
                this.setData({lastOp:true})
            }else{
                this.setData({lastOp:false})
            }
      }


      
  }
})