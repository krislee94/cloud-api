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

  /**
   * 刷新登录
   * 调用此接口，可刷新登录状态
   */
  public async refreshStatus(){
    
    const result = await this.ctx.service.login.refreshStatus();

    this.ctx.response.success(result);
  }


  /**
   * 调用此接口
   * 获取当前登录状态 需要header里Cookie带上哟
   */
  public async loginStatus(){
    
    const result = await this.ctx.service.login.loginStatus();

    this.ctx.response.success(result);
  }
}
