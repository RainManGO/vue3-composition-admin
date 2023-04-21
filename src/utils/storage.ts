/*
 * @Author: ZY
 * @Date: 2023-04-17 21:19:07
 * @LastEditors: ZY
 * @LastEditTime: 2023-04-18 14:10:35
 * @FilePath: /vue3-composition-admin/src/utils/storage.ts
 * @Description: storage 统一封装，local和session 公用。便于修改
 */

export function setItem(key: string, value: string,storage:Storage = localStorage) {
   storage.setItem(key,value)
}

export function getItem(key: string,storage:Storage = localStorage) {
  return storage.getItem(key)
}


export function removeItem(key: string,storage:Storage = localStorage) {
  return storage.removeItem(key)
}


export function clear(storage:Storage = localStorage) {
  storage.clear()
}


