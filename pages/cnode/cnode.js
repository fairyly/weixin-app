import { getRequest } from '../../utils/request.js';
Page({
  data: {
    page: 1,
    listData: [],
    emptyData: {
      icon: 'iconshuju',
      text: '暂无详细数据',
      show: false,
      height: wx.getSystemInfoSync().windowHeight
    }
  },
  onLoad(query) {
    // 页面加载
    let that = this;
    that.getListData();
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
    let that = this;
    that.data.page = 1;
    that.getListData();
  },
  onReachBottom() {
    // 页面被拉到底部
    let that = this;
    that.data.page++;
    that.getListData();
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'wx App',
      desc: 'wx App description',
      path: 'pages/index/index',
    };
  },
  getListData() {
    let that = this;
    let baseUrl = 'https://cnodejs.org';
    let param = {
      page: that.data.page
    }
    let res = getRequest(baseUrl, '/api/v1/topics', param);
    res.then(result => {
      let listData = result.data;
      if (that.data.page != 1 && !!listData && !!listData.length) {
        let newData = JSON.parse(JSON.stringify(that.data.listData));
        result.data.forEach(ele => {
          ele.title = ele.title.replace(/['二维码'|'腾讯'|'妈逼'|'操']/g, '*')
          newData.push(ele);
        })
        that.setData({
          'emptyData.show': !!listData.length? false: true,
          listData: newData
        })
        return false;
      }
      that.setData({
        listData,
        cellWidth: wx.getSystemInfoSync().windowWidth
      })
    }).catch(()=>{
      that.setData({
        'emptyData.show': true
      })
    })
  },
  toDetail(e) {
    let that = this;
    let dataset = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/node-detail/node-detail?topicId=${dataset.topicid}&title=${dataset.title}`
    })
  },
  refreshData() {
    let that = this;
    that.getListData();
  }
});
