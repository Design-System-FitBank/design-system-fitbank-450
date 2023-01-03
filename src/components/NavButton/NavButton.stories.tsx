import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { NavButton } from '.'

export default {
  title: 'NavButton',
  component: NavButton,
  argTypes: {}
} as ComponentMeta<typeof NavButton>

const Template: ComponentStory<typeof NavButton> = args => <NavButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Nav Button',
  icon: 'moneyNote',
  onClick: () => { }

}

export const Small = Template.bind({})
Small.args = {
  children: 'Small',
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
