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

export const Body = Template.bind({})

export const Button = Template.bind({})
