import React from 'react'
import { Typography } from '../../../Typography'
import { LabelContent } from './styles'

interface LabelProps {
  children: string
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return (
    <LabelContent>
      <Typography variant='bodyLarge'>{children}</Typography>
    </LabelContent>
  )
}
