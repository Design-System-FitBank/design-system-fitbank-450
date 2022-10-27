import React from 'react'
import 'cypress-real-events/support'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../../theme'
import { InputCheckboxItem } from '.'
import { faker } from '@faker-js/faker'

describe('Checkbox', () => {
  const option = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente checkbox', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputCheckboxItem option={option} />
      </ThemeDSProvider>
    )

    cy.get('[data-testid="checkbox"]')
      .should('have.css', 'width', '15px')
      .and('have.css', 'height', '15px')
      .and('have.css', 'border-radius', '3px')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve ser o componente checkbox hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputCheckboxItem option={option}/>
      </ThemeDSProvider>
    )

    cy.get('[data-testid="checkbox"]').realHover()
    cy.get('[data-testid="checkbox"]')
      .should('have.css', 'width', '15px')
      .and('have.css', 'height', '15px')
      .and('have.css', 'border-radius', '3px')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
  })

  it('Deve ser o componente checkbox checkado', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputCheckboxItem checked={true} option={option} />
      </ThemeDSProvider>
    )

    cy.get('[data-testid="checkbox"]')
      .should('have.css', 'width', '15px')
      .and('have.css', 'height', '15px')
      .and('have.css', 'border-radius', '3px')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')

    cy.get('[data-testid="checkbox-icon"]').should('not.be.empty')
  })

  it('Deve ser o componente checkbox com label', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <InputCheckboxItem option={option} />
      </ThemeDSProvider>
    )

    cy.get('[data-testid="checkbox"]')
      .should('have.css', 'width', '15px')
      .and('have.css', 'height', '15px')
      .and('have.css', 'border-radius', '3px')
      .and('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')

    cy.get('[data-testid="typography"]').should('exist').and('have.css', 'color', 'rgb(50, 55, 81)')

    cy.get(`[data-testid="container-${option}"]`).should('have.css', 'gap', '26px')
  })
})
