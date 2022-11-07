import { mount } from 'cypress/react18'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Detail } from '.'

describe('Detail component', () => {
  const dataUser = {
    businessUnit: 'ACME Bank',
    accountName: 'KIMBAP ASIAN FOOD LTDA',
    userId: '12345678-910'
  }
  const dataBank = {
    bank: '450 - FitBank Pagamentos SA',
    bankBranch: '0000001',
    bankAccount: '02021-5',
    accountId: '020202.02020.202.0'
  }

  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Detail dataUser={dataUser} dataBank={dataBank} />
      </ThemeDSProvider>
    )
  })

  it('deve mostrar componente default', () => {
    cy.get('[data-testid="avatar"]').get('[data-testid="arrowDown"]').should('exist')
    cy.get('[data-testid="avatar"]').get('[data-testid="arrowUp"]').should('not.exist')
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
    cy.get('[data-testid="userId"]')
      .should('have.text', dataUser.userId)
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
      .and('have.css', 'margin-top', '28px')
    cy.get('[data-testid="refresh"]').should('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelChangeAccount"]')
      .should('have.css', 'padding-left', '8px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('deve mostrar componente em estado open', () => {
    cy.get('[ data-testid="accordion"]').click()
    cy.get('[data-testid="avatar"]').get('[data-testid="arrowUp"]').should('exist')
    cy.get('[data-testid="avatar"]').get('[data-testid="arrowDown"]').should('not.exist')
    cy.get('[data-testid="labelNameBank"]').should('have.text', 'Banco:').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="bank"]').should('have.text', dataBank.bank).and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelBranch"]').should('have.text', 'Ag:').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="branch"]')
      .should('have.text', dataBank.bankBranch)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelBanckAccount"]')
      .should('have.text', 'Conta:')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="bankAccount"]')
      .should('have.text', dataBank.bankAccount)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('deve mostrar componente em estado close após receber um click no estado open', () => {
    cy.get('[ data-testid="accordion"]').click()
    cy.get('[data-testid="labelNameBank"]').should('exist')
    cy.get('[data-testid="bank"]').should('exist')
    cy.get('[data-testid="labelBranch"]').should('exist')
    cy.get('[ data-testid="accordion"]').click()
    cy.get('[data-testid="labelNameBank"]').should('not.exist')
    cy.get('[data-testid="bank"]').should('not.exist')
    cy.get('[data-testid="labelBranch"]').should('not.exist')
  })
})
