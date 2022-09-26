import React from 'react'
import * as Styled from './styles'

interface ButtonProps {
  children: string
  disabled?: boolean
  icon: JSX.Element
  size?: 'small' | 'large'
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
  const returnElement = (value: string) => {
    switch (value) {
      case 'tertiary':
        return (
          <Styled.Tertiary data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
            <Styled.Icon data-testeid='iconPrefix'>{!iconRight && icon}</Styled.Icon>
            <Styled.BoxLabel data-testeid='boxLabel'>{children}</Styled.BoxLabel>
            <Styled.Icon data-testeid='iconSuffix'>{iconRight && icon}</Styled.Icon>
          </Styled.Tertiary>
        )
      case 'secondary':
        return (
          <Styled.Secondary data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
            <Styled.Icon data-testeid='iconPrefix'>{!iconRight && icon}</Styled.Icon>
            <Styled.BoxLabel data-testeid='boxLabel'>{children}</Styled.BoxLabel>
            <Styled.Icon data-testeid='iconSuffix'>{iconRight && icon}</Styled.Icon>
          </Styled.Secondary>
        )
      default:
        return (
          <Styled.Primary data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
            <Styled.Icon data-testeid='iconPrefix'>{!iconRight && icon}</Styled.Icon>
            <Styled.BoxLabel data-testeid='boxLabel'>{children}</Styled.BoxLabel>
            <Styled.Icon data-testeid='iconSuffix'>{iconRight && icon}</Styled.Icon>
          </Styled.Primary>
        )
    }
  }
  return returnElement(type)
}
