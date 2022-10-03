import React from 'react'
import * as Styled from './styles'

interface NavButtonProps {
  icon: JSX.Element
  children?: string
  onClick: () => {}
}

export const NavButton = ({ icon, children, onClick }: NavButtonProps) => {
  return (
    <Styled.Container data-testid='nav-button' onClick={onClick}>
      {icon}
      {children}
    </Styled.Container>
  )
}
