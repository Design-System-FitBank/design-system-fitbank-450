import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PopUp } from '.'

export default {
  title: 'PopUp',
  component: PopUp,
  argTypes: {}
} as ComponentMeta<typeof PopUp>

const Template: ComponentStory<typeof PopUp> = args => <PopUp {...args} />

export const Default = Template.bind({})

Default.args = {
  loading: true,
  success: false,
  message: '450',
}

export const Success = Template.bind({})
Success.args = {
  loading: false,
  success: true,
  message: '450',
}

export const Error = Template.bind({})
Error.args = {
  loading: false,
  success: false,
  message: '450',
}
