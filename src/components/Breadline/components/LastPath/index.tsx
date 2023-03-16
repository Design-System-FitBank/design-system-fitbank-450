import React from 'react'
import * as Styled from './styles'
import { Typography } from '../../../Typography'

interface LastPathProps {
  label: string
}

export const LastPath: React.FC<LastPathProps> = ({ label }) => {
  return (
    <Styled.Container>
        <Typography variant='bodyMediumBold'>/</Typography>
      <Styled.ContainerLabel>
        <Typography variant='captionBold'>{label}</Typography>
      </Styled.ContainerLabel>
    </Styled.Container>
  )
}
