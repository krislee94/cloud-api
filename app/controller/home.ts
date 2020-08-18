import { Controller } from "egg";
export default class HomeController extends Controller {
  public async index() {
    this.ctx.body = "hi , cloud-api";
  }

  public async getBannerList() {
    const { type = 0 } = this.ctx.request.body;
    const result = await this.ctx.service.home.getBannerList(type);
    this.ctx.response.success(result);
  }
}
// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = 'hi, egg';
//   }
// }
