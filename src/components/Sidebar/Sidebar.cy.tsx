import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Sidebar } from '.'

describe('Select', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar children='navButton'/>
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter titulo, placeholder e uma lista de opções', () => {
    cy.get('[data-testid = "label"]').should('have.css', 'color', 'rgb(50, 55, 81)')
  })
})
