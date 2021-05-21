import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0edfca34 = () => interopDefault(import('../pages/nav/About.vue' /* webpackChunkName: "pages/nav/About" */))
const _de64f43e = () => interopDefault(import('../pages/nav/Coding.vue' /* webpackChunkName: "pages/nav/Coding" */))
const _15583b10 = () => interopDefault(import('../pages/nav/Electronics.vue' /* webpackChunkName: "pages/nav/Electronics" */))
const _687bce24 = () => interopDefault(import('../pages/nav/Guides.vue' /* webpackChunkName: "pages/nav/Guides" */))
const _b5cbdbc6 = () => interopDefault(import('../pages/nav/Learn.vue' /* webpackChunkName: "pages/nav/Learn" */))
const _736e519e = () => interopDefault(import('../pages/nav/Projects.vue' /* webpackChunkName: "pages/nav/Projects" */))
const _6174ed06 = () => interopDefault(import('../pages/xyz/Learn_dsa.vue' /* webpackChunkName: "pages/xyz/Learn_dsa" */))
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
    path: "/nav/About",
    component: _0edfca34,
    name: "nav-About"
  }, {
    path: "/nav/Coding",
    component: _de64f43e,
    name: "nav-Coding"
  }, {
    path: "/nav/Electronics",
    component: _15583b10,
    name: "nav-Electronics"
  }, {
    path: "/nav/Guides",
    component: _687bce24,
    name: "nav-Guides"
  }, {
    path: "/nav/Learn",
    component: _b5cbdbc6,
    name: "nav-Learn"
  }, {
    path: "/nav/Projects",
    component: _736e519e,
    name: "nav-Projects"
  }, {
    path: "/xyz/Learn_dsa",
    component: _6174ed06,
    name: "xyz-Learn_dsa"
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
