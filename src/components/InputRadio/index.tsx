import { Typography } from '../Typography'
import React, { useState } from 'react'
import * as Styled from './styles'

interface RadioProps {
  title: string
  optionsList: string[]
  direction?: 'column' | 'row'
}

export const InputRadio = ({ title, optionsList, direction = 'column' }: RadioProps) => {
  const [checked, setChecked] = useState('')
  const onclick = (value: string) => {
    setChecked(value)
  }
  return (
    <>
      <Typography variant='bodyBold'>{title}</Typography>
      <Styled.Container direction={direction}>
        {optionsList.map(option => (
          <Styled.ContainerChild data-testid='radio-container'>
            <Styled.Radio data-testid='radio' checked={checked === option} onClick={() => onclick(option)}>
              <Styled.RadioChild data-testid='radio-child' checked={checked === option} />
            </Styled.Radio>
            <Typography variant='body'>{option}</Typography>
          </Styled.ContainerChild>
        ))}
      </Styled.Container>
    </>
  )
}
