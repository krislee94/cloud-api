import { Context, PlainObject } from "egg";
import { IThrowBizError } from "cloud";
import { RoundingMode, SimpleMathRound } from "../lib/math-round"; //数字精准度计算
import is from "is-type-of";

export default {
  get ctx(): Context {
    return (this as any) as Context;
  },
  get roundingMode() {
    return RoundingMode;
  },
  //抛错
  throwBizError(err: string) {
    let message = err || "Internet service error";
    const bizError: PlainObject = new Error(message);
    bizError.isBizError = true;
    throw bizError;
  },
  responseBizError(err: IThrowBizError) {
    if (!is.error(err)) {
      return;
    }
    if (err.isBizError) {
      this.ctx.response.failure(err.message);
    } else if (err.code === "invalid_param") {
      // egg-validate  error
      const { message, field, code } = err.errors.pop();
      const msg =
        code === "missing_field"
          ? `${field} ${message}`
          : `${field} ${message}`;
      this.ctx.response.failure(msg);
    } else {
      const { path } = this.ctx.request;
      this.ctx.app.logger.error(`path: ${path}\n error => ${err}`);
      this.ctx.response.failure("Internal Server Error!");
    }
  },
  setScale(number: number, scale: number, roundingMode: number) {
    const roundNumber = new SimpleMathRound(number);
    return roundNumber.setScale(scale, roundingMode);
  },
};
