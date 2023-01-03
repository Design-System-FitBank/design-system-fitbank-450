import { isPlainObject } from 'cypress/types/lodash'
import React from 'react'
import { PinGrid } from './PinGrid'

export interface PinProps {
  /**
   * Função sem retorno que será chamada ao digitar o pin
   */
  onChange: (pinToken: number[]) => void
  /**
   * Propriedades boolean que transforma o token em Disable
   */
  disabled?: boolean
  /**
   * Propriedades boolean que alterna de token para password
   */
  password?: boolean
}

export const PinToken: React.FC<PinProps> = ({ onChange, disabled = false, password = false }) => {
  const onPinChanged = (pinEntry: number[]) => {
    onChange(pinEntry)
  }

  return (
    <PinGrid onPinChange={onPinChanged} isDisabled={disabled} isPassword={password}/>
  )
}