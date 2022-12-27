import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Checkbox } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {}
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  onCheck: (checked) => {}
}