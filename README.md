# cloud-api

网易云音乐api

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org




### 启动YApi

安装工具
* npm i sm2tsservice -D

配置3.2.0及以上版本
* touch json2service.json

```
 {
    "url": "yapi-swagger.json",
    "remoteUrl": "http://127.0.0.1:3000/api/open/plugin/export-full?type=json&pid=11&status=all&token=d86cf6d255cf5b5ce947658bdaa171bc74b9cd70b51078c4882ef353c1af4a6b",
    "type": "yapi",
    "swaggerParser": {}
  }
```

配置3.2.0及一下版本
* touch json2service.json

```
 {
    "url": "http://127.0.0.1:3000/api/open/plugin/export-full?type=json&pid=11&status=all&token=d86cf6d255cf5b5ce947658bdaa171bc74b9cd70b51078c4882ef353c1af4a6b",
    "type": "yapi",
    "swaggerParser": {}
  }
```

生成services代码

(./node_modules/.bin/)sm2tsservice --clear
 
