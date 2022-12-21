import React from 'react'

import { Typography } from '../Typography'

import * as Styled from './styles'

export interface FooterProps {
  /**
   * Mensagem de contato
   */
  message: string
  /**
   * Principal número de telefone para contato
   */
  phoneNumber: string
  /**
   * Número de telefone alternativo não obrigatorio para contato
   */
  secondaryPhoneNumber?: string
  /**
   * Email para contato
   */
  email: string
}

export const Footer = ({ message, phoneNumber, secondaryPhoneNumber, email }: FooterProps) => {
  return (
    <Styled.Container data-testid='container'>
      <Typography variant='body'>{message}</Typography>
      <Typography variant='body'>
        {secondaryPhoneNumber ? `${phoneNumber} | ${secondaryPhoneNumber}` : phoneNumber}
      </Typography>
      <Typography variant='body'>{email}</Typography>
    </Styled.Container>
  )
}
