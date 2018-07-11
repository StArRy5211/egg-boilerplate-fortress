'use strict';

const Controller = require('egg-fortress').Controller;

class ApiController extends Controller {
  async index() {
    this.ctx.success('hello world');
  }
}

module.exports = ApiController;
