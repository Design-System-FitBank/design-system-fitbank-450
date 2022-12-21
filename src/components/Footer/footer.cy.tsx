import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Footer } from './'

describe('Footer', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Footer children='Footer' />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o componente Footer', () => {
    cy.get('[data-testid = "container"]').should('have.text', 'Footer')
  })
})
