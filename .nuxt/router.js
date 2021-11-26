import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _afb9a4b2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6b07896f = () => interopDefault(import('..\\pages\\catalog\\index.vue' /* webpackChunkName: "pages/catalog/index" */))
const _6103cbdc = () => interopDefault(import('..\\pages\\certificates.vue' /* webpackChunkName: "pages/certificates" */))
const _2e8b343a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _41764304 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _6f14c008 = () => interopDefault(import('..\\pages\\catalog\\product\\_product.vue' /* webpackChunkName: "pages/catalog/product/_product" */))
const _7c771b97 = () => interopDefault(import('..\\pages\\catalog\\_id.vue' /* webpackChunkName: "pages/catalog/_id" */))
const _7049ef28 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _afb9a4b2,
    name: "about"
  }, {
    path: "/catalog",
    component: _6b07896f,
    name: "catalog"
  }, {
    path: "/certificates",
    component: _6103cbdc,
    name: "certificates"
  }, {
    path: "/contact",
    component: _2e8b343a,
    name: "contact"
  }, {
    path: "/search",
    component: _41764304,
    name: "search"
  }, {
    path: "/catalog/product/:product?",
    component: _6f14c008,
    name: "catalog-product-product"
  }, {
    path: "/catalog/:id",
    component: _7c771b97,
    name: "catalog-id"
  }, {
    path: "/",
    component: _7049ef28,
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
