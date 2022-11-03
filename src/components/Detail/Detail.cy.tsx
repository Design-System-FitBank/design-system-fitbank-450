import { mount } from 'cypress/react18'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Detail } from '.'

describe('Detail component', () => {
  const dataUser = {
    businessUnit: 'ACME Bank',
    accountName: 'KIMBAP ASIAN FOOD LTDA',
    uniqueIdentifier: '12345678-910'
  }

  it('deve mostrar componente default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Detail dataUser={dataUser} onClick={cy.stub().as('onClick')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="avatar"]').should('exist')
    cy.get('[data-testid="businessUnit"]')
      .should('have.text', dataUser.businessUnit)
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'margin-top', '20px')
    cy.get('[data-testid="account"]')
      .should('have.text', dataUser.accountName)
      .and('have.css', 'text-transform', 'uppercase')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'margin-top', '8px')
    cy.get('[data-testid="labelIdentifier"]')
      .should('have.text', 'CPF/CNPJ:')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="uniqueIdentifier"]')
      .should('have.text', dataUser.uniqueIdentifier)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'padding-left', '8px')
    cy.get('[data-testid="wrap"]').should('have.css', 'margin-top', '4px')
    cy.get('[data-testid="accordion"]').should('have.css', 'cursor', 'pointer').and('have.css', 'margin-top', '16px')
    cy.get('[data-testid="arrow"]').should('have.css', 'padding-top', '4px').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelAccordion"]')
      .should('have.css', 'padding-left', '12px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="changeAccount"]')
      .should('have.css', 'cursor', 'pointer')
      .and('have.css', 'margin-top', '16px')
    cy.get('[data-testid="refresh"]')
      .should('have.css', 'padding-top', '4px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelChangeAccount"]')
      .should('have.css', 'padding-left', '12px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })
})
