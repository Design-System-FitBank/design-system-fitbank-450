import React, { useState } from 'react'

import { DateInput } from './components/DateInput'
import { Modal } from './components/Modal'

import * as Styled from './styles'

interface DatePickerProps {
  /**
   * Variavel responsavel pelo children do componente
   */
  children?: String
}

export const DatePicker: React.FC<DatePickerProps> = ({ children = 'DatePicker' }) => {
  const [isOpen, setOpen] = useState(false)

  return (
    <Styled.Container data-testid='container'>
      <DateInput title='Data' onChange={() => {}} onClick={(value) => setOpen(value)}/>
      <Modal show={isOpen}/>
    </Styled.Container>
  )
}
