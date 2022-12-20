import React from 'react'

import { IconTab } from '../IconTab'
import { TitleTab } from '../TitleTab'
import { DescriptionTab } from '../DescriptionTab'

import * as Styled from './styles'

type ContainerProps = {
  icon: any
  title: string
  description: string
}

export const ContainerTab: React.FC<ContainerProps> = ({ icon, title, description }) => {
  return (
    <Styled.Container data-testeid='container'>
      <IconTab data-testeid='tab' icon={icon} />
      <div>
        <TitleTab>{title}</TitleTab>
        <DescriptionTab>{description}</DescriptionTab>
      </div>
    </Styled.Container>
  )
}
