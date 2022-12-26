import React from 'react'
import { faker } from '@faker-js/faker'

describe('TransactionList Component', () => {
  const titleFake = 'Titulo'
  const establishmentFake = 'Mercado'
  const operationFake = 'Operação'
  const valueFake = faker.finance.amount(5, 50)

  it('Deve mostrar o componente TransactionList', () => {
    cy.get('[data-testid="details"]')
      .should('have.text', titleFake)
      .and('have.text', establishmentFake)
      .and('have.text', operationFake)
      .and('have.value', valueFake)
      .and('have.css', 'align-items', 'center')
    cy.get('[data-testid="icon"]').get('[data-testid="moneyLn"]').should('exist')
    cy.get('[data-testid="icon"]').get('[data-testid="moneyOut"]').should('not.exist')
  })
})
