/**
 * Created by Clovin on 20/12/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const indexPage = () => import('../pages/index.vue')

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
      { path: '*', component: indexPage },
    ]
  })
}
