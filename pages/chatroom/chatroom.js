const app = getApp();

Page({
  data: {
    messages: [], // 聊天记录
    inputValue: '', // 输入框内容
  },

  // 输入框内容改变时触发
  onInputChange: function (e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  onSendMessage: function () {
    if (this.data.inputValue.trim() === '') {
      wx.showToast({
        title: '请输入消息',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    const newMessage = {
      type: 'user',
      content: this.data.inputValue,
    };

    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: '',
    });

    const messageBox = this.selectComponent('.message-box:last-child');
    if (messageBox) {
      messageBox.scrollIntoView();
    }

    // 延时 500 毫秒后再尝试获取 messageBoxList，确保组件已经渲染完毕
    setTimeout(() => {
      const messageBoxList = this.selectAllComponents('.message-box');
      console.log("messageBoxList:", messageBoxList);

      const lastMessageBox = messageBoxList[messageBoxList.length - 1];
      if (lastMessageBox) {
        lastMessageBox.setData({
          message: newMessage,
          position: 'right',
          isUser: true,
        });
      }
    }, 1000);
  },

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '小秘书',
    });
    // 清空聊天记录
    this.setData({
      messages: [],
    });
  },
});
