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

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  icon: <Icon name='home' />,
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
