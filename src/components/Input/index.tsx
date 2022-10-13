import React, { useState } from 'react'
import { Typography } from '../Typography'
import * as Styled from './styles'
import { Icon } from '../Icon'
interface InputProps {
  title?: string
  name?: string
  placeholder: string
  disabled: boolean

  type: 'text' | 'number' | 'password'

  //validator: (text: string) => string | undefined
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  title,
  name = 'text',
  placeholder,
  disabled = false
  //validator
}) => {
  let isValid: boolean
  const [text, setText] = useState('')
  const [message, setMessage] = useState<boolean>(false)

  const handleHideCharacter = (text: string) => {
    const regex = /\w/g
    const hideText = text
    const hidePlaceholder = hideText.replace(regex, '•')
    return hidePlaceholder
  }

  const handleChange = (e: any) => {
    let textEntry = e.target.value
    setText(textEntry)
    isValid = text ? false : true
    console.log(isValid)
    setMessage(isValid)
  }
  //const isValid = validator(textEntry)
  //setMessage(!isValid)

  const returnInput = (typeInput: string) => {
    switch (typeInput) {
      case 'password':
        return (
          <Styled.Container>
            <Styled.Label data-testid='label'>
              <Typography variant='bodyLarge'>{title}</Typography>
            </Styled.Label>

            <Styled.CovaregePassword>
              <Styled.InputPassword
                data-testid='input'
                type={type}
                name={name}
                placeholder={handleHideCharacter(placeholder)}
                disabled={disabled}
              ></Styled.InputPassword>
              <Styled.Icon isDisable={disabled}>
                <Icon name='eyeOpen' width={24} height={24} />
              </Styled.Icon>
            </Styled.CovaregePassword>
          </Styled.Container>
        )

      default:
        return (
          <Styled.Container>
            <Styled.Label data-testid='label'>
              <Typography variant='bodyLarge'>{title}</Typography>
            </Styled.Label>
            <Styled.Covarege>
              <Styled.Input
                data-testid='input'
                type={type}
                name={name}
                value={text}
                placeholder={placeholder}
                disabled={disabled}
                onChange={e => handleChange(e)}
                isValid={false}
              ></Styled.Input>
              {!message && (
                <Styled.MessageError>
                  <Typography variant='bodySmall'>Messagem de erro</Typography>
                </Styled.MessageError>
              )}
            </Styled.Covarege>
          </Styled.Container>
        )
    }
  }
  return returnInput(type)
}
