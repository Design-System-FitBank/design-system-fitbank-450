import React, { useRef } from 'react'
import { Container, PinBox } from '../styles'

interface PinTokenProps {
  pin: Array<number | undefined>
  onPinChange: (pinEntry: number | undefined, index: number) => void
  isDisabled?: boolean
  children?: string
}

export const PinGrid: React.FC<PinTokenProps> = ({ isDisabled = false, onPinChange, pin}) => {
  const inputRefs = useRef<HTMLInputElement[]>([])
  const PIN_TOKEN_LENTGH = 6

  const changePinTokenFocus = pinIndex => {
    const ref = inputRefs.current[pinIndex]
    if (ref) {
      ref.focus()
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())
    if (isNaN(pinNumber) || value.length === 0) {
      return
    }

    if (pinNumber >= 0 && pinNumber <= 9) {
      onPinChange(pinNumber, index)

      if (index < PIN_TOKEN_LENTGH - 1)
      {
        changePinTokenFocus(index + 1)
      }
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyboardkeyCode = event.nativeEvent.code
    if (keyboardkeyCode !== 'Backspace') {
      return
    }

    if (pin[index] === undefined) {
      changePinTokenFocus(index - 1)
    } else {
      onPinChange(undefined, index)
    }
  }

  return (
    <Container data-testid='container'>
      {Array.from({ length: PIN_TOKEN_LENTGH }, (_, index) => (
        <PinBox
          data-testid='pinToken'
          onKeyDown={(event) => onKeyDown(event, index)}
          disabled={isDisabled}
          key={index}
          value={pin[index] || ''}
          ref={item => {
            if (item) {
              inputRefs.current[index] = item
            }
          }}
          onChange={event => onChange(event, index)}
        />
      ))}
    </Container>
  )
}
