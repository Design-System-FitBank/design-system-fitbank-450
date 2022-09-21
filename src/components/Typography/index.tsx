import React from 'react'

import * as Style from './styles'
interface TypographyProps {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'Subtitle' | 'BodySmall' | 'BodyBold' | 'BodyLarge' | 'Caption'
  label: string
}

export const Typography: React.FC<TypographyProps> = ({ type = 'H1', label }) => {
  const component = (type: string) => {
    switch (type) {
      case 'H1':
        return <Style.H1>{label}</Style.H1>

      case 'H2':
        return <Style.H2>{label}</Style.H2>

      case 'H3':
        return <Style.H3>{label}</Style.H3>

      case 'H4':
        return <Style.H4>{label}</Style.H4>

      case 'H5':
        return <Style.H5>{label}</Style.H5>

      case 'H6':
        return <Style.H6>{label}</Style.H6>

      default:
        return
    }
  }

  return <div data-testid='typography'>{component(type)}</div>
}
