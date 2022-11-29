import React, { useState } from 'react'
import { Typography } from '../Typography'
import * as Styled from './styles'
import { Icon } from '../Icon'
import { Validator } from '../../_utils/validator'
import { Mask } from '../../_utils/mask'
interface TabProps {
  /**
   * Define se a tab está desabilitada ou não.
   */
  disabled?: boolean

  /**
   * Função sem retorno que será chamada ao se clicar na tab.
   */
  onClick: () => void
}

export const Tab: React.FC<TabProps> = ({ disabled = false, onClick }) => {
  const returnElement = () => {
    return (
      <Styled.Primary data-testeid='tab' onClick={onClick} disabled={disabled}>
        <ContainerTab icon={icon}>{children}</ContainerTab>
      </Styled.Primary>
    )
  }

  return returnElement
}
