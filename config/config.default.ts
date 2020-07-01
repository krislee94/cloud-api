/* eslint valid-jsdoc: "off" */
import { EggAppInfo, EggAppConfig, PowerPartial } from 'egg';


export type DefaultConfig = PowerPartial<EggAppConfig> 
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
export default (appInfo:EggAppInfo) => {
  const config = {} as DefaultConfig;

  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592274920882_6241';

  // add your middleware config here
  config.middleware = ['bizerror'];

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
  };

  config.cors = {
    //@ts-ignore
    origin: (ctx) => {
      return ctx.get('Origin');
    },
    //@ts-ignore
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.onerror = {
    all(err,ctx) {
      ctx.body = err;
      ctx.status = 500;
    },
    html(err,ctx) {
      ctx.body = `<h3>${err}</h3>`;
      ctx.status = 500;
    },
    json(err,ctx){
      ctx.body = {message:err};
      ctx.status = 500;
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
