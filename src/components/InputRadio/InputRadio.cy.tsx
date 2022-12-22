import React from 'react'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Radio } from '.'

describe('InputRadio', () => {
  const title = faker.lorem.words()
  const list = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]


  it('Deve ser o label InputRadio Default', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Radio title={title} optionsList={list} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]')
      .should('have.css', 'flex-direction', 'row')
      .and('have.css', 'text-transform', 'capitalize')
      .and('have.css', 'color', 'rgb(50, 56, 79)')
  })

  it('Deve ser o InputRadio quando a isColumn for informado', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Radio title={title} optionsList={list} isColumn/>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]').should('have.css', 'flex-direction', 'column')
  })

  list.forEach((text: string) => {
    it(`Deve ser o texto ${text} da lista de InputRadio`, () => {
      cy.mount(
        <ThemeDSProvider>
          <GlobalStyles />
          <Radio title={title} optionsList={list} />
        </ThemeDSProvider>
      )
      cy.contains(text).should('exist').and('have.text', text)
    })
  })
})
