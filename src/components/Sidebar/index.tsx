import { Logo } from '../Logo'
import React, { ReactNode } from 'react'

import * as Styled from './styles'

interface SidebarProps {
  children: ReactNode
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <Styled.Container>
      <Styled.IconContainer>
        <Logo name='default' />
      </Styled.IconContainer>

      
      {children}
    </Styled.Container>
  )
}
