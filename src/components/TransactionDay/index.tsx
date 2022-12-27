import { Transaction } from './components/Transaction'
import { Typography } from 'design-system-fitbank/dist/src/components/Typography'
import React from 'react'
import * as Styled from './style'

export const TransactionDay = ({ transactions }) => {
  return (
    <Styled.TransactionDay>
      <Typography variant='body'>{transactions.date.toString()}</Typography>
      {transactions?.date.transactions?.map((transaction, i) => (
        <Transaction key={i} transactions={transaction} />
      ))}
    </Styled.TransactionDay>
  )
}
