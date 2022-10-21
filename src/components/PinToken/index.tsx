import React, { useState } from 'react'
import { PinGrid } from './PinGrid'

const PIN_LENGTH = 4;

export const PinToken = () => {
  const [pin, setPin] = useState<Array<number | undefined>>(new Array(PIN_LENGTH))

  const onPinChanged = (pinEntry: number | undefined, index: number) => {
    const newPin = [...pin];
    newPin[index] = pinEntry;
    setPin(newPin);
  };

  return (
    <div>
      <PinGrid pin={pin} onPinChange={onPinChanged}/>
    </div>
  )
}
