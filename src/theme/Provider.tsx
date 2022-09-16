import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Theme'

export const ThemeDSProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme || Theme} >
    {children}
  </ThemeProvider>
)

