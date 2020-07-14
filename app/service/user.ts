import { Service } from "egg";
import {
  user_detail,
  user_playlist,
  playlist_update,
  user_subcount,
  user_dj,
  user_followeds,
} from "NeteaseCloudMusicApi";
import { IUserRequestParam, ILimitPage } from "cloud";

export default class User extends Service {
  public async queryDetail(param: IUserRequestParam) {
    try {
      const { uid } = param;
      const result = await user_detail({ uid });
      console.log("----", result);
      if (result && result.status == 200) {
        return result.body;
      } else {
        this.ctx.throwBizError("请求错误");
      }
    } catch (error) {
      console.log("------", error);
      let code = error.body.code; //直接返回错误码
      this.ctx.throwBizError(code);
    }
  }
  /**
   *
   * @param param
   * uid
   * limit 默认30 相当于 pageSize
   * offset 默认0 相当于 pageNum
   */
  public async queryUserPlayList(param: IUserRequestParam) {
    try {
      const result = await user_playlist(param);
      return result.body;
    } catch (error) {
      let msg = error.body.message || "查询用户信息错误";
      this.ctx.throwBizError(msg);
    }
  }
  /**
   * 更新用户播放列表
   */
  public async userPlayListUpdate(param: IUserRequestParam) {
    const { uid } = param;
    try {
      const result = await playlist_update({
        id: uid,
      });
      return result.body;
    } catch (error) {
      console.log(error);
      let msg = error.body.message || "更新用户列表失败";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 更新用户mv，dj等数量
   * (301)
   */
  public async getUserInfoAndNumer() {
    try {
      const result = await user_subcount({});
      return result.body;
    } catch (error) {
      console.log(error);
      let code = error.body.code;
      this.ctx.throwBizError(code);
      this.ctx.logger.info(error);
    }
  }

  /**
   * 获取用户DJ列表
   */
  public async queryUserDJ(param: ILimitPage) {
    console.log(param);
    try {
      const result = await user_dj(param);
      return result.body;
    } catch (error) {
      this.ctx.logger.info("----查询用户DJ列表错误----", error);
      let msg = error.body.message || "查询用户DJ列表错误";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 获取用户粉丝列表
   */
  public async queryUserFolloweds(param: IUserRequestParam) {
    try {
      const { uid, limit = 30 } = param;
      const result = await user_followeds({
        uid,
        limit,
      });
      return result.body;
    } catch (error) {
      this.ctx.logger.info("------查询用户粉丝列表失败------", error);
      let msg = error.body.message || "查询用户粉丝列表失败";
      this.ctx.throwBizError(msg);
    }
  }
}
