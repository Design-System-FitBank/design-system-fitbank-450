import { Transaction, TransactionList } from 'components/TransactionList'
import { Typography } from 'components/Typography'
import React from 'react'
import * as Styled from './style'

export interface TransactionListProps {
  transactionsList?: TransactionDay
  date: string[]
}

export interface TransactionDay {
  date: {
    transactions?: Transaction[]
  }
}

export const TransactionDay: React.FC<TransactionListProps> = ({ transactionsList, date }) => {
  return (
    <Styled.TransactionDay>
      <Typography variant='body'>{date.toString()}</Typography>
      {transactionsList?.date.transactions?.map((transaction, i) => (
        <TransactionList key={i} transactionsDay={transaction} />
      ))}
    </Styled.TransactionDay>
  )
}
