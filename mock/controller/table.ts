/*
 * @Description: 用户相关接口
 * @Author: ZY
 * @Date: 2020-12-28 09:46:46
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-13 09:06:54
 */

import { post, prefix, get } from "../requestDecorator";
import faker from 'faker'
import { ArticleData } from '../../src/apis/types'

const articleList: ArticleData[] = []
const articleCount = 100
const mockFullContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'

for (let i = 0; i < articleCount; i++) {
  articleList.push({
    id: i,
    status: faker.random.arrayElement(['published', 'draft']),
    title: faker.lorem.sentence(6, 10),
    abstractContent: faker.lorem.sentences(2),
    fullContent: mockFullContent,
    sourceURL: faker.internet.url(),
    imageURL: faker.image.imageUrl(),
    timestamp: faker.date.past().getTime(),
    platforms: [faker.random.arrayElement(['a-platform', 'b-platform', 'c-platform'])],
    disableComment: faker.random.boolean(),
    importance: faker.random.number({ min: 1, max: 3 }),
    author: faker.name.findName(),
    reviewer: faker.name.findName(),
    type: faker.random.arrayElement(['CN', 'US', 'JP', 'EU']),
    pageviews: faker.random.number({ min: 300, max: 500 })
  })
}
@prefix('/table')
export default class Table {

  @post('/articles')
  async getArticles(ctx: any) {
    const { importance, type, title, page = 1, limit = 20, sort } = ctx.request.body
    let mockList = articleList.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title as string) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    const pageList = mockList.filter((_, index) => index < (limit as number) * (page as number) && index >= (limit as number) * (page as number - 1))
    return {
      total: mockList.length,
      items: pageList
    }
  }

  @get('/article')
  async getArticle(ctx: any) {
    const { id } = ctx.params
    for (const article of articleList) {
      if (article.id.toString() === id) {
        return {
          code: 20000,
          data: {
            article
          }
        }
      }
    }
    return {
      code: 70001,
      message: 'Article not found'
    }
  }

  @post('/createArticle')

  createArticle(ctx: any) {
    const { article } = ctx.body
    return {
      code: 20000,
      data: {
        article
      }
    }
  }
  @post('/updateArticle')
  updateArticle(ctx: any) {
    const { id } = ctx.params
    const { article } = ctx.body
    for (const v of articleList) {
      if (v.id.toString() === id) {
        return {
          code: 20000,
          data: {
            article
          }
        }
      }
    }
    return {
      code: 70001,
      message: 'Article not found'
    }
  }

  @post('/deleteArticle')
  deleteArticle(ctx: any) {
    console.log(ctx)
    return {
      code: 20000
    }
  }


  @get('/getPageviews')

  getPageviews(ctx: any) {
    console.log(ctx)
    return {
      code: 20000,
      data: {
        pageviews: [
          { key: 'PC', pageviews: 1024 },
          { key: 'Mobile', pageviews: 1024 },
          { key: 'iOS', pageviews: 1024 },
          { key: 'Android', pageviews: 1024 }
        ]
      }
    }
  }


}