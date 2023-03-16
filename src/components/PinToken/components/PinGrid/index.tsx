import { Container, PinBox } from './styles'
import React, { useRef, useState } from 'react'
import { values } from 'cypress/types/lodash'

export interface PinTokenProps {
  onPinChange: Function
  isDisabled?: boolean
  isPassword?: boolean
  pin: Array<number | undefined>
}

export const PinGrid: React.FC<PinTokenProps> = ({ isDisabled = false, isPassword = false, onPinChange, pin }) => {
  const [error, setError] = useState<boolean>(false)
  const inputRefs = useRef<HTMLInputElement[]>([])

  const changePinTokenFocus = (index: number) => {
    const ref = inputRefs.current[index]
    if (ref) {
      ref.focus()
      ref.select()
    }
  }
  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.currentTarget.value.trim()

    if (/^[0-9]$/.test(value)) {
      onPinChange(Number(value), index)
      setError(false)

      if (index < 5) {
        changePinTokenFocus(index + 1)
      }
    } else if (isNaN(Number(value))) {
      event.currentTarget.value = ''
      setError(true)
    } else {
      setError(false)
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyboardKeyCode = event.nativeEvent.code

    if (keyboardKeyCode !== 'Backspace') {
      return
    }

    onPinChange('', index)

    if ((index > 0 && !pin[index]) || pin[index]?.toString() === '') {
      changePinTokenFocus(index - 1)
    }
  }

  return (
    <Container data-testid='container'>
      {Array.from({ length: isPassword ? 4 : 6 }, (_, index) => (
        <PinBox
          key={index}
          isError={error}
          disabled={isDisabled}
          isDisabled={isDisabled}
          value={pin[index]}
          data-testid={`pinToken-${index}`}
          ref={item => {
            if (item) {
              inputRefs.current[index] = item
            }
          }}
          type={isPassword ? 'password' : 'text'}
          onChange={event => onChange(event, index)}
          onKeyDown={event => onKeyDown(event, index)}
        />
      ))}
    </Container>
  )
}
