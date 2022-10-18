import React from 'react'

import { mount } from 'cypress/react18'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { PinToken } from '.'

describe('PinToken', () => {
  beforeEach(() => {
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o PinToken default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
    cy.get('[data-testid = "pinToken"]')
      .should('have.css', 'width', '42px')
      .and('have.css', 'height', '42px')
  })
})
