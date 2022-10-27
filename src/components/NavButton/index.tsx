import React from 'react'
import { Icon, IconsProps } from '../Icon'
import * as Styled from './styles'

interface NavButtonProps {
  icon: IconsProps['name']
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
            <Styled.Icon data-testid='nav-button-icon'>
              <Icon name={icon as any} />
            </Styled.Icon>
          </Styled.Small>
        )
      case 'large':
        return (
          <Styled.Large data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>
              <Icon name={icon as any} />
            </Styled.Icon>
            <Styled.LabelLarge data-testid='nav-labelLarge'>
              {children}
            </Styled.LabelLarge>
          </Styled.Large>
        )
      default:
        return (
          <Styled.Container data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-icon'>
              <Icon name={icon as any} width={38} height={38} />
            </Styled.Icon>
            <Styled.Label data-testid='nav-label'>
              {children}
            </Styled.Label>
          </Styled.Container>
        )
    }
  }
  return returnElement(size)
}
