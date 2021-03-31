'use strict';
var fs = require('fs');
var ts = require('typescript');
let file = 'app/router.ts';
let urllib = require('urllib');
let _packageInfo = require('./package.json');

/**
 * 使用说明
 * https://www.yuque.com/qmretail/share/ghy542
 */

let httpclient = urllib.create();

let RESULT;

const NotNeedRefType = ['string', 'number', 'integer', 'boolean', 'enum'];

let fileNames = [file];
const options = {
  target: ts.ScriptTarget.ES2019,
  kind: ts.ScriptKind.TS,
  module: ts.ModuleKind.CommonJS,
};

const httpArray = ['get', 'post', 'all'];

const definition = {
  type: 'object',
  properties: {},
};

function generateSwaggerJson(app) {
  const swagerData = getSwagerData(app);
  const swagger = {
    controllerPath: './app/controller',
    basePath: '/',
    info: {
      title: 'shop_bff',
      description: '千米云小店nodebff项目',
      version: _packageInfo.version,
    },
  };
  RESULT = {
    swagger: '2.0',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    info: swagger.info,
    tags: swagerData.tags,
    paths: swagerData.paths,
    definitions: swagerData.definitions,
  };

  //存入文件
  const swaggerDir = fs.existsSync('./swagger');
  if (!swaggerDir) {
    fs.mkdirSync('./swagger');
  }
  fs.writeFileSync('./swagger/swagger.json', JSON.stringify(RESULT));
  try {
    //post请求
    httpclient.request('http://doc.dev.qianmi.com/qapi/parse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(RESULT),
    });
    console.log('--自动生成文档--');
  } catch (err) {
    console.error(err);
  }
}

function getSwagerData() {
  let result = {
    tags: [],
  };
  let paths = {};
  //读取所有路由信息
  const routerObj = analysisRouter();
  if (Object.keys(routerObj).length == 0) {
    return result;
  }
  for (const iterator in routerObj) {
    console.log('==========start==================');
    console.log('controller路径:', iterator);
    //解析每个controller
    const controller = analysisController(iterator, routerObj[iterator]);
    if (!controller) {
      console.log(iterator, '分析controller失败', controller);
      continue;
    }
    let params = controller.params;
    let tags = controller.tags;
    //解析typings下自定义的声明
    const definitions = getDefinitions(iterator);

    result.definitions = { ...result.definitions, ...definitions };
    if (params && Object.keys(params).length > 0) {
      for (const methodName in params) {
        const path = params[methodName];
        let url = path.url;
        delete path.url;
        paths[url] = path;
      }
    }
    if (tags && tags.length > 0) {
      result.tags = [...result.tags, ...tags];
    }
    console.log('==========end==================');
  }
  result.paths = paths;
  if (result.tags && result.tags.length > 0) {
    result.tags = result.tags.map((x) => {
      return {
        name: x,
      };
    });
  }

  return result;
}

/**
 * 解析bean
 * @param {*} dir
 */
