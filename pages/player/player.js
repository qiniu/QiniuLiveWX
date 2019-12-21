Page({
  data: {
    playURL: null
  },
  onReady(res) {
    this.ctx = wx.createLivePlayerContext('player')
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  
  getInput: function (e) {
    this.setData({
      playURL: e.detail.value
    })
  },
  bindPlay() {
    this.ctx.play({
      success: res => {
        console.log(this.data.playURL)
        console.log('play success')
      },
      fail: res => {
        console.log(this.data.playURL)
        console.log('play fail')
      }
    })
  },
  //返回上一页
  backBtn: function(){
    wx.navigateBack()
  }
})
