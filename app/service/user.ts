import { Service } from "egg";
import { user_detail, user_playlist } from "NeteaseCloudMusicApi";
import {IUserRequestParam} from 'cloud';

export default class User extends Service {
  public async queryDetail(param:IUserRequestParam) {
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
  public async queryUserPlayList(param:IUserRequestParam){
      try {
          const result = await user_playlist(param);
          return result.body;
      } catch (error) {
          let msg = error.body.message || "查询用户信息错误";
          this.ctx.throwBizError(msg);
      }
  }
}
