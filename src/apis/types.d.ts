/*
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-12 11:07:17
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-19 21:53:49
 */
export interface ArticleData {

    id: number
    status: string
    title: string
    abstractContent: string
    fullContent: string
    sourceURL: string
    imageURL: string
    timestamp: string | number
    platforms: string[]
    disableComment: boolean
    importance: number
    author: string
    reviewer: string
    type: string
    pageviews: number

}

export interface Article<T> {
  total: number
  items: T
}

interface ArticleId {
  article: any
}
interface ArticleIdInfo {
  id?: number | 0
  timestamp?: any
}
export interface RoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface TransactionData {
  orderId: string
  timestamp: string | number
  username: string
  price: number
  status: string
}
