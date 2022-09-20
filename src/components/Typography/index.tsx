import React from 'react'

import { Container } from './styles'

interface TypographyProps {
  type: 'headline' | 'subtitle' | 'body' | 'button' | 'caption'
  label: string
}

export const Typography = ({ type = 'headline', label, ...props }: TypographyProps) => {
  switch (type) {
    case 'headline':
      return (
        <Container data-testid='headline' {...props}>
          {label}
        </Container>
      )

    case 'subtitle':
      return (
        <Container data-testid='subtitle' {...props}>
          {label}
        </Container>
      )

    case 'body':
      return (
        <Container data-testid='body' {...props}>
          {label}
        </Container>
      )

    case 'button':
      return (
        <Container data-testid='button' {...props}>
          {label}
        </Container>
      )

    case 'caption':
      return (
        <Container data-testid='caption' {...props}>
          {label}
        </Container>
      )
  }
}
