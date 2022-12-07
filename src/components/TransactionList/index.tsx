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
  date: string[]
  dayTransactions: Transaction[]
}

type Transaction = {
  values: number
  title: string
  establishment: string
  externalIdentifier: string
  operationType: OperationType
}

export const TransactionList: React.FC<TransactionProps> = ({ transactionList }) => {
  const opt = (operation: number) => {
    switch (operation) {
      case 2:
        return 'Pagamento de boleto'

      case 3:
        return 'Transferência'

      case 6:
        return 'Transferência Interna'

      case 8:
        return 'GARE'

      case 11:
        return 'FGTS'

      case 12:
        return 'DARJ'

      case 13:
        return 'Transferência SMS'

      case 23:
        return 'Saque Digital'

      case 37:
        return 'Recarga'

      case 40:
        return 'PIX Enviado'

      case 41:
        return 'PIX Recebido'

      case 42:
        return 'Devolução PIX'

      case 44:
        return 'QRCode'
    }
  }

  return (
    <Styled.Container data-testid='container'>
      {transactionList?.date?.map((date, i) => (
        <>
          <Styled.TransactionDay>
            <Typography variant='body'>{date}</Typography>
          </Styled.TransactionDay>
          {transactionList?.dayTransactions?.map((transactionRegister, i) => (
            <>
              <Styled.IconMoney data-testid='iconMoney' isCredit={(transactionRegister.values ?? 0) >= 0}>
                <Icon name={(transactionRegister.values ?? 0) >= 0 ? 'moneyln' : 'moneyOut'} width={36} height={36} />
              </Styled.IconMoney>
              <Styled.Title data-testid='title'>
                <Typography variant='bodySmall'>{transactionRegister.title}</Typography>
                {!transactionRegister?.establishment && (
                  <Typography variant='bodyLarge'>{transactionRegister.establishment}</Typography>
                )}
                {!transactionRegister.operationType && (
                  <Typography variant='bodySmall'>{opt(transactionRegister.operationType)}</Typography>
                )}
              </Styled.Title>
              <Styled.Button data-testid='button'>
                <Typography variant='bodyLarge'>{maskMoney(transactionRegister.values.toString())}</Typography>
                <Button icon='details' onClick={() => {}} size='small' type='tertiary'>
                  Ver
                </Button>
              </Styled.Button>
            </>
          ))}
        </>
      ))}
    </Styled.Container>
  )
}
