/* eslint valid-jsdoc: "off" */
import { EggAppInfo, EggAppConfig, PowerPartial } from "egg";
import DB from "./DB";

interface BizConfig {
  hotGoods: {
    adminId: string;
  };
}

export type DefaultConfig = PowerPartial<EggAppConfig>;
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
export default (appInfo: EggAppInfo) => {
  // const config = {} as DefaultConfig;
  const config = {} as DefaultConfig & BizConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1592274920882_6241";

  // add your middleware config here
  // config.middleware = ['bizerror'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //egg自带安全协议。csrf
  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
    domainWhiteList: ["http://localhost:3000"],
  };

  config.cors = {
    // //@ts-ignore
    // origin: (ctx) => {
    //   return ctx.get("Origin");
    // },
    origin: "http://localhost:3001", //匹配规则  域名+端口  *则为全匹配
    //@ts-ignore
    credentials: true,

    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };

  config.onerror = {
    all(err, ctx) {
      ctx.body = err;
      ctx.status = 500;
    },
    html(err, ctx) {
      ctx.body = `<h3>${err}</h3>`;
      ctx.status = 500;
    },
    json(err, ctx) {
      ctx.body = { message: err };
      ctx.status = 500;
    },
  };

  // @ts-ignore
  config.sequelize = DB.personDB;

  return {
    ...config,
    ...userConfig,
  };
};
