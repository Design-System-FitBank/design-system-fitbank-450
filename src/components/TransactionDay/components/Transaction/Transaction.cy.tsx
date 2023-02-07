import React from 'react'
import { Transaction, TransactionProps } from '.'
import { mount } from 'cypress/react18'
import { GlobalStyles, ThemeDSProvider } from '../../../../theme'

const transactions: TransactionProps = {
  transactions: {
    title: 'Transferência Recebida',
    establishment: 'Lucas Felipe',
    value: 2000,
    operationType: 41
  }
}

const transactionsBigValue: TransactionProps = {
  transactions: {
    title: 'Transferência Recebida',
    establishment: 'Lucas Felipe',
    value: 20000000,
    operationType: 41
  }
}

const transactionsDebit: TransactionProps = {
  transactions: {
    title: 'Débito em conta',
    establishment: 'Lucas Felipe',
    value: -200,
    operationType: 41
  }
}

beforeEach(() => {
  cy.mount(
    <ThemeDSProvider>
      <GlobalStyles />
      <Transaction transactions={transactions.transactions} />
    </ThemeDSProvider>
  )
  cy.wait(100)
})
afterEach(() => cy.wait(100))

it('Deve mostrar o componente Transaction com Crédito', () => {
  cy.viewport(700, 700)
  mount(
    <ThemeDSProvider>
      <GlobalStyles />
      <Transaction transactions={transactions.transactions} />
    </ThemeDSProvider>
  )
  cy.get('[data-testid = "container"]')
    .should('have.css', 'height', '84px')
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
    .should('have.css', 'min-width', '320px')
    .and('have.css', 'height', '64px')
    .and('have.css', 'align-items', 'center')
  cy.get('[data-testid = "button"]')
    .and('have.css', 'min-width', '320px')
    .and('have.css', 'margin-top', '16px')
    .and('have.css', 'display', 'flex')
    .and('have.css', 'flex-direction', 'row')
    .and('have.css', 'align-items', 'center')
})

it('Deve mostrar o componente Transaction com Crédito com valor gande', () => {
  cy.viewport(700, 700)
  mount(
    <ThemeDSProvider>
      <GlobalStyles />
      <Transaction transactions={transactionsBigValue.transactions} />
    </ThemeDSProvider>
  )
  cy.get('[data-testid = "container"]')
    .should('have.css', 'height', '84px')
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
    .should('have.css', 'min-width', '320px')
    .and('have.css', 'height', '64px')
    .and('have.css', 'align-items', 'center')
  cy.get('[data-testid = "button"]')
    .and('have.css', 'min-width', '320px')
    .and('have.css', 'margin-top', '16px')
    .and('have.css', 'display', 'flex')
    .and('have.css', 'flex-direction', 'row')
    .and('have.css', 'align-items', 'center')
})

it('Deve mostrar o componente Transaction com Débito', () => {
  cy.viewport(700, 700)
  mount(
    <ThemeDSProvider>
      <GlobalStyles />
      <Transaction transactions={transactionsDebit.transactions} />
    </ThemeDSProvider>
  )
  cy.get('[data-testid = "container"]')
    .should('have.css', 'height', '84px')
    .and('have.css', 'display', 'flex')
    .and('have.css', 'align-items', 'center')
    .and('have.css', 'flex-direction', 'row')
    .and('have.css', 'justify-content', 'space-between')
    .and('have.css', 'border-bottom', '1px solid rgb(232, 232, 232)')
  cy.get('[data-testid = "iconMoney"]')
    .should('have.css', 'color', 'rgb(234, 62, 62)')
    .and('have.css', 'margin-right', '24px')
    .and('have.css', 'height', '36px')
    .and('have.css', 'width', '36px')
    .and('have.css', 'cursor', 'pointer')
  cy.get('[data-testid = "details"]')
    .should('have.css', 'min-width', '320px')
    .and('have.css', 'height', '64px')
    .and('have.css', 'align-items', 'center')
  cy.get('[data-testid = "button"]')
    .and('have.css', 'min-width', '320px')
    .and('have.css', 'margin-top', '16px')
    .and('have.css', 'display', 'flex')
    .and('have.css', 'flex-direction', 'row')
    .and('have.css', 'align-items', 'center')
})
