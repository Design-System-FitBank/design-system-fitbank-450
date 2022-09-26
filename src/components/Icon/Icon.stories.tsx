import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Icon } from '.'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {}
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Default = Template.bind({})
export const IconWithSize = Template.bind({})

Default.args = {
  name: 'home'
}

IconWithSize.args = {
  name: 'home',
  width: 32,
  height: 32
}
