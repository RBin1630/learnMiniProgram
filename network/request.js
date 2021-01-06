export default function request(option) {
  const baseUrl = 'http://152.136.185.210:7878/api/m5'
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + option.url,
      method: option.method || 'GET',
      success: resolve,
      fail: reject
    })
  })
}