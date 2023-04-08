// message-box.js

Component({
  options: {
    multipleSlots: true,
  },
  properties: {
    message: {
      type: String,
      value: '',
    },
    position: {
      type: String,
      value: '',
    },
    isUser: {  // 新添加的属性
      type: Boolean,
      value: false,
    },
  },
  data: {
    boxClass: '',
  },
  methods: {},
  lifetimes: {
    attached() {
      if (this.data.isUser) {
        this.setData({
          boxClass: 'user-message-box',
        });
      } else {
        this.setData({
          boxClass: 'ai-message-box',
        });
      }
    }
  },
  observers: {
    'position': function (position) {
      if (position === 'left') {
        this.setData({
          boxClass: 'ai-message-box',
        });
      } else {
        this.setData({
          boxClass: 'user-message-box',
        });
      }
    }
  }
});
