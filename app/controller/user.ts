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
      uid: { type: "string", required: true },
    });

    const result = await this.ctx.service.user.queryUserPlayList({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }

  /**
   * 更新用户歌单
   * userPlayListUpdate
   * 用户登录之后调用此接口可以更新
   * ！！！！ 该接口已重定向
   */
  public async userPlayListUpdate() {
    this.ctx.validate({
      uid: { type: "string", required: true },
    });
    const result = await this.ctx.service.user.userPlayListUpdate(
      this.ctx.request.body
    );

    this.ctx.response.success(result);
  }

  /**
   * 获取用户信息，歌单，收藏，mv，dj数量
   */
  public async getUserInfoAndNumer() {
    //没有入参，此处可做get请求
    const result = await this.ctx.service.user.getUserInfoAndNumer();

    this.ctx.response.success(result);
  }

  /**
   * 获取用户电台列表
   */
  public async queryUserDJ() {
    this.ctx.validate({
      uid: { type: "string", required: true },
      limit: { type: "number", required: false },
      offset: { type: "number", required: false },
    });
    const result = await this.ctx.service.user.queryUserDJ(
      this.ctx.request.body
    );

    this.ctx.response.success(result);
  }

  /**
   * 获取用户粉丝列表
   */
  public async queryUserFolloweds() {
    this.ctx.validate({
      uid: { type: "string", required: true },
    });
    const result = await this.ctx.service.user.queryUserFolloweds(
      this.ctx.request.body
    );

    this.ctx.response.success(result);
  }

  /**
   * 获取用户关注列表
   */
  public async queryUserFollower() {
    this.ctx.validate({
      uid: { type: "string", required: true },
    });
    const result = await this.ctx.service.user.queryUserFollower(
      this.ctx.request.body
    );
    this.ctx.response.success(result);
  }
}
