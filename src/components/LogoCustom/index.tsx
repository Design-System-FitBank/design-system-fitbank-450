import React from 'react'

interface LogoCustomProps {
  children: React.ReactNode
}

export const LogoCustom: React.FC<LogoCustomProps> = ({ children }) => {
  return <div data-testid='custom'>{children}</div>
}
