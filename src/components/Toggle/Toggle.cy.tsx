import React from 'react'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { Toggle } from '.'

describe('Toggle', () => {
  beforeEach(() => {
    cy.wait(100)
    mount(
      <ThemeDSProvider theme={Theme}>
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
      .should('have.css', 'border', '0.994318px solid rgb(50, 55, 81)')
      .and('have.css', 'width', '31.988636016845703px')
      .and('have.css', 'height', '15.994318008422852px')
      .and('have.css', 'border-radius', '8px')
      .and('have.css', 'background-color', 'rgb(232, 232, 232)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'transition', 'all 1s ease 0s')
      .and('have.css', 'cursor', 'pointer')
  })

  it('Deve conter um switcher', () => {
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'width', '11.988636016845703px')
      .and('have.css', 'height', '11.988636016845703px')
      .and('have.css', 'border-radius', '50%')
      .and('have.css', 'background-color', 'rgb(50, 55, 81)')
      .and('have.css', 'transition', 'all 0.8s ease 0s')
      .and('have.css', 'transform', 'matrix(1, 0, 0, 1, 1.18182, 0)')
  })

  const labelTxt = faker.lorem.word()

  it('Deve conter um toggle com um titulo', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Toggle isActive={cy.stub().as('isActive')} title={labelTxt} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'flex-start')
      .and('have.css', 'overflow', 'hidden')
      .and('have.css', 'gap', '16px')
    cy.get('[data-testid = "bodyLarge"]').should('have.text', labelTxt)
  })

  it('Deve mudar a cor de fundo ao clicar no toggle', () => {
    cy.get('[data-testid = "toggle"]').click()
    cy.get('[data-testid = "toggle"]').should('have.css', 'background-color', 'rgb(50, 55, 81)')
  })

  it('Deve conter uma animação do switcher ao clicar no toggle', () => {
    cy.get('[data-testid = "switcher"]').click()
    cy.get('[data-testid = "switcher"]')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'transform', 'matrix(1, 0, 0, 1, 16.5455, 0)')
  })

  it('Deve a chamar a função isActive', () => {
    cy.get('[data-testid = "toggle"]').click()
    cy.get('@isActive').should('have.been.calledOnce')
  })
})
