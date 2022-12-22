import React from 'react'

import * as Styled from './styles'

import { Button } from '../../../Button'
import { Typography } from '../../../Typography'

interface HeaderProps {
  title?: string
  closeFunction: () => void
}

export const HeaderModal: React.FC<HeaderProps> = ({ title, closeFunction }) => {
  return (
    <Styled.HeaderModal data-testid='modal-header'>
      <Styled.TitleContainer>
        <Typography variant='h5'>{title}</Typography>
      </Styled.TitleContainer>
      <Button size='small' type='secondary' onClick={closeFunction}>
        Cancelar
      </Button>
    </Styled.HeaderModal>
  )
}
