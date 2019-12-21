Page({
  bindPush(){
    wx.navigateTo({
      url: '../pushstream/pushstream',
    })
  },

  bindPlayer(){
    wx.navigateTo({
      url: '../player/player',
    })
  },

  bindMeeting(){
    wx.navigateTo({
      url: '../rtc/rtc',
    })
  }



});