/*
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-21 17:38:14
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

export interface ArticleId {
  article: any
}

export const updateArticle = (id: number, data: any) => {
  return https().request<RootObject<ArticleId>>(`articles/${id}`, Method.PUT, data, ContentType.json)
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
