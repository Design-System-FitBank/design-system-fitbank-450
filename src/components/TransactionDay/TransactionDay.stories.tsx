import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TransactionDay } from '.'

export default {
  title: 'TransactionDay',
  component: TransactionDay,
  argTypes: {}
} as ComponentMeta<typeof TransactionDay>

const Template: ComponentStory<typeof TransactionDay> = args => <TransactionDay {...args} />

export const DefaultTransactionDay = Template.bind({})
DefaultTransactionDay.args = {
  dayTransactions: [
    {
      month: 'dez',
      day: 10,
      transactions: [
        { title: 'Transferência Recebida', value: 20, establishment: 'Mercado', operationType: 40 },
        { title: 'Transferência Recebida', value: 20, establishment: 'Hugo', operationType: 3 }
      ]
    },
    {
      month: 'nov',
      day: 10,
      transactions: [{ title: 'Débito em conta', value: -20000, establishment: 'Mercado', operationType: 44 }]
    }
  ]
}
