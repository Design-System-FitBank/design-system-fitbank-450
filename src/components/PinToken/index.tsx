import React, { useState } from 'react'
import { Container, PinBox } from './styles'

interface PinTokenProps {
  isDisabled?: boolean
}

const PIN_TOKEN_LENTGH = 6

export const PinToken: React.FC<PinTokenProps> = ({ isDisabled }) => {
  const [pin, setPin] = useState<Array<number | null>>(new Array(PIN_TOKEN_LENTGH))

  return (
    <Container data-testid='container'>
      <PinBox data-testid='pinToken'>0</PinBox>
      <PinBox data-testid='pinToken'>1</PinBox>
      <PinBox data-testid='pinToken'>2</PinBox>
      <PinBox data-testid='pinToken'>3</PinBox>
      <PinBox data-testid='pinToken'>4</PinBox>
      <PinBox data-testid='pinToken'>5</PinBox>
    </Container>
  )
}
