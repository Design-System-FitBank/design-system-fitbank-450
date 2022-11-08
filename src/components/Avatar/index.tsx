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
  /**
   * Troca a cor de fundo do avatar
   */
  secondary?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({ type, secondary = false }) => {
  const name = type === 'PF' ? 'user' : 'enterprise'

  return (
    <Styled.Container data-testid='container' secondary={secondary}>
      <Styled.Icon data-testid='icon' secondary={secondary}>
        <Icon name={name} />
      </Styled.Icon>
    </Styled.Container>
  )
}
