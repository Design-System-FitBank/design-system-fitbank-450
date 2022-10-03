import React from 'react'

import * as Styles from './styles'

import { Typography } from '../Typography'
import { Icon } from '../Icon'

interface SelectProps {
  title: string
  placeholder: string
  options: string[]
}

export const Select: React.FC<SelectProps> = ({ title, placeholder, options }) => {
  return (
    <>
      <Styles.Label data-testid='label'>
        <Typography variant='body'>{title}</Typography>
      </Styles.Label>
      <Styles.Container>
        <Styles.Input data-testid='input' placeholder={placeholder} readOnly />
        <Styles.Icon>
          <Icon name='arrowDown' width={24} height={24} />
        </Styles.Icon>
      </Styles.Container>
    </>
  )
}
