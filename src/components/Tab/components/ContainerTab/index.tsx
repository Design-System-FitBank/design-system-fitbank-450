import React from 'react'

import * as Styled from './styles'
import { Typography } from '../../../Typography'
import { IconTab } from '../IconTab'

type ContainerProps = {
  icon: any
  title: string
  description: string
}

export const ContainerTab: React.FC<ContainerProps> = ({ icon, title, description }) => {
  return (
    <Styled.Container data-testid='data-container'>
    <IconTab icon={ icon }/>
      <div>
        <Typography variant='bodyLargeBold'>{title}</Typography>
        <Typography variant='subtitle'>{description}</Typography>
      </div>
    </Styled.Container>
  )
}
