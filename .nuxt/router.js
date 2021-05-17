import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a43a95c = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _d12fbaee = () => interopDefault(import('../pages/Learn.vue' /* webpackChunkName: "pages/Learn" */))
const _9f207508 = () => interopDefault(import('../pages/Learn_dsa.vue' /* webpackChunkName: "pages/Learn_dsa" */))
const _05f13170 = () => interopDefault(import('../pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _d9b83392 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _2a43a95c,
    name: "About"
  }, {
    path: "/Learn",
    component: _d12fbaee,
    name: "Learn"
  }, {
    path: "/Learn_dsa",
    component: _9f207508,
    name: "Learn_dsa"
  }, {
    path: "/blog/:slug?",
    component: _05f13170,
    name: "blog-slug"
  }, {
    path: "/",
    component: _d9b83392,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
