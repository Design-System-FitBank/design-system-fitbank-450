import React from 'react'
import * as Styled from './styles'
import { Theme } from '../../theme'
import { Loading } from '../Loading'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { Modal } from '../Modal'

interface PopUpProps {
  /**
   * Tela de carregamento que precede as mensagens de sucesso ou erro
   **/
  loading: boolean
  /**
   * Decisão da mensagem de sucesso ou erro
   **/
  success: boolean
  /**
   * Recebe uma mensagem de sucesso caso success = true e uma mensagem de erro caso success = false
   **/
  message: string
}

export const PopUp = ({ loading, success, message }: PopUpProps) => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <>
      <Modal type='secondary' width={656} height={308} isEnabled={isOpen}>
        {loading ? (
          <Styled.BoxLoading>
            <Loading text='Aguarde' data-testid='loading' />
          </Styled.BoxLoading>
        ) : success ? (
          <Styled.SuccessContainer data-testid='success-Container'>
            <Icon name='done' height={70} width={70} color={Theme.colors.success} />
            <Styled.TextAllign>
              <Typography variant='h6'> Concluído </Typography>
            </Styled.TextAllign>
            <Typography variant='subtitle'>{message}</Typography>
          </Styled.SuccessContainer>
        ) : (
          <Styled.ErrorContainer data-testid='error-container'>
            <Icon name='cancel' height={80} width={80} color={Theme.colors.error} />
            <Styled.TextAllign>
              <Typography variant='h6'> Operação mal sucedida </Typography>
            </Styled.TextAllign>
            <Typography variant='subtitle'>{message}</Typography>
          </Styled.ErrorContainer>
        )}
      </Modal>
    </>
  )
}
