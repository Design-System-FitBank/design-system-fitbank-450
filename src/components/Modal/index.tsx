import React, { ReactNode, useState } from 'react'

import * as Styled from './styles'

import { Button } from '../Button'
import { Typography } from '../Typography'

interface ModalProps {
  title: string
  buttonTitle: string
  children: React.ReactNode
  isDisable: boolean
  active: boolean
  onClick: () => void
}

export const Modal = ({ title, buttonTitle, children, isDisable, onClick}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Styled.Container isClosed={!isOpen} data-testid='box-container'>
      <Styled.ModalOverlay data-testid='modal-overlay' />
      <Styled.ModalContainer data-testid='modal-container'>
        <Styled.ModalHeader>
          <Typography variant='h4'>{title}</Typography>
          <Button size='small' type='secondary' onClick={() => setIsOpen(!isOpen)}>Cancelar</Button>
        </Styled.ModalHeader>

        <Styled.ModalBody>
          {children}
        </Styled.ModalBody>

        <Styled.ModalFooter>
          <Button disabled={isDisable} size='large' type='primary' onClick={onClick}>{buttonTitle}</Button>
        </Styled.ModalFooter>
      </Styled.ModalContainer>
    </Styled.Container>
  )
}
