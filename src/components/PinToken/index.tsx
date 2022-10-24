import React from 'react'
import { PinGrid } from './PinGrid'

interface PinProps {
  onChange: (pinToken: number[]) => void
  disabled?: boolean
}

export const PinToken: React.FC<PinProps> = ({ onChange, disabled = false }) => {
  const onPinChanged = (pinEntry: number[]) => {
    onChange(pinEntry)
    console.log(pinEntry)
  }
  
  return (
    <div>
      <PinGrid onPinChange={onPinChanged} isDisabled={disabled} />
    </div>
  )
}
