import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Theme } from './Theme'

type ProviderProps = {
  theme?: DefaultTheme,
  children: JSX.Element | JSX.Element[]
}

export const ThemeDSProvider: React.FC<ProviderProps> = ({ children, theme =  Theme}) => (
  <ThemeProvider theme={theme} >
    {children}
  </ThemeProvider>
)

