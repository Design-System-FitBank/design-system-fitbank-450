import React from 'react'
import { Typography } from '../Typography'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { OperationType } from './OperationType'
import { maskMoney } from '../../_utils/number'

import * as Styled from './style'

interface TransactionProps {
  transactionList?: TransactionListProps
}

export interface TransactionListProps extends Transaction {
  date: string
  dayTransactions: Transaction
}

type Transaction = {
  values: number
  title: string
  establishment: string
  externalIdentifier: string
  operationType: OperationType
}

export const TransactionList: React.FC<TransactionProps> = ({ transactionList }) => {
  const formattedValue = maskMoney('20')
  const isCredit = (transactionList?.values ?? 0) >= 0
  const showDetailsAndReceiptButtons =
    (transactionList?.operationType === OperationType.moneyTransfer ||
      transactionList?.operationType === OperationType.internalTransfer ||
      transactionList?.operationType === OperationType.boletoPayment ||
      transactionList?.operationType === OperationType.garePayment ||
      transactionList?.operationType === OperationType.fgtsPayment ||
      transactionList?.operationType === OperationType.purchaseTopUp ||
      transactionList?.operationType === OperationType.pixOut ||
      transactionList?.operationType === OperationType.pixIn) &&
    transactionList?.externalIdentifier

  return (
    <Styled.Container data-testid='container'>
      <Styled.TransactionDay>
        <Typography variant='body'>11 nov</Typography>
        <div className='transactions-itens' data-test-id='transactions-itens'>
          {transactionList?.map((transaction, i) => (
            <TransactionList key={i} transactionList={transaction} />
          ))}
        </div>
      </Styled.TransactionDay>
      <Styled.IconMoney data-testid='iconMoney' isCredit={isCredit}>
        <Icon name={isCredit ? 'moneyln' : 'moneyOut'} width={36} height={36} />
      </Styled.IconMoney>
      <Styled.Title data-testid='title'>
        <Typography variant='bodySmall'>taitou</Typography>
        {!transactionList?.establishment && <Typography variant='bodyLarge'>Mercado</Typography>}
        {!showDetailsAndReceiptButtons && <Typography variant='bodySmall'>Via PIX</Typography>}
      </Styled.Title>
      <Styled.Button data-testid='button'>
        <Typography variant='bodyLarge'>{formattedValue}</Typography>
        <Button icon='details' onClick={() => {}} size='small' type='tertiary'>
          Ver
        </Button>
      </Styled.Button>
    </Styled.Container>
  )
}
