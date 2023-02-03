import { Container, PinBox } from './styles'
import React, { useRef, useState } from 'react'

export interface PinTokenProps {
  onPinChange: (pinEntry: number | undefined, index: number) => void
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
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())

    if (isNaN(pinNumber) || value === ' ') {
      setError(true)
      return
    }

    if (pinNumber >= 0 && pinNumber <= 9) {
      onPinChange(pinNumber, index)
      setError(false)

      if (index < 5) {
        changePinTokenFocus(index + 1)
      }
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyboardKeyCode = event.nativeEvent.code

    if (keyboardKeyCode !== 'Backspace') {
      return
    }

    if (!pin[index]) {
      changePinTokenFocus(index - 1)
    } else {
      onPinChange(undefined, index)
    }
  }

  return (
    <Container data-testid='container'>
      {Array.from({ length: isPassword ? 4 : 6 }, (_, index) => (
        <PinBox
          key={index}
          maxLength={1}
          isError={error}
          disabled={isDisabled}
          isDisabled={isDisabled}
          value={pin[index] || ''}
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
