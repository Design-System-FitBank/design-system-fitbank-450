import { Typography } from '../Typography'
import React from 'react'
import { Icon, IconsProps } from '../Icon'
import * as Styled from './styles'

export interface NavButtonProps {
  icon: IconsProps['name']
  children?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick: () => void
}

export const NavButton = ({ icon, children, disabled = false, size = 'medium', onClick }: NavButtonProps) => {
  const returnElement = (value: string) => {
    const words = !children ? [''] : children?.split(' ')
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
              {words.length > 1 && (
                <Typography variant='buttonSmall'>
                  {`${words[0].substring(0, 10)} ${words[1].substring(0, 10)}`}
                </Typography>
              )}
              {words.length === 1 && <Typography variant='buttonSmall'>{words[0].substring(0, 10)}</Typography>}
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
              {words.length > 1 && (
                <Typography variant='caption'>{`${words[0].substring(0, 14)} ${words[1].substring(0, 14)}`}</Typography>
              )}
              {words.length === 1 && <Typography variant='caption'>{words[0].substring(0, 14)}</Typography>}
            </Styled.Label>
          </Styled.Container>
        )
    }
  }
  return returnElement(size)
}
