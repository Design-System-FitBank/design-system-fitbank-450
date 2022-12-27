import { Typography } from '../../../Typography'
import React from 'react'

import * as Styled from './styles'

type LabelProps = {
  children: string,
  isSmall?: boolean
}

export const LabelButton: React.FC<LabelProps> = ({ children, isSmall = false }) => {
  const label = children
  return (
    <Styled.Container>
      {isSmall
        ? (
        <Typography variant='buttonSmall'>{children}</Typography>
        )
        : (
        <Typography variant='button'>{children}</Typography>
      )}
    </Styled.Container>
  )
}
