## 测试 Migrations

参考：https://itbilu.com/nodejs/npm/VyqgRUVf7.html#queryInterface
参考：http://docs.sequelizejs.com/manual/migrations.html
API: http://docs.sequelizejs.com/class/lib/query-interface.js~QueryInterface.html
Sequelize CLI: https://github.com/sequelize/cli#documentation
老版本: https://itbilu.com/nodejs/npm/VyqgRUVf7.html#dynamic-configuration
Sequelize4文档: https://sequelize.org/v4/manual/tutorial/querying.html

注意: db:migrate:undo 回滚时是根据文件名是排序的,因为此一定要按顺序生成文名或者使用时间戳;

1. 127.0.0.1 mysql 中创建表:

```
mysql -u root -e 'CREATE DATABASE IF NOT EXISTS `cashmysql` DEFAULT CHARSET utf8 COLLATE utf8_general_ci;'

```

2. 初始化项目配置

```
npx sequelize init:config
npx sequelize init:migrations
```

3. 初始化表结构-创建 test 表;
   注意：--name 后面参数可以随意; 但 db:migrate:undo 回滚时是根据文件名是排序的,因为此一定要按顺序生成文名或者使用时间戳;
   此操作只生成一个空更新脚本文件

```
npx sequelize migration:generate --name=init-test
```

4. 更新表结构
   注意：--name 后面参数可以随意; 但 db:migrate:undo 回滚时是根据文件名是排序的,因为此一定要按顺序生成文名或者使用时间戳;
   此操作只生成一个空更新脚本文件

```
npx sequelize migration:generate --name=update-cashier_setting
```

5. 升级数据库
   此操作会在数据库中创建一个名为 SequelizeMeta 的表， 记录操作日志;
   先编译 ts，不然会报找不到 js 文件;

```
tsc
npx sequelize db:migrate
```

6. 回滚上一次变更
   注意： db:migrate:undo 回滚时是根据文件名是排序的,因为此一定要按顺序生成文名或者使用时间戳;

```
npx sequelize db:migrate:undo
```

7. 回滚指定文件变更

```
npx sequelize-cli db:migrate:undo:all --to 20190724110000-init-test.js
```

8. 回滚到初始状态, 应禁止这种操作，所有在 migrations 中去掉 drop 语句;

```
npx sequelize db:migrate:undo:all
```

9. 数据库升级记录表
   注意： 从表结构看是无序的，推测 db:migrate:undo 回滚到是近一次迁移

```sql
   create table SequelizeMeta
   (
   name varchar(255) not null
   primary key,
   constraint name
   unique (name)
   )
```

10. 不懂看源码

    - addColumnQuery

```
node_modules/sequelize/lib/query-interface.js
node_modules/sequelize/lib/dialects/mysql/query-generator.js
```
11. buy
sequelize v4版本不支持AddColumn添加注释