import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TransactionDay } from '.'
import { valuesIn } from 'cypress/types/lodash'
import { Transaction } from './components/Transaction'

export default {
  title: 'TransactionDay',
  component: TransactionDay,
  argTypes: {}
} as ComponentMeta<typeof TransactionDay>

const Template: ComponentStory<typeof TransactionDay> = args => <TransactionDay {...args} />

export const DefaultTransactionDay = Template.bind({})

export const Transaction = Template.bind({})
Transaction.args = {
  transactions: [
    {
      title: 'Transferência Recebida',
      value: 20,
      type: 'Receveid',
      establishment: 'Mercado',
      operationType: 40
    }
  ]
}
