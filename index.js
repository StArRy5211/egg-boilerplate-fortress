'use strict';

module.exports = {
  name: {
    desc: 'project name',
  },
  description: {
    desc: 'project description',
  },
  port: {
    desc: 'project listen port',
    default: 7001,
  },
  keys: {
    desc: 'cookie security keys',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
