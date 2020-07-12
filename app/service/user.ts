import { Service } from "egg";
import { user_detail } from "NeteaseCloudMusicApi";

export default class User extends Service {
  public async queryDetail(param) {
    try {
      const { uid } = param;
      const result = await user_detail({ uid });
      console.log("----", result);
      if (result && result.status == 200) {
        return result.body;
      } else {
        this.ctx.throwBizError("请求错误");
      }
    } catch (error) {
      console.log("------", error);
      let code = error.body.code; //直接返回错误码
      this.ctx.throwBizError(code);
    }
  }
}
