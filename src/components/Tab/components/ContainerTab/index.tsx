import React from 'react'

import { IconTab } from '../IconTab'
import { LabelTab } from '../LabelTab'

import * as Styled from './styles'

type ContainerProps = {
  icon: any
  title: string
  description: string
}

export const ContainerTab: React.FC<ContainerProps> = ({ icon, title }) => {
  return (
    <Styled.Container data-testeid='container'>
      <IconTab data-testeid='tab' icon={icon} />
      <LabelTab>{title}</LabelTab>
    </Styled.Container>
  )
}
