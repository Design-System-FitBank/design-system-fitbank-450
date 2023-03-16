import React from 'react'
import { Container } from './styles'
import { Typography } from '../Typography'
import { Button } from '../Button'

export interface StopwatchProps {
  /**
   * Função recebida ao clicar no botão de reenviar
   */
  onResend: () => void
  /**
   * Propriedade recebida em segundos
   */
  initialTime: number
}

export const Stopwatch: React.FC<StopwatchProps> = ({ onResend, initialTime }) => {
  const [timer, setTimer] = React.useState(initialTime)
  const [showTime, setShowTime] = React.useState(true)
  const [timeCounter, setTimeCounter] = React.useState('')

  function onReset() {
    setTimer(initialTime)
    setTimeCounter('')
    setShowTime(true)
  }

  const getSeconds = (sec: number) => {
    const data = new Date(sec * 1000)
    return data.toLocaleTimeString('pt-BR', {
      minute: '2-digit',
      second: '2-digit'
    })
  }

  React.useEffect(() => {
    if (timer >= 0) {
      setTimeout(() => {
        setTimer(timer - 1)
        setTimeCounter(getSeconds(timer))
        if (timer == 0) setShowTime(false)
      }, 1000)
    } else {
      clearTimeout(undefined)
    }
  }, [timer])

  return (
    <Container data-testid='stopwatch-container'>
      <Typography variant='body'>{showTime ? 'Aguardando' : 'Não recebeu?'}</Typography>

      {showTime ? (
        <Typography variant='bodyBold'>{timeCounter ? timeCounter : getSeconds(initialTime)}</Typography>
      ) : (
        <Button data-testid='button' disabled={false} size='small' type='secondary' onClick={onReset}>
          Reenviar
        </Button>
      )}
    </Container>
  )
}
