"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        this.ctx.body = "hi , cloud-api";
    }
    async getBannerList() {
        const { type = 0 } = this.ctx.request.body;
        const result = await this.ctx.service.home.getBannerList(type);
        this.ctx.response.success(result);
    }
}
exports.default = HomeController;
// const Controller = require('egg').Controller;
// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = 'hi, egg';
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBaUM7QUFDakMsTUFBcUIsY0FBZSxTQUFRLGdCQUFVO0lBQzdDLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0lBQ25DLENBQUM7SUFFTSxLQUFLLENBQUMsYUFBYTtRQUN4QixNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMzQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQVZELGlDQVVDO0FBQ0QsZ0RBQWdEO0FBRWhELDRDQUE0QztBQUM1QyxvQkFBb0I7QUFDcEIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QixNQUFNO0FBQ04sSUFBSSJ9