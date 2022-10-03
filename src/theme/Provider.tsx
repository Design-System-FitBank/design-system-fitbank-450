import React from 'react'
import { ThemeProvider } from 'styled-components'

export const ThemeDSProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme} >
    {children}
  </ThemeProvider>
)

