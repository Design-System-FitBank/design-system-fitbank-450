import * as Styled from './styles'

import React, { useMemo, useState } from 'react'

import { Icon } from '../Icon'
import { Mask } from '../../_utils/mask'
import { Typography } from '../Typography'
import { Validator } from '../../_utils/validator'

export interface InputProps {
  /**
   * Referente ao Label do input, sendo que o mesmo tem ação optativa.
   */
  title?: string

  /**
   * Variável que se referencia ao texto do placeholder que ficará em condições obscurecida.
   */
  placeholder: string

  /**
   * Campo para desabilitar o input, sendo que o mesmo tem ação optativa.
   */
  disabled?: boolean

  /**
   * Referente aos tipos do input.
   */
  type: 'text' | 'password'

  /**
   * Atributo define qual validador será usado
   */
  validator?: 'email' | 'number' | 'cpf' | 'cnpj' | 'phone' | 'cpf/cnpj' | 'tag'

  /**
   * mensagem de erro ou de validação, obs: ação optativa.
   */
  message?: string

  /**
   * valor booleano true com ação de limpar (clean) o input. obs: ação optativa.
   */
  resetValue?: boolean

  /**
   * variável relacionada ao background do input, obs: ação optativa.
   */
  background?: 'white' | 'grey' | 'transparent'

  /**
   * Função que capta os valores digitados no campo de entrada de texto após a verificação de validação.
   */
  onChange: (text: string) => void
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  title,
  placeholder,
  disabled = false,
  validator,
  message,
  background,
  resetValue,
  onChange
}) => {
  const [text, setText] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>()
  const [hideIcon, setHideIcon] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)
  const [maxLengthInput, setMaxLengthInput] = useState<number>()

  useMemo(() => {
    if (resetValue) {
      setText('')
    }
  }, [resetValue])

  useMemo(() => {
    setErrorMessage(message)
  }, [message])

  const backgroundInput = useMemo(() => {
    const color = background
    const typeColors = {
      white: '#FFFFFF',
      grey: '#767A8B',
      transparent: 'transparent'
    }
    return typeColors[color!]
  }, [background])

  const handleSetMessageAndMasK = (validator: string, textEntry: any) => {
    setErrorMessage(Validator.validation(validator!, textEntry))
    setText(Mask.masked(validator!, textEntry) || textEntry)
  }

  const handleChange = (e: any) => {
    let textEntry: string = e.target.value

    if (validator === 'cpf' && textEntry.length > 14) return

    if (validator === 'cnpj' && textEntry.length > 18) return

    if (validator === 'cpf/cnpj') {
      if (textEntry.length > 18) return
      if (textEntry.length < 15) {
        setText(Mask.masked('cpf', textEntry)!)
        setErrorMessage(Validator.validation('cpf', textEntry!))
      } else {
        setText(Mask.masked('cnpj', textEntry)!)
        setErrorMessage(Validator.validation('cnpj', textEntry!))
      }
      onChange(textEntry)
      return
    }

    if (validator === 'phone') {
      handleSetMessageAndMasK(validator, textEntry)
      if (errorMessage === 'o DDD não é válido' || errorMessage === 'Campo só aceita números') {
        setText('')
      }

      if (textEntry.length === 11) {
        onChange(textEntry)
      }
      return setMaxLengthInput(15)
    }

    if (validator === 'tag') {
      handleSetMessageAndMasK(validator, textEntry)
      if (errorMessage === 'Campo só aceita letras') {
        setText('')
      }
      onChange(textEntry)
      return setMaxLengthInput(50)
    }

    if (validator === 'number') {
      handleSetMessageAndMasK(validator, textEntry)
      if (errorMessage === 'Campo só aceita números') {
        setText('')
      }
      onChange(textEntry)
      return setMaxLengthInput(50)
    }

    setText(Mask.masked(validator!, textEntry) || textEntry)
    setErrorMessage(Validator.validation(validator!, textEntry))

    onChange(textEntry)
  }

  const toggleIcon = hideIcon ? 'eyeClose' : 'eyeOpen'

  return (
    <Styled.Container>
      {title && (
        <Styled.Label data-testid='label'>
          <Typography variant='bodyBold'>{title}</Typography>
        </Styled.Label>
      )}
      <Styled.Wrap>
        <Styled.InputContainer
          data-testid='input'
          maxLength={maxLengthInput}
          value={text}
          placeholder={type === 'text' ? placeholder : '••••••••'}
          type={type === 'text' ? 'text' : hideIcon ? 'text' : 'password'}
          disabled={disabled}
          onChange={handleChange}
          hasMessage={Boolean(errorMessage)}
          background={backgroundInput}
        />
        {checked ? (
          <Styled.Icon data-testid='icon' isChecked={checked}>
            <Icon name='done' />
          </Styled.Icon>
        ) : (
          !disabled &&
          type === 'password' && (
            <Styled.Icon data-testid='icon' onClick={() => setHideIcon(!hideIcon)}>
              <Icon name={toggleIcon as any} />
            </Styled.Icon>
          )
        )}
      </Styled.Wrap>
      {errorMessage && <Styled.MessageError data-testid='message'>{errorMessage}</Styled.MessageError>}
    </Styled.Container>
  )
}
