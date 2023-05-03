import React, { ReactNode } from 'react'

import * as Styled from './styles'
export interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'bodySmall'
    | 'bodySmallBold'
    | 'body'
    | 'bodyBold'
    | 'bodyMedium'
    | 'bodyMediumBold'
    | 'bodyLarge'
    | 'bodyLargeBold'
    | 'buttonSmall'
    | 'button'
    | 'buttonLarge'
    | 'caption'
    | 'captionBold'
  children?: ReactNode | ReactNode[]
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

      case 'bodySmall':
        return <Styled.BodySmall data-testid='bodySmall'>{children}</Styled.BodySmall>

      case 'bodySmallBold':
        return <Styled.BodySmallBold data-testid='bodySmallBold'>{children}</Styled.BodySmallBold>

      case 'body':
        return <Styled.Body data-testid='body'>{children}</Styled.Body>

      case 'bodyBold':
        return <Styled.BodyBold data-testid='bodyBold'>{children}</Styled.BodyBold>

      case 'bodyMedium':
        return <Styled.BodyMedium data-testid='bodyMedium'>{children}</Styled.BodyMedium>

      case 'bodyMediumBold':
        return <Styled.BodyMediumBold data-testid='bodyMediumBold'>{children}</Styled.BodyMediumBold>

      case 'bodyLarge':
        return <Styled.BodyLarge data-testid='bodyLarge'>{children}</Styled.BodyLarge>

      case 'bodyLargeBold':
        return <Styled.BodyLargeBold data-testid='bodyLargeBold'>{children}</Styled.BodyLargeBold>

      case 'caption':
        return <Styled.Caption data-testid='caption'>{children}</Styled.Caption>

      case 'captionBold':
        return <Styled.CaptionBold data-testid='caption'>{children}</Styled.CaptionBold>

      case 'buttonSmall':
        return <Styled.ButtonSmall data-testid='buttonSmall'>{children}</Styled.ButtonSmall>

      case 'button':
        return <Styled.Button data-testid='button'>{children}</Styled.Button>

      case 'buttonLarge':
        return <Styled.ButtonLarge data-testid='buttonLarge'>{children}</Styled.ButtonLarge>

      default:
        return <Styled.H1 data-testid='h1'>{children}</Styled.H1>
    }
  }

  return <div data-testid='typography'>{component(variant)}</div>
}
