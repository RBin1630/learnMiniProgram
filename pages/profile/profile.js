// pages/profile/profile.js
import request from '../../network/request'
Page({
  data: {

  },
  tabControlItemClick(e) {
    console.log(e);
  },
  changeCpnData() {
    // 获取组件对象
    const my_select = this.selectComponent('#my-select');
    console.log(my_select);

    // 组件内暴露一个接口（方法）来修改组件内data的值， 当然直接修改也是可以的，但不是那么规范
    my_select.increament(20);
  },
  onLoad() {
    // wx.request({
    //   url: 'http://152.136.185.210:7878/api/m5/home/data?type=sell&page=1',
    //   success(res) {
    //     console.log(res);
    //   }
    // })

    // 封装好的网络请求方法
    request({
      url: '/recommend'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
})