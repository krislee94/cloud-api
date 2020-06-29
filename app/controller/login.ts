import { Controller } from "egg";

export default class LoginController extends Controller {
  
  //登录接口
  public async loginIn() {
    //参数校验 - 需要phone 和 password
    this.ctx.validate({
      phone: { type: "string", required: true },
      password: { type: "string", required: true },
    });
    const result = await this.ctx.service.login.loginIn({...this.ctx.request.body});
    
    this.ctx.response.success(result);
    
  }
}
