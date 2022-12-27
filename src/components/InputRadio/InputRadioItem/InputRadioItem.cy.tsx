import React from 'react'
import { faker } from '@faker-js/faker'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../../theme'
import { InputRadioItem } from '.'

describe('InputRadioItem', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <InputRadioItem option={option} onclick={cy.stub().as('onclick')} />
      </ThemeDSProvider>
    )
  })
  const option = faker.lorem.word()

  it('Deve ser o componente InputRadioItem', () => {
    cy.get('[data-testid="radio"]')
      .should('have.css', 'width', '16px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'border-radius', '20px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve ser o componente InputRadioItem checkado', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <InputRadioItem option={option} checked={true} onclick={cy.stub().as('onclick')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="radio"]')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
      .and('have.css', 'border', '1px solid rgb(50, 56, 79)')
  })

  it('Deve ser o InputRadioItem com label', () => {
    cy.get('[data-testid="radio-container"]').and('have.css', 'gap', '24px')
    cy.get('[data-testid="body"]').should('exist').and('have.text', option)
  })

  it('Deve chamar a função onclick ao clicar no InputRadioItem', () => {
    cy.get('[data-testid="radio-child"]').click()
    cy.get('@onclick').should('have.been.calledOnceWithExactly', option)
  })
})
