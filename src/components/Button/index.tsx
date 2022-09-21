import React from 'react'
import * as Styled from './styles'

interface ButtonProps {
  label: string
  size: 'small' | 'large'
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, size, onClick }) => {
  return (
    <Styled.Container data-testeid='button' size={size} onClick={onClick}>
      {label}
    </Styled.Container>
  )
}
