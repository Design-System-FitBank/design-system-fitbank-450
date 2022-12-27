import React from 'react'
import * as Styled from './styles'

interface CardProps {
  /**
   * o size auto deixa o tamanho responsivo adaptando-se a largura máxima do pai
   */
  size?: 'pattern' | 'setSize'
  /**
   * Seta a altura do componente
   */
  height?: number
  /**
   * Seta a largura do componente
   */
  width?: number
  /**
   * Seta a elevação do componente atraves da sombra
   */
  elevation?: boolean
  /**
   * Seta a cor do componente podendo ser clara ou escura
   */
  color?: 'light' | 'dark'
}

export const Card: React.FC<CardProps> = ({ size = 'pattern', height, width, elevation = true, color = 'light' }) => {
  const convertToRem = pxValue => pxValue / 16

  return (
    <Styled.Container
      data-testeid='card'
      size={size}
      height={convertToRem(height)}
      width={convertToRem(width)}
      elevation={elevation}
      backgroundColor={color}
    />
  )
}
