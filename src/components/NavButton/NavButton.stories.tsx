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
  icon: 'moneyNote',
  onClick: () => {}
}
export const TwoLine = Template.bind({})
TwoLine.args = {
  children: 'Um texto com duas linhas',
  icon: 'moneyNote',
  onClick: () => {}
}

export const Small = Template.bind({})
Small.args = {
  children: 'small',
  icon: 'moneyNote',
  size: 'small',
  onClick: () => {}
}

export const Large = Template.bind({})
Large.args = {
  children: 'Nav large',
  icon: 'moneyNote',
  size: 'large',
  onClick: () => {}
}

export const TwoLineLarge = Template.bind({})
TwoLineLarge.args = {
  children: 'Um texto com duas linhas',
  icon: 'moneyNote',
  size: 'large',
  onClick: () => {}
}
