import DB from "./db";
const ENV_ID = process.env.EGG_SERVER_ENV || "personDB"; //线上EGG_SERVER_ENV是空, 本调试也是空;
const NODE_ENV = process.env.NODE_ENV || "development"; // 方便本地调试;
const LOCAL_MYSQL = DB.personDB; // 方便本测试升级脚本;

/**
 * 测试环境NODE_ENV都是production;
 * process.env.NODE_ENV  -> 'production'
 * process.env.EGG_SERVER_ENV  -> 'testx'
 *
 * NODE_ENV=test npx sequelize db:migrate:up
 */
console.log(
  "Mysql Config:NODE_ENV=",
  NODE_ENV,
  ENV_ID,
  NODE_ENV == "development" ? LOCAL_MYSQL : DB[ENV_ID]
);
module.exports = {
  // config.sequelize;
  production: DB[ENV_ID],
  development: LOCAL_MYSQL,
};
