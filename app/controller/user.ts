import { Controller } from "egg";

export default class User extends Controller {
  /**
   * 查询用户详情
   * 需要前端带入uid进入
   */
  public async queryDetail() {
    this.ctx.validate({
      uid: { type: "string", required: true },
    });

    const result = await this.ctx.service.user.queryDetail({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }

  /**
   * 获取用户歌单
   * playlist
   */
  public async queryUserPlayList() {
      this.ctx.validate({
          uid:{type:'string',required:true}
      });

      const result = await this.ctx.service.user.queryUserPlayList({
          ...this.ctx.request.body
      });

      this.ctx.response.success(result);
  }
}
