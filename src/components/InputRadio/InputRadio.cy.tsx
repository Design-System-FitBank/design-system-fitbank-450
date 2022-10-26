import React from 'react'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { InputRadio } from '.'

describe('InputRadio', () => {
  const title = faker.lorem.words()
  const list = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

  it('Deve ser o label InputRadio Default', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputRadio title={title} optionsList={list} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]')
      .should('have.css', 'text-transform', 'capitalize')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
  })

  it('Deve ser o InputRadio default', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputRadio title={title} optionsList={list} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="container"]')
      .should('have.css', 'flex-direction', 'column')
    cy.get('[data-testid="container"]')
      .children()
      .should('have.length', list.length)
  })

  list.forEach((text: string, index: number) => {
    it(`Deve ser o texto ${text} da lista de InputRadio`, () => {
      cy.mount(
        <ThemeDSProvider theme={Theme}>
          <GlobalStyles />
          <InputRadio title={title} optionsList={list} />
        </ThemeDSProvider>
      )
      cy.get(`[data-testid="container"] > :nth-child(${index + 1})`).should('have.text', text)
    })
  })

  it('Deve ser o InputRadio quando isRow for passado', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputRadio title={title} optionsList={list} isRow />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]').should('have.css', 'flex-direction', 'row')
  })
})
