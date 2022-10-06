import React, { useState } from 'react'

import * as Styles from './styles'

import { Typography } from '../Typography'
import { Icon } from '../Icon'

interface SelectProps {
  title: string
  placeholder: string
  options: string[]
  isMulti?: boolean
}

export const Select: React.FC<SelectProps> = ({ title, placeholder, options }) => {
  const [openModal, setOpenModal] = useState(false)
  const [optionsValue, setOptionsValue] = useState<string>()
  const [optionsToFilter, setOptionsToFilter] = useState(options)

  const handleItemClick = (value: string) => {
    setOptionsValue(value)

    setOpenModal(false)
  }

  const handleOptionsFilter = (value: string) => {
    const filteredOptions = options.filter(item => item.toLowerCase().includes(value.toLowerCase()))

    setOptionsToFilter(filteredOptions)
  }

  return (
    <Styles.Container>
      <Styles.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styles.Label>

      <Styles.ContainerInput data-testid='container' isOpen={openModal}>
        <Styles.Input
          data-testid='input'
          onClick={() => setOpenModal(!openModal)}
          onChange={({ target }) => handleOptionsFilter(target.value)}
          value={optionsValue}
          placeholder={placeholder}
        />
        <Styles.Icon onClick={() => setOpenModal(!openModal)} isOpen={openModal}>
          <Icon name='arrowDown' width={24} height={24} />
        </Styles.Icon>
      </Styles.ContainerInput>

      <Styles.Modal isOpen={openModal} onFocus={() => setOpenModal(false)}>
        {optionsToFilter.map(value => (
          <Styles.Item onClick={() => handleItemClick(value)}>
            <Typography variant='bodyLarge'>{value}</Typography>
          </Styles.Item>
        ))}
      </Styles.Modal>
    </Styles.Container>
  )
}
