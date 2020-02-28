# QiniuLiveWX
七牛直播、播放、连麦最简微信小程序demo



1，首先更改项目配置文件 project.config.json中的微信小程序appid为开发者自己的；注意用到直播实时音视频的项目需要先通过对应的类目审核，再在**小程序管理后台，「开发」-「接口设置」中自助开通该组件（live-pusher和live-player）权限。**



2，此demo中有推流、播放和七牛实时音视频连麦的演示；分别需要替换开发者自己的推流地址、播放地址和实时音视频roomToken：

* pages/pushstream/pushstream.wxml 中修改 live-pusher 组件的 url 推流地址；
* pages/player/player.wxml 中修改 live-player 组件的 url 播放地址；
* pages/rtc/rtc.js 中this.initRoomWithToken('连麦RoomToken') 传入七牛的roomToken.