import React from 'react'

import { mount } from 'cypress/react18'
import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { PinToken } from '.'

describe('PinToken', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter um container por volta do PinToken', () => {
    cy.get('[data-testid = "container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'gap', '16px')
  })

  it('Deve conter o PinToken default', () => {
    cy.get('[data-testid = "pinToken-0"]')
      .should('have.css', 'width', '42px')
      .and('have.css', 'height', '42px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'line-height', '24px')
  })

  it('Deve conter o estado Hover com uma aparencia da elevação do componente', () => {
    cy.get('[data-testid="pinToken-0"]').realHover()
    cy.get('[data-testid="pinToken-0"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve conter o estado Focused quando o pinToken for clicado', () => {
    cy.get('[data-testid="pinToken-0"]').click()
    cy.get('[data-testid="pinToken-0"]').should('have.css', 'border', '1px solid rgb(1, 7, 22)')
  })

  it('Deve conter o estado Error quando o pinToken clicado for digitado um caractere for diferente de um numero', () => {
    const isNaNChar = faker.random.alpha()

    cy.get('[data-testid="pinToken-0"]')
      .click()
      .type(isNaNChar)
      .should('have.css', 'border', '1px solid rgb(234, 62, 62)')
  })

  const validPin = faker.random.numeric(1)

  it('Deve conter o estado Filed quando o pinToken clicado for digitado um numero', () => {
    cy.get('[data-testid="pinToken-0"]')
      .click()
      .type(validPin)
      .should('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'line-height', '24px')
  })

  it('Deve conter o estado Disabled', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken onChange={cy.stub().as('onChange')} disabled />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "pinToken-0"]')
      .and('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'background-color', 'rgb(196, 196, 196)')
  })

  const pinValues = [
    faker.random.numeric(1),
    faker.random.numeric(1),
    faker.random.numeric(1),
    faker.random.numeric(1),
    faker.random.numeric(1),
    faker.random.numeric(1)
  ]

  it.only('Deve a chamar a função onPinChange', () => {
    pinValues.forEach((pin, index) => {
      cy.get(`[data-testid="pinToken-${index}"]`).click().type(pin)
    })
    cy.get('@onPinChange').should('have.been.calledOnce')
  })

  it('Dado o primeiro elemento já preenchido, então o elemento seguinte ficará focado e pronto para preencher', () => {
    cy.get('[data-testid = "pinToken-0"]').click().type(validPin).wait(100).should('not.have.focus')
    cy.get('[data-testid = "pinToken-1"]').should('have.focus').and('have.css', 'border', '1px solid rgb(1, 7, 22)')
  })
})
