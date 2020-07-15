import { Controller } from "egg";

export default class HotController extends Controller {
  /**
   * Hot 获取热门话题
   */
  public async HotTopic() {
    this.ctx.validate({
      limit: { type: "number", required: true },
      offset: { type: "number", required: false },
    });
    const result = await this.ctx.service.hot.HotTopic(this.ctx.request.body);

    this.ctx.response.success(result);
  }
}
