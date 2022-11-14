import { mount } from 'cypress/react18'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Accordion } from '.'

describe('Accordion component', () => {
  const children = () => {
    return (
      <div style={{ height: 320 }}>
        dados
        <br />
        dados
        <br />
        dados
        <br />
        dados
        <br />
        dados
        <br />
        dados
        <br />
        dados
        <br />
        dados
        <br />{' '}
      </div>
    )
  }

  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Accordion children={children()} label='Ver dados da conta' />
      </ThemeDSProvider>
    )
  })

  it('deve mostrar accordion em estado close', () => {
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowDown"]').should('exist')
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowUp"]').should('not.exist')
    cy.get('[data-testid="accordion"]').should('have.css', 'cursor', 'pointer').and('have.css', 'height', '40px')
    cy.get('[data-testid="arrow"]').should('have.css', 'padding-top', '4px').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelAccordion"]')
      .should('have.text', 'Ver dados da conta')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'padding-left', '12px')
  })

  it('deve mostrar accordion em estado open', () => {
    cy.get('[ data-testid="button"]').click()
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowUp"]').should('exist')
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowDown"]').should('not.exist')
    cy.get('[data-testid="accordion"]').should('have.css', 'height', '320px').and('have.attr', { children })
  })

  it('deve mostrar accordion em estado close após receber um click no estado open', () => {
    cy.get('[ data-testid="button"]').click().wait(800)
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowUp"]').should('exist')
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowDown"]').should('not.exist')
    cy.get('[data-testid="accordion"]').should('have.attr', { children })
    cy.get('[ data-testid="button"]').click()
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowUp"]').should('not.exist')
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowDown"]').should('exist')
    cy.get('[data-testid="labelAccordion"]').should('have.text', 'Ver dados da conta')
  })
})
