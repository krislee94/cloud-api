import { Application } from "egg";

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { controller, router } = app;
  //初始化
  router.get("/", controller.home.index);
  //--------------------------------- 登录接口 -------------------------------------
  //登录login的接口
  router.post("/login/user", controller.login.loginIn);
  //获取登录状态 !!! 这个接口有问题一直返回301 （禁用）
  router.get("/login/status", controller.login.loginStatus);
  //刷新登录接口
  router.post("/login/refresh", controller.login.refreshStatus);

  //--------------------------------- 验证码 ----------------------------
  // 发送验证码
  router.post("/send/code", controller.check.sendCode);
  //校验验证码
  router.post("/check/code", controller.check.checkCode);

  //--------------------------  用户 ----------------------------
  //用户详情
  router.post("/user/detail", controller.user.queryDetail);
  //获取用户歌单
  router.post("/user/play/list", controller.user.queryUserPlayList);
  //更新用户订单（用户登录之后更新）
  router.post("/user/play/list/update", controller.user.userPlayListUpdate);
  //获取用户信息 , 歌单，收藏，mv, dj 数量(301)
  router.get("/user/play/subcount", controller.user.getUserInfoAndNumer);
  //获取用户电台
  router.post("/user/dj", controller.user.queryUserDJ);
  //获取用户粉丝列表
  router.post("/user/followeds", controller.user.queryUserFolloweds);
  //获取用户关注列表
  router.post("/user/follow", controller.user.queryUserFollower);
  //获取用户动态
  router.post("/user/event", controller.user.queryUserEvent);
  //转发用户动态
  router.post("/user/forward", controller.user.forwardUserEvent);
  //获取用户播放记录
  router.post("/user/record", controller.user.getUserRecord);

  // ------------------------ 热门话题，热评等 ----------------------------

  //查询热门话题 （301）
  router.post("/hot/topic", controller.hot.HotTopic);
  //获取云村热评
  router.get("/hotwall/list", controller.hot.hotWallList);

  //------------------------- 心动模式 --------------------------------
  //心动模式&智能播放(500)
  router.post("/playmode/intelligence/list", controller.song.getAISong);

  //--------------------------- 歌手 ------------------------------------
  //歌手分类列表
  router.post("/player/artist/list", controller.player.getArtistList);
  //收藏取消 收藏歌手
  router.post("/artist/sub", controller.player.artistSub);

  //获取banner
  router.post("/banner", controller.home.getBannerList);
};
