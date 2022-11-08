import React, { ReactNode } from 'react'

import * as Styled from './styles'

interface LoadingProps {
  children?: ReactNode
}

export const Loading: React.FC<LoadingProps> = ({ children = 'Loading' }) => {
  return (
    <Styled.Container>{children}</Styled.Container>
  )
}
