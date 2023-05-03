import React from 'react'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Toggle } from '.'

describe('Toggle', () => {
  beforeEach(() => {
    cy.wait(100)
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Toggle isActive={cy.stub().as('isActive')} />
      </ThemeDSProvider>
    )
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o toggle default', () => {
    cy.get('[data-testid = "toggle"]')
      .should('have.css', 'border', '1px solid rgb(50, 56, 79)')
      .and('have.css', 'width', '32px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'background-color', 'rgb(205, 205, 205)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve conter um switcher', () => {
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'width', '12px')
      .and('have.css', 'height', '12px')
      .and('have.css', 'border-radius', '50%')
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
  })

  const labelTxt = faker.lorem.word()

  it('Deve conter um toggle com um titulo', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Toggle isActive={cy.stub().as('isActive')} title={labelTxt} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'overflow', 'hidden')
      .and('have.css', 'gap', '16px')
    cy.get('[data-testid = "bodyLarge"]').should('have.text', labelTxt)
  })

  it('Deve mudar a cor de fundo ao clicar no toggle e a animação do toggle', () => {
    cy.get('[data-testid = "toggle"]').should('have.css', 'background-color', 'rgb(205, 205, 205)')
    cy.get('[data-testid = "toggle"]').click()
    cy.get('[data-testid = "toggle"]').should('have.css', 'background-color', 'rgb(50, 56, 79)')
    cy.get('[data-testid = "toggle"]').click()
    cy.get('[data-testid = "toggle"]').should('have.css', 'background-color', 'rgb(205, 205, 205)')
  })

  it('Deve conter uma animação do switcher ao clicar no toggle', () => {
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'left', '2px')
    cy.get('[data-testid = "toggle"]').click()
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'left', '16px')
    cy.get('[data-testid = "toggle"]').click()
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'left', '2px')
  })

  it('Deve a chamar a função isActive', () => {
    cy.get('[data-testid = "toggle"]').click()
    cy.get('@isActive').should('have.been.calledWithExactly', true)
    cy.get('[data-testid = "toggle"]').click()
    cy.get('@isActive').should('have.been.calledWithExactly', false)
  })
})
