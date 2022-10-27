import React from 'react'
import { LogoPrimary } from './logos/LogoPrimary'
import { LogoSecundary } from './logos/LogoSecundary'
import { LogoSmallPrimary } from './logos/LogoSmallPrimary'
import { LogoSmallSecundary } from './logos/LogoSmallSecundary'

interface LogoProps {
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
