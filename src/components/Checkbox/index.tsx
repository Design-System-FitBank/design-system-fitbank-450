import { Icon } from '../Icon'
import React, { useEffect, useState } from 'react'
import * as Styled from './styles'
import { Typography } from '../Typography'

export interface CheckboxProps {
  /**
   * função obrigatória para receber o resultado se esta checado ou não!
   */
  onCheck: (checked: boolean) => void

  /**
   * Variável opcional para passar um estado inicial do check!
   */
  checked?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onCheck }) => {
  const [check, setCheck] = useState<boolean>(checked)
  const Onclick = () => {
    setCheck(!check)
  }

  useEffect(() => {
    onCheck(check)
  }, [check])

  return (
    <Styled.Checkbox data-testid='checkbox' checked={check} onClick={() => Onclick()}>
      {check && <Icon name='checked' width={8} height={8} />}
    </Styled.Checkbox>
  )
}
