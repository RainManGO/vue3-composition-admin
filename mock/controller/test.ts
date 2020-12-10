/*
 * @Description: 
 * @Author: ZY
 * @Date: 2020-12-10 11:29:27
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-10 11:35:58
 */
import { get, prefix} from '../requestDecorator';
import { Context } from 'koa';

 @prefix('/main')
 export default class Test {
     
   /**
   * 检查jwt是否有效
   * @param ctx Context
   */
  @get('/test')
  async test() {
    return 'ok hahaha2222222'
  }


  /**
   * 检查jwt是否有效
   * @param ctx Context
   */
  @get('/check')
  async checkJwt(ctx: Context) {
    ctx.body = {
      code: 0,
      msg: '登录有效'
    };
  }
 }