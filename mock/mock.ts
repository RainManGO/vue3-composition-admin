/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-09 17:02:35
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-13 09:49:54
 */

import Koa, { Context } from "koa";
import koaBody from "koa-body";
import koaRouter from "koa-router";
import addRouter from "./router";
import logger from "koa-logger";
import log4js from "log4js";
import {ResultHandler} from './middleware/resultHandler'
import chalk from "chalk";
import cors from "koa2-cors";


const app = new Koa();
app.use(cors());
const router = new koaRouter();

const port = 3000;
const log4 = log4js.getLogger();
log4.level = "debug";

//日志打印
app.use(logger(info => {
  log4.debug(info);
}));

app.use(koaBody());

app.use( async (ctx,next)=>{
  await next()
  // log4.debug(chalk.green('请求路径:  ') + ctx.request.url);
  log4.debug(chalk.green('请求body:  ') + JSON.stringify(ctx.request.body));
  log4.debug(chalk.green('返回数据:  ')+ JSON.stringify(ctx.body));
})

app.use(ResultHandler());
//加载路由
addRouter(router);
//启动路由
app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx: Context) => {
  log4.error(`404 ${ctx.message} : ${ctx.href}`);
  ctx.status = 404;
  ctx.body = "404! api not found !";
});

// koa already had middleware to deal with the error, just register the error event
app.on("error", (err, ctx: Context) => {
  log4.error(err); //log all errors
  ctx.status = 500;
  if (ctx.app.env !== "development") {
    //throw the error to frontEnd when in the develop mode
    ctx.res.end(err.stack); //finish the response
  }
});


app.listen(port, () => {
  log4.debug("mock server running at: http://localhost:%d", port);
});
