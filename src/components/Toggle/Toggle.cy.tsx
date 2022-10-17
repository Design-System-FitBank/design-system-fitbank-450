import React from 'react'

import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Toggle } from '.'

describe('Toggle', () => {
  it('Deve conter o toggle', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "toggle"]')
      .should('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'width', '32px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'background-color', 'rgb(235, 231, 231)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve conter um switcher', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "toggle"]')
      .should('have.css', 'width', '12px')
      .and('have.css', 'height', '12px')
      .and('have.css', 'margin', '2px')
      .and('have.css', 'border-radius', '50%')
  })
})
