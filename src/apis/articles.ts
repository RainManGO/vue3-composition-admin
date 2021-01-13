/*
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-12 11:31:47
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-13 10:06:30
 */
import https from '@/utils/https'
import { ArticleData, Article, articleId, pageviews } from './types'
import { RootObject } from '@/model/rootObject'
import { ContentType, Method } from 'axios-mapper'

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
  return https().request<RootObject<Article<ArticleData[]>>>('table/articles', Method.POST, params, ContentType.json)
}

export const getArticle = (id: number, params: any) => {
  return https().request<RootObject<ArticleData>>(`articles/${id}`, Method.GET, params, ContentType.json)
}

export const createArticle = (data: any) => {
  return https().request<RootObject<articleId>>('articles', Method.POST, data, ContentType.json)
}

export const updateArticle = (id: number, data: any) => {
  return https().request<RootObject<articleId>>(`articles/${id}`, Method.PUT, data, ContentType.json)
}

export const deleteArticle = (id: number) => {
  return https().request<RootObject<ArticleData>>(`articles/${id}`, Method.POST, undefined, ContentType.json)
}

export const getPageviews = (params: any) => {
  return https().request<RootObject<pageviews>>('pageviews', Method.GET, params, ContentType.json)
}
