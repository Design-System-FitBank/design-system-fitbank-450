import { Icon } from '../Icon'
import React, { useState } from 'react'
import * as Styled from './styles'

interface HeaderProps {
  /**
   * Função que capta os valores digitados no campo de entrada de texto
   */
  onSearchChange: (text: string) => void
}

export const Header = ({ onSearchChange }: HeaderProps) => {
  const [textValue, setTextValue] = useState<string>()

  const handleChange = (event: any) => {
    let textEntry: string = event.target.value
    setTextValue(textEntry)
    onSearchChange(textEntry)
  }
  return (
    <Styled.Container data-testid='container'>
      <Styled.Wrap data-testid='wrap'>
        <Styled.Input
          data-testid='input'
          value={textValue}
          onChange={event => handleChange(event)}
          placeholder='Pesquise'
        />
        <Styled.Search data-testid='lupa'>
          <Icon width={24} height={24} name='search' />
        </Styled.Search>
      </Styled.Wrap>
      <Styled.Span>
        <Styled.Avatar data-testid='avatar'>
          <Icon width={35} height={35} name='user' />
        </Styled.Avatar>
      </Styled.Span>
    </Styled.Container>
  )
}
