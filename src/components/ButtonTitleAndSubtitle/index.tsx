import { Typography } from '../Typography'
import React from 'react'
import { Icon, IconsProps } from '../Icon'
import * as Styled from './styles'

export interface ButtonTitleAndSubtitleProps {
  /**
   * icone do botao
   */
  icon: IconsProps['name']
  /**
   * Titulo do botao
   */
  title: string
  /**
   * Subtitulo do botao
   */
  subtitle: string
  /**
   * funcao sem retorno que sera chamada ao acionar o click
   */
  onClick: () => void
  /**
   * Propriedades booleana que transforma o token em Disable
   */
  disabled?: boolean
}

export const ButtonTitleAndSubtitle = ({
  icon,
  title,
  subtitle,
  onClick,
  disabled = false
}: ButtonTitleAndSubtitleProps) => {
  return (
    <Styled.ButtonAlign data-testid='button' onClick={onClick} disabled={disabled}>
      <Styled.Icon data-testid='button-icon'>
        <Icon name={icon} data-testid='icon' width={48} height={48} />
      </Styled.Icon>
      <Styled.TextAlign data-testid='button-aligntext'>
        <Styled.Title data-testid='button-title'>
          <Typography variant='bodyLarge'>{title}</Typography>
        </Styled.Title>
        <Styled.Subtitle data-testid='button-subtitle'>
          <Typography variant='bodySmall'>{subtitle}</Typography>
        </Styled.Subtitle>
      </Styled.TextAlign>
    </Styled.ButtonAlign>
  )
}
