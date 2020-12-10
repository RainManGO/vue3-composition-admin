import 'reflect-metadata'
import { ROUTER_MAP ,BASE_PATH_MAP} from './constant'

/**
 * @desc 生成 http method 装饰器
 * @param {string} method - http method，如 get、post、head
 * @return Decorator - 装饰器
 */
function createMethodDecorator(method: string) {
  // 装饰器接收路由 path 作为参数
  return function httpMethodDecorator(path: string) {
    return (proto: any, name: string) => {
      const target = proto.constructor;
      const routeMap = Reflect.getMetadata(ROUTER_MAP, target, 'method') || [];
      routeMap.push({ name, method, path });
      Reflect.defineMetadata(ROUTER_MAP, routeMap, target, 'method');
    };
  };
}

/**
 * 创建类路径装饰器
 * @param className
 */
function createClassDecorator() {
  // 装饰器接收路由 path 作为参数
  return function httpMethodDecorator(basePath: string):ClassDecorator {
    return (proto: any) => {
      const target = proto;
      const pathMap = Reflect.getMetadata(BASE_PATH_MAP, target) || [];
      pathMap.push({path:basePath});
      Reflect.defineMetadata(BASE_PATH_MAP, pathMap, target);
    };
  };
}

// 路径前缀
export const prefix = createClassDecorator()

// 导出 http method 装饰器
export const post = createMethodDecorator('post');

export const get = createMethodDecorator('get');

export const del = createMethodDecorator('del');

export const put = createMethodDecorator('put');

export const patch = createMethodDecorator('patch');

export const options = createMethodDecorator('options');

export const head = createMethodDecorator('head');

export const all = createMethodDecorator('all');