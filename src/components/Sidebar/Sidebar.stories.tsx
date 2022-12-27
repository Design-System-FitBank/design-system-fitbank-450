import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Sidebar } from './'
import { Typography } from '../Typography'
import { Button } from '../Button'
import { Accordion } from '../Accordion'

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
  ]
}

export const Infos = Template.bind({})
Infos.args = {
  navButtonList: [
    { label: 'Transferencia', icon: 'moneyTransfer', onClick: () => {} },
    { label: 'Área Pix', icon: 'pix', onClick: () => {} },
    { label: 'Pagamento', icon: 'payment', onClick: () => {} },
    { label: 'Recarga', icon: 'topup', onClick: () => {} },
    { label: 'Agendamento', icon: 'calendar', onClick: () => {} },
    { label: 'Cartões', icon: 'cardMulti', onClick: () => {} }
  ],
  children: (
    <div>
      <Typography variant='h1'>Title</Typography>
      <Typography variant='caption'>Name</Typography>
      <Typography variant='subtitle'>Data</Typography>
      <Accordion labelStateClose='Ver dados da conta' labelStateOpen='Esconder dados da conta'>
        <div>Number</div>
      </Accordion>
      <Button icon='share' children={'Copiar'} onClick={() => {}} />
    </div>
  )
}
