import { Service } from "egg";
import {
  IArtistListParam,
  IArtistIdRequestParam,
  IAritstSongSublistParam,
  IArtistSublistRequestParam,
} from "cloud";
import {
  artist_list,
  artist_sub,
  artist_top_song,
  artist_songs,
  artist_sublist,
} from "NeteaseCloudMusicApi";

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

  //歌手全部歌曲
  public async getArtistSubList(param: IAritstSongSublistParam) {
    try {
      const { order = "hot", limit = 50, offset = 0 } = param;
      //请求歌手歌曲
      const result = await artist_songs({
        id: param.id,
        order,
        limit,
        offset,
      });

      return result.body;
    } catch (error) {
      let msg = error.body.message || "查询歌手全部歌曲失败";
      this.ctx.throwBizError(msg);
    }
  }

  //获取收藏歌手列表
  public async getArtistSubSong(param: IArtistSublistRequestParam) {
    const { limit = 25, offset = 0 } = param;
    try {
      const result = await artist_sublist({
        limit,
        offset,
      });
      return result.body;
    } catch (error) {
      let msg = error.body.message || "查询收藏歌手列表失败";
      this.ctx.throwBizError(msg);
    }
  }
}
