import React from 'react'
import { LogoPrimary } from './Logos/LogoPrimary'
import { LogoSecundary } from './Logos/LogoSecundary'
import { LogoSmallPrimary } from './Logos/LogoSmallPrimary'
import { LogoSmallSecundary } from './Logos/LogoSmallSecundary'

export interface LogoProps {
  /**
   * Variáveis referente aos tipos de logos
   */
  name: 'default' | 'secundary' | 'smallPrimary' | 'smallSecundary'
}

export const Logo: React.FC<LogoProps> = ({ name }) => {
  switch (name) {
    case 'default':
      return <LogoPrimary data-testid='primary' />

    case 'secundary':
      return <LogoSecundary data-testid='secundary' />

    case 'smallPrimary':
      return <LogoSmallPrimary data-testid='smallPrimary' />

    case 'smallSecundary':
      return <LogoSmallSecundary data-testid='smallSecundary' />

    default:
      return <div></div>
  }
}
