'use strict';

const Controller = require('egg-fortress').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.success('hello world');
  }
}

module.exports = HomeController;
