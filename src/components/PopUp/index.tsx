import React from 'react'
import * as Styled from './styles'
import { Loading } from '../Loading'
import { Icon } from '../Icon'
import { Typography } from '../Typography'
import { Modal } from '../Modal'

interface PopUpProps {
  /**
   * Tela de carregamento que precede as mensagens de sucesso ou erro
   */
  loading?: boolean
  /**
   * Decisão da mensagem de sucesso ou erro
   */
  success?: boolean
  /**
   * Recebe uma mensagem de sucesso caso success = true e uma mensagem de erro caso success = false
   */
  message?: string
}

export const PopUp = ({ loading, success, message }: PopUpProps) => {
  const [isOpen] = React.useState(true)
  return (
    <Modal type='secondary' width={656} height={308} isEnabled={isOpen}>
      {loading ? (
        <Styled.BoxLoading data-testid='loading'>
          <Loading text='Aguarde' />
        </Styled.BoxLoading>
      ) : success ? (
        <Styled.SuccessContainer data-testid='success-Container'>
          <Icon name='done' height={56} width={56} />
          <Typography variant='h6'> Concluído </Typography>
          <Typography variant='subtitle' data-testid='message-success'>
            {message}
          </Typography>
        </Styled.SuccessContainer>
      ) : (
        <Styled.ErrorContainer data-testid='error-Container'>
          <Styled.Icon data-testid='icon-cancel'>
          <Icon name='cancel' height={56} width={56} />
          </Styled.Icon >
          <Typography variant='h6'> Operação malsucedida </Typography>
          <Typography variant='subtitle'>{message}</Typography>
        </Styled.ErrorContainer>
      )}
    </Modal>
  )
}
