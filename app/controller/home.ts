import { Controller } from "egg";
export default class HomeController extends Controller {
  public async index() {
    this.ctx.body = "hi , cloud-api";
  }
}
// const Controller = require('egg').Controller;

// class HomeController extends Controller {
//   async index() {
//     const { ctx } = this;
//     ctx.body = 'hi, egg';
//   }
// }
