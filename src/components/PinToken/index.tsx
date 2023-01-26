import * as Styled from './styles'

import React, { useRef, useState } from 'react'

export interface PinProps {
  /**
   * Função sem retorno que será chamada ao digitar o pin
   */
  onChange: (pinToken: number[]) => void
  /**
   * Propriedades boolean que transforma o token em Disable
   */
  disabled?: boolean
  /**
   * Propriedades boolean que alterna de token para password
   */
  isPassword?: boolean
}

export const PinToken: React.FC<PinProps> = ({ onChange, disabled = false, isPassword = false }) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const [error, setError] = useState(false)

  console.log(inputRefs.current)

  const changePinTokenFocus = (pinIndex: number) => {
    if (pinIndex === undefined) {
      inputRefs.current[0].focus()
    }
    inputRefs.current[pinIndex].focus()
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
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = event.nativeEvent.code

    if (key !== 'Backspace') {
      return
    }

    changePinTokenFocus(index - 1)
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
          //onKeyDown={value => handleChangePinToken(value, index)}
        />
      ))}
    </Styled.Container>
  )
}
