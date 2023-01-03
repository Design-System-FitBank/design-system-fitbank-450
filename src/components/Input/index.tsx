import React, { useState } from 'react'
import { Icon } from '../Icon'
import * as Styled from './styles'
import { Mask } from '../../_utils/mask'
import { Typography } from '../Typography'
import { Validator } from '../../_utils/validator'
export interface InputProps {
  /**
   * Referente ao Label do input.
   */
  title: string
  /**
   * Variável que se referencia ao texto do placeholder que ficará em condições obscurecida.
   */
  placeholder: string
  /**
   * Campo para desabilitar o input .
   */
  disabled?: boolean

  /**
   * Referente aos tipos do input.
   */
  type: 'text' | 'password'

  /**
   * Atributo define qual validador será usado
   */
  validator?: 'email' | 'numero' | 'cpf' | 'cnpj' | 'telefone' | 'cpf/cnpj'
  /**
   * Função que capta os valores digitados no campo de entrada de texto
   */
  onchange: (text: string) => void
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  title,
  placeholder,
  disabled = false,
  validator,
  onchange
}) => {
  const [text, setText] = useState<string>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [hideIcon, setHideIcon] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (e: any) => {
    let textEntry: string = e.target.value

    if (validator) {
      if (validator === 'cpf/cnpj') {
        const textCpfCnpj = textEntry

        setTimeout(() => {
          if (textEntry.length <= 11) {
            setErrorMessage(Validator.validation('cpf', textCpfCnpj.replace(/\D+/g, '')))
            return
          } else {
            setErrorMessage(Validator.validation('cnpj', textCpfCnpj.replace(/\D+/g, '')))
          }
        }, 800)
      } else {
        setErrorMessage(Validator.validation(validator, textEntry))
      }
    }
    onchange(textEntry)
    if (validator === 'cpf/cnpj') {
      const textCpfCnpj = textEntry

      setTimeout(() => {
        if (textEntry.length <= 11) {
          setText(Mask.masked('cpf', textCpfCnpj.replace(/\D+/g, '')))
          return
        } else {
          setText(Mask.masked('cnpj', textCpfCnpj))
        }
      }, 800)
    } else {
      setText(Mask.masked(validator!, textEntry))
    }
  }

  const toggleIcon = hideIcon ? 'eyeClose' : 'eyeOpen'

  return (
    <>
      <Styled.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styled.Label>

      <Styled.Wrap>
        <Styled.InputContainer
          data-testid='input'
          value={text}
          placeholder={type === 'text' ? placeholder : '••••••••'}
          type={type === 'text' ? 'text' : hideIcon ? 'text' : 'password'}
          disabled={disabled}
          onChange={e => handleChange(e)}
          hasMessage={Boolean(errorMessage)}
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
    </>
  )
}
