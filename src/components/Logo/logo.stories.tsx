import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {}
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const Default = Template.bind({})
export const SmallPrimary = Template.bind({})
export const Secundary = Template.bind({})
export const SmallSecundary = Template.bind({})

Default.args = {
  name: 'default'
}
SmallPrimary.args = {
  name: 'smallPrimary'
}
Secundary.args = {
  name: 'secundary'
}
SmallSecundary.args = {
  name: 'smallSecundary'
}
