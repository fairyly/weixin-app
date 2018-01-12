# weixin-app



hello  小程序

* [微信小程序开源推荐](https://developers.weixin.qq.com/home?action=list_recommendblog&page=1&limit=10&lang=zh_CN&token=)
* [基于Gulp 的微信小程序前端开发工作流 ](https://github.com/Jeff2Ma/WeApp-Workflow)

* [微信小程序联盟](http://www.wxapp-union.com/)

* openToolsLog 查看开发工具日志

  - 任意聊天窗口输入 //uplog 会上传日志
  - open
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

* 数据绑定使用 **Mustache** 语法（双大括号）将变量包起来
  
* 关键字(需要在双引号之内)
  - true：boolean 类型的 true，代表真值。
  - false： boolean 类型的 false，代表假值。
  - `<checkbox checked="{{false}}"> </checkbox>`
  - 特别注意：不要直接写 checked="false"，其计算结果是一个字符串，转成 boolean 类型后代表真值。

* 设置全局
```
window
用于设置小程序的状态栏、导航条、标题、窗口背景色。

属性	类型	默认值	描述
navigationBarBackgroundColor	HexColor	#000000	导航栏背景颜色，如"#000000"
navigationBarTextStyle	String	white	导航栏标题颜色，仅支持 black/white
navigationBarTitleText	String		导航栏标题文字内容
backgroundColor	HexColor	#ffffff	窗口的背景色
backgroundTextStyle	String	dark	下拉背景字体、loading 图的样式，仅支持 dark/light
enablePullDownRefresh	Boolean	false	是否开启下拉刷新，详见页面相关事件处理函数。
onReachBottomDistance	Number	50	页面上拉触底事件触发时距页面底部距离，单位为px
```

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
  
  或者
  
  this.setData({
    'array[0].text':'changed data',
    'object.text': 'changed data'
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

* 页面参数传递方法  

  - 跳转 带参数使用 ?  
    wx.navigateTo({url:'/pages/xiangqing/xiangqing?id=上一页的参数'}) 
    onLoad:function(options){   
     // 页面初始化 options为页面跳转所带来的参数   
     this.setData({   
        title:options.id   
     })   
  - wx.setStorage 或者 wx.serStorageSync
  - 

* 模板使用 WXML 提供模板（template） 只能使用data传入的数据
  ```
  <template/>内定义代码片段
  <template name="msgItem">
    <view>
      <text> {{index}}: {{msg}} </text>
      <text> Time: {{time}} </text>
    </view>
  </template>
  
  使用模板:
  <import src="../WXtemplate/headerTemplate.wxml"/> 
  <template is="msgItem" data="{{...item}}"/>
  ```


* 设置 data-xxx 的方法来标识要传递的值

  获取用  
  e.currentTarget.dataset.xxx  

* 微信小程序图片实现宽度100%，高度自适应,mode 有 13 种模式，其中 4 种是缩放模式，9 种是裁剪模式。

  ```
  <image src='/images/store-pic.png' style='width:100%;' mode="widthFix"></image>
  ```

* 页面栈  
  - [小程序页面路由](http://www.cnblogs.com/nosqlcoco/p/6195572.html)   
  - navigator 先进后出，如果使用wx.navigateTo()方法跳转页面 会将跳转之前的页面压倒页面栈之中    
  - 使用navigateBack（）方法会将栈首页面出栈，直到目标页面出栈。值得注意的是页面栈的容量是五个   
  - edirectTo()这个方法不会将自己的页面压倒栈内，从而就不会允许将之前访问过的页面从栈中返回出来   
  - 使用wx.navigateTo接口跳转,原页面保留。   
  - 使用wx.redirectTo接口跳转，关闭原页面,不能返回   
  
  ```
  1.小程序启动，初始化第一个页面
  2.打开新页面，调用 API wx.navigateTo 或使用<navigator />组件
  3.页面重定向，调用 API wx.redirectTo 或使用<navigator />组件
  4.页面返回，调用 API wx.navigateBack或用户按左上角返回按钮
  5.tarbar切换
  
  从页面路由栈中直接获取和操作目标Page对象
  这种方式，是通过调用小程序的API: getCurrentPages()，来获取当前页面路由栈的信息，
  这个路由栈中按照页面的路由顺序存放着相应的Page对象，我们可以很容易的获取到上一级页面的完整Page对象，
  从而使直接调用Page对象的属性和方法成为可能。
  如下所示：
  var pages = getCurrentPages();
  var currPage = pages[pages.length - 1]; //当前页面
  var prevPage = pages[pages.length - 2]; //上一个页面
  //直接调用上一个页面的setData()方法，
  把数据存到上一个页面中去prevPage.setData({ mydata: {a:1, b:2}})
  比起全局数据存储的方式，这种方式在逻辑上要清晰得多，也不存在对数据的销毁有额外的管理工作。

  ```

* scroll-view 的 bindscrolltolower=""事件 下拉加载更多时bindscrolltolower多次执行
  - 将lower-threshold属性设为0或者1或者很小的值，就可以只加载一次 因为小程序更新后lower-threshold的默认值是50 超过50之后就会多次触发


* input 后添加删除 清除内容后失去焦点,键盘收起
* wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
* 不要在onLaunch的时候调用getCurrentPages()，app 还没有生成 
  - 注意：不要尝试修改页面栈，会导致路由以及页面状态错误。
  - getCurrentPages() 函数用于获取当前页面栈的实例，以数组形式按栈的顺序给出
  - onLoad:页面加载 一个页面只会调用一次
  - onShow:页面显示 每次打开页面都会调用 一次

* 输验证码自动跳下一个原理：四个 input 输入框显示
  - 采用分层原理，上层只做显示层，下层做数据输入层，下层 input 聚焦，上层 input 显示输入的数字
  
    ```
      <view class='hideinput'>
        <input type='number' name="" focus='{{bottomview}}' auto-focus='{{bottomview}}' bindinput='textinput' value='{{inputtxtnum}}'/>
      </view>
      <view class='fill-code' bindtap='setfocus' style='height:{{winHeight}}px;padding:0 {{padding}}px'>
        <view class='title'><text>验证码已发送至手机:</text><text class='number'>{{phoneNumber}}</text></view>
        <view class='code' bindtap='setfocus'>
        <input wx:for='{{inputlist}}' wx:key='{{index}}' style="width:{{width}}px;height:{{px}};font-size:{{fz}}px;
         font-family:UICTFontTextStyleBody;pointer-events:none;" data-index='{{index}}' maxlength='1' type='number'
         placeholder-style='color:#000;font-size:40px;font-family:UICTFontTextStyleBody;'  
         class="{{fucusnum == item.key? 'focus' : ''}}"   placeholder='' disabled='{{true}}'  
         value='{{item.input}}' bindtap='setfocus' />
      </view>
    ```

* 商品属性分类判断选择
  
  ```
  <view class="classname" wx:for="{{salePropList}}" wx:key="index">
          <view class="chose-size-item-title">{{item.propName}}</view>
          <view class="chose-size-detail-list">
            <view wx:for="{{item.skuAttrList}}" wx:for-item="itemlist" class="chose-size-detail-item {{item.attrValueStatus[idx] ? (item.selectvalue == itemlist.value ? 'active':''): ''}}" wx:for-index="idx" data-selectedvalue="{{item.selectedValue}}" data-status="{{item.attrValueStatus[idx]}}" data-value="{{itemlist.value}}" data-key="{{itemlist.key}}" data-index='{{index}}' data-num='{{idx}}' bindtap="chosegoods">{{itemlist.value}}</view>
          </view>
        </view>
        
        chosegoods: function(e) {
    var that = this
    var salelists = that.data.salePropList //获取当前列表
    var selectattrlist = [] //获取已经选择属性列表
    var selectkeylist = [] //获取已经选择分类的 key 列表
    var skumap = that.data.skuMap //获取 skumap 对象

    var key = e.currentTarget.dataset.key //获取当前 key
    var index = e.currentTarget.dataset.index //当前分类索引
    var catenum = e.currentTarget.dataset.num //当前分类中的字段索引

    var value = e.currentTarget.dataset.value //当前分类字段的值
    var selectedvalue = e.currentTarget.dataset.selectedvalue //当前分类选择的值
    var status = e.currentTarget.dataset.status //当前分类中字段的选择状态
    console.log(index,key,value,selectedvalue,catenum)

    //设置列表中 attrValueStatus 中字段的状态和分类中选择值
    salelists[index].attrValueStatus[catenum] = true
    salelists[index].selectvalue = value
    salelists[index].selectkey = key
    that.setData({
        salePropList: salelists
    })
    console.log("selsalePropList",that.data.salePropList)
    that.data.salePropList.forEach(function(el,key){
      selectattrlist.push(el.selectvalue) //把选择的值加入选择列表
      selectkeylist.push(el.selectkey) //把选择的 key 加入选择 key 列表
    })
    console.log("selectattrlist",selectattrlist)
    console.log("selectkeylist",selectkeylist)
    that.setData({
        selectattrlist: selectattrlist, //更新页面渲染
        selectkeylist: selectkeylist
    })
    //计算价格和库存,显示对应图片
  ```

* 小程序 人民币符号不显示(部分手机)
  - ¥  —> ￥

* 连续点击小程序的 <navigator> 出现如下错误: navigateBack with an unexist webviewId
  手机上没有出现
  
* 小程序弹窗禁止底部内容滚动 
  ```
  catchtouchmove="preventTouchMove"
  为什么是空方法？因为要结合界面wxml看，蒙层view里有一个事件绑定catchtouchmove="preventTouchMove"。这样写的原因是阻断事件向下传递，避免在弹窗后还  可以点击或者滑动蒙层下的界面
  ```
* wxss 失效？请尝试以下操作：
```
  1. 在开发者工具调试器中输入openVendor并回车；
  2. 开发者工具会打开一个文件夹，请删除这个文件夹下的所有文件；
  3. 关闭并重启开发者工具，看看这个问题是否还存在。
```
