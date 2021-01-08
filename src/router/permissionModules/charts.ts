/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-08 19:45:48
 */
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const chartsRouter: Array<RouteRecordRaw> = [
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'Charts',
    meta: {
      title: 'charts',
      icon: '#iconzhuzhuangtu'
    },
    children: [
      {
        path: 'bar-chart',
        component: () =>
          import(
            /* webpackChunkName: "BarChart" */ '@/views/charts/BarChart.vue'
          ),
        name: 'BarChartDemo',
        meta: {
          title: 'barChart',
          noCache: true
        }
      },
      {
        path: 'line-chart',
        component: () =>
          import(
            /* webpackChunkName: "LineChart" */ '@/views/charts/LineChart.vue'
          ),
        name: 'LineChartDemo',
        meta: {
          title: 'lineChart',
          noCache: true
        }
      },
      {
        path: 'mixed-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/MixedChat.vue'
          ),
        name: 'MixedChartDemo',
        meta: {
          title: 'mixedChart',
          noCache: true
        }
      }
    ]
  }
]

export default chartsRouter
