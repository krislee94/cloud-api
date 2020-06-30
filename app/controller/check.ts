import {Controller} from 'egg';



//验证码的controller
export default class CheckController extends Controller{
    public async sendCode(){
        this.ctx.validate({
            cellphone:{type:'string',required:true}
        });

        const result = this.ctx.service.check.sendCode({...this.ctx.request.body});
        this.ctx.response.success(result);
    }
}