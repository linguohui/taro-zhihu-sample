export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discovery/discovery',
    'pages/more/more',
    'pages/answer/answer',
    'pages/question/question'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#626567",
    selectedColor: "#2A8CE5",
    backgroundColor: "#FBFBFB",
    borderStyle: "white",
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "./asset/images/index.png",
      selectedIconPath: "./asset/images/index_focus.png"
    }, {
      pagePath: "pages/discovery/discovery",
      text: "发现",
      iconPath: "./asset/images/discovery.png",
      selectedIconPath: "./asset/images/discovery_focus.png"
    }, {
      pagePath: "pages/more/more",
      text: "我的",
      iconPath: "./asset/images/burger.png",
      selectedIconPath: "./asset/images/burger_focus.png"
    }]
  }
})
