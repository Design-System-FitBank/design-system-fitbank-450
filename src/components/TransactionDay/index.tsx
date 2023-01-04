import { Typography } from 'design-system-fitbank/dist/src/components/Typography'
import React from 'react'
import * as Styled from './style'
import { Transaction } from './components/Transaction'

export interface DayTransactionsProps {
  /**
   * Retorna a lista de transações de alguma data e pode ser nula
   */
  dayTransactions: TransactionDayProps[]
}

export interface TransactionDayProps {
  /**
   * Lista de transações que pode ser nula
   */
  transactions?: Transaction[]
  /**
   * Mês em que ocorreu a transação
   */
  month?: string
  /**
   * Dia em que ocorreu a transação
   */
  day?: number
}

export const TransactionDay: React.FC<DayTransactionsProps> = ({ dayTransactions }) => {
  return (
    <Styled.TransactionDay data-testid='transactionDay'>
      {dayTransactions?.map((transactionDate, i) => (
        <Styled.Transactions data-testid='transaction'>
          <Styled.DateTransaction data-testid='transactionDate'>
            <Typography variant='body' key={i}>
              {transactionDate.day?.toString()}
            </Typography>
            <Typography variant='body' key={i}>
              {transactionDate.month}
            </Typography>
          </Styled.DateTransaction>
          <Styled.TransactionCard data-testid='transactionCard'>
            {transactionDate.transactions?.map((transactionDay, i) => (
              <Transaction key={i} transactions={transactionDay!} />
            ))}
          </Styled.TransactionCard>
        </Styled.Transactions>
      ))}
    </Styled.TransactionDay>
  )
}
