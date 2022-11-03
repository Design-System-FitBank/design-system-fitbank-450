import React from 'react'

import 'cypress-real-events/support'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

import { Sidebar } from '.'

describe('Sidebar', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o componente Sidebar', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Sidebar />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "sidebar-container"]')
      .should('have.css', 'background-color', 'rgb(249, 249, 249)')
      .and('have.css', 'height', '500.3636474609375px')
      .and('have.css', 'width', '320px')
    cy.get('[data-testid = "logo-container"]')
      .should('have.css', 'width', '142px')
      .and('have.css', 'height', '38px')
      .and('have.css', 'margin', '20px 0px')
    cy.get('[data-testid = "close-button-container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'flex-end')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'margin', '12px')
      .and('have.css', 'gap', '12px')
      .and('have.css', 'font-weight', '500')
      .and('have.css', 'cursor', 'pointer')
  })
})
