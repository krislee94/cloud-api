import { Service } from "egg";
import { IArtistListParam, IArtistIdRequestParam } from "cloud";
import { artist_list, artist_sub, artist_top_song } from "NeteaseCloudMusicApi";

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

  //收藏与取消收藏歌手
  public async artistSub(param: IArtistIdRequestParam) {
    //
    const { artistId: id } = param;
    try {
      const result = await artist_sub({
        id,
      });
      return result.body;
    } catch (error) {
      let msg = error.body.msg || "收藏取消歌手";
      this.ctx.throwBizError(msg);
    }
  }
  //查询热门歌手50首单曲
  public async artistTopSong(param: IArtistIdRequestParam) {
    const { artistId: id } = param;
    try {
      const result = await artist_top_song({
        id,
      });
      return result.body;
    } catch (error) {
      let msg = error.body.message || "查询歌手热门歌曲失败";
      this.ctx.throwBizError(msg);
    }
  }
}
