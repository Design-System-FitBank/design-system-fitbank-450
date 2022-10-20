import { Typography } from '../Typography'
import React, { useEffect, useState } from 'react'
import { InputCheckboxItem } from './InputCheckboxItem'
import * as Styled from './styles'

interface InputCheckboxProps {
  title: string
  optionsList: string[]
  direction?: 'column' | 'row'
}

export const InputCheckbox = ({ title, optionsList, direction = 'column' }: InputCheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const onclick = (value: string) => {
    if (selected.includes(value)) {
      selected.splice(selected.indexOf(value), 1)
      setSelected(selected)
      return
    }
    if (!selected.includes(value)) {
      setSelected([...selected, value])
      return
    }
  }
  console.log(selected)

  useEffect(() => {})

  return (
    <>
      <Styled.Container data-testid='input-checkbox-title' direction={direction}>
        <Typography data-testid='input-checkbox-title' variant='body'>
          {title}
        </Typography>
      </Styled.Container>
      <Styled.Container data-testid='input-checkbox' direction={direction}>
        {optionsList.map((option, key) => (
          <InputCheckboxItem key={key} checked={selected.includes(option)} option={option} onclick={onclick} />
        ))}
      </Styled.Container>
    </>
  )
}
