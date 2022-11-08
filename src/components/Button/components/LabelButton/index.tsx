import React from 'react'

import * as Styled from './styles'

type LabelProps = {
  children: string,
  isSmall: boolean
}

export const LabelButton: React.FC<LabelProps> = ({ children, isSmall }) => {
  return (
    <Styled.Container isSmall={isSmall}>
      {children}
    </Styled.Container>
  )
}
