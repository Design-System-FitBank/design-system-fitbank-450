import { faker } from '@faker-js/faker'
import React from 'react'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Checkbox } from '.'

describe('Input Checkbox', () => {
  const title = faker.lorem.words()
  const list = [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()]

  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Checkbox title={title} optionsList={list} onSelect={cy.stub().as('onSelect')} />
      </ThemeDSProvider>
    )
  })
  it('Deve ser o componente Input Checkbox Default', () => {
    cy.get('[data-testid="input-checkbox"]').children().should('have.length', list.length)
    cy.get('[data-testid="input-checkbox"]')
      .should('have.css', 'flex-direction', 'column')
      .and('have.css', 'gap', '52px')

    cy.get(`[data-testid="container-${list[0]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWith', [list[0]])
    cy.get(`[data-testid="container-${list[1]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWith', [list[0], list[1]])
    cy.get(`[data-testid="container-${list[1]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWith', [list[0]])

    cy.get('[data-testid="input-checkbox-title"]').should('have.text', title)
  })

  it('Deve ser o componente direção linha quando isRow for true', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Checkbox
          title={title}
          isRow
          optionsList={list}
          onSelect={cy.stub().as('onSelect')}
        />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="input-checkbox"]')
      .should('have.css', 'flex-direction', 'row')
      .and('have.css', 'gap', '34px')
  })

  it('Deve ser o componente função OnSelect com o parametros corretos', () => {

    cy.get(`[data-testid="container-${list[0]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWithExactly', [list[0]])
    cy.get(`[data-testid="container-${list[0]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWithExactly', [])
    cy.get(`[data-testid="container-${list[0]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWithExactly', [list[0]])
    cy.get(`[data-testid="container-${list[1]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWithExactly', [list[0], list[1]])
    cy.get(`[data-testid="container-${list[1]}"]`).click()
    cy.get('@onSelect').should('have.been.calledWithExactly', [list[0]])
  })
})