function getDefinitions(dir) {
  const typingsDir = dir.replace('controller', 'custom');
  const tsDir = `./typings/${typingsDir}.d.ts`;
  const exists = fs.existsSync(tsDir);
  if (!exists) {
    console.log(tsDir + '不存在');
    return [];
  }
  console.log('开始分析d.ts:', tsDir);
  const program = ts.createProgram([tsDir], options);
  const sourceFile = program.getSourceFile(tsDir);
  let definitions = {};
  if (sourceFile && sourceFile.text) {
    ts.forEachChild(sourceFile, (node) => {
      if (ts.isModuleDeclaration(node)) {
        for (const iterator of node.body.statements) {
          const { name, members, heritageClauses } = iterator;
          let className = name.escapedText;
          console.log('className:', className);
          let extendsClassName = '';
          let requiredSet = new Set();
          let xRules = {};
          if (heritageClauses && heritageClauses.length > 0) {
            const extendObj = heritageClauses[0].types;
            if (extendObj && extendObj.length > 0) {
              extendsClassName = extendObj[0].expression.escapedText;
            }
          }

          if (className && !definitions[className]) {
            definitions[className] = cloneObj(definition);
          }
          if (extendsClassName && extendsClassName != 'PlainObject') {
            if (!definitions[extendsClassName]) {
              definitions[extendsClassName] = cloneObj(definition);
            }
            definitions[className].extendsClassName = extendsClassName;
          }

          if (members && members.length > 0) {
            const params = members.reduce((pre, subItem) => {
              //bean中的参数名
              let paramName = subItem.name && subItem.name.escapedText;

              if (paramName && subItem.type) {
                const { pos, end } = subItem.type;
                let type = sourceFile.text.substring(pos, end).replace(/\s/g, '');
                let description = '';
                let example = '';
                let items = {}; //数组才用到
                let isArray = false;
                let xRule = [];

                if (type.endsWith('[]')) {
                  isArray = true;
                  type = type.replace('[]', '');
                }
                if (type == 'PlainObject') {
                  type = 'object';
                }
                if (isArray && !NotNeedRefType.includes(type)) {
                  items = {
                    $ref: '#/definitions/' + cloneObj(type).substr(0, cloneObj(type).length - 2),
                  };
                  type = 'array';
                } else if (isArray) {
                  items = {
                    type,
                  };
                  type = 'array';
                }

                if (subItem.jsDoc && subItem.jsDoc.length > 0) {
                  description = subItem.jsDoc[0].comment;

                  if (subItem.jsDoc[0].tags && subItem.jsDoc[0].tags.length > 0) {
                    for (const tag of subItem.jsDoc[0].tags) {
                      if (tag.tagName.escapedText === 'description') {
                        description = tag.comment;
                      }
                      if (tag.tagName.escapedText === 'example') {
                        example = tag.comment;
                      }

                      if (tag.tagName.escapedText === 'NotNull') {
                        xRule.push({
                          message: tag.comment || '',
                          required: true,
                        });
                      }
                      if (tag.tagName.escapedText === 'MaxLength' && type == 'string') {
                        xRule.push({
                          message: tag.comment,
                          required: true,
                        });
                      }
                      if (tag.tagName.escapedText === 'min' && type == 'number') {
                        let comments = tag.comment.split(' ');
                        let min = null;
                        let message = '';
                        if (comments && comments.length >= 1) {
                          min = Number(comments[0]);
                        }
                        if (comments && comments.length >= 2) {
                          message = comments[1];
                        }
                        if (min != null) {
                          xRule.push({
                            message,
                            min,
                          });
                        }
                      }
                      if (tag.tagName.escapedText === 'max' && type == 'number') {
                        let comments = tag.comment.split(' ');
                        let max = null;
                        let message = '';
                        if (comments && comments.length >= 1) {
                          max = Number(comments[0]);
                        }
                        if (comments && comments.length >= 2) {
                          message = comments[1];
                        }
                        if (max != null) {
                          xRule.push({
                            message,
                            max,
                          });
                        }
                      }
                    }
                  }
                }

                if (!subItem.questionToken) {
                  requiredSet.add(paramName);
                }

                pre[paramName] = { type };
                if (description) {
                  pre[paramName].description = description;
                }
                if (example) {
                  pre[paramName].example = example;
                }
                if (items && Object.keys(items).length > 0) {
                  pre[paramName].items = items;
                }
                if (xRule && xRule.length > 0) {
                  xRules[paramName] = xRule;
                }
                return pre;
              }
            }, {});

            definitions[className].properties = params;
            definitions[className]['x-rules'] = xRules;
            if (requiredSet.size > 0) {
              definitions[className].required = Array.from(requiredSet);
            }
          }
        }
      }
    });
  }
  return definitions;
}

/**
 * 解析controller
 * @param {*} dir
 * @param {*} params
 * @returns
 */
function analysisController(dir, params = {}) {
  let path = `./app/${dir}.ts`;
  const exists = fs.existsSync(path);
  if (!exists) {
    return null;
  }

  let tags = [];

  const program = ts.createProgram([path], options);
  const sourceFile = program.getSourceFile(path);
  for (const iterator of sourceFile.getChildren()) {
    for (const classIterator of iterator.getChildren()) {
      if (ts.isClassDeclaration(classIterator)) {
        //类的注释
        tags = getTag(classIterator);

        //开始解析方法注释
        ts.forEachChild(classIterator, (methodNode) => {
          if (ts.isMethodDeclaration(methodNode)) {
            const methodName = methodNode.name.escapedText;
            if (params[methodName]) {
              let item = {
                tags,
                operationId: methodName,
                parameters: [],
                responses: {
                  200: {
                    description: 'successful operation',
                  },
                },
              };

              const methodItem = getPathContent(methodNode);
              item = { ...item, ...methodItem };
              if (params[methodName].get) {
                params[methodName].get = item;
              }
              if (params[methodName].post) {
                params[methodName].post = item;
              }
            }
          }
        });
      }
    }
  }

  return {
    tags,
    params,
  };
}

/**
 * 解析方法上的注释获取path内容
 * @param {*} methodNode
 * @returns
 */
function getPathContent(methodNode) {
  const jsDoc = methodNode.jsDoc;
  let item = {};
  if (jsDoc && jsDoc.length > 0) {
    if (jsDoc[0].comment) {
      const temArr = jsDoc[0].comment.split('\n');
      if (temArr && temArr.length > 0) {
        item.summary = temArr[0];
      }
    }
    if (jsDoc && jsDoc[0].tags && jsDoc[0].tags.length > 0) {
      for (const iterator of jsDoc[0].tags) {
        if (iterator && iterator.tagName.escapedText == 'deprecated') {
          item.deprecated = true;
        }
        item.summary = getComment(iterator, 'summary', item.summary);
        const request = getComment(iterator, 'request', item.request);
        if (request) {
          item.parameters = [
            {
              in: 'body',
              name: 'body',
              required: true,
              schema: {
                $ref: `#/definitions/${request}`,
              },
            },
          ];
        }

        item.description = getComment(iterator, 'description', item.description);
        const response = getComment(iterator, 'response', item.response);
        if (response) {
          item.responses = {
            200: {
              description: 'successful operation',
              schema: {
                $ref: `#/definitions/${response}`,
              },
            },
          };
        }
        item.parameters = getCommentV2(iterator, 'path', item.parameters);
        item.parameters = getCommentV2(iterator, 'query', item.parameters);
      }
    }
  }

  return item;
}

