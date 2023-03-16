import React from 'react'
import { mount } from 'cypress/react18'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Stopwatch } from './'

describe('Stopwatch', () => {
  it('Deve conter um container com label e cronômetro', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Stopwatch initialTime={90} onResend={cy.stub().as('onResend')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="stopwatch-container"]')
      .should('exist')
      .and('have.css', 'height', '64px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'align-items', 'flex-start')
      .and('have.css', 'gap', '8px')
  })

  it('Deve conter nome Aguardando', () => {
    cy.wait(1000)
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Stopwatch initialTime={90} onResend={cy.stub().as('onResend')} />
      </ThemeDSProvider>
    )

    cy.get('[data-testid="stopwatch-container"]').get('[data-testid="body"]').should('have.text', 'Aguardando')
  })
})
