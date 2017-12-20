/**
 * Created by Clovin on 20/12/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const indexPage = () => import('../pages/index.vue')

const guidePage = () => import('../pages/guide/guide.vue')
const guideForeword = () => import('../pages/guide/article/foreword/foreword.md')
const guideNetEnv = () => import('../pages/guide/article/netenv/netenv.md')
const guidePrepareDX = () => import('../pages/guide/article/prepareDX/prepareDX.md')
const guideWindowsDX = () => import('../pages/guide/article/windowsDX/windowsDX.md')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (to.hash) {
          return {
            selector: to.hash
          }
        }

        return { x: 0, y: 0 }
      }
    },
    routes: [
      {
        path: '/guide',
        component: guidePage,
        children: [
          {
            path: 'foreword',
            component: guideForeword
          },
          {
            path: 'netenv',
            component: guideNetEnv
          },
          {
            path: 'prepareDX',
            component: guidePrepareDX
          },
          {
            path: 'windowsDX',
            component: guideWindowsDX
          },
          {
            path: '*',
            component: guideForeword
          }
        ]
      },
      { path: '*', component: indexPage },
    ]
  })
}
