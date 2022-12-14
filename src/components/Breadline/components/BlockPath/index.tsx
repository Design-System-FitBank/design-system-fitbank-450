import { Typography } from '../../../Typography'
import React from 'react'
import * as Styled from './styles'

type BlockPathProps = {
  label: string
  first?: boolean
  last?: boolean
  onClick?: () => void
}

export const BlockPath: React.FC<BlockPathProps> = ({ label, first, last, onClick}) => {
  return (
    <Styled.Container
      onClick={onClick}
    >
      {!first && (
        <Styled.ContainerBar>
          <Typography variant='h5'>/</Typography>
        </Styled.ContainerBar>
      )}

      {!last && (
        <Styled.ContainerLabel>
          <Typography variant='bodyBold'>{label}</Typography>
        </Styled.ContainerLabel>
      )}
      {last && 
        <Styled.ContainerLabel
          last={last}
        >
          <Typography variant='bodyBold'>{label}</Typography>
        </Styled.ContainerLabel>
      }
    </Styled.Container>
  )
}
