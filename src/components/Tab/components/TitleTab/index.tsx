import React from 'react'

import * as Styled from './styles'

type TitleProps = {
  children: string
}

export const TitleTab: React.FC<TitleProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>
}
