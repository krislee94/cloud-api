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
  //刷新登录接口
  router.post("/login/refresh", controller.login.refreshStatus);

  //--------------------------------- 发送验证码 验证码校验 ----------------------------
  router.post("/send/code", controller.check.sendCode);


};
