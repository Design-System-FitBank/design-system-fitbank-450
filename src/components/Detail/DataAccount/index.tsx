import React from 'react'
import { AccountData } from '../AccountDataType'
import { Typography } from '../../Typography'
import * as Styled from './styles'

export interface DataAccountProps {
  dataBank: AccountData
}

const Bank: React.FC<DataAccountProps> = ({ dataBank }) => {
  return (
    <Styled.ContainerBank data-testid='dataBank'>
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
        <Styled.AccountBank data-testid='bankAccount'>{dataBank.bankAccount}</Styled.AccountBank>
      </Styled.BankAccount>
      <Styled.AccountId>
        <Styled.LabelAccountId data-testid='labelAccountId'>Identificador:</Styled.LabelAccountId>
        <Styled.NumberId data-testid='accountId'>{dataBank.accountId}</Styled.NumberId>
      </Styled.AccountId>
    </Styled.ContainerBank>
  )
}

const User: React.FC<DataAccountProps> = ({ dataBank }) => {
  return (
    <Styled.ContainerUser>
      <Styled.BU data-testid='businessUnit'>
        <Typography variant='subtitle'>{dataBank.businessUnit}</Typography>
      </Styled.BU>
      <Styled.AccountUser data-testid='account'>
        <Typography variant='body'>{dataBank.accountName}</Typography>
      </Styled.AccountUser>
      <Styled.Identifier data-testid='wrap'>
        <Styled.Label data-testid='labelIdentifier'>CPF/CNPJ:</Styled.Label>
        <Styled.UniqueIdentifier data-testid='userId'>{dataBank.userId}</Styled.UniqueIdentifier>
      </Styled.Identifier>
    </Styled.ContainerUser>
  )
}

export const DataAccount = {
  User: User,
  Bank: Bank
}
