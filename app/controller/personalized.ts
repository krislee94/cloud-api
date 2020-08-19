import { Controller } from "egg";

export default class personalizedController extends Controller {
  public async getPersonalizeList() {
    //
    const result = await this.ctx.service.personalized.getPersonalizeList({
      ...this.ctx.request.body,
    });

    this.ctx.response.success(result);
  }
}
