import React from 'react'
import { LogoPrimary } from './logos/LogoPrimary'
import { LogoSecundary } from './logos/LogoSecundary'
import { LogoSmallPrimary } from './logos/LogoSmallPrimary'
import { LogoSmallSecundary } from './logos/LogoSmallSecundary'

interface LogoProps {
  /**
   *referente à largura do componente.
   *caso não seja setada o seu valor default é de 110px
   */
  width?: number
  /**
   * referente à altura do componente.
   * caso não seja setada o seu valor default é de 110px
   */
  heigth?: number
  /**
   * Variáveis referente aos tipos de logos
   */
  name: 'default' | 'secundary' | 'smallPrimary' | 'smallSecundary'
}

export const Logo: React.FC<LogoProps> = ({ name, width = 110, heigth = 110 }) => {
  switch (name) {
    case 'default':
      return <LogoPrimary data-testid='primary' width={width} height={heigth} />

    case 'secundary':
      return <LogoSecundary data-testid='secundary' width={width} height={heigth} />

    case 'smallPrimary':
      return <LogoSmallPrimary data-testid='smallPrimary' width={width} height={heigth} />

    case 'smallSecundary':
      return <LogoSmallSecundary data-testid='smallSecundary' width={width} height={heigth} />

    default:
      return <div></div>
  }
}
