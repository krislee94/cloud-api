import { Application } from "egg";

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { controller, router } = app;
  //初始化
  router.get("/", controller.home.index);
  //登录login
  router.post("/login/user", controller.login.loginIn);
  
};
