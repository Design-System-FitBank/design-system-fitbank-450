import { set } from 'cypress/types/lodash'
import React, { useEffect, useState } from 'react'
import { InputItem } from './InputItem'
import * as Styled from './styles'

interface InputCheckboxProps {
  optionsList: string[]
}

export const InputCheckbox = ({ optionsList }: InputCheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const [options, setOptions] = useState<string[]>([])

  const onclick = (value: string) => {
    const result = options?.includes(value)
    if (result && checked === true) {
      setChecked(false)
      setOptions(options.splice(options.indexOf(value), 1))
    } else {
      setOptions([...options, value])
      setChecked(true)
      console.log(options?.includes(value))
      console.log(options)
    }
  }

  return (
    <Styled.Container data-testid='input-checkbox'>
      {optionsList.map((option, key) => (
        <InputItem key={key} checked={options?.includes(option) && checked} option={option} onclick={onclick} />
      ))}
    </Styled.Container>
  )
}
