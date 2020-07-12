import { Context } from "egg";
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
  throwBizError(err) {
    const bizError = new Error(err);
    throw bizError;
  },
  responseBizError(err: IThrowBizError) {
    if (!is.error(err)) {
      return;
    }
    console.log('---- 错误 ------',err)
    this.ctx.response.failure(err.message);
  },
  setScale(number: number, scale: number, roundingMode: number) {
    const roundNumber = new SimpleMathRound(number);
    return roundNumber.setScale(scale, roundingMode);
  },
};
