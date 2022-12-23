import React, { useState } from 'react'

import { Icon } from '../../../Icon'
import { Typography } from '../../../Typography'

import * as Styled from './styles'

export interface ButtonProps {
  title?: string
  disabled?: boolean
  onChange: (text: string) => void
  onClick: (value: boolean) => void
}

export const DateInput = ({ title, disabled = false, onChange, onClick }: ButtonProps) => {
  const [text, setText] = useState<string>()
  const [placeholder, setPlaceholder] = useState<string>('dd/mm/aaaa')

  const handleChange = (event: any) => {
    let textEntry: string = event.target.value
    onChange(textEntry)
  }

  const handleClick = () => {
    onClick(true)
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

        <Styled.Icon data-testid='icon' onClick={handleClick}>
          <Icon name={'calendar'} />
        </Styled.Icon>
      </Styled.Wrap>
    </Styled.Container>
  )
}
