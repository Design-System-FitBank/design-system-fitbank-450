import React from 'react'
import * as Styled from './styles'

interface NavButtonProps {
  icon: JSX.Element
  children?: string
  disabled?: boolean
  onClick: () => {}
}

export const NavButton = ({ icon, children, disabled = false, onClick }: NavButtonProps) => {
  return (
    <Styled.Container data-testid='nav-button' onClick={onClick} disabled={disabled}>
      {icon}
      {children}
    </Styled.Container>
  )
}
