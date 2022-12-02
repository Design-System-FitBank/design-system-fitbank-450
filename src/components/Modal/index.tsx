import React from 'react'

import * as Styled from './styles'

import { Button } from '../Button'
import { Typography } from '../Typography'

interface ModalProps {
  /**
   * Título mostrado no cabeçalho do modal.
  */
  title: string
  /**
   * Título mostrado no botão do rodapé do modal.
  */
  buttonTitle: string
  /**
   * Flag que indica o status de desabilitado do botão do rodapé do modal.
  */
  isDisable: boolean
  /**
   * Função executada pelo botão do rodapé do modal
  */
  onClick: () => void
  /**
   * Variável que recebe uma string ou qualquer outro componente React
  */
  children: JSX.Element[]
}

export const Modal = ({ title, buttonTitle, children, isDisable, onClick }: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <Styled.Container isClosed={!isOpen} data-testid='box-container'>
      <Styled.ModalBackdrop isClosed={!isOpen} data-testid='modal-overlay' />
      <Styled.ModalContainer isClosed={!isOpen} data-testid='modal-container'>
        <Styled.ModalHeader>
          <Styled.TitleContainer>
            <Typography variant='h5'>{title}</Typography>
          </Styled.TitleContainer>
          <Button size='small' type='secondary' onClick={() => setIsOpen(!isOpen)}>
            Cancelar
          </Button>
        </Styled.ModalHeader>
        <Styled.ModalBody>{children}</Styled.ModalBody>
        <Styled.ModalFooter>
          <Button disabled={isDisable} size='large' type='primary' onClick={onClick}>
            {buttonTitle}
          </Button>
        </Styled.ModalFooter>
      </Styled.ModalContainer>
    </Styled.Container>
  )
}
