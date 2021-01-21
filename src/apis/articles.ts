/*
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-20 11:53:05
 */
import https from '@/utils/https'
import { ArticleData, Article, ArticleId, Pageviews } from './types'
import { RootObject } from '@/model/rootObject'
import { ContentType, Method } from 'axios-mapper'
import { ArticleModel } from '@/model/articleModel'
export const defaultArticleData: ArticleData = {
  id: 0,
  status: 'draft',
  title: '',
  fullContent: '',
  abstractContent: '',
  sourceURL: '',
  imageURL: '',
  timestamp: '',
  platforms: ['a-platform'],
  disableComment: false,
  importance: 0,
  author: '',
  reviewer: '',
  type: '',
  pageviews: 0
}

export const getArticles = (params: any) => {
  return https().request<RootObject<Article<ArticleData[]>>>('article/articles', Method.POST, params, ContentType.json)
}

export const getArticle = (params: any) => {
  return https().request<RootObject<ArticleModel>>('article/articleInfo', Method.GET, params, ContentType.form)
}

export const createArticle = (data: any) => {
  return https().request<RootObject<ArticleModel>>('article/createArticle', Method.POST, data, ContentType.json)
}

export const updateArticle = (id: number, data: any) => {
  return https().request<RootObject<ArticleId>>(`articles/${id}`, Method.PUT, data, ContentType.json)
}

export const deleteArticle = (id: number) => {
  return https().request<RootObject<ArticleData>>(`articles/${id}`, Method.POST, undefined, ContentType.json)
}

export const getPageviews = (params: any) => {
  return https().request<RootObject<Pageviews>>('pageviews', Method.GET, params, ContentType.json)
}
