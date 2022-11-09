import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Loading } from './'

describe('Loading', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Loading children='Loading...' />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter', () => {
    cy.get('[data-testid = "loader-container"]')
      .should('have.css', 'width', '100vw')
      .and('have.css', 'height', '100vh')
  })
})
