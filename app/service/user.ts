import { Service } from "egg";
import {
  user_detail,
  user_playlist,
  playlist_update,
  user_subcount,
  user_dj,
  user_followeds,
  user_follows,
  user_event,
  event_forward,
  user_record,
} from "NeteaseCloudMusicApi";
import { IUserRequestParam, ILimitPage, IUserRegisterParam } from "cloud";
import moment from "moment";
import { isEmpty } from "lodash";
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
      let msg = error.body.msg || "查询用户信息错误";
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
      let msg = error.body.msg || "更新用户列表失败";
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
      let msg = error.body.msg || "查询用户DJ列表错误";
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
      let msg = error.body.msg || "查询用户粉丝列表失败";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 获取用户关注列表
   */
  public async queryUserFollower(param: IUserRequestParam) {
    try {
      const { uid, limit = 30 } = param;
      const result = await user_follows({
        uid,
        limit,
      });
      return result.body;
    } catch (error) {
      this.ctx.logger.info("-----查询用户关注列表-------", error);
      let msg = error.body.msg || "查询用户关注列表失败";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 获取用户动态
   * 返回的参数 --- type参数对应
   * 18 分享单曲
   * 19 分享专辑
   * 17、28 分享电台节目
   * 22 转发
   * 39 发布视频
   * 35、13 分享歌单
   * 24 分享专栏文章
   * 41、21 分享视频
   */
  public async queryUserEvent(param: IUserRequestParam) {
    const { uid, limit = 30 } = param;
    try {
      const result = await user_event({
        uid,
        limit,
      });
      return result.body;
    } catch (error) {
      this.ctx.logger.info("------查询用户动态失败------", error);
      let msg = error.body.msg || "查询用户动态失败";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 转发用户动态
   */
  public async forwardUserEvent(param) {
    const { evId, uid, forwards = "" } = param;
    try {
      const result = await event_forward({
        evId,
        uid,
        forwards,
      });
      return result.body;
    } catch (error) {
      this.ctx.logger.info("--------转发用户动态失败-------", error);
      let msg = error.body.msg || "转发用户动态失败";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 获取用户播放记录
   */
  public async getUserRecord(param) {
    const { uid, type = 1 } = param;

    try {
      const result = await user_record({
        uid,
        type,
      });
      return result;
    } catch (error) {
      this.ctx.logger.info(`查询失败${error}`);
      let msg = error.body.msg || "查询用户播放记录失败";
      this.ctx.throwBizError(msg);
    }
  }

  /**
   * 注册用户
   */
  public async registerUser(param: IUserRegisterParam) {
    const { mobile, password } = param;
    try {
      // this.app.model.CloudUser.findOne;
      //查询数据库

      const sqlIntstance = await this.app.model.CloudUser.findOne({
        where: {
          userMobile: mobile,
        },
      });
      if (sqlIntstance && !isEmpty(sqlIntstance)) {
        this.ctx.throwBizError("该用户已注册过,请直接登录");
      }
      //创建账户
      const ret: any = await this.ctx.app.model.CloudUser.create({
        userName: `${mobile}`,
        userTicketId: null,
        userPassword: `${password}`,
        userUnionId: null,
        userMobile: `${mobile}`,
        isVIP: 0,
        userWeChat: null,
        createTime: moment().utcOffset(8),
        updateTime: moment().utcOffset(8),
      });

      return ret ? 1 : 0;
    } catch (error) {
      this.ctx.throwBizError(error);
    }
  }

  /**
   * 用户登录接口
   */
  public async loginUser(param: IUserRegisterParam) {
    const { mobile, password } = param;
    try {
      const sqlIntstance = await this.app.model.CloudUser.findOne({
        where: {
          userMobile: `${mobile}`,
          userPassword: `${password}`,
        },
      });

      if (!sqlIntstance) {
        this.ctx.throwBizError("用户名或密码错误");
      }

      return sqlIntstance;
    } catch (error) {
      this.ctx.throwBizError(error);
    }
  }
}
