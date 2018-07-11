'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [ 'notfoundHandler' ];

  config.errors =[];

  config.accepts = ctx => {
    // 可按情况进行更改
    if (ctx.request.path.startsWith('/api')) {
      return 'json';
    }

    return 'html';
  };

  config.onerror = {
    accepts: config.accepts,
  };
  
  return config;
};
