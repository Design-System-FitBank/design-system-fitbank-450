import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PinToken } from '.'

export default {
  title: 'PinToken',
  component: PinToken,
  argTypes: {}
} as ComponentMeta<typeof PinToken>

const Template: ComponentStory<typeof PinToken> = args => <PinToken {...args} />

export const PinTokenDefault = Template.bind({})
PinTokenDefault.args = {
  disabled: false,
}

export const DisabledPinToken = Template.bind({})
DisabledPinToken.args = {
  disabled: true,
}

export const PinPasswordDefault = Template.bind({})
PinPasswordDefault.args = {
  password: false,
}

export const PinPassword = Template.bind({})
PinPassword.args = {
  password: true,
}