import React, { useState } from 'react'

import { Icon } from '../../../Icon'
import { Typography } from '../../../Typography'

import * as Styled from './styles'

export interface ButtonProps {
  title?: string
  disabled?: boolean
  onchange: (text: string) => void
}

export const DateInput = ({ title, disabled = false, onchange }: ButtonProps) => {
  const [text, setText] = useState<string>()
  const [placeholder, setPlaceholder] = useState<string>('dd/mm/aaaa')

  const handleChange = (event: any) => {
    let textEntry: string = event.target.value
    onchange(textEntry)
  }

  return (
    <Styled.Container>
      <Styled.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styled.Label>

      <Styled.Wrap>
        <Styled.InputContainer
          data-testid='date-input'
          value={text}
          placeholder={placeholder}
          disabled={disabled}
          onChange={event => handleChange(event)}
        />

        <Styled.Icon data-testid='icon'>
          <Icon name={'calendar'} />
        </Styled.Icon>
      </Styled.Wrap>
    </Styled.Container>
  )
}
