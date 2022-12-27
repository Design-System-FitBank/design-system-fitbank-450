import { Typography } from '../Typography'

import { InputRadioItem } from './InputRadioItem'
import React, { useState } from 'react'
import * as Styled from './styles'

export interface RadioProps {
  /**
   * Deve ser o título do inputRadio
   */
  title: string
  /**
   * Deve ser a lista de opções do input
   */
  optionsList: string[]
  /**
   * Troca a direção de coluna para linha
   */
  isColumn?: boolean
}

export const Radio = ({ title, optionsList, isColumn = false }: RadioProps) => {
  const [checked, setChecked] = useState('')
  const onclick = (value: string) => {
    setChecked(value)
  }
  return (
    <Styled.Container>
      <Typography variant='bodyBold'>{title}</Typography>
      <Styled.ContainerDirection data-testid='radio-container' isColumn={isColumn}>
        {optionsList.map((option, key) => (
          <InputRadioItem key={key} option={option} onclick={onclick} checked={checked === option} />
        ))}
      </Styled.ContainerDirection>
    </Styled.Container>
  )
}
