import React from 'react'
import { Icon } from '../../../Icon'

import * as Styled from './styles'

type IconProps = {
  icon: any,
  show: boolean,
  isSmall: boolean
}

export const IconButton: React.FC<IconProps> = ({ icon, isSmall, show }) => {
  const size = isSmall ? 20 : 32
  return (
    <Styled.Container isSmall={isSmall}>
      {
        icon && show
        && <Icon name={icon} width={size} height={size}></Icon>
      }
    </Styled.Container>
  )
}
