import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Radio } from '.'

describe('Radio', () => {
  it('Deve ser o componente radio', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Radio />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio"]')
      .should('be.visible')
      .and('have.css', 'width', '16px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(167, 167, 167)')
      .and('have.css', 'border-radius', '20px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve ser o componente radio checked', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Radio checked={true} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-child"]')
      .should('exist')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'width', '12px')
      .and('have.css', 'height', '12px')
      .and('have.css', 'border-radius', '20px')
  })
})
