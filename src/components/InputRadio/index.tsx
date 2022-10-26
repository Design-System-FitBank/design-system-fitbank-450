import { Typography } from '../Typography'
import { InputRadioItem } from './InputRadioItem'
import React, { useState } from 'react'
import * as Styled from './styles'

interface RadioProps {
  /**
   * Deve ser o título do inputRadio
   */
  title: string
  /**
   * Deve ser a lista de opções do input
   */
  optionsList: string[]
  /**
   * ITroca a direção de coluna para linha
   */
  isRow?: boolean
}

export const InputRadio = ({ title, optionsList, isRow = false }: RadioProps) => {
  const [checked, setChecked] = useState('')
  const onclick = (value: string) => {
    setChecked(value)
  }
  return (
    <Styled.Container>
      <Typography variant='bodyBold'>{title}</Typography>
      <Styled.ContainerDirection data-testid='container' isRow={isRow}>
        {optionsList.map((option, key) => (
          <InputRadioItem key={key} option={option} onclick={onclick} checked={checked === option} />
        ))}
      </Styled.ContainerDirection>
    </Styled.Container>
  )
}
