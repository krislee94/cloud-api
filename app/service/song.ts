import { Service } from "egg";
import { IAISongParam } from "cloud";
import { playmode_intelligence_list } from "NeteaseCloudMusicApi";
export default class Song extends Service {
  public async getAISong(param: IAISongParam) {
    try {
      //   const { id = "", pid = "", sid = "" } = param;
      //   console.log("-------------", param);
      //   let obj = {
      //     songId: id,
      //     type: "fromPlayOne",
      //     palylistId: pid,
      //     startMusicId: sid || id,
      //     count: 1,
      //   };
      //   const result = this.ctx.curl(
      //     `http://music.163.com/weapi/playmode/intelligence/list`,
      //     {
      //       method: "POST",
      //       data: obj,
      //       auth: this.ctx.request.header.Cookie,
      //     }
      //   );

      //   console.log(result);
      //   return result;
      const result = await playmode_intelligence_list(param);
      return result.body;
    } catch (error) {
      this.ctx.logger.info("开启心动模式失败", error);
      let msg = error.body.msg || "开启心动模式失败";
      this.ctx.throwBizError(msg);
    }
  }
}
