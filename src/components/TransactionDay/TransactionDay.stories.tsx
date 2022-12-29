import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TransactionDay } from '.'
import { valuesIn } from 'cypress/types/lodash'

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
      isCredit: 20,
      establishment: 'Mercado',
      operationType: 40
    }
  ]
}
