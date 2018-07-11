# {{name}}

## 项目介绍

{{description}}

## 项目技术点介绍


## 项目依赖说明


## 项目开发说明

### 开发方式/命令


### 项目代码规范
使用eslint 规则参照[eslint-config-egg](https://github.com/eggjs/eslint-config-egg)

### 项目结构
```
project
│   app.js                // 项目入口文件
│   Dockerfile            // Docker镜像配置文件    
│   docker-compose.yaml   // docker-compose配置文件
│
└───app // 源代码
│   │   router.js         // 路由定义文件
│   │
│   └───controller        // 控制器
│   └───service           // 服务
│   └───model             // 模型
│   └───extend            // 扩展内置对象
│   └───public            // 静态资源
│   └───schedule          // 定时任务
│   └───view              // 视图
│   └───middleware        // 中间件
│
└───config
│      config.default.js  // 默认配置文件
│
└───test                  // 单元测试
```

### 开发中的注意事项


### 内置指令
``` bash
$ npm run dev         // 启动开发服务
$ npm start           // 启动服务
$ npm stop            // 停止服务
$ npm run docker      // 在docker容器内启动服务
$ npm test            // 运行单元测试
$ npm run doc         // 生成项目API文档
$ npm run autod       // 自动检测依赖更新
```

## 部署（后续可能会变更）
1. 直接部署
```bash
$ npm start
$ npm stop
```

2. 通过Docker进行部署
```bash
$ docker build -t fe-support_monitor-server:GIT_HASH .
$ docker tag fe-support_monitor-server:GIT_HASH fe-support_monitor-server:latest
$ docker-compose up -d
```

> 开发环境通过151上的jenkins进行部署，关联任务monitor-server
> 测试、生产环境通过运维平台进行部署

## 参考资料/文档
1. [egg 文档](https://eggjs.org/zh-cn/intro/)
2. [mongoose 文档](http://mongoosejs.com/docs/api.html)
3. [rsmq 文档](https://github.com/smrchy/rsmq)
4. [egg-fortress](https://www.npmjs.com/package/egg-fortress)
