/*
 * @Description:表格数据接口
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-23 17:15:26
 */
import https from '@/utils/https'
import { RootObject } from '@/model/rootObject'
import { ContentType, Method } from 'axios-mapper'
import { ArticleModel } from '@/model/articleModel'
import { ArticleList } from '@/model/articleList'

export const defaultArticleModel: ArticleModel = {
  id: 0,
  status: 'draft',
  title: '',
  fullContent: '',
  abstractContent: '',
  sourceURL: '',
  imageURL: '',
  timestamp: 0,
  platforms: ['a-platform'],
  disableComment: false,
  importance: 0,
  author: '',
  reviewer: '',
  type: '',
  pageviews: 0
}

export const getArticles = (params: any) => {
  return https().request<RootObject<ArticleList<ArticleModel>>>('article/articles', Method.POST, params, ContentType.json)
}

export const getArticle = (params: any) => {
  return https().request<RootObject<ArticleModel>>('article/articleInfo', Method.GET, params, ContentType.form)
}

export const createArticle = (data: any) => {
  return https().request<RootObject<ArticleModel>>('article/createArticle', Method.POST, data, ContentType.json)
}

export const updateArticle = (params: any) => {
  return https().request<RootObject<ArticleModel>>('article/updateArticle', Method.POST, params, ContentType.json)
}

export const deleteArticle = (id: number) => {
  return https().request<RootObject<ArticleModel>>(`articles/${id}`, Method.POST, undefined, ContentType.json)
}

export interface Pageviews{
  pageviews: any
}

export const getPageviews = (params: any) => {
  return https().request<RootObject<Pageviews>>('pageviews', Method.GET, params, ContentType.json)
}
