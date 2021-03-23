export default {
  personDB: {
    baseDir: "model",
    dialect: "mariadb",
    database: "elm",
    host: "118.126.103.77",
    port: 3306,
    username: "root",
    password: "123456",
    timezone: "+08:00",
    dialectOptions: {
      // for reading from database
      // @ts-ignore
      dateStrings: true,
      typeCast: true,
      // decimal返回数字类型
      decimalNumbers: true,
    },
  },
};
