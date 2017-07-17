# myWebDome

## 项目简介

本项目为企业官网开发简易模板。

为了使开发快速高效，使用了以下辅助工具：

- html模板引擎：handlebar
- node进程管理：pm2
- node服务框架：express
- 开发框架：Bootstrap
- DOM操作：Jquery

## 源码结构

```
.
├── public
│   ├── stylesheets
│   ├── images
│   └── javascripts
├── bin
│   └── www
├── routes
├── views
├── app.js
└── pm2.json
```

## 开发预览

在终端中定位至项目目录，执行 `npm start`

```
> expressapp@0.0.0 start /Users/johnsen/webDemo
> node ./bin/www

🌎 => Server is running on port 3000
```

根据终端提示，打开浏览器进行调试开发。
