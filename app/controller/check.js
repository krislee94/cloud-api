"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
//验证码的controller
class CheckController extends egg_1.Controller {
    async sendCode() {
        this.ctx.validate({
            phone: { type: "string", required: true },
        });
        console.log(this.ctx.request.body);
        const result = await this.ctx.service.check.sendCode(Object.assign({}, this.ctx.request.body));
        console.log(result);
        this.ctx.response.success(result);
    }
    async checkCode() {
        this.ctx.validate({
            phone: { type: 'string', required: true },
            captcha: { type: 'string', required: true }
        });
        const result = await this.ctx.service.check.checkCode(Object.assign({}, this.ctx.request.body));
        this.ctx.response.success(result);
    }
}
exports.default = CheckController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUFpQztBQUdqQyxnQkFBZ0I7QUFDaEIsTUFBcUIsZUFBZ0IsU0FBUSxnQkFBVTtJQUM5QyxLQUFLLENBQUMsUUFBUTtRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUNoQixLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7U0FDMUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxNQUFNLE1BQU0sR0FBeUIsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxtQkFDckUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUN4QixDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxTQUFTO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQ2hCLEtBQUssRUFBQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBQztZQUNuQyxPQUFPLEVBQUMsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUM7U0FDdEMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxtQkFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUMxQixDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQTFCRCxrQ0EwQkMifQ==