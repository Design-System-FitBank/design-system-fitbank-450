import React from 'react'

import { Typography } from '../Typography'

import * as Styled from './styles'

export interface FooterProps {
  message: string
  phoneNumber: string
  secondaryPhoneNumber?: string
  email: string
}

export const Footer = ({ message, phoneNumber, secondaryPhoneNumber, email}: FooterProps) => {
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
