import { TransactionList, TransactionListProps } from 'components/TransactionList'
import React from 'react'
import { Typography } from '../Typography'
import * as Styled from './style'

interface TransactionDayProps {
  transactionDay: TransactionListProps
}

export const TransactionDay: React.FC<TransactionDayProps> = ({ transactionDay }: TransactionDayProps) => {
  const { day, month, transactions } = transactionDay

  return (
    <Styled.Container>
      <Styled.TransactionDay>
        <Typography variant='body'>{day}</Typography>
        <Typography variant='body'>{month}</Typography>
      </Styled.TransactionDay>
      <div className='transactions-itens' data-test-id='transactions-itens'>
        {transactions?.map((transaction, i) => (
          <TransactionList key={i} transactions={transaction} />
        ))}
      </div>
    </Styled.Container>
  )
}
