import { Typography } from '../Typography'
import React, { useState } from 'react'
import { InputCheckboxItem } from './InputCheckboxItem'
import * as Styled from './styles'

export interface InputCheckboxProps {
  title: string
  /**
   * Lista com as opções
   */
  optionsList: string[]
  /**
   * Opção para deixar alinhado na direção linha por default é falso
   */
  isRow?: boolean
  /**
   * função para receber os itens selecionados que recebe um array como parâmetro
   */
  onSelect: (values: string[]) => void
}

export const Checkbox = ({ title, optionsList, isRow = false, onSelect}: InputCheckboxProps) => {
  const [selected, setSelected] = useState<string[]>([])

  const onclick = (value: string) => {
    if (selected.includes(value)) {

      setSelected(selected.filter(el => el !== value))
    }
    else {
      setSelected([...selected, value])
    }
  }
  onSelect(selected)
  return (
    <>
      <Styled.Container data-testid='input-checkbox-title'>
        <Typography data-testid='input-checkbox-title' variant='body'>
          {title}
        </Typography>
      </Styled.Container>
      <Styled.ContainerChild data-testid='input-checkbox' isRow={isRow}>
        {optionsList.map((option, key) => (
          <InputCheckboxItem
            key={key}
            checked={selected.includes(option)}
            option={option}
            onClick={() => onclick(option)}
          />
        ))}
      </Styled.ContainerChild>
    </>
  )
}
