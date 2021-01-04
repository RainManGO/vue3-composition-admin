/*
 * @Description: tags-view state
 * @Author: ZY
 * @Date: 2020-12-23 10:25:37
 * @LastEditors: ZY
 * @LastEditTime: 2020-12-30 11:27:30
 */
import { RouteRecord } from 'vue-router'

export interface TagView extends Partial<RouteRecord> {
  title?: string
}

export interface TagsViewState {
  visitedViews: TagView[]
  cachedViews: (string | undefined)[]
}

export const state: TagsViewState = {
  visitedViews: [],
  cachedViews: []
}
