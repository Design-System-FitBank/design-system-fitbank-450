import { Typography } from '../Typography'
import React, { useEffect, useState } from 'react'
import { InputCheckboxItem } from './InputCheckboxItem'
import * as Styled from './styles'

interface InputCheckboxProps {
  title: string
  optionsList: string[]
  direction?: 'column' | 'row'
  onSelect: (values: string[]) => void
}

export const InputCheckbox = ({ title, optionsList, direction = 'column', onSelect }: InputCheckboxProps) => {
  const [selected, setSelected] = useState<string[]>([])

  const onclick = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(el => el !== value))
      return
    }
    if (!selected.includes(value)) {
      setSelected([...selected, value])
      return
    }
    onSelect(selected)
  }

  return (
    <>
      <Styled.Container data-testid='input-checkbox-title' direction={direction}>
        <Typography data-testid='input-checkbox-title' variant='body'>
          {title}
        </Typography>
      </Styled.Container>
      <Styled.ContainerChild data-testid='input-checkbox' direction={direction}>
        {optionsList.map((option, key) => (
          <InputCheckboxItem key={key} checked={selected.includes(option)} option={option} onclick={onclick} />
        ))}
      </Styled.ContainerChild>
    </>
  )
}
