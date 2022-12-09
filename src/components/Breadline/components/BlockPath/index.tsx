import { Typography } from '../../../Typography'
import React from 'react'
import * as Styled from './styles'

type BlockPathProps = {
  label: string
  first?: boolean
  last?: boolean
  onClick?: () => void
}

export const BlockPath: React.FC<BlockPathProps> = ({ label, first, last }) => {

  const clickOnPath = () => { 
    alert("Clicou no " + label)
  }
  return (
    <Styled.Container
      onClick={clickOnPath}
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
      } {/* ainda vou add o css */}
    </Styled.Container>
  )
}
