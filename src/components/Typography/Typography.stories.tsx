import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from './'

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {}
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = args => <Typography {...args} />

export const TypographyVariants = Template.bind({})
TypographyVariants.args = {
  variant: 'h1',
  children: 'Typography'
}
