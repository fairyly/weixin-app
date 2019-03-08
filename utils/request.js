function dataRequest(baseUrl,url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: 'GET',
      data: data,
      dataType: 'json',
      success: function(res) {
        if (res.data.m === "ok") {
          resolve(res.data);
        } else {
          wx.showToast({
            title: res.data.m,
          });
          reject(res.data);
        }
      },
      fail: function(res) {
        wx.showToast({
          title: res.errorMessage
        });
        reject(res.data);
      },
      complete: function(res) {
        wx.hideLoading();
        reject(res.data);
      }
    });
  })
}

function getRequest(baseUrl,url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      method: 'GET',
      data: data,
      dataType: 'json',
      success: function(res) {
        if (!!res.data.success) {
          resolve(res.data);
        } else {
          wx.showToast({
            title: res.data,
          });
          reject(res.data);
        }
      },
      fail: function(res) {
        reject(res.data);
      },
      complete: function(res) {
        wx.hideLoading();
        reject(res.data);
      }
    });
  })
}


module.exports = {
  dataRequest: dataRequest,
  getRequest: getRequest
}