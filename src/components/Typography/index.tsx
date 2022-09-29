import React from 'react'

import * as Style from './styles'
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
        return <Style.H1 data-testid='h1'>{children}</Style.H1>

      case 'h2':
        return <Style.H2 data-testid='h2'>{children}</Style.H2>

      case 'h3':
        return <Style.H3 data-testid='h3'>{children}</Style.H3>

      case 'h4':
        return <Style.H4 data-testid='h4'>{children}</Style.H4>

      case 'h5':
        return <Style.H5 data-testid='h5'>{children}</Style.H5>

      case 'h6':
        return <Style.H6 data-testid='h6'>{children}</Style.H6>

      case 'subtitle':
        return <Style.Subtitle data-testid='subtitle'>{children}</Style.Subtitle>

      case 'body':
        return <Style.Body data-testid='body'>{children}</Style.Body>

      case 'bodySmall':
        return <Style.BodySmall data-testid='bodySmall'>{children}</Style.BodySmall>

      case 'bodyBold':
        return <Style.BodyBold data-testid='bodyBold'>{children}</Style.BodyBold>

      case 'bodyLarge':
        return <Style.BodyLarge data-testid='bodyLarge'>{children}</Style.BodyLarge>

      case 'caption':
        return <Style.Caption data-testid='caption'></Style.Caption>

      default:
        return <Style.H1 data-testid='h1'>{children}</Style.H1>
    }
  }

  return <div data-testid='typography'>{component(variant)}</div>
}
