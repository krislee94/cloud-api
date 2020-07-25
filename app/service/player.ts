import { Service } from "egg";
import { IArtistListParam } from "cloud";
import { artist_list } from "NeteaseCloudMusicApi";

export default class Player extends Service {
  /**
   * 查询歌手分类
   * @param param
   */
  public async getArtistList(param: IArtistListParam) {
    try {
      const result = await artist_list(param);
      return result.body;
    } catch (error) {
      let msg = error.body.msg || "查询歌手分类接口失败";
      this.ctx.throwBizError(msg);
    }
  }
}
