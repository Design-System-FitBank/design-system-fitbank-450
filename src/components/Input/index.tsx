import React, { useState } from 'react'
import { Typography } from '../Typography'
import * as Styled from './styles'
import { Icon } from '../Icon'
interface InputProps {
  /**
   * Referente ao Label do input.
   */
  title: string
  /**
   * Texto obscurecido .
   */
  placeholder: string
  /**
   * Campo para desabilitar o input .
   */
  disabled: boolean

  /**
   * Referente aos tipos do input.
   */
  type: 'text' | 'password'

  /**
   * Função de retorno de uma mensagem de erro quando um valor digitado
   * não é validado.
   */
  validated?: string
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
  validated,
  onchange
}) => {
  const [text, setText] = useState<string>()
  const [hideIcon, setHideIcon] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const handleChange = (e: any) => {
    let textEntry: string = e.target.value
    onchange(textEntry)
    setText(textEntry)
    setTimeout(() => {
      if (!validated) {
        setChecked(true)
        return
      }
      setChecked(false)
    }, 800)
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
          hasMessage={Boolean(validated)}
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
      <Styled.MessageError data-testid='message'>{validated}</Styled.MessageError>
    </>
  )
}
