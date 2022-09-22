import React from 'react'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Typography } from '.'

describe('Typography', () => {
  it('O Headline deve conter a fonte Roboto, o peso da fonte BOLD e o tamanho de 56px', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Typography type='H1' label='Headline H1' />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = typography]')
      .get('[data-testid= "h1Test"]')
      .should('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'font-size', '56px')
      .and('have.css', 'line-height', '64px')
  })
})
