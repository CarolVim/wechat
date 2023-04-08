Page({
  onGetUserProfile: function () {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        console.log('用户信息：', res.userInfo);
  
        // 处理登录逻辑，如将用户信息发送到服务器
        // ...
  
        // 授权成功后，跳转至聊天室页面
        wx.navigateTo({
          url: '/pages/chatroom/chatroom',
        });
      },
      fail: () => {
        // 用户拒绝授权，可以提示用户需要授权才能使用该功能
        wx.showModal({
          title: '提示',
          content: '需要授权才能使用该功能',
          showCancel: false,
        });
      },
    });
  },
});
