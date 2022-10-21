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

  const pin = new Array()

  it('Deve conter o PinToken default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken  />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
    cy.get('[data-testid = "pinToken"]')
      .should('have.css', 'width', '41.9886360168457px')
      .and('have.css', 'height', '41.9886360168457px')
  })
})
