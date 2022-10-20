import React, { useState } from 'react'

import { Label } from './components/Label'
import { Input } from './components/Input'
import { Modal } from './components/Modal'

import { Container } from './styles'

interface SelectProps {
  title: string
  placeholder: string
  options: string[]
  onSelected: (value: string) => void
}

export const Select: React.FC<SelectProps> = ({ title, placeholder, options, onSelected }) => {
  const [openModal, setOpenModal] = useState(false)
  const [optionsValue, setOptionsValue] = useState<string>()
  const [optionsToFilter, setOptionsToFilter] = useState(options)

  const handleClickedItem = (value: string) => {
    setOptionsValue(value)
    setOpenModal(false)
    onSelected(value)
  }

  const handleFilteredOptions = (value: string) => {
    const filteredOptions = options.filter(item => item.toLowerCase().includes(value.toLowerCase()))
    setOptionsToFilter(filteredOptions)
    setOptionsValue(value)
  }

  const handleClickedInput = () => {
    setOpenModal(!openModal)
  }

  return (
    <Container data-testid='select'>
      <Label>{title}</Label>
      <Input
        openModal={openModal}
        placeholder={placeholder}
        optionsValue={optionsValue}
        onChange={handleFilteredOptions}
        onClick={handleClickedInput}
      />
      <Modal options={optionsToFilter} onClick={handleClickedItem} openModal={openModal} />
    </Container>
  )
}
