import { Service } from "egg";
import { ILoginParam } from "cloud";
import {
  login_cellphone,
  user_cloud,
  login_refresh,
  login_status,
} from "NeteaseCloudMusicApi";

export default class Login extends Service {
  /**
   * 登录接口
   * @param param
   */
  public async loginIn(param: ILoginParam) {
    //调用NeteaseCloudMusicApi
    const result = await login_cellphone(param);
    console.log(result);
    if (result && result.body && result.body.cookie) {
      //校验result.body;返回凭证给前端
      const res = await user_cloud({
        cookie: result.body.cookie,
      });
      if (res.status !== 200 && res.body.code !== 200) {
        this.ctx.throwBizError(res.body.msg || "认证过期，请重新登录");
      }
      return result.body;
    } else {
      this.ctx.throwBizError(result.body.msg);
    }
  }

  /**
   * 刷新登录接口
   */
  public async refreshStatus() {
    const result = await login_refresh();

    if (result && result.status === 200) {
      return result;
    } else {
      this.ctx.throwBizError(result.body.msg);
    }
  }

  /**
   * 获取登录状态
   */
  public async loginStatus() {
    try {
      // cookie = this.ctx.request.header.cookie
      const result = await login_status({});
      return result;
    } catch (error) {
      console.log('--------',JSON.stringify(error))
      let code = error.body.code;
      this.ctx.throwBizError(code);
    }
  }
}
