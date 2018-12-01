# weixin-app
wxApp

>


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


git pull --rebase 拉取远程分支与本地分支合并  常用


# 微信小程序

* app.globalData.userInfo: 使用全局属性;
* getcurrentpages(): 获取页面栈;
  - 页面栈以栈（先进后出）的形式维护页面与页面之间的关系；  
  - 小程序提供了getCurrentPages()函数获取页面栈，第一个元素为首页，最后一个元素为当前页面。
* setData() : 函数用于将数据从逻辑层发送到视图层，同时改变对应的this.data,
  - 坑：直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致
