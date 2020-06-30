import { Service } from "egg";
import { ISendCodeParam } from "cloud";
import { captcha_sent } from "NeteaseCloudMusicApi";

export default class Check extends Service {
  public async sendCode(param: ISendCodeParam) {
    const { ctcode = "86", cellphone } = param;
    //校验手机号 todo 以后再写
    const result = await captcha_sent({ ctcode, cellphone });
    if (result && result.status === 200) {
      return result;
    } else {
      this.ctx.logger.info("发送验证码失败");
      this.ctx.throwBizError(result.body.msg);
    }
  }
}
