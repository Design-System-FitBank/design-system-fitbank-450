import * as Styled from './styles'

import React, { useRef, useState } from 'react'

export interface PinProps {
  /**
   * Função sem retorno que será chamada ao digitar o pin
   */
  onPinChange: (pinToken: number[]) => void
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
  const inputRefs = useRef<HTMLInputElement[]>([])
  const [pin, setPin] = useState<number[]>([])
  const [error, setError] = useState(false)

  console.log('pin: ' + pin)

  const changePinTokenFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex]

    if (ref) {
      ref.focus()
    }
  }

  const handleChangePinToken = (event: any, index: number) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())

    if (isNaN(pinNumber) || value === ' ') {
      setError(true)
      return
    }

    setPin([...pin, pinNumber])
    setError(false)
    changePinTokenFocus(index + 1)

    if (pin.length === 6) {
      onPinChange(pin)
    } else if (pin.length === 4) {
      onPinChange(pin)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = event.nativeEvent.code

    if (key !== 'Backspace') {
      return
    }

    if (pin[index] === undefined) {
      changePinTokenFocus(index - 1)
    } else {
      setPin(pin?.filter((_, pinIndex) => pinIndex !== index))
    }
  }

  return (
    <Styled.Container data-testid='container'>
      {Array.from({ length: isPassword ? 4 : 6 }, (_, index) => (
        <Styled.PinBox
          maxLength={1}
          key={index}
          type={isPassword ? 'password' : 'text'}
          ref={item => {
            if (item) {
              inputRefs.current[index] = item
            }
          }}
          isError={error}
          onChange={value => {
            handleChangePinToken(value, index)
          }}
          onKeyDown={value => handleKeyDown(value, index)}
          disabled={disabled}
        />
      ))}
    </Styled.Container>
  )
}
