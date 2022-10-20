import { faker } from '@faker-js/faker'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { InputCheckbox } from '.'

describe('Input Checkbox', () => {
  const title = faker.lorem.words()
  const list = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]
  it('Deve ser o componente Input Checkbox com lista de opções', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputCheckbox title={title} optionsList={list} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input-checkbox"]')
      .should('not.be.empty')
      .and('have.css', 'text-transform', 'capitalize')
      .and('have.css', 'color', 'rgb(50, 55, 81)')

    cy.get('[data-testid="input-checkbox-title"]').should('have.text', title)
  })
})
