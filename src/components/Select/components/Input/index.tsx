import React from 'react'

import { ContainerInput, InputContent, IconContent } from './styles'

import { Icon } from '../../../Icon'

interface InputProps {
  optionsValue: string | undefined
  placeholder: string
  openModal: boolean
  onClick: () => void
  onChange: (value: string) => void
}

export const Input: React.FC<InputProps> = ({ openModal, onClick, onChange, optionsValue, placeholder }) => {
  return (
    <ContainerInput isOpen={openModal} onClick={() => onClick()}>
      <InputContent onChange={({ target }) => onChange(target.value)} value={optionsValue} placeholder={placeholder} />
      <IconContent isOpen={openModal}>
        <Icon data-testeid='arrowDown' name='arrowDown' width={24} height={24} />
      </IconContent>
    </ContainerInput>
  )
}
