import React from 'react'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { H1 } from './Typography.stories'

describe('Typography', () => {
  it('O Headline deve conter a fonte Roboto, o peso da fonte BOLD e o tamanho de 56px', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <H1 type='H1' label='testH1' />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = h1]')
      .should('have.css', 'font-family', 'Roboto')
      .and('have.css', 'font-weight', '700')
      .and('have.css', 'font-size', '32px')
  })
})
