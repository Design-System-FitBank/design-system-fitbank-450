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
  const [options, setOptions] = useState<string[]>([])

  const onclick = (value: string) => {
    const result = options.includes(value)
    if (!result) {
      setOptions([...options, value])
      setChecked(true)
      return
    }
    if (!checked) setOptions(options.splice(options.indexOf(value), 1))
  }

  console.log(options)

  return (
    <>
      <Styled.Container data-testid='input-checkbox-title' direction={direction}>
        <Typography data-testid='input-checkbox-title' variant='body'>
          {title}
        </Typography>
      </Styled.Container>
      <Styled.Container data-testid='input-checkbox' direction={direction}>
        {optionsList.map((option, key) => (
          <InputCheckboxItem key={key} checked={options?.includes(option)} option={option} onclick={onclick} />
        ))}
      </Styled.Container>
    </>
  )
}
