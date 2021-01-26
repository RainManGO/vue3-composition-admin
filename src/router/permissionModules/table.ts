/*
 * @Description:表格相关
 * @Author: scy
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-26 13:37:09
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const tableRouter: Array<RouteRecordRaw> = [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/complex-table',
    name: 'Table',
    meta: {
      title: 'table',
      icon: '#icontable'
    },
    children: [
      {
        path: 'dynamic-table',
        component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/table/dynamic-table/Index.vue'),
        name: 'ComplexTable',
        meta: { title: 'complexTable' }
      },
      {
        path: 'Draggable_table',
        component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/table/DraggableTable.vue'),
        name: 'DraggableTable',
        meta: { title: 'draggableTable' }
      },
      {
        path: 'Inline_edit_table',
        component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/table/InlineEditTable.vue'),
        name: 'InlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'Complex_table',
        component: () => import(/* webpackChunkName: "complex-table" */ '@/views/table/ComplexTable.vue'),
        name: 'DynamicTable',
        meta: { title: 'dynamicTable' }
      }
    ]
  }
]

export default tableRouter
