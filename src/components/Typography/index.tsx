import React from 'react'

import * as Styled from './styles'
interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'body'
    | 'bodySmall'
    | 'bodyBold'
    | 'bodyLarge'
    | 'caption'
  children?: string
}

export const Typography = ({ variant = 'h1', children }: TypographyProps) => {
  const component = (variant: string) => {
    switch (variant) {
      case 'h1':
        return <Styled.H1 data-testid='h1'>{children}</Styled.H1>

      case 'h2':
        return <Styled.H2 data-testid='h2'>{children}</Styled.H2>

      case 'h3':
        return <Styled.H3 data-testid='h3'>{children}</Styled.H3>

      case 'h4':
        return <Styled.H4 data-testid='h4'>{children}</Styled.H4>

      case 'h5':
        return <Styled.H5 data-testid='h5'>{children}</Styled.H5>

      case 'h6':
        return <Styled.H6 data-testid='h6'>{children}</Styled.H6>

      case 'subtitle':
        return <Styled.Subtitle data-testid='subtitle'>{children}</Styled.Subtitle>

      case 'body':
        return <Styled.Body data-testid='body'>{children}</Styled.Body>

      case 'bodySmall':
        return <Styled.BodySmall data-testid='bodySmall'>{children}</Styled.BodySmall>

      case 'bodyBold':
        return <Styled.BodyBold data-testid='bodyBold'>{children}</Styled.BodyBold>

      case 'bodyLarge':
        return <Styled.BodyLarge data-testid='bodyLarge'>{children}</Styled.BodyLarge>

      case 'caption':
        return <Styled.Caption data-testid='caption'>{children}</Styled.Caption>

      default:
        return <Styled.H1 data-testid='h1'>{children}</Styled.H1>
    }
  }

  return <div data-testid='typography'>{component(variant)}</div>
}
