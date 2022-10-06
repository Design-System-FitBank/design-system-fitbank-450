import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from '.'

export default {
  title: 'Select',
  component: Select,
  argTypes: {}
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

const opts = ['First Item', 'Second Item', 'Third Item', 'Fourth Item', 'Fifth Item']

export const SelectComponent = Template.bind({})
SelectComponent.args = {
  placeholder: 'Select',
  title: 'Select',
  options: opts
}
