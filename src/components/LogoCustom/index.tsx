import React from 'react'

export interface LogoCustomProps {
  /**
   * Variável que recebe uma logo personalizada de qualquer tipo.
   * O tamanho da logo personalizada precisa está implícito no arquivo passado.
   */
  children: React.ReactNode
}

export const LogoCustom: React.FC<LogoCustomProps> = ({ children }) => {
  return <div data-testid='custom'>{children}</div>
}
