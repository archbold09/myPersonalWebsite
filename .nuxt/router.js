import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _54032a82 = () => interopDefault(import('../pages/metodologia.vue' /* webpackChunkName: "pages/metodologia" */))
const _719db1d6 = () => interopDefault(import('../pages/portafolio.vue' /* webpackChunkName: "pages/portafolio" */))
const _69912e79 = () => interopDefault(import('../pages/sobreMi.vue' /* webpackChunkName: "pages/sobreMi" */))
const _2738dfce = () => interopDefault(import('../pages/proyectos/confeccionesLucelis.vue' /* webpackChunkName: "pages/proyectos/confeccionesLucelis" */))
const _49bfd5ae = () => interopDefault(import('../pages/proyectos/horarioCNCA.vue' /* webpackChunkName: "pages/proyectos/horarioCNCA" */))
const _5b21bad2 = () => interopDefault(import('../pages/proyectos/myWebsite.vue' /* webpackChunkName: "pages/proyectos/myWebsite" */))
const _bbf04bd4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/metodologia",
    component: _54032a82,
    name: "metodologia"
  }, {
    path: "/portafolio",
    component: _719db1d6,
    name: "portafolio"
  }, {
    path: "/sobreMi",
    component: _69912e79,
    name: "sobreMi"
  }, {
    path: "/proyectos/confeccionesLucelis",
    component: _2738dfce,
    name: "proyectos-confeccionesLucelis"
  }, {
    path: "/proyectos/horarioCNCA",
    component: _49bfd5ae,
    name: "proyectos-horarioCNCA"
  }, {
    path: "/proyectos/myWebsite",
    component: _5b21bad2,
    name: "proyectos-myWebsite"
  }, {
    path: "/",
    component: _bbf04bd4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
