import React, { ReactNode, useState } from 'react'

import * as Styled from './styles'

import { Logo } from '../Logo'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { NavButton } from '../NavButton'

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const arrowIconTransition = isOpen ? 'arrowLeft' : 'arrowRight'
  const mainLogoTransition = isOpen ? 'default' : 'smallPrimary'
  const navButtonSize = isOpen ? 'medium' : 'small'

  return (
    <Styled.Container isClosed={!isOpen} data-testid='sidebar-container'>
      <Styled.IconContainer data-testid='logo-container' isClosed={!isOpen}>
        <Logo name={mainLogoTransition} />
      </Styled.IconContainer>

      <Styled.CloseNavBar data-testid='close-button-container' onClick={() => setIsOpen(!isOpen)} isClosed={!isOpen}>
        <Icon name={arrowIconTransition} width={24} height={24} />
        {isOpen && <Typography variant='caption'>Reduzir</Typography>}
      </Styled.CloseNavBar>

      <Styled.AccountDetail onClick={() => setIsOpen(!isOpen)} isClosed={!isOpen}>
        <Icon name='user' width={24} height={24} />
        {isOpen && 'User Detail component'}
      </Styled.AccountDetail>

      <Styled.ButtonsGrid isClosed={!isOpen}>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='moneyTransfer'>
          Transferencia
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='pix'>
          Cartões
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='payment'>
          Pagamento
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='topup'>
          Recarga
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='calendar'>
          Agendamento
        </NavButton>
        <NavButton onClick={() => setIsOpen} size={navButtonSize} icon='cardMulti'>
          Cartões
        </NavButton>
      </Styled.ButtonsGrid>

      <Styled.CloseNavBar isClosed={!isOpen}>
        <Icon name='cancel' width={24} height={24} />
        {isOpen && <Typography variant='caption'>Sair</Typography>}
      </Styled.CloseNavBar>
    </Styled.Container>
  )
}
