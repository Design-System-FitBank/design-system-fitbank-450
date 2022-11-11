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