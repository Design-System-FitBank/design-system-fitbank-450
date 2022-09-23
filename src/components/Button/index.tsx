import React from 'react'
import * as Styled from './styles'

interface ButtonProps {
  children: string
  disabled?: boolean
  icon: JSX.Element
  size?: 'small' | 'large'
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

interface IconProps {}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  disabled = false,
  iconRight = false,
  size = 'large',
  onClick
}) => {
  return (
    <Styled.Container data-testeid='button' onClick={onClick} disabled={disabled} size={size}>
      <Styled.Icon data-testeid='iconPrefix'>{!iconRight && icon}</Styled.Icon>
      <Styled.BoxLabel data-testeid='boxLabel'>{children}</Styled.BoxLabel>
      <Styled.Icon data-testeid='iconSuffix'>{iconRight && icon}</Styled.Icon>
    </Styled.Container>
  )
}
