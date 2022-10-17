import React, { useState } from 'react'
import { Container, Switcher } from './styles'

interface ToggleProps {
  isTitle?: boolean
  label?: string
}

export const Toggle: React.FC<ToggleProps> = ({ isTitle = false }) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleOnToggleSwitched = () => {
    setIsToggled(!isToggled)
  }

  return (
    <Container data-testid='toggle' onClick={() => handleOnToggleSwitched()}>
      <Switcher data-testid='switcher' isToggle={isToggled}/>
    </Container>
  )
}
