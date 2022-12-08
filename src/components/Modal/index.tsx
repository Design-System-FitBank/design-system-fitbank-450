import React from 'react'

import * as Styled from './styles'

import { HeaderModal } from './components/HeaderModal'
import { FooterModal } from './components/FooterModal'

export interface ModalProps {
  /**
   * Título mostrado no cabeçalho do modal.
   */
  title?: string
  /**
   * Título mostrado no botão do rodapé do modal.
   */
  buttonTitle?: string
  /**
   * Variável que indica se o modal está ativado
   */
  isEnabled: boolean
  /**
   * Variável que indica o status do botão do rodapé do modal.
   */
  isButtonDisable?: boolean
  /**
   * Valor em pixel da largura do modal
   */
  width?: number
  /**
   * Valor em pixel da largura do modal
   */
  height?: number
  /**
   * Quando o type for informado o estilo do Modal será alterado.
   * O default é o estilo primary
   */
  type?: 'primary' | 'secondary'
  /**
   * Função executada pelo botão do rodapé do modal
   */
  onClick: () => void
  /**
   * Função executada após o modal ser fechado
   */
  onClose?: () => void
  /**
   * Variável que recebe uma string ou qualquer outro componente React
   */
  children: JSX.Element
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isEnabled,
  buttonTitle,
  isButtonDisable = false,
  width,
  height,
  type = 'primary',
  onClick,
  onClose = () => {},
  children
}) => {
  const [isOpen, setIsOpen] = React.useState(isEnabled)
  const [opacity, setOpacity] = React.useState(0)

  const convertToRem = pxValue => pxValue / 16

  const handleClose = () => {
    setOpacity(0)
    onClose()
    const timer = setTimeout(() => {
      setIsOpen(false)
    }, 300)
    return () => clearTimeout(timer)
  }

  const handleOpen = () => {
    setIsOpen(true)
    setTimeout(() => {
      setOpacity(1)
    }, 1)
  }

  React.useEffect(() => {
    isEnabled ? handleOpen() : handleClose()
  }, [isEnabled])

  return (
    <>
      {isOpen && (
        <Styled.Container opacity={opacity} data-testid='box-container'>
          <Styled.BackdropModal data-testid='backdrop-modal' />
          <Styled.ContainerModal width={convertToRem(width)} height={convertToRem(height)} type={type} data-testid='container-modal'>
            {type === 'primary' && <HeaderModal title={title} closeFunction={handleClose} />}
            <Styled.BodyModal data-testid='body-modal'>{children}</Styled.BodyModal>
            {type === 'primary' && (
              <FooterModal buttonTitle={buttonTitle} isDisable={isButtonDisable} onClick={onClick} />
            )}
          </Styled.ContainerModal>
        </Styled.Container>
      )}
    </>
  )
}
