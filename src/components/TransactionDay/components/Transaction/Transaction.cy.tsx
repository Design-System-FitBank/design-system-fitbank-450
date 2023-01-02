import React from 'react'
import { Transaction, TransactionProps } from '.'
import { mount } from 'cypress/react18'
import { ThemeDSProvider, Theme } from 'design-system-fitbank'
import { GlobalStyles } from 'design-system-fitbank/dist/src/theme'

describe('Transaction', () => {
  const transactions: TransactionProps = {
    transactions: {
      title: 'Transferência Recebida',
      establishment: 'Mercado',
      value: 20,
      operationType: 40
    }
  }

  it('Deve mostrar o componente Transaction', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Transaction transactions={transactions.transactions} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
      .should('have.css', 'width', '500px')
      .and('have.css', 'height', '80px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'justify-content', 'space-between')
      .and('have.css', 'border-bottom', '1px solid rgb(232, 232, 232)')
    cy.get('[data-testid = "iconMoney"]')
      .should('have.css', 'color', 'rgb(12,194,96)')
      .and('have.css', 'height', '36px')
      .and('have.css', 'width', '36px')
      .and('have.css', 'cursor', 'pointer')
      .and('have.css', 'margin-right', '24px')
    cy.get('[data-testid = "details"]')
      .should('have.css', 'height', '64px')
      .and('have.css', 'width', '250px')
      .and('have.css', 'align-items', 'center')
    cy.get('[data-testid = "button"]')
      .should('have.css', 'width', '272px')
      .should('have.css', 'margin-top', '16px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'align-items', 'center')
  })
})

// Valor moneyout
// valor moneyIn
// Botao ver
// Respon
