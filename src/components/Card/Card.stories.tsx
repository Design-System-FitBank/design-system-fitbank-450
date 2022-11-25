import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Card } from './'

export default {
  title: 'Card',
  component: Card,
  argTypes: {}
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default = Template.bind({})
