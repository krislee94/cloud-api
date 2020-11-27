"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class LoginController extends egg_1.Controller {
    //登录接口
    async loginIn() {
        //参数校验 - 需要phone 和 password
        this.ctx.validate({
            phone: { type: "string", required: true },
            password: { type: "string", required: true },
        });
        const result = await this.ctx.service.login.loginIn(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
    /**
     * 刷新登录
     * 调用此接口，可刷新登录状态
     */
    async refreshStatus() {
        const result = await this.ctx.service.login.refreshStatus();
        this.ctx.response.success(result);
    }
    /**
     * 调用此接口
     * 获取当前登录状态 需要header里Cookie带上哟
     */
    async loginStatus() {
        const result = await this.ctx.service.login.loginStatus();
        this.ctx.response.success(result);
    }
}
exports.default = LoginController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFpQztBQUVqQyxNQUFxQixlQUFnQixTQUFRLGdCQUFVO0lBRXJELE1BQU07SUFDQyxLQUFLLENBQUMsT0FBTztRQUNsQiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDaEIsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1lBQ3pDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtTQUM3QyxDQUFDLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWhGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLGFBQWE7UUFFeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFHRDs7O09BR0c7SUFDSSxLQUFLLENBQUMsV0FBVztRQUV0QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBckNELGtDQXFDQyJ9