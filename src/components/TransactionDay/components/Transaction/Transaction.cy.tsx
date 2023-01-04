import React from 'react'
import { Transaction, TransactionProps } from '.'
import { mount } from 'cypress/react18'
import { ThemeDSProvider, Theme } from 'design-system-fitbank'
import { GlobalStyles } from 'design-system-fitbank/dist/src/theme'

const transactions: TransactionProps = {
  transactions: {
    title: 'Transferência Recebida',
    establishment: 'Lucas Felipe',
    value: 200,
    operationType: 41
  }
}

beforeEach(() => {
  cy.mount(
    <ThemeDSProvider theme={Theme}>
      <GlobalStyles />
      <Transaction transactions={transactions.transactions} />
    </ThemeDSProvider>
  )
  cy.wait(100)
})
afterEach(() => cy.wait(100))

it('Deve mostrar o componente Transaction com Crédito', () => {
  cy.viewport(500, 500)
  mount(
    <ThemeDSProvider theme={Theme}>
      <GlobalStyles />
      <Transaction transactions={transactions.transactions} />
    </ThemeDSProvider>
  )
  cy.get('[data-testid = "container"]')
    .should('have.css', 'width', '500px')
    .and('have.css', 'height', '84px')
    .and('have.css', 'display', 'flex')
    .and('have.css', 'align-items', 'center')
    .and('have.css', 'flex-direction', 'row')
    .and('have.css', 'justify-content', 'space-between')
    .and('have.css', 'border-bottom', '1px solid rgb(232, 232, 232)')
  cy.get('[data-testid = "iconMoney"]')
    .should('have.css', 'color', 'rgb(12, 194, 96)')
    .and('have.css', 'margin-right', '24px')
    .and('have.css', 'height', '36px')
    .and('have.css', 'width', '36px')
    .and('have.css', 'cursor', 'pointer')
  cy.get('[data-testid = "details"]')
    .should('have.css', 'width', '280px')
    .and('have.css', 'height', '64px')
    .and('have.css', 'align-items', 'center')
  cy.get('[data-testid = "button"]')
    .and('have.css', 'margin-top', '16px')
    .and('have.css', 'display', 'flex')
    .and('have.css', 'flex-direction', 'row')
    .and('have.css', 'align-items', 'center')
})
