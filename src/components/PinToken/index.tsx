import * as Styled from '../PinToken/styles'
import { Stopwatch } from '../Stopwatch'

import React, { useState } from 'react'

import { PinGrid } from './components/PinGrid'

export interface PinProps {
  /**
   * Função sem retorno que será chamada ao digitar o pin
   */
  onPinChange: (pinToken: (number | undefined)[]) => void
  /**
   * Propriedades boolean que transforma o token em Disable
   */
  disabled?: boolean
  /**
   * Propriedades boolean que alterna de token para password
   */
  isPassword?: boolean
}

export const PinToken: React.FC<PinProps> = ({ onPinChange, disabled = false, isPassword = false }) => {
  const [pin, setPin] = useState<(number | undefined)[]>([])

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin]
    newPin[index] = pinEntry
    setPin(newPin)
  }

  if (pin.length === 6) {
    onPinChange(pin)
  } else if (pin.length === 4) {
    onPinChange(pin)
  }

  return (
    <Styled.Container>
      <PinGrid pin={pin} onPinChange={onPinChanged} isDisabled={disabled} isPassword={isPassword} />
      <Styled.Stopwatch>
        <Stopwatch initialTime={60} onResend={function (): void {}} />
      </Styled.Stopwatch>
    </Styled.Container>
  )
}
