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

  it('Deve ser o InputRadio quando a direction informada for column', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputRadio title={title} optionsList={list} direction={'column'} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]').should('have.css', 'flex-direction', 'column')
  })

  it('Deve ser o InputRadio quando a direction informada for row', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputRadio title={title} optionsList={list} direction={'row'} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio-container"]').should('have.css', 'flex-direction', 'row')
  })

  list.forEach((text: string) => {
    it(`Deve ser o texto ${text} da lista de InputRadio`, () => {
      cy.mount(
        <ThemeDSProvider theme={Theme}>
          <GlobalStyles />
          <InputRadio title={title} optionsList={list} />
        </ThemeDSProvider>
      )
      cy.contains(text).should('exist').and('have.text', text)
    })
  })
})
