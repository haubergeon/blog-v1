import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Coming: () => import('../../components/Coming.vue' /* webpackChunkName: "components/coming" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
