import React from 'react'

import { Typography } from '../../../Typography'
import { ModalContent, Item } from './styles'

interface ModalContentProps {
  openModal: boolean
  options: string[]
  onClick: (value: string) => void
}

export const Modal: React.FC<ModalContentProps> = ({ openModal, options, onClick }) => {
  return (
    <ModalContent isOpen={openModal}>
      {options.map(value => (
        <Item onClick={() => onClick(value)}>
          <Typography variant='bodyLarge'>{value}</Typography>
        </Item>
      ))}
    </ModalContent>
  )
}
