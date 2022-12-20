import React from 'react'
import { Typography } from '../Typography'
import { Icon } from '../Icon'
import { Button } from '../Button'
import { OperationType } from './OperationType'
import { maskMoney } from '../../_utils/number'

import * as Styled from './style'

export interface TransactionListProps {
  transactionsDay?: Transaction
}

export interface Transaction {
  value: number
  title: string
  establishment: string
  externalIdentifier: string
  operationType: typeof OperationType
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactionsDay }) => {
  const showDetailsAndReceiptButtons =
    (OperationType.moneyTransfer ||
      OperationType.internalTransfer ||
      OperationType.boletoPayment ||
      OperationType.garePayment ||
      OperationType.fgtsPayment ||
      OperationType.purchaseTopUp ||
      OperationType.pixOut ||
      OperationType.pixIn) &&
    transactionsDay?.externalIdentifier

  return (
    <Styled.Container data-testid='container'>
      <Styled.IconMoney data-testid='iconMoney' isCredit={(transactionsDay?.value ?? 0) >= 0}>
        <Icon name={(transactionsDay?.value ?? 0) >= 0 ? 'moneyln' : 'moneyOut'} width={36} height={36} />
      </Styled.IconMoney>
      <Styled.Details data-testid='details'>
        <Typography variant='bodySmall'>{transactionsDay?.title}</Typography>
        {!transactionsDay?.establishment && (
          <Typography variant='bodyLarge'>{transactionsDay?.establishment}</Typography>
        )}
        {!transactionsDay?.operationType && <Typography variant='bodySmall'>{showDetailsAndReceiptButtons}</Typography>}
      </Styled.Details>
      <Styled.Button data-testid='button'>
        {transactionsDay?.value && (
          <Typography variant='bodyLarge'>{maskMoney(transactionsDay?.value.toString()!)}</Typography>
        )}
        <Button icon='details' onClick={() => {}} size='small' type='tertiary'>
          Ver
        </Button>
      </Styled.Button>
    </Styled.Container>
  )
}
