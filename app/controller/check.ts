import {Controller} from 'egg';
import {INormalResponseParam} from 'cloud';


//验证码的controller
export default class CheckController extends Controller{
    public async sendCode(){
        this.ctx.validate({
            phone:{type:'string',required:true}
        });
        const result:INormalResponseParam = await this.ctx.service.check.sendCode({...this.ctx.request.body});
        
        this.ctx.response.success(result);
        
    }
}