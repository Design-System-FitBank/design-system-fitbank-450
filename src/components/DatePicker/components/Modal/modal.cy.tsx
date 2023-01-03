import React from 'react'

import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../../../theme'
import { Modal } from './'

describe('Modal', () => {
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Modal />
      </ThemeDSProvider>
    )
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o modal default', () => {
    cy.get('[data-testid = "modal-schedule"]')
      .should('have.css', '')
  })
})
