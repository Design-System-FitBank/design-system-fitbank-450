import React from 'react'

import * as Styled from './styles'

import { HeaderModal } from './components/HeaderModal'
import { FooterModal } from './components/FooterModal'

export interface ModalProps {
  /**
   * Título mostrado no cabeçalho do modal.
   */
  title: string
  /**
   * Título mostrado no botão do rodapé do modal.
   */
  buttonTitle: string
  /**
   * Variável que indica o status do botão do rodapé do modal.
   */
  isDisable: boolean
  /**
   * Valor em pixel da largura do modal
   */
  width?: number
  /**
   * Função executada pelo botão do rodapé do modal
   */
  onClick: () => void
  /**
   * Variável que recebe uma string ou qualquer outro componente React
   */
  children: JSX.Element
}

export const Modal: React.FC<ModalProps> = ({ title, buttonTitle, isDisable = false, width, onClick, children }) => {
  const [isOpen, setIsOpen] = React.useState(true)
  const [opacity, setOpacity] = React.useState(0)

  const convertToRem = pxValue => pxValue / 16

  const handleClose = () => {
    setOpacity(0)
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 300)
    return () => clearTimeout(timer)
  }

  React.useEffect(() => {
    setOpacity(1)
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <Styled.Container opacity={opacity} data-testid='box-container'>
          <Styled.BackdropModal data-testid='backdrop-modal' />
          <Styled.ContainerModal width={convertToRem(width)} data-testid='container-modal'>
            <HeaderModal title={title} closeFunction={handleClose} />
            <Styled.BodyModal>{children}</Styled.BodyModal>
            <FooterModal buttonTitle={buttonTitle} isDisable={isDisable} onClick={onClick}/>
          </Styled.ContainerModal>
        </Styled.Container>
      )}
    </>
  )
}
