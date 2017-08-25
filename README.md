# weixin-app
wxApp

>


>  

  
---


git pull --rebase 拉取远程分支与本地分支合并  常用


# 微信小程序

* app.globalData.userInfo: 使用全局属性;
* getcurrentpages(): 获取页面栈;
  - 页面栈以栈（先进后出）的形式维护页面与页面之间的关系；  
  - 小程序提供了getCurrentPages()函数获取页面栈，第一个元素为首页，最后一个元素为当前页面。
* setData() : 函数用于将数据从逻辑层发送到视图层，同时改变对应的this.data,
  - 坑：直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致
