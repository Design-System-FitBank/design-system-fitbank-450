import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PinToken } from './'
import React from 'react'

export default {
  title: 'PinToken',
  component: PinToken,
  argTypes: {}
} as ComponentMeta<typeof PinToken>

const Template: ComponentStory<typeof PinToken> = args => <PinToken {...args} />

export const PinTokenDefault = Template.bind({})
PinTokenDefault.args = {
  onPinChange: () => {},
}

export const DisabledPinToken = Template.bind({})
DisabledPinToken.args = {
  onPinChange: () => {},
  disabled: true
}

export const PinPasswordDefault = Template.bind({})
PinPasswordDefault.args = {
  onPinChange: () => {},
  isPassword: true
}
