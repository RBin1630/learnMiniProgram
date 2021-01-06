// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: String,
      value: '这是默认内容',
      observer(newVal, oldVal) {
        console.log(newVal, oldVal);
      }
    }
  },
  // 如果这个类在组件内已经定义了一些样式，那么把这个样式作为外部样式传递出去时，组件内部样式就会失效
  externalClasses: ['externalstyle'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    increament5() {
      this.triggerEvent('increament5');
    }
  }
})
