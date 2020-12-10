/*
 * @Description: 
 * @Autor: ZY
 * @Date: 2020-11-11 13:59:28
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-10 14:22:58
 */
import log from '../utils/logger'
import { MiddleWare } from '../type'

export type ResultInfo = {
  code:number;
  msg?:string;
  data?:any;
  err?:any
}

/**
 * 执行结果 handler 用来给每个响应对象包装响应码等
 */
export const ResultHandler: MiddleWare = () => async (ctx, next) => {
  const r :ResultInfo= {code:0};
  try {
    const data:any = await next();
    r.code = 200;
    r.data = data;
  } catch (err) {
    log.error(err);

    r.code = -1;
    r.msg = "系统错误";
    if (ctx.app.env === 'development') {
      r.msg = err.message;
      r.err = err;
    }
  }
  ctx.body = r;
};