import { Typography } from '../../Typography'
import React from 'react'
import * as Styled from './styles'

export interface RadioProps {
  option: string
  checked?: boolean
  onclick: (value: string) => void
}

export const InputRadioItem = ({ option, checked, onclick }: RadioProps) => {
  return (
    <Styled.Container data-testid='radio-container' onClick={() => onclick(option)}>
      <Styled.Radio data-testid='radio' checked={checked}>
        <Styled.RadioChild data-testid='radio-child' checked={checked} />
      </Styled.Radio>
      <Typography data-testid='radio-text' variant='body'>
        {option}
      </Typography>
    </Styled.Container>
  )
}
