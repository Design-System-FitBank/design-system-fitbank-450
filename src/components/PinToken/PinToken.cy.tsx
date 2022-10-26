import React from 'react'

import { mount } from 'cypress/react18'
import 'cypress-real-events/support'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { PinToken } from '.'
import { faker } from '@faker-js/faker'

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

  it('Deve conter o estado Filed quando o pinToken clicado for digitado um numero', () => {
    const validPin = faker.random.alphaNumeric()

    cy.get('[data-testid="pinToken-0"]')
      .click()
      .type('1')
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

  // it('Deve a chamar a função onPinChange', () => {
  //   cy.get('[data-testid="pinToken-0"]')
  //     .click()
  //     .type('1')
  //   cy.get('@onPinChange').should('have.been.calledOnce')
  // })

  it('Deve conter ', () => {
    cy.get('[data-testid = "pinToken-0"]')
  })
})
