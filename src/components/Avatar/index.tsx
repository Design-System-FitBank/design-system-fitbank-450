import React from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'

interface AvatarProps {
  /**
   * Variável referente ao tipo de avatar.
   * PF referente à pessoa física.
   * PJ referente à pessoa jurídica.
   */
  type: 'PF' | 'PJ'
}

export const Avatar: React.FC<AvatarProps> = ({ type }) => {
  const name = type === 'PF' ? 'user' : 'enterprise'

  return (
    <Styled.Container data-testid='container'>
      <Styled.Icon data-testid='icon'>
        <Icon name={name} />
      </Styled.Icon>
    </Styled.Container>
  )
}
