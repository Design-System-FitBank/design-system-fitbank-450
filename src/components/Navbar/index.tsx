import React from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { Data } from './Data'

interface NavbarProps {
  dataUser: { businessUnit: string; accountName: string; uniqueIdentifier: string }
}

export const Navbar: React.FC<NavbarProps> = ({ dataUser }) => {
  return (
    <>
      <Styled.Container data-testid='container'>
        <Styled.Avatar data-testid='avatar'>
          <Icon name='enterprise' />
        </Styled.Avatar>
        <Data data-testid='data' dataUser={dataUser} />
      </Styled.Container>
    </>
  )
}
