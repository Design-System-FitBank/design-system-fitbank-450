import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'Select',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

const opts = ['0', '1', '2', '3', '4', '5']

export const SelectComponent = Template.bind({})
SelectComponent.args = {
  placeholder: 'Select',
  title: 'Select',
  options: opts
}
