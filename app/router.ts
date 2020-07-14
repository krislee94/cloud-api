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

  //--------------------------------- 用户 ----------------------------
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
};
