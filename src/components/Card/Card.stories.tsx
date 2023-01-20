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

Default.args = {
  children: '450',
  size: 'pattern',
  height: 0,
  width: 0,
  elevation: true,
  color: 'light'
}

export const DarkColor = Template.bind({})
DarkColor.args = {
  children: 'DarkColor',
  size: 'pattern',
  height: 0,
  width: 0,
  elevation: true,
  color: 'dark'
}

export const SetSize = Template.bind({})
SetSize.args = {
  children: 'Size',
  size: 'setSize',
  height: 100,
  width: 100,
  elevation: true,
  color: 'light'
}

export const NoElevation = Template.bind({})
NoElevation.args = {
  children: 'Size',
  size: 'pattern',
  height: 0,
  width: 0,
  elevation: false,
  color: 'light'
}
