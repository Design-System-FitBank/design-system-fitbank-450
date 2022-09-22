import React from 'react'
import { Home } from './img-test'
import * as Styled from './styles'

interface ButtonProps {
  label: string
  disabled?: boolean
  onClick: () => void
}

interface IconProps {}

export const Button: React.FC<ButtonProps> = ({ label, disabled = false, onClick }) => {
  return (
    <Styled.Container data-testeid='button' onClick={onClick} disabled={disabled}>
      <Styled.Icon data-testeid='iconPrefix'>
        <Home />
      </Styled.Icon>
      {label}
      <Styled.Icon data-testeid='iconSuffix'>
        <Home />
      </Styled.Icon>
    </Styled.Container>
  )
}
