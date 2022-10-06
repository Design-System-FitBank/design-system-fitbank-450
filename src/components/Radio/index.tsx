import React from 'react'
import * as Styled from './styles'

interface RadioProps {
  checked?: boolean
}

export const Radio = ({ checked = false }: RadioProps) => {
  return checked ? (
    <Styled.Container data-testid='radio' checked={checked}>
      <Styled.Child data-testid='radio-child' />
    </Styled.Container>
  ) : (
    <Styled.Container data-testid='radio' checked={checked} />
  )
}
