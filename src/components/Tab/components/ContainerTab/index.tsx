import React from 'react'

import { IconTab } from '../IconTab'

import * as Styled from './styles'

type ContainerProps = {
  icon: any
}

export const ContainerTab: React.FC<ContainerProps> = ({ icon }) => {
  return (
    <Styled.Container data-testeid='container'>
      <IconTab data-testeid='tab' icon={icon} />
    </Styled.Container>
  )
}
