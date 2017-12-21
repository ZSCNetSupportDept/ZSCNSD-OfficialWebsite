/**
 * Created by Clovin on 20/12/2017.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const homePage = () => import('../pages//home/home.vue')

const guidePage = () => import('../pages/guide/guide.vue')
const guideForeword = () => import('../pages/guide/article/foreword/foreword.md')
const guideNetEnv = () => import('../pages/guide/article/netenv/netenv.md')
const guidePrepareDX = () => import('../pages/guide/article/prepareDX/prepareDX.md')
const guideWindowsDX = () => import('../pages/guide/article/windowsDX/windowsDX.md')
const guideMacDX = () => import('../pages/guide/article/macDX/macDX.md')
const guidePreparePPPoE = () => import('../pages/guide/article/preparePPPoE/preparePPPoE.md')
const guideSetPPPoE = () => import('../pages/guide/article/setPPPoE/setPPPoE.md')
const guidePreparePhoneDX = () => import('../pages/guide/article/preparePhoneDX/preparePhoneDX.md')
const guideSetPhoneDX = () => import('../pages/guide/article/setPhoneDX/setPhoneDX.md')
const guideIntroductionDX = () => import('../pages/guide/article/introductionDX/introductionDX.md')
const guideRepairDX = () => import('../pages/guide/article/repairDX/repairDX.md')
const guideRepairPPPoE = () => import('../pages/guide/article/repairPPPoE/repairPPPoE.md')
const guideRepairWay = () => import('../pages/guide/article/repairWay/repairWay.md')
const guideJoinUs = () => import('../pages/guide/article/joinUs/joinUs.md')

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
        path: '/',
        component: homePage
      },
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
            path: 'macDX',
            component: guideMacDX
          },
          {
            path: 'preparePPPoE',
            component: guidePreparePPPoE
          },
          {
            path: 'setPPPoE',
            component: guideSetPPPoE
          },
          {
            path: 'preparePhoneDX',
            component: guidePreparePhoneDX
          },
          {
            path: 'setPhoneDX',
            component: guideSetPhoneDX
          },
          {
            path: 'introductionDX',
            component: guideIntroductionDX
          },
          {
            path: 'repairDX',
            component: guideRepairDX
          },
          {
            path: 'repairPPPoE',
            component: guideRepairPPPoE
          },
          {
            path: 'repairWay',
            component: guideRepairWay
          },
          {
            path: 'joinUs',
            component: guideJoinUs
          },
          {
            path: '*',
            component: guideForeword
          }
        ]
      },
      { path: '*', component: homePage },
    ]
  })
}
