import { Typography } from '../../../Typography'
import React from 'react'
import * as Styled from './styles'

type BlockPathProps = {
  label: string
}

export const BlockPath: React.FC<BlockPathProps> = ({ label }) => {
  return (
    <Styled.Container>     
      <Typography variant='bodyMediumBold'>/</Typography>
      <Styled.ContainerLabel>
        <Typography variant='captionBold'>{label}</Typography>
      </Styled.ContainerLabel>
    </Styled.Container>
  )
}
