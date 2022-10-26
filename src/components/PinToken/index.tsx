import React from 'react'
import { PinGrid } from './PinGrid'

interface PinProps {
  /**
   * Função que retorna um array de números registrados no token 
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
    console.log(`pinValue[]: {${pinEntry}}`)
  }

  return (
    <PinGrid onPinChange={onPinChanged} isDisabled={disabled} />
  )
}
