import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from '.'

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {}
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => <Typography {...args} />

export const Headline = Template.bind({})
Headline.args = {
  type: 'H1',
  label: 'Headline'
}

export const Subtitle = Template.bind({})
Subtitle.args = {
  type: 'Subtitle',
  label: 'Subtitle'
}

export const Body = Template.bind({})
Body.args = {
  type: 'Body',
  label: 'Body'
}

export const Button = Template.bind({})
Button.args = {
  type: 'Button',
  label: 'Button'
}

export const Caption = Template.bind({})
Caption.args = {
  type: 'Caption',
  label: 'Caption'
}
