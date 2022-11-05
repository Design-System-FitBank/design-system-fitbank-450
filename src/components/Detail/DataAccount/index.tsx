import React from 'react'
import { DataBank } from '../Data'
import { Typography } from '../../Typography'
import * as Styled from './styles'

interface DataAccountProps {
  dataBank: DataBank
}

export const DataAccount: React.FC<DataAccountProps> = ({ dataBank }) => {
  return (
    <Styled.Container data-testid='dataBank'>
      <Styled.LabelBank data-testid='labelNameBank'>Banco:</Styled.LabelBank>
      <Styled.Bank data-testid='bank'>
        <Typography variant='subtitle'>{dataBank.bank}</Typography>
      </Styled.Bank>
      <Styled.Branch>
        <Styled.LabelBranch data-testid='labelBranch'>Ag:</Styled.LabelBranch>
        <Styled.NumberBranch data-testid='branch'>{dataBank.bankBranch}</Styled.NumberBranch>
      </Styled.Branch>
      <Styled.BankAccount>
        <Styled.LabelAccount data-testid='labelBanckAccount'>Conta:</Styled.LabelAccount>
        <Styled.Account data-testid='bankAccount'>{dataBank.bankAccount}</Styled.Account>
      </Styled.BankAccount>
      <Styled.AccountId>
        <Styled.LabelAccountId data-testid='labelAccountId'>Identificador:</Styled.LabelAccountId>
        <Styled.NumberId data-testid='accountId'>{dataBank.accountId}</Styled.NumberId>
      </Styled.AccountId>
    </Styled.Container>
  )
}
