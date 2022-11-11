import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from './'

export default {
  title: 'Sidebar',
  component: Sidebar,
  argTypes: {}
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />

export const SidebarNavigation = Template.bind({})

const details = {
  accountData: {
    businessUnit: 'ACME Bank',
    accountName: 'KIMBAP ASIAN FOOD LTDA',
    userId: '12345678-910',
    bank: '450 - FitBank Pagamentos SA',
    bankBranch: '0000001',
    bankAccount: '02021-5',
    accountId: '020202.02020.202.0'
  }, 
  copyAccountData: () => {}
}

SidebarNavigation.args = {
  navButtonList: [
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => {} },
    { label: 'Área Pix', icon: 'pix', onClick: () => {} },
    { label: 'Pagamento', icon: 'payment', onClick: () => {} },
    { label: 'Recarga', icon: 'topup', onClick: () => {} },
    { label: 'Agendamento', icon: 'calendar', onClick: () => {} },
    { label: 'Cartões', icon: 'cardMulti', onClick: () => {} }
  ],
  detailProps: details
}
