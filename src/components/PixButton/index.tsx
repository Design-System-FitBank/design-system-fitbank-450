import React from 'react'
import { Icon, IconsProps } from '../Icon'
import * as Styled from './styles'

interface PixButtonProps {
  icon: IconsProps['name']
  title: string
  subtitle: string
  onClick: () => void
}

export const PixButton = ({ icon, title, subtitle, onClick }: PixButtonProps) => {
  return (
    <Styled.ButtonAlign data-testid='button' onClick={onClick}>
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
