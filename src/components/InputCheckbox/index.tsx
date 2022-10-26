import { Typography } from '../Typography'
import React, { useEffect, useState } from 'react'
import { InputCheckboxItem } from './InputCheckboxItem'
import * as Styled from './styles'

interface InputCheckboxProps {
  title: string
  optionsList: string[]
  isRow?: boolean
  onSelect: (values: string[]) => void
}

export const InputCheckbox = ({ title, optionsList, isRow = false, onSelect}: InputCheckboxProps) => {
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
