import React from 'react'
import * as Styled from './styles'
import { Icon } from '../Icon'

export interface AvatarProps {
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
  small?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({ type, secondary = false, small = false }) => {
  const name = type === 'PF' ? 'user' : 'enterprise'
  const width = small ? 35 : 35
  const height = small ? 35 : 35

  return (
    <Styled.Container data-testid='container' secondary={secondary} small={small}>
      <Icon width={width} height={height} name={name} />
    </Styled.Container>
  )
}
