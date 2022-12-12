import React from 'react'
import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { PopUp } from './'

describe('PopUp', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PopUp 
          message='Teste'
          loading={true}
          success={false}
        />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o componente PopUp/OperationsStatus', () => {
    cy.get('[data-testid = "container"]')
      .should('have.css', 'width', '500px')
      .and('have.css', 'height', '500px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'gap', '16px')
    cy.get('[data-testid = "loader-container"]')
      .should('have.css', 'animation', '0.8s ease 0s infinite normal none running kSzaaH')
      .and('have.css', 'border-right-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border-right-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border-radius', '50%')
  })
})
