# weixin-app
wxApp

>

## 1.开发小程序框架

- [ustjavac/awesome-wechat-weapp](https://github.com/justjavac/awesome-wechat-weapp)

- 组件化开发框架：[Tencent/wepy](https://github.com/Tencent/wepy)
  - [docs](https://wepyjs.gitee.io/wepy-docs/)
  - [aben1188/awesome-wepy](https://github.com/aben1188/awesome-wepy)
  
  
  
- [Taro](https://github.com/NervJS/taro) - 使用 React 的方式开发小程序的框架，同时支持生成多端应用
- [uni-app](https://github.com/dcloudio/uni-app) - 使用 Vue 语法开发小程序、H5、App的统一框架
- [mpvue](https://github.com/Meituan-Dianping/mpvue) - 基于 Vue.js 的小程序开发框架，从底层支持 Vue.js 语法和构建工具体系
- [chameleon](https://github.com/didi/chameleon) - 一套代码运行多端，一端所见即多端所见
- [kbone](https://github.com/wechat-miniprogram/kbone) - Web 与小程序同构解决方案

## 2.小程序 UI 框架

- [Tencent/weui-wxss](https://github.com/Tencent/weui-wxss)

- [youzan/vant-weapp](https://github.com/youzan/vant-weapp)

- [weilanwl/ColorUI](https://github.com/weilanwl/ColorUI)

- [TalkingData/iview-weapp](https://github.com/TalkingData/iview-weapp)

- [微信小程序UI组件库合集](https://developers.weixin.qq.com/community/develop/article/doc/000ecc775a86807f7ba9b7dc956c13?highline=UI)



>  
## issue

- 除了官方给出的问题，像脚本内不能使用window等对象，
    
- 不能使用jquery、zepto框架、一个应用同时只能打开5个页面，

- 当已经打开了10个页面之后，wx.navigateTo不能正常打开新页面。

- 请避免多层级的交互方式，或者使用wx.redirectTo、样式表不支持级联选择器，
  - 一个应用同时只能打开10个页面，当已经打开了10个页面之后，wx.navigateTo不能正常打开新页面。请避免多层级的交互方式，或者使用wx.redirectTo

- WXSS支持以.开始的类选择器；

- background-image：可以使用网络图片，或者 base64，或者使用<image/>标签
- 使用 page 标签选择器，可以修改顶层节点的样式
  ```
  page {
    display: block;
    min-height: 100%;
    background-color: red;
  }
  ```

- map、canvas、video、textarea 是由客户端创建的原生组件，原生组件的层级是最高的，
  所以页面中的其他组件无论设置 z-index 为多少，都无法盖在原生组件上。 
  原生组件暂时还无法放在 scroll-view 上，也无法对原生组件设置 css 动画。
  
  
---



# 微信小程序

* app.globalData.userInfo: 使用全局属性;
* getcurrentpages(): 获取页面栈;
  - 页面栈以栈（先进后出）的形式维护页面与页面之间的关系；  
  - 小程序提供了getCurrentPages()函数获取页面栈，第一个元素为首页，最后一个元素为当前页面。
* setData() : 函数用于将数据从逻辑层发送到视图层，同时改变对应的this.data,
  - 坑：直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致
