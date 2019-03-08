import { dataRequest } from '../../utils/request.js';

Page({
  data: {
    entrylist: [],
    cellWidth: 300,
    emptyData: {
      icon: 'iconshuju',
      text: '暂无详细数据',
      show: false,
      height: wx.getSystemInfoSync().windowHeight
    },
    keywords: ["腾讯","二维码","日","妈逼"]
  },
  onLoad(query) {
    // 页面加载
    let that = this;
    that.getData();
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
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  getData() {
    let that = this;
    let baseUrl = 'https://timeline-merger-ms.juejin.im';
    let param = {
      src: 'web',
      uid: '583fb57961ff4b006c196339',
      device_id: '1549798177984',
      token: 'eyJhY2Nlc3NfdG9rZW4iOiJCcjVpd2lsYlBHSlBnc3BnIiwicmVmcmVzaF90b2tlbiI6Ik5ZaTBha1dlTGNTRkVOMmkiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D',
      limit: '20',
      category: '5562b415e4b00c57d9b94ac8'
    }
    let res = dataRequest(baseUrl, '/v1/get_entry_by_timeline', param);
    res.then(result => {
      let entrylist = [];
      result.d.entrylist.forEach(ele => {
        if (!!ele.original) {
          entrylist.push(ele);
        }
      })
      entrylist.forEach(ele => {
        ele.title = ele.title.replace(/['二维码'|'腾讯'|'妈逼'|'操']/g, '*')
      })
      that.setData({
        entrylist,
        'emptyData.show': !!entrylist.length? false: true,
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
    let url = e.currentTarget.dataset;
    let title = e.currentTarget.dataset.title;
    let id = url.originalurl.split('/')[4];
    wx.navigateTo({
      url: `/pages/juejin-detail/juejin-detail?objectId=${id}&title=${title}`
    })
  },
  refreshData() {
    let that = this;
    that.getData();
  }
});
