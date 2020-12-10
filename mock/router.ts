/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-10 10:09:06
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-10 14:41:18
 */
import 'reflect-metadata'
import fs from 'fs'
import path from 'path'
import {ROUTER_MAP, BASE_PATH_MAP} from './constant'
import {RouteMeta, PathMeta} from './type'
import Router from 'koa-router'

const addRouter = (router: Router) => {
  const ctrPath = path.join(__dirname, 'controller');
  const modules: ObjectConstructor[] = [];
  // 扫描controller文件夹，收集所有controller
  fs.readdirSync(ctrPath).forEach(name => {
    if (/^[^.]+\.(t|j)s$/.test(name)) {
      modules.push(require(path.join(ctrPath, name)).default)
    }
  });

  // 结合meta数据添加路由 和 验证
  modules.forEach(m => {
    const routerMap: RouteMeta[] = Reflect.getMetadata(ROUTER_MAP, m, 'method') || [];
    const basePathMap: PathMeta[] = Reflect.getMetadata(BASE_PATH_MAP, m) || [];
    const basePath:PathMeta = basePathMap.pop();
    if (routerMap.length) {
      const ctr = new m();
      routerMap.forEach(route => {                
        // const {name, method, path, isVerify} = route;
        const {name, method, path} = route;
        const newPath:String = basePath ? (basePath.path + path) : path;
        // router[method](newPath, jwt(newPath, isVerify), ctr[name]);
        router[method](newPath, ctr[name]);
      })
    }
  })
}

export default addRouter