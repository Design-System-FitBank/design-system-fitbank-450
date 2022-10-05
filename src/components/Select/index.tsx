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
    <>
      <Styles.Label data-testid='label'>
        <Typography variant='bodyLarge'>{title}</Typography>
      </Styles.Label>

      <Styles.Container data-testid='container' onClick={() => setOpenModal(!openModal)}>
        <Styles.Input data-testid='input' placeholder={placeholder} />
        <Styles.Icon>
          <Icon name='arrowDown' width={24} height={24} />
        </Styles.Icon>
      </Styles.Container>

      <Styles.Modal isOpen={openModal}>
        <Typography variant='bodyLarge'>First Item</Typography>
      </Styles.Modal>
    </>
  )
}
