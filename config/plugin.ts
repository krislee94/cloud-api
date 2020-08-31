import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  //参数校验
  validate: {
    enable: true,
    package: "egg-validate",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
};

export default plugin;
