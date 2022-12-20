import React from 'react'

import * as Styled from './styles'

type LabelProps = {
  children: string
}

export const LabelTab: React.FC<LabelProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}
