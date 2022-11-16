import React from 'react'
import { PinGrid } from './PinGrid'

interface PinProps {
  /**
   * Função sem retorno que será chamada ao digitar o pin 
   */
  onChange: (pinToken: number[]) => void
  /**
   * Propriedades booleana que transforma o token em Disable
   */
  disabled?: boolean
}

export const PinToken: React.FC<PinProps> = ({ onChange, disabled = false }) => {
  const onPinChanged = (pinEntry: number[]) => {
    onChange(pinEntry)
  }

  return (
    <PinGrid onPinChange={onPinChanged} isDisabled={disabled} />
  )
}
