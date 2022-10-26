import { Icon } from '../../Icon'
import React, { HtmlHTMLAttributes, ReactHTML, ReactHTMLElement } from 'react'
import * as Styled from './styles'
import { Typography } from '../../Typography'

interface CheckboxProps extends HtmlHTMLAttributes<HTMLDivElement>{
  option: string
  checked?: boolean
}

export const InputCheckboxItem = ({ checked = false, option, ...props }: CheckboxProps) => {
  return (
    <Styled.Container data-testid={`container-${option}`} {...props}>
      <Styled.Checkbox data-testid='checkbox' checked={checked}>
        {checked && <Icon name='checked' width={8} height={8} />}
      </Styled.Checkbox>
      <Typography variant='body'>{option}</Typography>
    </Styled.Container>
  )
}
