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
    {label: "Inicio", onClick: () => {}},
    {label: "Área PIX", onClick: () => {}},
    {label: "Pagamentos", onClick: () => {}},
  ]
}