import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from '.'

export default {
  title: 'Header',
  component: Header,
  argTypes: {}
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header {...args} />
export const Default = Template.bind({})
Default.args = {
  onClickOptions: () => {},
}

export const WithSearch = Template.bind({})
WithSearch.args = {
  search: () => { },
  searchPlaceholder: "Search ..."
}