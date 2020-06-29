import { Service } from "egg";
import { ILoginParam } from "cloud";
import { login_cellphone, user_cloud } from "NeteaseCloudMusicApi";

export default class Login extends Service {
  public async loginIn(param: ILoginParam) {
    //调用NeteaseCloudMusicApi
    const result = await login_cellphone(param);
    console.log(result);
    if (result && result.body && result.body.cookie) {
      //校验result.body;返回凭证给前端
      const res = await user_cloud({
        cookie: result.body.cookie,
      });
      if(res.status !== 200 && res.body.code !== 200){
          this.ctx.throwBizError(res.body.msg || '认证过期，请重新登录');
      }
      return result.body;
    } else {
       this.ctx.throwBizError(result.body.msg);
    }
  }
}
