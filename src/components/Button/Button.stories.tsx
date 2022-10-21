import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '.'
import { Icon } from '../Icon'

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Primary',
  onClick: () => {}
}

export const PrimaryWithIconLeft = Template.bind({})
PrimaryWithIconLeft.args = {
  children: 'Primary',
  icon: <Home />,
  onClick: () => {}
}

export const PrimaryWithIconRight = Template.bind({})
PrimaryWithIconRight.args = {
  children: 'Primary',
  icon: <Home />,
  iconRight: true,
  onClick: () => {}
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  icon: <Icon name='home' />,
  size: 'large',
  type: 'secondary',
  onClick: () => {}
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Tertiary',
  icon: <Icon name='home' />,
  size: 'large',
  type: 'tertiary',
  onClick: () => {}
}
