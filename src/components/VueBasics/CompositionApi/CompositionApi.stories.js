import C from './index.vue'

export default {
  component: C,
}

const Template = (args, { argTypes }) => ({
  components: { C },
  props: Object.keys(argTypes),
  template: '<C v-bind="$props"></C>',
})

export const CompositionApi = Template.bind({})
CompositionApi.args = {
  message: 'テスト',
  times: 2,
}
