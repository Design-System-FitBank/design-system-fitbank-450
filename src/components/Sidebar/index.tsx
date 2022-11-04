import React, { useState } from 'react'

import * as Styled from './styles'

import { Logo } from '../Logo'
import { NavButton } from '../NavButton'
import { Typography } from '../Typography'
import { Icon, IconsProps } from '../Icon'

export interface NavButtonListProps {
  label: string
  icon: IconsProps['name']
  onClick: () => void
}

interface SidebarProps {
  /**
   * Lista de butões de navegação que será do tipo
   * NavButtonProps[] {
   *  label: string;
   *  icon: IconsProps['name'];
   *  onClick: () => void}
   * no qual é preciso passar dentro do objeto
   * o Label, o nome do Icone e a rota que o botão deve levar
   */
  navButtonList: NavButtonListProps[]
  /**
   * Função que recebe a rota do botão de signOut
   */
  onSignOut?: () => void
}

export const Sidebar = ({ navButtonList, onSignOut }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const arrowIconTransition = isOpen ? 'arrowLeft' : 'arrowRight'
  const mainLogoTransition = isOpen ? 'default' : 'smallPrimary'

  return (
    <Styled.Container isClosed={!isOpen} data-testid='sidebar-container'>
      <Styled.LogoContainer data-testid='logo-container' isClosed={!isOpen}>
        <Logo name={mainLogoTransition} />
      </Styled.LogoContainer>

      <Styled.CloseNavBar data-testid='close-button-container' onClick={() => setIsOpen(!isOpen)} isClosed={!isOpen}>
        <Icon name={arrowIconTransition} width={24} height={24} />
        {isOpen && <Typography variant='caption'>Reduzir</Typography>}
      </Styled.CloseNavBar>

      <Styled.AccountDetail onClick={() => setIsOpen(!isOpen)} isClosed={!isOpen}>
        <Icon name='user' width={24} height={24} />
        {isOpen && 'User Detail component'}
      </Styled.AccountDetail>

      <Styled.ButtonsGrid isClosed={!isOpen}>
        {navButtonList.map(({ label, icon, onClick }: NavButtonListProps) =>
          isOpen ? (
            <NavButton onClick={() => onClick()} icon={icon}>
              {label}
            </NavButton>
          ) : (
            <NavButton onClick={() => onClick()} icon={icon} size='small' />
          )
        )}
      </Styled.ButtonsGrid>

      <Styled.CloseNavBar isClosed={!isOpen} onClick={onSignOut}>
        <Icon name='cancel' width={24} height={24} />
        {isOpen && <Typography variant='caption'>Sair</Typography>}
      </Styled.CloseNavBar>
    </Styled.Container>
  )
}
