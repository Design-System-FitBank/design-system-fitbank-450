import 'cypress-real-events/support'

import { GlobalStyles, ThemeDSProvider } from '../../theme'

import { PinToken } from './'
import React from 'react'
import { faker } from '@faker-js/faker'
import { mount } from 'cypress/react18'

describe('PinToken', () => {
  beforeEach(() => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <PinToken onPinChange={cy.stub().as('onPinChange')} />
      </ThemeDSProvider>
    )
    cy.wait(500)
  })

  afterEach(() => {
    cy.wait(500)
  })

  it('Deve conter o componente token com um conjunto de 6 inputs horizontalmente', () => {
    cy.get('[data-testid = "container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'row')
      .children()
      .should('have.length', 6)
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
      .should('have.css', 'width', '44px')
      .and('have.css', 'height', '44px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      // .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '24px')
  })

  it('Deve conter o estado Hover com uma aparência da elevação do componente', () => {
    cy.get('[data-testid="pinToken-2"]').realHover()
    cy.wait(800)
    cy.get('[data-testid="pinToken-2"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  it('Deve conter o estado Focused quando o pinToken for clicado', () => {
    cy.get('[data-testid="pinToken-0"]').click()
    cy.get('[data-testid="pinToken-0"]').should('have.css', 'border', '1px solid rgb(50, 56, 79)')
  })

  it('Deve conter o estado Error quando o pinToken clicado for digitado um caractere for diferente de um numero', () => {
    const isNaNChar = faker.random.alpha()

    cy.get('[data-testid="pinToken-0"]').type(isNaNChar).should('have.css', 'border', '1px solid rgb(234, 62, 62)')
  })

  const validPin = faker.datatype.number({ min: 0, max: 9 })

  it('Deve conter o estado Filed quando o pinToken clicado for digitado um numero', () => {
    cy.get('[data-testid="pinToken-0"]')
      .type(validPin.toString())
      .should('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'line-height', '24px')
  })

  it('Deve conter o estado Disabled', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <PinToken onPinChange={cy.stub().as('onChange')} disabled />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "pinToken-0"]')
      .and('have.css', 'border', '1px solid rgb(174, 174, 174)')
      .and('have.css', 'background-color', 'rgb(232, 232, 232)')
  })

  it('Dado o primeiro elemento já preenchido, então o elemento seguinte ficará focado e pronto para preencher', () => {
    cy.get('[data-testid = "pinToken-0"]').type(validPin.toString()).wait(100).should('not.have.focus')
    cy.get('[data-testid = "pinToken-1"]').should('have.focus').and('have.css', 'border', '1px solid rgb(50, 56, 79)')
  })

  const pinValues = Array(6).fill(faker.datatype.number({ max: 9 }))

  it('Deve a chamar a função onPinChange', () => {
    pinValues.forEach((pin, index) => {
      cy.get(`[data-testid="pinToken-${index}"]`).type(pin.toString())
    })
    cy.get('@onPinChange').should('have.been.calledWithExactly', pinValues)
  })

  it('Deve conter o estado password', () => {
    mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <PinToken onPinChange={cy.stub().as('onChange')} isPassword />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'row')
      .children()
      .should('have.length', 4)
    cy.get('[data-testid = "pinToken-0"]').type(validPin.toString()).wait(100).should('not.have.focus')
    cy.get('[data-testid = "pinToken-1"]').type(validPin.toString()).wait(100).should('not.have.focus')
    cy.get('[data-testid = "pinToken-2"]').type(validPin.toString()).wait(100).should('not.have.focus')
    cy.get('[data-testid = "pinToken-3"]').type(validPin.toString()).wait(100).should('have.focus')
  })
})
