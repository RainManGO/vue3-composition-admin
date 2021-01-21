/*
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-20 11:46:27
 * @LastEditors: scy😊
 * @LastEditTime: 2021-01-20 11:50:36
 */
export interface ArticleModel {
	id: number
	status: string
	title: string
	abstractContent: string
	fullContent: string
	sourceURL: string
	imageURL: string
	timestamp: string
	platforms: string[]
	disableComment: boolean
	importance: number
	author: string
	reviewer: string
	type: string
	pageviews: number
}
