import React from 'react'
import { Home } from './img-test'
import * as Styled from './styles'

interface ButtonProps {
  label: string
  onClick: () => void
}

interface IconProps {}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <Styled.Container data-testeid='button' onClick={onClick}>
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
