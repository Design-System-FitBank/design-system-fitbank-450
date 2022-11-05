import React from 'react'
import { User } from '../Data'
import { Typography } from '../../Typography'
import * as Styled from './styles'

interface DataUserProps {
  dataUser: User
}

export const DataUser: React.FC<DataUserProps> = ({ dataUser }) => {
  return (
    <Styled.Container>
      <Styled.BU data-testid='businessUnit'>
        <Typography variant='subtitle'>{dataUser.businessUnit}</Typography>
      </Styled.BU>
      <Styled.Account data-testid='account'>
        <Typography variant='bodySmall'>{dataUser.accountName}</Typography>
      </Styled.Account>
      <Styled.Identifier data-testid='wrap'>
        <Styled.Label data-testid='labelIdentifier'>CPF/CNPJ:</Styled.Label>
        <Styled.UniqueIdentifier data-testid='userId'>{dataUser.userId}</Styled.UniqueIdentifier>
      </Styled.Identifier>
    </Styled.Container>
  )
}
