import { Icon, IconsProps } from '../Icon'
import React, { ReactNode, useState } from 'react'

import * as Styled from './styles'
import { Logo } from '../Logo'
import { Typography } from '../Typography'
import { Avatar } from '../Avatar'
import { NavButton } from '../NavButton'
import { LogoCustom } from '../LogoCustom'

export interface NavButtonListProps {
  label: string
  icon: IconsProps['name']
  onClick: () => void
}

export interface SidebarProps {
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
   * Tipo do avatar que pode ser PF pessoa fisica ou PJ pessoa juridica
   */
  avatarType?: 'PF' | 'PJ'

  /**
   * Variável que recebe uma logo grande personalizada de qualquer tipo
   * para ser mostrado quando o sidebar estiver aberto
   * caso não passado mostrará o logoSmall
   */
  logoLarge?: React.ReactNode

  /**
   * Variável que recebe uma logo pequeno personalizada de qualquer tipo
   * para ser mostrado quando o sidebar estiver colapsado
   * caso não passado mostrará o logo padrão da Fitbank
   */
  logoSmall?: React.ReactNode

  children?: ReactNode
}

export const Sidebar = ({
  navButtonList,
  onSignOut,
  avatarType = 'PF',
  children,
  logoLarge,
  logoSmall
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const arrowIconTransition = isOpen ? 'arrowLeft' : 'arrowRight'
  const mainLogoTransition = isOpen ? 'default' : 'smallPrimary'
  const LogoCustomTransition = isOpen ? logoLarge : logoSmall

  return (
    <Styled.Container isClosed={!isOpen} data-testid='sidebar-container'>
      <Styled.LogoContainer data-testid='logo-container' isClosed={!isOpen}>
        {logoLarge || logoSmall
          ? <LogoCustom>{LogoCustomTransition}</LogoCustom>
          : <Logo name={mainLogoTransition} />}
      </Styled.LogoContainer>

      <Styled.CloseNavBar data-testid='close-button-container' onClick={() => setIsOpen(!isOpen)} isClosed={!isOpen}>
        <Styled.AlignButton>
          <Icon name={arrowIconTransition} width={24} height={24} />
          {isOpen && <Typography variant='caption'>Reduzir</Typography>}
        </Styled.AlignButton>
      </Styled.CloseNavBar>

      <Styled.AccountDetail data-testid='user-detail'>
        <Avatar type={avatarType} />
      </Styled.AccountDetail>

      <Styled.ChildContent isClosed={!isOpen}>{children}</Styled.ChildContent>

      <Styled.ButtonsGrid data-testid='nav-button-grid' isClosed={!isOpen}>
        {navButtonList.map(({ label, icon, onClick }: NavButtonListProps, index) =>
          isOpen ? (
            <NavButton key={index} onClick={() => onClick()} icon={icon}>
              {label}
            </NavButton>
          ) : (
            <NavButton key={index} onClick={() => onClick()} icon={icon} size='small' />
          )
        )}
      </Styled.ButtonsGrid>

      <Styled.SignOutButton data-testid='sign-out-button' isClosed={!isOpen} onClick={onSignOut}>
        <Styled.AlignButton>
          <Icon name='cancel' width={24} height={24} />
          {isOpen && <Typography variant='caption'>Sair</Typography>}
        </Styled.AlignButton>
      </Styled.SignOutButton>
    </Styled.Container>
  )
}
