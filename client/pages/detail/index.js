const app = getApp();
const mapping = require('../common/reversemapping.js');

Page({
  data: {
    cover: '',
    title: '',
    content: '',
    shareName: '',
  },

  onLoad: function () {
    this.getNameCardDetail();
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '名片识别小程序-'+(this.data.shareName || '分享您的专属名片'),
      path: '/pages/detail?id=123'
    }
  },


  /**
   * 获取名片详情
   */
  getNameCardDetail() {
    // 云函数新接口，用于获取数据库中数据
    const db = wx.cloud.database({});
    let ncId = app.globalData.namecard.id;
    db.collection('namecard').doc(ncId).get().then(res => {
        console.log('db读取成功', res.data);
        let data = res.data;


        let namecard = [];
        Object.keys(data).forEach((item) => {
            if (item === 'cover' || item === '_id' 
                || item === '_openid') {
                return;
            }
            namecard.push({
                name: mapping[item],
                value: data[item]
            });
        });

        this.setData({
            cover: data.cover,
            namecard: namecard,
            shareName: res.data.name
        });
    })
    .catch(e => {
        wx.showToast({
            title: 'db读取失败',
            icon: 'none'
        });
    });
  },

  /**   
   * 预览图片  
   */
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: [this.data.cover] // 需要预览的图片http链接列表  
    });
  } 
})
