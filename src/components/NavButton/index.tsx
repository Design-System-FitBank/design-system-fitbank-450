import { Typography } from '../Typography'
import React from 'react'
import * as Styled from './styles'

interface NavButtonProps {
  icon: JSX.Element
  children?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick: () => void
}

export const NavButton = ({ icon, children, disabled = false, size = 'medium', onClick }: NavButtonProps) => {
  const returnElement = (value: string) => {
    switch (value) {
      case 'small':
        return (
          <Styled.Small data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>{icon}</Styled.Icon>
          </Styled.Small>
        )
      case 'large':
        return (
          <Styled.Large data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>{icon}</Styled.Icon>
            <Typography variant='bodySmall'>{children}</Typography>
          </Styled.Large>
        )
      default:
        return (
          <Styled.Container data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>{icon}</Styled.Icon>
            <Typography variant='caption'>{children}</Typography>
          </Styled.Container>
        )
    }
  }
  return returnElement(size)
}
