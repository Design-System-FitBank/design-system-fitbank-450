import React, { useEffect, useState } from 'react'

import * as Styles from './styles'

import { Typography } from '../Typography'
import { Icon } from '../Icon'

interface SelectProps {
  title: string
  placeholder: string
  options: string[]
  isMulti?: boolean
}

export const Select: React.FC<SelectProps> = ({ title, placeholder, options, isMulti = false }) => {
  const [openModal, setOpenModal] = useState(false)
  const [optionsValue, setOptionsValue] = useState<string>()
  const [optionsToFilter, setOptionsToFilter] = useState(options)
  const [addOptionTag, setAddOptionTag] = useState<string[]>(['Tag'])
  const isMultiple = isMulti

  const handleClickedItem = (value: string) => {
    setOptionsValue(value)
    setOpenModal(false)
  }

  const handleFilteredOptions = (value: string) => {
    const filteredOptions = options.filter(item => item.toLowerCase().includes(value.toLowerCase()))
    setOptionsToFilter(filteredOptions)
    setOptionsValue(value)
  }

  const handleAddTagOption = (value: string) => {
    if (addOptionTag.includes('Tag')) {
      addOptionTag.splice(addOptionTag.indexOf('Tag'), 1)
    }
    setAddOptionTag([...addOptionTag, value])
    options.splice(options.indexOf(value), 1)
    setOptionsToFilter(options)
  }

  const handleRemoveOptionTags = (indexToRemove: number) => {
    setAddOptionTag(addOptionTag.filter((_, index) => index !== indexToRemove))
  }

  const handleRealoacateOptionAfterDeleteTag = (value: string) => {
    optionsToFilter.unshift(value)
  }

  const handleMaxTagsInsideInput = (value: string) => {
    if (addOptionTag.length >= 3) {
      console.log(addOptionTag.at(-1))
      console.log(addOptionTag)
    }
  }

  return (
    <Styles.Container>
      <Styles.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styles.Label>

      <Styles.ContainerInput data-testid='container' isOpen={openModal}>
        {addOptionTag[0] !== 'Tag' &&
          addOptionTag.map((tag, index) => (
            <Styles.Tags key={index}>
              <Styles.SpanTag>
                <Typography variant='caption'>{tag}</Typography>
              </Styles.SpanTag>
              <Styles.TagIcon
                onClick={() => {
                  handleRemoveOptionTags(index)
                  handleRealoacateOptionAfterDeleteTag(tag)
                }}
              >
                <Icon data-testeid='cancel' name='cancel' width={14} height={14} />
              </Styles.TagIcon>
            </Styles.Tags>
          ))}

        <Styles.Input
          data-testid='input'
          onClick={() => setOpenModal(!openModal)}
          onChange={({ target }) => handleFilteredOptions(target.value)}
          value={optionsValue}
          placeholder={placeholder}
        />
        <Styles.Icon onClick={() => setOpenModal(!openModal)} isOpen={openModal}>
          <Icon data-testeid='arrowDown' name='arrowDown' width={24} height={24} />
        </Styles.Icon>
      </Styles.ContainerInput>

      {isMultiple ? (
        <Styles.Modal isOpen={openModal} onFocus={() => setOpenModal(false)}>
          {optionsToFilter.map(value => (
            <Styles.Item
              onClick={() => {
                handleAddTagOption(value)
                handleMaxTagsInsideInput(value)
              }}
            >
              <Typography variant='bodyLarge'>{value}</Typography>
            </Styles.Item>
          ))}
        </Styles.Modal>
      ) : (
        <Styles.Modal isOpen={openModal}>
          {optionsToFilter.map(value => (
            <Styles.Item onClick={() => handleClickedItem(value)}>
              <Typography variant='bodyLarge'>{value}</Typography>
            </Styles.Item>
          ))}
        </Styles.Modal>
      )}
    </Styles.Container>
  )
}
