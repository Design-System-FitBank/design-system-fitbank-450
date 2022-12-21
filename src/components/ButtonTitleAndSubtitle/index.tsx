import React from 'react'
import { Icon, IconsProps } from '../Icon'
import * as Styled from './styles'

interface ButtonTitleAndSubtitleProps {
  icon: IconsProps['name']
  title: string
  subtitle: string
  onClick: () => void
  disabled?: boolean
}

export const ButtonTitleAndSubtitle = ({ icon, title, subtitle, onClick, disabled = false }: ButtonTitleAndSubtitleProps) => {
  return (
    <Styled.ButtonAlign data-testid='button' onClick={onClick} disabled={disabled}>
      <Styled.Icon data-testid='button-icon'>
        <Icon name={icon} />
      </Styled.Icon>
      <Styled.TextAlign data-testid='button-text'>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
      </Styled.TextAlign>
    </Styled.ButtonAlign>
  )
}
