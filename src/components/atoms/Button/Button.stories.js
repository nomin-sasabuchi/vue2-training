import C from './Button.vue'

export default {
  component: C,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<C v-bind="$props" >田中たろう</C>',
  components: { C },
})

export const Button = Template.bind({})
Button.args = { extraClass: 'text-red' }

export const Contained = Template.bind({})
Contained.args = { href: '/' }

export const ContainedDisabled = Template.bind({})
ContainedDisabled.args = { label: 'Button' }

export const Outlined = Template.bind({})
Outlined.args = { label: 'Button' }

export const OutlinedDisabled = Template.bind({})
OutlinedDisabled.args = { label: 'Button' }

export const Link = Template.bind({})
Link.args = { label: 'Button' }

export const LinkContained = Template.bind({})
LinkContained.args = { label: 'Button' }

export const LinkOutlined = Template.bind({})
LinkOutlined.args = { label: 'Button' }
