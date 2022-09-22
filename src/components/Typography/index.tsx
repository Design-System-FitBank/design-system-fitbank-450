import React from 'react'

import * as Style from './styles'
interface TypographyProps {
  type:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'H5'
    | 'H6'
    | 'Subtitle'
    | 'Body'
    | 'BodySmall'
    | 'BodyBold'
    | 'BodyLarge'
    | 'Button'
    | 'ButtonSmall'
    | 'ButtonLarge'
    | 'Caption'
  label: string
}

export const Typography = ({ type = 'H1', label }: TypographyProps) => {
  const component = (type: string) => {
    switch (type) {
      case 'H1':
        return <Style.H1 data-testid='H1'>{label}</Style.H1>

      case 'H2':
        return <Style.H2 data-testid='H2'>{label}</Style.H2>

      case 'H3':
        return <Style.H3 data-testid='H3'>{label}</Style.H3>

      case 'H4':
        return <Style.H4 data-testid='H4'>{label}</Style.H4>

      case 'H5':
        return <Style.H5 data-testid='H5'>{label}</Style.H5>

      case 'H6':
        return <Style.H6 data-testid='H6'>{label}</Style.H6>

      case 'Subtitle':
        return <Style.Subtitle data-testid='Subtitle'>{label}</Style.Subtitle>

      case 'Body':
        return <Style.Body data-testid='Body'>{label}</Style.Body>

      case 'BodySmall':
        return <Style.BodySmall data-testid='BodySmall'>{label}</Style.BodySmall>

      case 'BodyBold':
        return <Style.BodyBold data-testid='BodyBold'>{label}</Style.BodyBold>

      case 'BodyLarge':
        return <Style.BodyLarge data-testid='BodyLarge'>{label}</Style.BodyLarge>

      case 'Button':
        return <Style.Button data-testid='Button'>{label}</Style.Button>

      case 'ButtonSmall':
        return <Style.ButtonSmall data-testid='ButtonSmall'>{label}</Style.ButtonSmall>

      case 'ButtonLarge':
        return <Style.ButtonLarge data-testid='ButtonLarge'>{label}</Style.ButtonLarge>

      case 'Caption':
        return <Style.Caption data-testid='Caption'>{label}</Style.Caption>

      default:
        return <div>Type not found!</div>
    }
  }

  return <div data-testid='typography'>{component(type)}</div>
}
