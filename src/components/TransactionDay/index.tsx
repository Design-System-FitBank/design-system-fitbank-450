import { TransactionList } from './components/TransactionList'
import { Typography } from 'components/Typography'
import React from 'react'
import * as Styled from './style'

export const TransactionDay = ({ transactionsList, date }) => {
  return (
    <Styled.TransactionDay>
      <Typography variant='body'>{date.toString()}</Typography>
      {transactionsList?.date.transactions?.map((transaction, i) => (
        <TransactionList key={i} transactionsDay={transaction} />
      ))}
    </Styled.TransactionDay>
  )
}
