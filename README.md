# QiniuLiveWX
七牛直播、播放、连麦最简微信小程序demo

### 开发准备
接入小程序直播和实时音视频连麦需要直接使用微信小程序的[live-pusher](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)和[live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)组件；

这两个组件暂只针对国内主体如下类目的小程序开放，需要先通过类目审核，再在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。

##### step1: 通过类目审核
根据[live-pusher](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)和[live-player](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)组件所需的一级和二级类目，去[非个人主体小程序开放的服务类目](https://developers.weixin.qq.com/miniprogram/product/material/#%E9%9D%9E%E4%B8%AA%E4%BA%BA%E4%B8%BB%E4%BD%93%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%BC%80%E6%94%BE%E7%9A%84%E6%9C%8D%E5%8A%A1%E7%B1%BB%E7%9B%AE)查看具体类目需要的资质要求，测试的时候可以选择不需要提供材料的类目。

##### step2: 在小程序后台「开发」-「接口设置」开通
根据step1添加过相应类目的小程序项目后；再回到「开发」-「接口设置」那开启一下就可以了。

### 快速开始
完整上述的准备工作后，具备了实时音视频的权限，可以进行如下修改运行调试小程序直播demo。  

1，首先更改项目配置文件 project.config.json中的微信小程序appid为开发者自己的；


2，此demo中有推流、播放和七牛实时音视频连麦的演示；分别需要替换开发者自己的推流地址、播放地址和实时音视频roomToken：

* pages/pushstream/pushstream.wxml 中修改 live-pusher 组件的 url 推流地址；
* pages/player/player.wxml 中修改 live-player 组件的 url 播放地址；
* pages/rtc/rtc.js 中this.initRoomWithToken('连麦RoomToken') 传入七牛的roomToken.
