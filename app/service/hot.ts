import { Service } from "egg";
import { ILimitPage } from "cloud";
import { hot_topic, comment_hotwall_list } from "NeteaseCloudMusicApi";

export default class HotService extends Service {
  public async HotTopic(param: ILimitPage) {
    const { limit = 30, offset = 0 } = param;
    try {
      const result = await hot_topic({
        limit,
        offset,
      });
      return result;
    } catch (error) {
      this.ctx.logger.info("-------查询热门话题--------", error);
      let msg = error.body.msg || "查询热门话题失败";
      this.ctx.throwBizError(msg);
    }
  }
  //查询云村热评
  public async hotWallList() {
    try {
      const result = await comment_hotwall_list({});
      return result.body;
    } catch (error) {
      this.ctx.logger.info("查询云村热评价：", error);
      let msg = error.body.msg || "查询云村热评失败";
      this.ctx.throwBizError(msg);
    }
  }
}
