import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatePicker } from './'

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {}
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = () => <DatePicker />

export const Default = Template.bind({})
Default.args = {}
