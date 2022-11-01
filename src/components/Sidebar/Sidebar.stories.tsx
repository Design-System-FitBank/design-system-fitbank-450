import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {}
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />

export const SidebarDefault = Template.bind({})
SidebarDefault.args = {
  children: 'navButton'
}