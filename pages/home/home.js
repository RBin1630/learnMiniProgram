// pages/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1: 'World',
    msg2: 'MiniProgram',
    name: 'RBin',
    age: 18,
    stus: [
      {name: 'robin', age: 20, height: 167},
      {name: 'jack', age: 56, height: 177},
      {name: 'danny', age: 10, height: 127},
    ],
    counter: 0,
    imagePath: '',
    price: 116.666666666,
    titles: ['衣服', '裤子', '鞋子']
  },
  changeMsg() {
    this.setData({
      msg1: this.data.msg2,
    })
  },
    add() {
      this.setData({
        counter: this.data.counter + 1,
      })
    },
    sub() {
      this.setData({
        counter: this.data.counter - 1,
      })
    },
    selectPic() {
      wx.chooseImage({
        success: res => {
          console.log(res);
          this.setData({
            imagePath: res.tempFilePaths[0],
          })
        }
      })
    },
    handleTouchStart() {
      console.log('handleTouchStart');
    },
    handleTouchMove() {
      console.log('handleTouchMove');
    },
    handleTouchEnd() {
      console.log('handleTouchEnd');
    },
    handleTap() {
      console.log('handleTap');
    },
    handleLongPress() {
      console.log('handleLongPress');
    },
    canshuchuandievent(e) {
      console.log(e);
      const dataset = e.currentTarget.dataset;
      const item = dataset.item;
      const index = dataset.index;
      console.log(item, index);
    },
    handleCapture1() {
      console.log('handleCapture1');
    },
    handletap1() {
      console.log('handletap1');
    },
    handleCapture2() {
      console.log('handleCapture2');
    },
    handletap2() {
      console.log('handletap2');
    },
    handleCapture3() {
      console.log('handleCapture3');
    },
    handletap3() {
      console.log('handletap3');
    },
    increament5() {
      this.setData({
        counter: this.data.counter + 5,
      })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})