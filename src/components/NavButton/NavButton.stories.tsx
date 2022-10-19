import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavButton } from '.'
import { Icon } from '../Icon'

export default {
  title: 'NavButton',
  component: NavButton,
  argTypes: {}
} as ComponentMeta<typeof NavButton>

const Template: ComponentStory<typeof NavButton> = args => <NavButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'NavButton',
  icon: <Icon name='moneyNote' />,
  onClick: () => {}
}

export const Small = Template.bind({})
Small.args = {
  children: 'small',
  icon: <Icon name='moneyNote' />,
  size: 'small',
  onClick: () => {}
}

export const Large = Template.bind({})
Large.args = {
  children: 'large',
  icon: <Icon name='moneyNote' />,
  size: 'large',
  onClick: () => {}
}
