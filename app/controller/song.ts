import { Controller } from "egg";

export default class Song extends Controller {
  /**
   * 心动模式、智能播放
   */
  public async getAISong() {
    //开启心动模式
    // this.ctx.validate({
    //   pid: { type: "string", required: false }, // 歌单id
    //   id: { type: "string", required: false }, //歌曲id
    //   sid: { type: "string", required: false }, //要开始播放的歌曲id
    // });
    console.log(this.ctx.request.body);
    const result = await this.ctx.service.song.getAISong({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }
}
