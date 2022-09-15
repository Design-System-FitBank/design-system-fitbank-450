import React from 'react'
import { DefaultTheme, ThemeProvider as StyledProvider, ThemeProviderProps } from 'styled-components'
import { Theme } from './Theme'

type ThemeProps = {
  children: React.ReactNode,
  theme?: DefaultTheme
}

export const ThemeProvider: React.FC<ThemeProviderProps<ThemeProps>> = ({ children, theme }) => (
  <StyledProvider theme={theme || Theme} >
    {children}
  </StyledProvider>
)

