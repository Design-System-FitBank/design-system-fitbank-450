import { Typography } from '../../../Typography'
import React from 'react'
import * as Styled from './styles'

type BlockPathProps = {
  label: string
  first?: boolean
  onClick?: () => void
}

export const BlockPath: React.FC<BlockPathProps> = ({ label, first, onClick }) => {
  return (
    <Styled.Container onClick={onClick}>
      {first && (
        <Styled.ContainerLabel>
          <Typography variant='h5'>{label}</Typography>
        </Styled.ContainerLabel>
      )}

      {!first && (
        <Styled.Container>
          <Styled.ContainerLabel>
            <Typography variant='h4'>/</Typography>
          </Styled.ContainerLabel>
          <Styled.ContainerLabel>
            <Typography variant='h5'>{label}</Typography>
          </Styled.ContainerLabel>
        </Styled.Container>
      )}
    </Styled.Container>
  )
}
