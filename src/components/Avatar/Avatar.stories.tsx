import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from '.'

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {}
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const PF = Template.bind({})
PF.args = {
  type: 'PF'
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'PF',
  secondary: true
}

export const Small = Template.bind({})
Small.args = {
  type: 'PF',
  small: true
}

export const PJ = Template.bind({})
PJ.args = {
  type: 'PJ'
}
