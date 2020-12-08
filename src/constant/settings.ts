/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-08 10:28:32
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-08 14:36:59
 */

export enum Language{
     En='en',
     Zh='zh',
}

export enum Environment{
    Development = 'development',
    Production = 'production'
}

export enum RouterSource{
    Frontend = 'frontend',
    Backend = 'backend'
}

export enum RouterMode{
    Hash = 'hash',
    HISTORY = 'history'
}

export enum TokenStorageName{
    LocalStorage = 'localStorage',
    SessionStorage = 'sessionStorage',
    Cookie = 'cookie'
}
