import React from 'react'

import { mount } from 'cypress/react18'
import 'cypress-real-events/support'

import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'
import { PinToken } from '.'

describe('PinToken', () => {
  beforeEach(() => {
    cy.wait(100)
  })

  afterEach(() => {
    cy.wait(100)
  })

  it('Deve conter um container por volta do PinToken', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
      .should('have.css', 'display', 'flex')
      .and('have.css', 'flex-direction', 'row')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'gap', '16px')
  })

  it('Deve conter o PinToken default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
    cy.get('[data-testid = "pinToken"]')
      .should('have.css', 'width', '41.9886360168457px')
      .and('have.css', 'height', '41.9886360168457px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '0.994318px solid rgb(196, 196, 196)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'line-height', '24px')
  })
  it('Deve conter o PinToken default', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid = "container"]')
    cy.get('[data-testid = "pinToken"]')
      .should('have.css', 'width', '41.9886360168457px')
      .and('have.css', 'height', '41.9886360168457px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'border', '0.994318px solid rgb(196, 196, 196)')
      .and('have.css', 'border-radius', '6px')
      .and('have.css', 'text-align', 'center')
      .and('have.css', 'font-size', '18px')
      .and('have.css', 'line-height', '24px')
  })

  it('Deve conter o estado Hover com uma aparencia da elevação do componente', () => {
    mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <PinToken onChange={cy.stub().as('onChange')} />
      </ThemeDSProvider>
    )
    cy.get('[data-testid="pinToken"]').realHover()
    cy.get('[data-testid="pinToken"]').should('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
  })

  // it('Deve a chamar a função onPinChange', () => {
  //   cy.get('[data-testid="pinToken"]').click()
  //   cy.get('@onPinChange').should('have.been.calledOnce')
  // })
})
