// components/my-select/my-select.js
Component({
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    increament(num) {
      this.setData({
        counter: this.data.counter + num,
      })
    }
  }
})
