import React from 'react'

import { IconButton } from '../IconButton'
import { LabelButton } from '../LabelButton'

import * as Styled from './styles'

type ContainerProps = {
  icon: any,
  children: string,
  iconRight: boolean,
  isSmall: boolean
}

export const ContainerButton: React.FC<ContainerProps> = (
  {
    icon,
    children,
    isSmall,
    iconRight
  }
) => {
  return (
    <Styled.Container data-testeid="container">
      <IconButton
        data-testeid="iconPrefix"
        icon={icon}
        isSmall={isSmall}
        show={!iconRight}
      />
      <LabelButton isSmall={isSmall}>{children}</LabelButton>
      <IconButton
        data-testeid="iconSuffix"
        icon={icon}
        isSmall={isSmall}
        show={iconRight}
      />
    </Styled.Container>
  )
}
