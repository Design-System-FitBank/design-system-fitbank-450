import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TransactionList } from '.'

export default {
  title: 'TransactionList',
  component: TransactionList,
  argTypes: {}
} as ComponentMeta<typeof TransactionList>

const Template: ComponentStory<typeof TransactionList> = args => <TransactionList {...args} />

export const DefaultTransactionList = Template.bind({})
