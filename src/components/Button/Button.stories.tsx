import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '.'
import { Home } from './img-test'

export default {
  title: 'Button',
  component: Button,
  argTypes: {}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  icon: <Home />,
  size: 'large',
  type: 'primary',
  onClick: () => {}
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  icon: <Home />,
  size: 'large',
  type: 'secondary',
  onClick: () => {}
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: 'Tertiary',
  icon: <Home />,
  size: 'large',
  type: 'tertiary',
  onClick: () => {}
}
