import { Typography } from '../Typography'
import React from 'react'
import * as Styled from './styles'

interface RadioProps {
  title: string
  checked?: boolean
  optionsList: string[]
  direction?: 'column' | 'row'
  onclick: () => void
}

export const InputRadio = ({ title, checked = false, optionsList, direction = 'column', onclick }: RadioProps) => {
  return (
    <>
      <Typography variant='bodyBold'>{title}</Typography>
      <Styled.Container direction={direction} checked={checked}>
        {optionsList.map(option => (
          <Styled.ContainerChild data-testid='radio-container'>
            <Styled.Radio data-testid='radio' checked={checked} onClick={onclick}>
              {checked ? <Styled.RadioChild data-testid='radio-child' /> : ''}
            </Styled.Radio>
            <Typography variant='body'>{option}</Typography>
          </Styled.ContainerChild>
        ))}
      </Styled.Container>
    </>
  )
}
