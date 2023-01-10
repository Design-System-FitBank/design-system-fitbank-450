import React from 'react'

import { IconButton } from '../IconButton'
import { LabelButton } from '../LabelButton'

import * as Styled from './styles'

type ContainerProps = {
  props: {
    icon: any
    children: string
    iconRight: boolean
    isSmall: boolean
  }
}

export const ContainerButton: React.FC<ContainerProps> = ({ props }) => {
  const { icon, isSmall, iconRight, children } = props
  return (
    <Styled.Container data-testeid='container'>
      <IconButton icon={icon} isSmall={isSmall} show={!iconRight} />
      <LabelButton isSmall={isSmall}>{children}</LabelButton>
      <IconButton icon={icon} isSmall={isSmall} show={iconRight} />
    </Styled.Container>
  )
}
