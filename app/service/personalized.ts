import { Service } from "egg";
import { personalized } from "NeteaseCloudMusicApi";
import { IpersonalizedRequestParam } from "cloud";

export default class personalizedService extends Service {
  public async getPersonalizeList(param: IpersonalizedRequestParam) {
    try {
      const { limit = 30 } = param;
      const result = await personalized({
        limit,
      });
      return result.body;
    } catch (error) {
      let msg = error.msg || "获取推荐列表失败";
      this.ctx.throwBizError(msg);
    }
  }
}
