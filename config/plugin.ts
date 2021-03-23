import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  //参数校验
  validate: {
    enable: true,
    package: "egg-validate",
  },
  //使用mysql
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
};

export default plugin;
