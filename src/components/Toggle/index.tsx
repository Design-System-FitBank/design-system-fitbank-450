import React, { useState } from 'react'
import { Typography } from '../Typography'
import { ToggleContainer, Switcher, Container } from './styles'

export interface ToggleProps {
  /**
   * Titulo opcional do toggle
   */
  title?: string
  /**
   * Função que retorna o estado do Toggle, sendo Inativo ou Ativo
   */
  isActive: (value: boolean) => void
}

export const Toggle: React.FC<ToggleProps> = ({ title, isActive }) => {
  const [isToggled, setIsToggled] = useState(false)

  const handleOnToggleSwitched = () => {
    const activeToggle = !isToggled
    setIsToggled(activeToggle)
    isActive(activeToggle)
  }

  return (
    <Container data-testid='container'>
      <ToggleContainer data-testid='toggle' isToggled={isToggled} onClick={() => handleOnToggleSwitched()}>
        <Switcher data-testid='switcher' isToggled={isToggled} />
      </ToggleContainer>
      {title && (
        <Typography data-testid='bodyLarge' variant='bodyLarge'>
          {title}
        </Typography>
      )}
    </Container>
  )
}
