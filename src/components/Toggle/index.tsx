import React, { useState } from 'react'
import { Typography } from '../Typography'
import { ToggleContainer, Switcher, Container, LabelContent } from './styles'

interface ToggleProps {
  isTitled?: boolean
  label?: string
}

export const Toggle: React.FC<ToggleProps> = ({ isTitled = false, label }) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleOnToggleSwitched = () => {
    setIsToggled(!isToggled)
  }

  return isTitled ? (
    <Container>
      <ToggleContainer data-testid='toggle' isToggled={isToggled} onClick={() => handleOnToggleSwitched()}>
        <Switcher data-testid='switcher' isToggled={isToggled} />
      </ToggleContainer>
      <LabelContent data-testid='label'>
        <Typography variant='bodyLarge'>{label}</Typography>
      </LabelContent>
    </Container>
  ) : (
    <ToggleContainer data-testid='toggle' isToggled={isToggled} onClick={() => handleOnToggleSwitched()}>
      <Switcher data-testid='switcher' isToggled={isToggled} />
    </ToggleContainer>
  )
}
