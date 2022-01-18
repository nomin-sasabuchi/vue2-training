import C from './DefaultLayout.vue'

export default {
  component: C,
}

const Template = (args, { argTypes }) => ({
  components: { C },
  props: Object.keys(argTypes),
  template: '<C v-bind="$props"></C>',
})

export const Layouts = Template.bind({})
