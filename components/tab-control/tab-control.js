// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: ['标题1', '标题2', '标题3']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      // 获取索引值
      // console.log(e);
      const index = e.currentTarget.dataset.index;
      // 修改currentIndex
      this.setData({
        currentIndex: index,
      })
      // 把事件发送出去
      this.triggerEvent('tabControlItemClick', {index, title: this.properties.titles[index]})
    }
  }
})
