import React, { useState } from 'react'
import * as Styled from './styles'

interface CardProps {
  size?: 'pattern' | 'setSize'
  height?: number
  width?: number
  elevation?: boolean
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
    ></Styled.Container>
  )
}
