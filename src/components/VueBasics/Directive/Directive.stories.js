import VueCompositionApi from '@vue/composition-api'
import Vue from 'vue'
import C from './index.vue'

Vue.use(VueCompositionApi)

export default {
  component: C,
}

const Template = (args, { argTypes }) => ({
  components: { C },
  props: Object.keys(argTypes),
  template: '<C/>',
})

export const Directive = Template.bind({})
