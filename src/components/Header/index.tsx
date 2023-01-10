import React, { useState } from 'react'

import { Icon } from '../Icon'
import { Avatar } from '../Avatar'
import { Typography } from '../Typography'

import * as Styled from './styles'

export interface HeaderProps {
  /**
   * Função que capta os valores digitados no campo de entrada de texto.
   * Caso não passada não mostrará input de pesquisa
   */
  search?: (text: string) => void

  /**
   * Texto de placeholder do input pesquisa se houver.
   */
  searchPlaceholder?: string

  /**
   * Função que ira retornar a opção de menu
   */
  onClickOptions: () => void

  /**
   * Variável que ira retornar o nome do Usuario.
   */
  accountName?: string
}

export const Header = ({
  search,
  accountName,
  searchPlaceholder,
  onClickOptions
}: HeaderProps) => {
  const [textValue, setTextValue] = useState<string>()
  const userName = accountName ? accountName[0].toUpperCase() + accountName.substring(1).toLowerCase() : 'User'

  const handleChange = (value: string) => {
    setTextValue(value)
  }
  return (
    <Styled.Container data-testid='container'>
      <Styled.Wrap data-testid='wrap'>
        {search && (
          <Styled.Input
            data-testid='input'
            value={textValue}
            onChange={event => handleChange(event.target.value)}
            placeholder={searchPlaceholder}
          />
        )}
        <Styled.Search data-testid='lupa' onClick={() => search!(textValue!)}>
          {search && <Icon name='search' width={24} height={24} />}
        </Styled.Search>
      </Styled.Wrap>
      <Styled.Span data-testid='avatar'>
        <Avatar secondary small type='PF' />
        <Styled.User data-testid='usuario'>
          <Typography variant='body'>Olá, </Typography>
          <Typography variant='body'>{userName}</Typography>
        </Styled.User>
        <Styled.Options data-testid='opt' onClick={() => onClickOptions()}>
          <Icon name='options' width={24} height={24} />
        </Styled.Options>
      </Styled.Span>
    </Styled.Container>
  )
}
