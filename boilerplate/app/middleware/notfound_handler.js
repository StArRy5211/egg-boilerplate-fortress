'use strict';

module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();

    if (ctx.status === 404 && !ctx.body) {
      if (ctx.app.config.accepts(ctx) === 'json') {
        ctx.success(null, 404);
      } else {
        // 可添加自定义404视图渲染 ctx.render2(view, data)
      }
    }
  };
};
