import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Detail } from './'

export default {
  title: 'Detail',
  component: Detail,
  argTypes: {}
} as ComponentMeta<typeof Detail>

const Template: ComponentStory<typeof Detail> = args => <Detail {...args} />

export const Default = Template.bind({})
Default.args = {
  dataUser: {
    businessUnit: 'ACME bank',
    accountName: 'kimbap asian food litda',
    uniqueIdentifier: '12345678-910'
  }
}
