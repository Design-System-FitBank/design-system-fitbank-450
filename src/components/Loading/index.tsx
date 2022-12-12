import { Typography } from '../Typography'
import React from 'react'
import * as Styled from './styles'

export interface LoadingProps {
  text?: string
}

export const Loading: React.FC<LoadingProps> = ({ text }) => {
  return (
    <Styled.Container data-testid='container'>
      <Styled.Loader data-testid='loader-container' />
      {text && <Typography variant='h6'>{text}</Typography>}
    </Styled.Container> 
  )
}
