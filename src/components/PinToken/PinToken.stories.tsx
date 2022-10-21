import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PinToken } from '.'

export default {
  title: 'PinToken',
  component: PinToken,
  argTypes: {}
} as ComponentMeta<typeof PinToken>

const Template: ComponentStory<typeof PinToken> = args => <PinToken />

export const PinTokenDefault = Template.bind({})
PinTokenDefault.args = {
  isDisabled: false,
}

export const DisabledPinToken = Template.bind({})
DisabledPinToken.args = {
  isDisabled: true,
}