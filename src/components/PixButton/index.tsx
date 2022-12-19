import React from 'react'
import { Typography } from '../Typography'
import { Icon } from '../Icon'
import * as Styled from './styles'

interface PixButtonProps {
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  onClick: () => void
}

export const PixButton = ({ disabled = false, size = 'medium', onClick }: PixButtonProps) => {
  const returnElement = (value: string) => {
    switch (value) {
      case 'small':
        return (
          <Styled.Small data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>
              <Icon name='topup' />
            </Styled.Icon>
            <Styled.Text data-testid='nav-button-text'>
            <Typography variant='h5'> Copia e Cola</Typography>
            <Typography variant='subtitle'> cole aqui</Typography>
            </Styled.Text>
          </Styled.Small>
        )
      case 'medium':
        return (
          <Styled.Small data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>
            <Icon name="authorization" />
            </Styled.Icon>
            <p> Cobrança pix  </p>
            <p> Cole o código pix</p>
          </Styled.Small>
        )
      default:
        return (
          <Styled.Small data-testid='nav-button' onClick={onClick} disabled={disabled}>
            <Styled.Icon data-testid='nav-button-icon'>
            <Icon name="download" />
            </Styled.Icon>
            <p> Dados bancários </p>
            <p> Informe agência e conta para fazer trasnferências </p>
          </Styled.Small>
        )
    }
  }
  return returnElement(size)
}
