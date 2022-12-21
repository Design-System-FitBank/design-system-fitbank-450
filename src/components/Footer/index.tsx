import React from 'react'

import * as Styled from './styles'

export interface FooterProps {
  children?: string
}

export const Footer = ({children= 'Footer'}: FooterProps) => {
  return (
    <Styled.Container data-testid='container'>{children}</Styled.Container>
  )
}
