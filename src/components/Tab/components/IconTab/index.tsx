import React from 'react'
import { Icon } from '../../../Icon'

import * as Styled from './styles'

type IconProps = {
  icon: any
}

export const IconTab: React.FC<IconProps> = ({ icon }) => {
  return <Styled.Container><Icon name={icon}></Icon></Styled.Container>
}
