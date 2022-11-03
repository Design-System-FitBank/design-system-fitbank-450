import React from 'react'
import { DetailProps } from '../.'
import { Typography } from '../../Typography'
import * as Styled from './styles'

interface DataProps {
  dataUser: { businessUnit: string; accountName: string; uniqueIdentifier: string }
}

export const DataUser: React.FC<DataProps> = ({ dataUser }) => {
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
        <Styled.UniqueIdentifier data-testid='uniqueIdentifier'>
          <Typography variant='bodySmall'>{dataUser.uniqueIdentifier}</Typography>
        </Styled.UniqueIdentifier>
      </Styled.Identifier>
    </Styled.Container>
  )
}
