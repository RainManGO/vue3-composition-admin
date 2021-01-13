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
        meta: { title: 'dynamicTable' }
      }
    //   ,
    //   {
    //     path: 'draggable-table',
    //     component: () => import(/* webpackChunkName: "draggable-table" */ '@/views/table/draggable-table.vue'),
    //     name: 'DraggableTable',
    //     meta: { title: 'draggableTable' }
    //   },
    //   {
    //     path: 'inline-edit-table',
    //     component: () => import(/* webpackChunkName: "inline-edit-table" */ '@/views/table/inline-edit-table.vue'),
    //     name: 'InlineEditTable',
    //     meta: { title: 'inlineEditTable' }
    //   },
    //   {
    //     path: 'complex-table',
    //     component: () => import(/* webpackChunkName: "complex-table" */ '@/views/table/complex-table.vue'),
    //     name: 'ComplexTable',
    //     meta: { title: 'complexTable' }
    //   }
    ]
  }
]

export default tableRouter
