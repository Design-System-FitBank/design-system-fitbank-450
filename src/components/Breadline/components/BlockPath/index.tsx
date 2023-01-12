import { Typography } from '../../../Typography'
import React from 'react'
import * as Styled from './styles'

type BlockPathProps = {
  label: string
}

export const BlockPath: React.FC<BlockPathProps> = ({ label }) => {
  return (
    <Styled.Container>     
      <Typography variant='h4'>/</Typography>
      <Styled.ContainerLabel>
        <Typography variant='h5'>{label}</Typography>
      </Styled.ContainerLabel>
    </Styled.Container>
  )
}
