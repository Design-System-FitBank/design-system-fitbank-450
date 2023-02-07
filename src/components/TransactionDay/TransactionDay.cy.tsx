import React from 'react'
import { GlobalStyles, ThemeDSProvider } from '../../theme'
import { DayTransactionsProps, TransactionDay } from '.'

const transactionDay: DayTransactionsProps = {
  dayTransactions: [
    {
      month: 'Jan',
      day: 10,
      transactions: [
        { title: 'Transferência Recebida', establishment: 'Lucas Felipe', value: 2000000000, operationType: 41 },
        { title: 'Débito em conta', establishment: 'Medeiros', value: -2000000000, operationType: 41 }
      ]
    },
    {
      month: 'Fev',
      day: 10,
      transactions: [{ title: 'Transferência Recebida', establishment: 'Lucas Felipe', value: 20, operationType: 41 }]
    }
  ]
}

describe('Button Default', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <TransactionDay dayTransactions={transactionDay.dayTransactions} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })
  afterEach(() => cy.wait(100))

  it('Deve mostrar o componente TransactionDay', () => {
    cy.viewport(762, 700)
    cy.get('[data-testid = "transactionDay"]')
      .and('have.css', 'height', '84px')
      .and('have.css', 'border-top', '0px none rgb(174, 174, 174)')
      .and('have.css', 'border-left', '0px none rgb(174, 174, 174)')
      .and('have.css', 'border-bottom', '0px none rgb(174, 174, 174)')
      .and('have.css', 'border-radius', '2px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'justify-content', 'space-between')
      .and('have.css', 'align-items', 'center')
    cy.get('[data-testid = "transaction"]').should('have.css', 'display', 'flex')
    cy.get('[data-testid = "transactionDate"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) -1px -1px 1px 0px')
      .and('have.css', 'padding-top', '8px')
      .and('have.css', 'padding-right', '8px')
      .and('have.css', 'padding-bottom', '8px')
      .and('have.css', 'padding-left', '8px')
    cy.get('[data-testid = "transactionCard"]').should('have.css', 'margin-left', '20px')
  })
})
