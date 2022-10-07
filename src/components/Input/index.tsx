import React, { Fragment } from 'react'
import { Typography } from '../Typography'
import * as Styled from './styles'

interface InputProps {
  title: string
  placeholder: string

  type: 'text' | 'number' | 'password'
}

export const Input: React.FC<InputProps> = ({ type = 'text', title, placeholder }) => {
  const hideCharacter = (text: string) => {
    const regex = /\w/g
    const hideText = text
    const hidePlaceholder = hideText.replace(regex, '*')
    return hidePlaceholder
  }
  const returnInput = (typeInput: string) => {
    switch (typeInput) {
      case 'password':
        return (
          <Styled.Container>
            <Styled.Label data-testid='label'>
              <Typography variant='bodyLarge'>{title}</Typography>
            </Styled.Label>
            <Styled.Input type={type} data-testid='input' placeholder={hideCharacter('1placeholder@')}></Styled.Input>
          </Styled.Container>
        )

      default:
        return (
          <Styled.Container>
            <Styled.Label data-testid='label'>
              <Typography variant='bodyLarge'>{title}</Typography>
            </Styled.Label>
            <Styled.Input type={type} data-testid='input' placeholder={placeholder}></Styled.Input>
          </Styled.Container>
        )
    }
  }
  return returnInput(type)
}
