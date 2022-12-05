import React from 'react'
import * as Styled from './styles'
import { ContainerTab } from './components/ContainerTab'
import { IconsProps } from '../Icon'

interface TabProps {
  /**
   * Define o texto principal a ser mostrado na Tab.
   */
  children: string

  /**
   * Define o ícone a ser mostrado na Tab.
   */
  icon?: IconsProps['name']

  /**
   * Define se a tab está desabilitada ou não.
   */
  disabled?: boolean

  /**
   * Função sem retorno que será chamada ao se clicar na tab.
   */
  onClick: () => void
}

export const Tab: React.FC<TabProps> = ({ children, icon, disabled = false, onClick }) => {
  return (
    <Styled.Primary data-testeid='tab' onClick={onClick} disabled={disabled}>
      <ContainerTab icon={icon}></ContainerTab>
      {children}
    </Styled.Primary>
  )
}
