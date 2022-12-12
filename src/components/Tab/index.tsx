import React from 'react'
import * as Styled from './styles'
import { ContainerTab } from './components/ContainerTab'
import { IconsProps } from '../Icon'

interface TabProps {
  /**
   * Define o texto principal a ser mostrado na aba.
   */
  title: string

  /**
   * Define o texto secundário a ser mostrado na aba.
   */
  description: string

  /**
   * Define o ícone a ser mostrado na aba.
   */
  icon?: IconsProps['name']

  /**
   * Define se a aba está desabilitada ou não.
   */
  disabled?: boolean

  /**
   * Função sem retorno que será chamada ao se clicar na aba.
   */
  onClick: () => void
}

export const Tab: React.FC<TabProps> = ({ title, description, icon, disabled = false, onClick }) => {
  return (
    <Styled.Primary data-testeid='tab' onClick={onClick} disabled={disabled}>
      <ContainerTab icon={icon} title={title} description={description}></ContainerTab>
    </Styled.Primary>
  )
}
