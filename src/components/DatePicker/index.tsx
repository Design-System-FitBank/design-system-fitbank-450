import React from 'react'
import * as Styled from './styles'

interface DatePickerProps {
  /**
   * Variavel responsavel pelo children do componente
   */
  children?: string
}

export const DatePicker: React.FC<DatePickerProps> = ({ children = 'DatePicker' }) => {
  return (
    <Styled.Container data-testid='container'>
      {children}
    </Styled.Container>
  )
}
