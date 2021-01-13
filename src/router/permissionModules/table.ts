/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 19:45:48
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
        component: () => import(/* webpackChunkName: "dynamic-table" */ '@/views/table/dynamic_table/Index.vue'),
        name: 'DynamicTable',
        meta: { title: 'complexTable' }
      },
      {
        path: 'Draggable_table',
        component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/table/Draggable_table.vue'),
        name: 'DraggableTable',
        meta: { title: 'draggableTable' }
      },
      {
        path: 'Inline_edit_table',
        component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/table/Inline_edit_table.vue'),
        name: 'InlineEditTable',
        meta: { title: 'inlineEditTable' }
      },
      {
        path: 'Complex_table',
        component: () => import(/* webpackChunkName: "complex-table" */ '@/views/table/Complex_table.vue'),
        name: 'ComplexTable',
        meta: { title: 'dynamicTable' }
      }
    ]
  }
]

export default tableRouter
