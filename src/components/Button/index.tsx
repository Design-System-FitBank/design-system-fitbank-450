import React from 'react'
import { ContainerButton } from './components/ContainerButton'
import { IconsProps } from '../Icon'
import * as Styled from './styles'

export interface ButtonProps {
  children: string
  disabled?: boolean
  icon?: IconsProps['name']
  /**
   * o size auto deixa o tamanho responsivo adaptando-se a largura máxima do pai
   */
  size?: 'small' | 'large' | 'auto'
  /**
   * Quando o type for informado o estilo do Button será mudado
   * O default é o estilo primary
   */
  type?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Quando iconRight for informado o ícone ficará à direita do label.
   * O padrão é a posição do ícone à esquerda
   */
  iconRight?: boolean
  /**
   * Função sem retorno que será chamada ao acionar o click
   */
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  disabled = false,
  iconRight = false,
  size = 'large',
  type = 'primary',
  onClick
}) => {
  const isSmall = size === 'small'
  const returnElement = () => {
    switch (type) {
      case 'tertiary':
        return (
          <Styled.Tertiary data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
            <ContainerButton
              props={{
                icon,
                iconRight,
                isSmall,
                children
              }}
            />
          </Styled.Tertiary>
        )
      case 'secondary':
        return (
          <Styled.Secondary data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
            <ContainerButton
              props={{
                icon,
                iconRight,
                isSmall,
                children
              }}
            />
          </Styled.Secondary>
        )
      default:
        return (
          <Styled.Primary data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
            <ContainerButton
              props={{
                icon,
                iconRight,
                isSmall,
                children
              }}
            />
          </Styled.Primary>
        )
    }
  }
  return returnElement()
}
