import React, { useRef, useState } from 'react'
import { Container, PinBox } from '../styles'

interface PinTokenProps {
  onPinChange: (pinEntry: number[]) => void
  isDisabled?: boolean
}

export const PinGrid: React.FC<PinTokenProps> = ({ isDisabled = false, onPinChange }) => {
  const [pinValue, setPinValue] = useState<number[]>()
  const [error, setError] = useState<string>()
  const inputRefs = useRef<HTMLInputElement[]>([])
  const [disable, setDisable] = useState(isDisabled)

  const changePinTokenFocus = (pinIndex: number) => {
    inputRefs.current[pinIndex].focus()
  }

  const onBlur = (pinIndex: number) => {
    inputRefs.current[pinIndex].blur()
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = event.target.value
    const pinNumber = Number(value.trim())

    if (isNaN(pinNumber)) {
      return setError('O campo só permite numeros')
    }

    if (!Boolean(pinValue)) {
      setPinValue([pinNumber])
      changePinTokenFocus(index + 1)
      return
    }

    setPinValue([...pinValue!, pinNumber])

    if (index === 5) {
      // console.log(pinValue)
      // console.log(pinNumber)
      onPinChange(pinValue!)
      setDisable(true)
      onBlur(5)
      return
    }

    if (index < 5) {
      changePinTokenFocus(index + 1)
    }
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const keyboardkeyCode = event.nativeEvent.code
    if (keyboardkeyCode === 'Backspace') {
      changePinTokenFocus(index - 1)
      return
    }
  }

  return (
    <Container data-testid='container'>
      {Array.from({ length: 6 }, (_, index) => (
        <PinBox
          data-testid='pinToken'
          disabled={isDisabled}
          isDisabled={isDisabled}
          key={index}
          value={pinValue ? pinValue![index] : ''}
          ref={item => {
            if (item) {
              inputRefs.current[index] = item
            }
          }}
          onKeyDown={event => onKeyDown(event, index)}
          onChange={event => onChange(event, index)}
        />
      ))}
    </Container>
  )
}
