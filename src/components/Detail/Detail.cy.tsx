import { mount } from 'cypress/react18'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Detail } from '.'

describe('Detail component', () => {
  const dataAccount = {
    businessUnit: 'ACME Bank',
    accountName: 'KIMBAP ASIAN FOOD LTDA',
    userId: '12345678-910',
    bank: '450 - FitBank Pagamentos SA',
    bankBranch: '0000001',
    bankAccount: '02021-5',
    accountId: '020202.02020.202.0'
  }

  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Detail accountData={dataAccount} collapsed={false} copyAccountData={cy.stub().as('copyAccountData')} />
      </ThemeDSProvider>
    )
  })

  it('deve mostrar componente default', () => {
    cy.get('[data-testid="avatar"]').get('[data-testid="enterprise"]').should('exist')
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowDown"]').should('exist')
    cy.get('[data-testid="arrow"]').get('[data-testid="arrowUp"]').should('not.exist')
    cy.get('[data-testid="businessUnit"]')
      .should('have.text', dataAccount.businessUnit)
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'margin-top', '20px')
    cy.get('[data-testid="account"]')
      .should('have.text', dataAccount.accountName)
      .and('have.css', 'text-transform', 'uppercase')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'margin-top', '8px')
    cy.get('[data-testid="labelIdentifier"]')
      .should('have.text', 'CPF/CNPJ:')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="userId"]')
      .should('have.text', dataAccount.userId)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'padding-left', '8px')
    cy.get('[data-testid="wrap"]').should('have.css', 'margin-top', '4px')
    cy.get('[data-testid="accordion"]').should('have.css', 'cursor', 'pointer')
    cy.get('[data-testid="arrow"]').should('have.css', 'padding-top', '4px').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelAccordion"]')
      .should('have.css', 'padding-left', '12px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="changeAccount"]')
      .should('have.css', 'cursor', 'pointer')
      .and('have.css', 'margin-top', '24px')
    cy.get('[data-testid="refresh"]').should('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelChangeAccount"]')
      .should('have.css', 'padding-left', '8px')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('deve mostrar componente em estado open', () => {
    cy.get('[ data-testid="buttonData"]').click()
    cy.get('[data-testid="avatar"]').get('[data-testid="arrowUp"]').should('exist')
    cy.get('[data-testid="avatar"]').get('[data-testid="arrowDown"]').should('not.exist')
    cy.get('[data-testid="labelNameBank"]').should('have.text', 'Banco:').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="bank"]').should('have.text', dataAccount.bank).and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelBranch"]').should('have.text', 'Ag:').and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="branch"]')
      .should('have.text', dataAccount.bankBranch)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="labelBanckAccount"]')
      .should('have.text', 'Conta:')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
    cy.get('[data-testid="bankAccount"]')
      .should('have.text', dataAccount.bankAccount)
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('deve mostrar componente em estado close após receber um click no estado open', () => {
    cy.get('[ data-testid="buttonData"]').click().wait(800)
    cy.get('[data-testid="labelNameBank"]').should('be.visible')
    cy.get('[data-testid="bank"]').should('be.visible')
    cy.get('[data-testid="labelBranch"]').should('be.visible')
    cy.get('[ data-testid="buttonData"]').click()
    cy.get('[data-testid="labelNameBank"]').should('not.be.visible')
    cy.get('[data-testid="bank"]').should('not.be.visible')
    cy.get('[data-testid="labelBranch"]').should('not.be.visible')
  })

  it('deve mostrar o componente em estado collapsed', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Detail accountData={dataAccount} collapsed={true} copyAccountData={cy.stub().as('copyAccountData')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="avatar"]').get('[data-testid="enterprise"]').should('exist')
    cy.get('[data-testid="buttonData"]').should('not.be.visible')
    cy.get('[data-testid="arrow"]').should('not.be.visible')
    cy.get('[data-testid="labelAccordion"]').should('not.be.visible')
    cy.get('[data-testid="dataBank"]').should('not.be.visible')
    cy.get('[data-testid="buttonCopy"]').get('[data-testid="share"]').should('be.visible')
    cy.get('[data-testid="buttonCopy"]').should('have.css', 'justify-content', 'center')
    cy.get('[data-testid="iconCollapsed"]')
      .should('have.css', 'width', '46px')
      .and('have.css', 'height', '28px')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'padding-left', '12px')
    cy.get('[data-testid="refresh"]').get('[data-testid="enterprise"]').should('exist')
    cy.get('[data-testid="labelChangeAccount"]').should('not.exist')
  })

  it('deve mostrar se foi chamada a função que copia os dados após o clicar no botão copiar', () => {
    cy.get('[data-testid="buttonCopy"]').click()
    cy.get('@copyAccountData').should('have.been.called')
  })
})
