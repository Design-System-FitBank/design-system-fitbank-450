import * as Styled from './styles'

import React, { useRef, useState } from 'react'

export interface PinProps {
  /**
   * Função sem retorno que será chamada ao digitar o pin
   */
  onPinChange: (pinToken: number[] | undefined, index: number) => void
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

  // console.log(pin)

  const changePinTokenFocus = (pinIndex: number) => {
    const ref = inputRefs.current[pinIndex]

    if (ref) {
      ref.focus()
    }
  }

  const handleChangePinToken = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())

    if (isNaN(pinNumber)) {
      setError(true)
      return
    }

    setError(false)
    changePinTokenFocus(index + 1)
    setPin([...pin!, pinNumber])
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = event.nativeEvent.code

    if (key !== 'Backspace') {
      return
    }

    console.log(index)

    setPin(pin?.filter((_, pinIndex) => pinIndex !== index))
    //changePinTokenFocus(index - 1)
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
        />
      ))}
    </Styled.Container>
  )
}
