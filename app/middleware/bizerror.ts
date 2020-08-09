import { Context } from "egg";

module.exports = () => {
  return async function bizerror(ctx: Context, next) {
    try {
      await next();
    } catch (err) {
      console.log(err);
      ctx.app.logger.error(err);
      ctx.responseBizError(err);
    }
  };
};
