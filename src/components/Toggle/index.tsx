import React, { useState } from 'react'
import { Typography } from '../Typography'
import { ToggleContainer, Switcher, Container } from './styles'

interface ToggleProps {
  title?: string
}

export const Toggle: React.FC<ToggleProps> = ({ title }) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleOnToggleSwitched = () => {
    setIsToggled(!isToggled)
  }

  return title ? (
    <Container data-testid='container'>
      <ToggleContainer data-testid='toggle' isToggled={isToggled} onClick={() => handleOnToggleSwitched()}>
        <Switcher data-testid='switcher' isToggled={isToggled} />
      </ToggleContainer>
      <Typography data-testid='bodyLarge' variant='bodyLarge'>
        {title}
      </Typography>
    </Container>
  ) : (
    <ToggleContainer data-testid='toggle' isToggled={isToggled} onClick={() => handleOnToggleSwitched()}>
      <Switcher data-testid='switcher' isToggled={isToggled} />
    </ToggleContainer>
  )
}
