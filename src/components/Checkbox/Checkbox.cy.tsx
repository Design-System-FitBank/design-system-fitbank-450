import React from 'react'
import 'cypress-real-events/support'
import { GlobalStyles, ThemeDSProvider } from '../../theme'
import { Checkbox } from '.'

describe('Checkbox', () => {
  beforeEach(() => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Checkbox onCheck={cy.stub().as('onChecked')} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente checkbox', () => {
    cy.get('[data-testid="checkbox"]')
      .should('have.css', 'width', '16px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'border-radius', '4px')
      .and('have.css', 'border', '1px solid rgb(50, 56, 79)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve ser o componente checkbox hover', () => {
    cy.get('[data-testid="checkbox"]').realHover()
    cy.get('[data-testid="checkbox"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve ser o componente checkbox checkado por parâmetro', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Checkbox onCheck={cy.stub().as('onChecked')} checked/>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="checkbox"]')
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('[data-testid="checkbox-icon"]').should('not.be.empty')
  })

  it('Deve ser o componente checkbox checkado por clique e se chama a função onChecked corretamente', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Checkbox onCheck={cy.stub().as('onChecked')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="checkbox"]')
      .click()
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')

    cy.get('@onChecked').should('have.been.calledWith', true)
  })
})
