import { Service } from "egg";
import { banner } from "NeteaseCloudMusicApi";

export default class Home extends Service {
  public async getBannerList(type: string) {
    try {
      const result = await banner({
        type,
      });
      return result.body;
    } catch (error) {
      let msg = error.body.msg || "获取banner失败";
      this.ctx.throwBizError(msg);
    }
  }
}
