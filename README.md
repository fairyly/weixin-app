# weixin-app



hello  小程序

* [微信小程序联盟](http://www.wxapp-union.com/)


>>> study  ......



- https://github.com/justjavac/awesome-wechat-weapp
- https://github.com/opendigg/awesome-github-wechat-weapp
- https://github.com/Aufree/awesome-wechat-weapp
- https://github.com/weui/weui-design
- https://github.com/weui/weui-wxss
- https://github.com/tencentyun/wafer
- https://www.qcloud.com/solution/la


* [微信小程序支付（java后端）](http://blog.csdn.net/qq_30641447/article/details/73222648)

* [微信小程序：支付系列合集（开发指南+精品Demo）](http://www.wxapp-union.com/article-2572-1.html)
  - [demo：搭伴拼团（PHP）：微信支付，客服消息](http://www.wxapp-union.com/forum.php?mod=viewthread&tid=4913&highlight=%E6%94%AF%E4%BB%98)  
    前端地址：https://github.com/xupp/xiaochengxu  
    前端地址：https://github.com/xupp/xiaochengxu  
  - [小程序支付详解+源码(客户端+服务端)](http://www.wxapp-union.com/article-2516-1.html)
  
  
* 关键字(需要在双引号之内)
  - true：boolean 类型的 true，代表真值。
  - false： boolean 类型的 false，代表假值。
  - `<checkbox checked="{{false}}"> </checkbox>`
  - 特别注意：不要直接写 checked="false"，其计算结果是一个字符串，转成 boolean 类型后代表真值。


* 修改数组的参数值 (或者设置对象的属性) 在使用setData()设置数组对象的某个元素的属性
  ```
  babyInfo2: [
      {
        "sex": "男",
        "gender": 1
      },
      {
        "sex": "女",
        "gender": 2
      },
    ]
    
  var gend = "babyInfo2["+index+"].gender";
  that.setData({
    [gend]: 2
  })
  ```
  
* wx:for 嵌套，需要设置 wx:for-item 下边是一个九九乘法表  

  ```
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
    <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
      <view wx:if="{{i <= j}}">
         {{i}} * {{j}} = {{i * j}}
      </view>
    </view>
  </view>
  ```
