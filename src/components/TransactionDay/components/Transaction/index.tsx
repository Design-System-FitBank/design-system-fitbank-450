import React from 'react'
import { Typography } from 'design-system-fitbank/dist/src/components/Typography'
import { Icon } from 'design-system-fitbank/dist/src/components/Icon'
import { Button } from 'design-system-fitbank/dist/src/components/Button'
import { OperationType } from 'components/TransactionDay/OperationType'

import * as Styled from './style'
import { maskMoney } from '_utils/number'

export interface TransactionProps {
  transactions?: Transaction
}

type Transaction = {
  title: string
  isCredit: string
  value: number
  establishment: string
  operationType: OperationType
}

export const Transaction: React.FC<TransactionProps> = ({ transactions }) => {
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
      <Styled.IconMoney data-testid='iconMoney' isCredit={(transactions?.value ?? 0) >= 0}>
        <Icon name={transactions?.isCredit ? 'moneyln' : 'moneyOut'} width={36} height={36} />
      </Styled.IconMoney>
      <Styled.Details data-testid='details'>
        <Typography variant='bodySmall'>{transactions?.title}</Typography>
        {!transactions?.establishment && <Typography variant='bodyLarge'>{transactions?.establishment}</Typography>}
        {/*   {!operationType && <Typography variant='bodySmall'>{operationType(operationType)}</Typography>} */}
      </Styled.Details>
      <Styled.Button data-testid='button'>
        {transactions?.value && (
          <Typography variant='bodyLarge'>{maskMoney(transactions?.value.toString()!)}</Typography>
        )}
        <Button icon='details' onClick={() => {}} size='small' type='tertiary'>
          Ver
        </Button>
      </Styled.Button>
    </Styled.Container>
  )
}
