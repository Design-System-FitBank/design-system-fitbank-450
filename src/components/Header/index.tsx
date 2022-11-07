import { Icon } from '../Icon'
import React, { Children, useState } from 'react'
import * as Styled from './styles'
import { Typography } from '../Typography'

interface HeaderProps {
  /**
   * Função que capta os valores digitados no campo de entrada de texto
   */
  onSearch: (text: string) => void
  /**
   * Variável que ira retornar o nome do Usuario.
   */
  accountName?: string
}

export const Header = ({ onSearch, accountName = 'Usuario' }: HeaderProps) => {
  const [textValue, setTextValue] = useState<string>()

  const handleChange = (event: any) => {
    let textEntry: string = event.target.value
    setTextValue(textEntry)
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
        <Styled.Search data-testid='lupa' onClick={() => onSearch(textValue!)}>
          <Icon width={24} height={24} name='search' />
        </Styled.Search>
      </Styled.Wrap>
      <Styled.Span>
        <Styled.Avatar data-testid='avatar'>
          <Icon width={35} height={35} name='user' />
        </Styled.Avatar>
        <Styled.Usuario data-testid='usuario'>
          <Typography variant='body'>Olá,</Typography>
          <Typography variant='body'>{accountName ? accountName : 'usuario'}</Typography>
        </Styled.Usuario>
        <Styled.Home data-testid='home'>
          <Icon width={22} height={22} name='options' />
        </Styled.Home>
      </Styled.Span>
    </Styled.Container>
  )
}
