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

SidebarNavigation.args = {
  navButtonList: [
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => {} },
    { label: 'Área Pix', icon: 'pix', onClick: () => {} },
    { label: 'Pagamento', icon: 'payment', onClick: () => {} },
    { label: 'Recarga', icon: 'topup', onClick: () => {} },
    { label: 'Agendamento', icon: 'calendar', onClick: () => {} },
    { label: 'Cartões', icon: 'cardMulti', onClick: () => {} }
  ],
  isDetail: true
}
