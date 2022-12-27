import React from 'react'
import { ComponentStory, ComponentMeta  } from '@storybook/react'
import { Breadline } from '.'

export default {
  title: 'Breadline',
  component: Breadline,
  argTypes: {}
} as ComponentMeta<typeof Breadline>

const Template: ComponentStory<typeof Breadline> = args => <Breadline {...args} />

export const BreadLine = Template.bind({})
BreadLine.args = {
  path: [
    "Área PIX", "Pagamentos"
  ],
  onClick(route) {
  },}