import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'Select',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

const optionsList = ['First', 'Second', 'Third', 'Fourth', 'Fifth']

export const SelectComponent = Template.bind({})
SelectComponent.args = {
  placeholder: 'Select',
  title: 'Select',
  options: optionsList
}