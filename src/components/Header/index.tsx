import { Icon } from '../Icon'
import React, { useState } from 'react'
import * as Styled from './styles'
import { Typography } from '../Typography'
import { Avatar } from '../Avatar'

interface HeaderProps {
  /**
   * Função que capta os valores digitados no campo de entrada de texto
   */
  onSearch: (text: string) => void

   /**
   * Função que ira retornar a opção de menu
   */
  onClickOptions: () => void

  /**
   * Variável que ira retornar o nome do Usuario.
   */
  accountName?: string
}

export const Header = ({ onSearch, accountName = 'User', onClickOptions }: HeaderProps) => {
  const [textValue, setTextValue] = useState<string>()
  const username = accountName

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
          <Icon name='search' width={24} height={24} />
        </Styled.Search>
      </Styled.Wrap>
      <Styled.Span data-testid='avatar'>
        <Avatar secondary small type='PF' />
        <Styled.User data-testid='usuario'>
          <Typography variant='body'>Olá, </Typography>
          <Typography variant='body'>{username}</Typography>
        </Styled.User>
        <Styled.Options data-testid='opt' onClick={() => onClickOptions()}>
          <Icon name='options' width={24} height={24} />
        </Styled.Options>
      </Styled.Span>
    </Styled.Container>
  )
}
