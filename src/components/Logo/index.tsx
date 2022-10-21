import React from 'react'
import { LogoPrimary } from './logos/LogoPrimary'
import { LogoSecundary } from './logos/LogoSecundary'
import { LogoSmallPrimary } from './logos/LogoSmallPrimary'
import { LogoSmallSecundary } from './logos/LogoSmallSecundary'

interface LogoProps {
  name: 'logoDefault' | 'logoSecundary' | 'smallPrimary' | 'smallSecundary'
}

export const Logo: React.FC<LogoProps> = ({ name }) => {
  switch (name) {
    case 'logoDefault':
      return <LogoPrimary data-testid='default' />

    case 'logoSecundary':
      return <LogoSecundary data-testid='secundary' />

    case 'smallPrimary':
      return <LogoSmallPrimary data-testid='smallPrimary' />

    case 'smallSecundary':
      return <LogoSmallSecundary data-testid='smallSecundary' />
  }
}
