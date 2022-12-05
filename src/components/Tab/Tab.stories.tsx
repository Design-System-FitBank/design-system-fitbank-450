import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Tab } from './'

export default {
  title: 'Tab',
  component: Tab,
  argTypes: {}
} as ComponentMeta<typeof Tab>

const Template: ComponentStory<typeof Tab> = args => <Tab {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Tab',
  icon: 'keys',
  onClick: () => {}
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Tab',
  icon: 'keys',
  onClick: () => {},
  disabled: true
}
