import Vue from 'vue'
import Router from 'vue-router'

import { getLocalDataMiddleware, getEndpointConfigMiddleware, checkAccessMiddleware } from './middlewares'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'mm-active',
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach(getLocalDataMiddleware)
router.beforeEach(getEndpointConfigMiddleware)
router.beforeEach(checkAccessMiddleware)

export default router
