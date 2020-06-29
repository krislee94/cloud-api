import { Context } from 'egg';

export default () => {
  return async (ctx: Context, next) => {
    try {
      await next();
    } catch (err) {
      ctx.app.logger.error(err);
      ctx.responseBizError(err);
    }
  };
};
