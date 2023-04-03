import React from 'react'

import { Typography } from '../../../Typography'
import { ModalContent, Item } from './styles'

export interface ModalContentProps {
  openModal: boolean
  options: string[]
  onClick: (value: string) => void
}

export const Modal: React.FC<ModalContentProps> = ({ openModal, options, onClick }) => {
  return (
    <ModalContent data-testid='modal' isOpen={openModal}>
      {options.map((value, index) => (
        <Item key={index} data-testid={`item-${index}`} onClick={() => onClick(value)}>
          <Typography variant='bodyLarge'>{value}</Typography>
        </Item>
      ))}
    </ModalContent>
  )
}
