import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { Tab } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('Tab Default', () => {
  const icon = 'keys'
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Tab icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </Tab>
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Default', () => {
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'width', '90px')
      .and('have.css', 'height', '90px')
      .and('have.css', 'padding', '8px 4px')
      .and('have.css', 'gap', '4px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'border-radius', '16px')
      .and('have.css', 'overflow', 'hidden')
      .and('have.text', label)

    cy.get('[data-testid="nav-button"]').click()
    cy.get('@onclick').should('have.been.calledOnce')
  })

  it('Deve ser o componente Default no estado Hover', () => {
    cy.get('[data-testid="nav-button"]').realHover()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(196, 196, 196)')
  })

  it('Deve ser o componente Default no estado Active', () => {
    cy.get('[data-testid="nav-button"]').realMouseDown()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(50, 55, 81)')
  })

  it('Deve ser o componente Default no estado Disabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <Tab icon={icon} onClick={cy.stub().as('onclick')} disabled>
          {label}
        </Tab>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
      .and('have.css', 'cursor', 'auto')
  })
})
