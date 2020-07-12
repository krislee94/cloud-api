import { Service } from "egg";
import { ISendCodeParam } from "cloud";
import { captcha_sent ,captcha_verify} from "NeteaseCloudMusicApi";

export default class Check extends Service {

  //发送验证码
  /**
   * 
   * @param param {
    "status": 1,
    "data": {
        "status": 200,
        "body": {
            "code": 200
        },
        "cookie": []
    },
    "message": "成功",
    "success": true
}
   */
  public async sendCode(param: ISendCodeParam) {
    try {
      const { ctcode = "86", phone } = param;
      //校验手机号 todo 以后再写
      const result = await captcha_sent({ ctcode, phone });
      return result.body;
    } catch (error) {
      let msg = error.body.message;
      this.ctx.throwBizError(msg);
    }
  }

  //验证验证码
  public async checkCode(param){
    console.log(param);
    try {
      const {ctcode = '86', captcha, phone} = param; 
      const res = await captcha_verify({ctcode, phone,captcha});
      // console.log('-----',JSON.stringify(res));
      return res;
    } catch (error) {
      console.log('-----',JSON.stringify(error));
      let msg = error.body.message; // 错误信息
      this.ctx.throwBizError(msg);
    }
  }
}
