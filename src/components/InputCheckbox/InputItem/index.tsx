import { Icon } from '../../Icon'
import React from 'react'
import * as Styled from './styles'
import { Typography } from '../../Typography'

interface CheckboxProps {
  option: string
  checked?: boolean
  onclick: (value: string) => void
}

export const InputItem = ({ checked = false, option, onclick }: CheckboxProps) => {
  return (
    <Styled.Container data-testid='input-checkbox'>
      <Styled.Check data-testid='checkbox' checked={checked} onClick={() => onclick(option)}>
        {checked ? <Icon name='valid' width={8} height={8} /> : ''}
      </Styled.Check>
      <Typography variant='body'>{option}</Typography>
    </Styled.Container>
  )
}
