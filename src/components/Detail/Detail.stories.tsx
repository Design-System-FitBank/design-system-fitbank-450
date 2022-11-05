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
export const Open = Template.bind({})
Default.args = {
  dataUser: {
    businessUnit: 'ACME bank',
    accountName: 'kimbap asian food litda',
    userId: '12345678-910'
  },
  dataBank: {
    bank: '450 - FitBank Pagamentos SA',
    bankBranch: '0000001',
    bankAccount: '02021-5',
    accountId: '020202.02020.202.0'
  }
}

Open.args = {
  dataUser: {
    businessUnit: 'ACME bank',
    accountName: 'kimbap asian food litda',
    userId: '12345678-910'
  },
  dataBank: {
    bank: '450 - FitBank Pagamentos SA',
    bankBranch: '0000001',
    bankAccount: '02021-5',
    accountId: '020202.02020.202.0'
  }
}
