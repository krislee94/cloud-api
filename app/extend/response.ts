import { Response } from "egg";

export default {
  get resp(): Response {
    return (this as any) as Response;
  },
  failure(err: string | string) {
    const body = { status: -1, data: null, message: "", success: false };
    body.message = err;
    this.resp.body = body;
  },
  //设置统一的返回格式
  success(data = null) {
    this.resp.body = { status: 1, data, message: "成功", success: true };
  },
  //会话过期
  logout(errMsg: string, code = -9) {
    this.resp.body = {
      status: code,
      data: null,
      message: errMsg || "会话过期，请重新登录",
      success: true,
    };
  },
};
