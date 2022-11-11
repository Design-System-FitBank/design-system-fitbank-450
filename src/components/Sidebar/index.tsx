import React, { useState } from 'react'

import * as Styled from './styles'

import { Logo } from '../Logo'
import { Detail } from '../Detail'
import { NavButton } from '../NavButton'
import { Typography } from '../Typography'
import { Icon, IconsProps } from '../Icon'
import { AccountData } from '../Detail/AccountDataType'

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
   *  onClick: () => void
   * }
   * no qual é preciso passar dentro do objeto
   * o Label, o nome do Icone e a rota que o botão deve levar
   */
  navButtonList: NavButtonListProps[]
  /**
   * Função que recebe a rota do botão de signOut
   */
  onSignOut?: () => void

  /**
   * 
   */
  detailProps?: {
    accountData: AccountData
    copyAccountData: (data: AccountData) => void
  }
}

export const Sidebar = ({ navButtonList, onSignOut, detailProps }: SidebarProps) => {
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

      {detailProps && (
        <Styled.AccountDetail data-testid='user-detail'>
          <Detail accountData={detailProps.accountData} copyAccountData={detailProps.copyAccountData!} collapsed={!isOpen} />
        </Styled.AccountDetail>
      )}

      <Styled.ButtonsGrid data-testid='nav-button-grid' isClosed={!isOpen}>
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

      <Styled.CloseNavBar data-testid='sign-out-button' isClosed={!isOpen} onClick={onSignOut}>
        <Icon name='cancel' width={24} height={24} />
        {isOpen && <Typography variant='caption'>Sair</Typography>}
      </Styled.CloseNavBar>
    </Styled.Container>
  )
}
