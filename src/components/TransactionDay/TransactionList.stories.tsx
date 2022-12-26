import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TransactionDay } from '.'
import { valuesIn } from 'cypress/types/lodash'
import { TransactionList } from './components/TransactionList'

export default {
  title: 'TransactionDay',
  component: TransactionDay,
  argTypes: {}
} as ComponentMeta<typeof TransactionDay>

const Template: ComponentStory<typeof TransactionDay> = args => <TransactionDay {...args} />

export const DefaultTransactionDay = Template.bind({})

DefaultTransactionDay.args = {
  transactionsList: [
    {
      title: 'Transferência Recebida',
      Date: '20 ago',
      value: 20,
      type: 'Receveid',
      establishment: 'Mercado',
      operationType: 40
    }
  ]
}
