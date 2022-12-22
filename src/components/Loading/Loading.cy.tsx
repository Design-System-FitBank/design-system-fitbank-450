import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Loading } from './'

describe('Loading', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Loading text='Loading...' />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o componente Loading', () => {
    cy.get('[data-testid = "container"]')
      .should('have.css', 'width', '500px')
      .and('have.css', 'height', '500px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'gap', '16px')
    cy.get('[data-testid = "loader-container"]')
      .should('have.css', 'animation', '0.8s ease 0s infinite normal none running kSzaaH')
      .and('have.css', 'border-right-color', 'rgb(50, 56, 79)')
      .and('have.css', 'border-right-color', 'rgb(50, 56, 79)')
      .and('have.css', 'border-radius', '50%')
  })
})
