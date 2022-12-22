import React from 'react'
import * as Styled from './styles'
import { Typography } from '../../../Typography'

interface LastPathProps {
  label: string
}

export const LastPath: React.FC<LastPathProps> = ({ label }) => {
  return (
    <Styled.Container>
        <Typography variant='h4'>/</Typography>
      <Styled.ContainerLabel>
        <Typography variant='h5'>{label}</Typography>
      </Styled.ContainerLabel>
    </Styled.Container>
  )
}
