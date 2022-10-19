import React from 'react'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Toggle } from '.'

describe('Toggle', () => {
  beforeEach(() => {
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter o toggle default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "toggle"]')
      .should('have.css', 'border', '1px solid rgb(50, 55, 81)')
      .and('have.css', 'width', '32px')
      .and('have.css', 'height', '16px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'background-color', 'rgb(235, 231, 231)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'transition', 'all 1s ease 0s')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve conter um switcher', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'width', '12px')
      .and('have.css', 'height', '12px')
      .and('have.css', 'border-radius', '50%')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'transition', 'all 0.8s ease 0s')
      .and('have.css', 'transform', 'matrix(1, 0, 0, 1, 1.23636, 0)')
  })

  const labelTxt = faker.lorem.word()

  it('Deve conter um toggle com um titulo', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle title={labelTxt} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "bodyLarge"]').should('have.text', labelTxt)
  })

  it('Deve mudar a cor de fundo ao clicar no toggle', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "toggle"]').click()
    cy.get('[data-testid = "toggle"]').should('have.css', 'background-color', 'rgb(50, 55, 81)')
  })

  it('Deve conter uma animação do switcher ao clicar no toggle', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "switcher"]').click()
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'transform', 'matrix(1, 0, 0, 1, 17.3091, 0)')
  })
})
