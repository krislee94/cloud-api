import { Controller } from "egg";

export default class Player extends Controller {
  /* 
    type 取值
    1:男歌手
    2:女歌手
    3:乐队
    area 取值
    -1:全部
    7华语
    96欧美
    8:日本
    16韩国
    0:其他
    initial 取值 a-z/A-Z

    area
    -1:全部
    7华语
    96欧美
    8:日本
    16韩国
    0:其他
*/

  public async getArtistList() {
    this.ctx.validate({
      type: { type: "string", required: false },
      offset: { type: "number", required: false }, //0
      limit: { type: "number", required: false }, //30
    });
    const result = await this.ctx.service.player.getArtistList({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }

  //收藏与取消收藏歌手
  public async artistSub() {
    this.ctx.validate({
      artistId: { type: "string", required: true },
      //   artistIds:{type:'string'}
    });
    const result = this.ctx.service.player.artistSub({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }

  public async artistTopSong() {
    this.ctx.validate({
      artistId: { type: "string", required: true },
    });

    const result = this.ctx.service.player.artistTopSong({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }
}
