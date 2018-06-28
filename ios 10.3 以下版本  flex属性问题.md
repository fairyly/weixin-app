# ios 10.3 以下版本 flex 问题

- https://cnodejs.org/topic/56d1148d9f876b7e6658579e

>一行显示三个,出现一行显示七个 bug

```
display: flex;
display: -webkit-flex; 
justify-content: center;
-webkit-justify-content: center;
align-items:center;
-webkit-align-items: center;
````


以前样式,一行显示三个,出现一行显示七个 bug


```

 <view class="section-contain">

        <view class="row-cell row-cell-border" wx:for="{{item.moduleDetailList}}" bindtap='cellClick' data-item='{{item}}'>
          <image mode="aspectFit" src="{{host+item.iconUrl}}"></image>
          <view class="row-cell-txt">{{item.iconName}}</view>
        </view>

      </view>
      
      
.member-menu-section .menu-row {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 38rpx 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.member-menu-section .row-cell {
  position: relative;
  /* flex: 1; */
  text-align:center;
  min-width: 33.333333%;
  padding: 38rpx 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

最后给 `row-cell`加个宽度 根据屏幕宽度计算 ` wx.getSystemInfoSync().windowWidth / 3+ 'px'`
```
