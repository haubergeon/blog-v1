import { wrapFunctional } from './utils'

export { default as Coming } from '../../components/Coming.vue'

export const LazyComing = import('../../components/Coming.vue' /* webpackChunkName: "components/coming" */).then(c => wrapFunctional(c.default || c))
