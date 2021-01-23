/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-10 09:51:09
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-23 10:53:46
 */
import {Context, Next} from "koa"

// type PlainObject = { [P: string]: any };
type PlainObject = Record<string, any>;
type ParamObject = Record<string, any>;
type MysqlResult = {
  affectedRows?: number;
  insertId?: string;
}

type PathMeta = {
  name: string;
  path: string;
}

type RouteMeta = {
  name: string;
  method: string;
  path: string;
  isVerify: boolean;
}

type MiddleWare = (...arg: any[]) => (ctx: Context, next?: Next) => Promise<void>;

export {
  MysqlResult,
  PlainObject,
  RouteMeta,
  MiddleWare,
  PathMeta,
  ParamObject
}