import React from 'react'
import { Typography } from 'components/Typography'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { OperationType } from 'components/TransactionDay/OperationType'
import { maskMoney } from '_utils/number'

import * as Styled from './style'
import { TransactionDay } from 'components/TransactionDay'

export interface TransactionListProps {
  transactionsDay?: Transaction
}

type Transaction = {
  title: string
  date: Date
  value: number
  type: string
  establishment: string
  operationType: OperationType
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactionsDay }) => {
  const operationType = (operationType?: OperationType) => {
    switch (operationType) {
      case 2:
        return 'Via Pagamento de boleto'

      case 3:
        return 'Via Transferência'

      case 6:
        return 'Via Transferência Interna'

      case 8:
        return 'Via GARE'

      case 11:
        return 'Via FGTS'

      case 12:
        return 'Via DARJ'

      case 13:
        return 'Via Transferência SMS'

      case 23:
        return 'Via Saque Digital'

      case 37:
        return 'Via Recarga'

      case 40:
        return 'Via PIX Enviado'

      case 41:
        return 'Via PIX Recebido'

      case 42:
        return 'Via Devolução PIX'

      case 44:
        return 'Via QRCode'
    }
  }

  return (
    <Styled.Container data-testid='container'>
      <Styled.IconMoney data-testid='iconMoney' isCredit={(transactionsDay?.value ?? 0) >= 0}>
        <Icon name={transactionsDay?.type === 'received' ? 'moneyln' : 'moneyOut'} width={36} height={36} />
      </Styled.IconMoney>
      <Styled.Details data-testid='details'>
        <Typography variant='bodySmall'>{transactionsDay?.title}</Typography>
        {!transactionsDay?.establishment && (
          <Typography variant='bodyLarge'>{transactionsDay?.establishment}</Typography>
        )}
        {!transactionsDay?.operationType && (
          <Typography variant='bodySmall'>{operationType(transactionsDay?.operationType)}</Typography>
        )}
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
