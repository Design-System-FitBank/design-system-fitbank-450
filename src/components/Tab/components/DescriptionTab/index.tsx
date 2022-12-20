import React from 'react'

import * as Styled from './styles'

type DescriptionProps = {
  children: string
}

export const DescriptionTab: React.FC<DescriptionProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}