/**
 * 解析方法注解上的summary、request、description、response
 * @param {*} obj
 * @param {*} key
 * @param {*} result
 * @returns
 */
function getComment(obj, key, result) {
  if (obj.tagName && obj.tagName.escapedText === key) {
    return obj.comment;
  }
  return result;
}

function getCommentV2(obj, key, result) {
  if (!result) {
    result = [];
  }
  if (obj.tagName && obj.tagName.escapedText === key) {
    const comment = obj.comment;
    let temArr = comment.match(/[0-9a-zA-Z\u4e00-\u9fa5\,\;\'\"@]*/g);
    if (temArr && temArr.length > 0) {
      temArr = temArr.filter((x) => !!x);
      if (temArr && temArr.length >= 1) {
        result.push({
          name: temArr[0],
          in: key,
          type: temArr && temArr.length >= 2 && temArr[1],
          description: temArr && temArr.length >= 3 && temArr[2],
          required: comment.endsWith('required'),
        });
      }
    }
  }
  return result;
}

/**
 * 获取类顶部tag
 * @param {*} classIterator
 * @returns
 */
function getTag(classIterator) {
  const jsDocs = classIterator.jsDoc;
  if (jsDocs && jsDocs.length > 0) {
    const jsDoc = jsDocs[0];
    if (jsDoc && jsDoc.comment) {
      return [getTagName(jsDoc.comment)];
    } else {
      const jsTags = jsDoc.tags;
      if (jsTags && jsTags.length > 0) {
        return [getTagName(jsTags[0].comment)];
      }
    }
  }

  return '';
}

function getTagName(str) {
  if (!str) {
    return '';
  }
  const tagArr = str.split('\n');
  if (tagArr && tagArr.length > 0) {
    return tagArr[0];
  }
}

/**
 * 分析路由
 * @returns
 */
function analysisRouter() {
  const program = ts.createProgram(fileNames, options);
  const sourceFile = program.getSourceFile(file);
  let paths = {};
  // Loop through the root AST nodes of the file
  ts.forEachChild(sourceFile, (node) => {
    if (ts.isExportAssignment(node)) {
      ts.forEachChild(node, (n1) => {
        if (ts.isArrowFunction(n1)) {
          ts.forEachChild(n1, (n2) => {
            if (ts.isBlock(n2)) {
              ts.forEachChild(n2, (n3) => {
                if (ts.isExpressionStatement(n3)) {
                  ts.forEachChild(n3, (n4) => {
                    if (ts.isCallExpression(n4)) {
                      let httpMethod = '';
                      let url = '';
                      let controllerPath = '';
                      let methodName = '';
                      ts.forEachChild(n4, (n5) => {
                        //获取http方法
                        if (ts.isPropertyAccessExpression(n5)) {
                          ts.forEachChild(n5, (n6) => {
                            if (ts.isIdentifier(n6) && httpArray.includes(n6.escapedText)) {
                              httpMethod = n6.escapedText;
                            }
                          });
                          const pathAndMethod = sourceFile.text.substring(n5.pos, n5.end).replace(/\s*/gm, '');

                          if (pathAndMethod.startsWith('controller.')) {
                            controllerPath = pathAndMethod
                              .substring(0, pathAndMethod.lastIndexOf('.'))
                              .replace(/\./g, '/')
                              .replace(/[A-Z]{1}/gm, function ($1) {
                                return '-' + $1.toLocaleLowerCase();
                              });
                            methodName = pathAndMethod.substring(
                              pathAndMethod.lastIndexOf('.') + 1,
                              pathAndMethod.length,
                            );
                          }
                        }
                        if (ts.isStringLiteral(n5)) {
                          url = convertUrl(n5.text);
                        }
                        if (httpMethod && controllerPath && methodName && url) {
                          let item = {
                            url,
                          };

                          if (httpMethod == 'all') {
                            item.get = {};
                            item.post = {};
                          } else {
                            item[httpMethod] = {};
                          }

                          if (!paths[controllerPath]) {
                            paths[controllerPath] = {};
                          }
                          paths[controllerPath][methodName] = item;
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });

  return paths;
}

/**
 * 路由处理
 *
 * @param {*} url
 * @returns
 */
function convertUrl(url) {
  let temArr = url.split('/');
  if (temArr && temArr.length > 0) {
    return (
      '/' +
      temArr
        .filter((x) => !!x)
        .map((x) => {
          if (x.startsWith(':')) {
            return '{' + x.substr(1, x.length) + '}';
          }
          return x;
        })
        .join('/')
    );
  }
  return url;
}

/**
 * 克隆对象
 * @param {*} o
 * @returns
 */
function cloneObj(o) {
  return JSON.parse(JSON.stringify(o));
}

generateSwaggerJson();
