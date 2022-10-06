import React, { useState } from 'react'

import * as Styles from './styles'

import { Typography } from '../Typography'
import { Icon } from '../Icon'

interface SelectProps {
  title: string
  placeholder: string
  options: string[]
}

export const Select: React.FC<SelectProps> = ({ title, placeholder, options }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <Styles.Container>
      <Styles.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styles.Label>

      <Styles.ContainerInput data-testid='container' isOpen={openModal}>
        <Styles.Input data-testid='input' onChange={() => setOpenModal(!openModal)} placeholder={placeholder} />
        <Styles.Icon onClick={() => setOpenModal(!openModal)}>
          <Icon name='arrowDown' width={24} height={24} />
        </Styles.Icon>
      </Styles.ContainerInput>

      <Styles.Modal isOpen={openModal}>
        {options.map(value => (
          <Styles.Item>
            <Typography variant='bodyLarge'>{value}</Typography>
          </Styles.Item>
        ))}
      </Styles.Modal>
    </Styles.Container>
  )
}
