import React from 'react'

import { DateInput } from './components/DateInput'

import * as Styled from './styles'

interface DatePickerProps {
  /**
   * Variavel responsavel pelo children do componente
   */
  children?: String
}

export const DatePicker: React.FC<DatePickerProps> = ({ children = 'DatePicker' }) => {
  return (
    <Styled.Container data-testid='container'>
      <DateInput title='Data' onchange={() => {}} />
    </Styled.Container>
  )
}
