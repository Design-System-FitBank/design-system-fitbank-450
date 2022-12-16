import React from 'react'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../../../theme'
import { DateInput } from './'

describe('DateInput', () => {
  beforeEach(() => {
    cy.wait(100)
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <DateInput onchange={() => {}} />
      </ThemeDSProvider>
    )
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o toggle default', () => {
    cy.get('[data-testid = "date-input"]')
      .should('have.css', 'height', '48px')
      .and('have.css', 'width', '500.3636474609375px')
  })
})
