import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { Tab } from '.'
import { GlobalStyles, ThemeDSProvider } from '../../theme'

describe('Tab Default', () => {
  const icon = 'keys'
  const title = faker.lorem.word()
  const description = faker.lorem.words(3)
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Tab icon={icon} title={title} description={description} onClick={cy.stub().as('onclick')} />
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Default', () => {
    cy.get('[data-testid=tab]')
      .should('have.css', 'min-width', '60px')
      .and('have.css', 'max-width', '523px')
      .and('have.css', 'min-height', '90px')
      .and('have.css', 'padding', '14px')
      .and('have.css', 'gap', '16px')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 6px 20px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 56, 79)')
      .and('have.css', 'display', 'flex')
      .and('have.css', 'align-items', 'flex-start')
      .and('have.css', 'flex-direction', 'column')

    cy.get('[data-testid=tab]').click()
    cy.get('@onclick').should('have.been.calledOnce')
  })

  it('Deve ser o componente Default no estado Hover', () => {
    cy.get('[data-testid=tab]').realHover()
    cy.get('[data-testid=tab]').should('have.css', 'border-bottom', '4px solid rgb(50, 56, 79)')
  })

  it('Deve ser o componente Default no estado Active', () => {
    cy.get('[data-testid=tab]').realMouseDown()
    cy.get('[data-testid=tab]')
      .should('have.css', 'border-bottom', '4px solid rgb(252, 214, 105)')
      .and('have.css', 'color', 'rgb(255, 255, 255)')
      .and('have.css', 'background-color', 'rgb(50, 56, 79)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 4px 6px 0px')
  })

  it('Deve ser o componente Default no estado Disabled', () => {
    cy.mount(
      <ThemeDSProvider>
        <GlobalStyles />
        <Tab icon={icon} title={title} description={description} onClick={cy.stub().as('onclick')} disabled />
      </ThemeDSProvider>
    )
    cy.get('[data-testid=tab]')
      .and('have.css', 'color', 'rgb(205, 205, 205)')
      .and('have.css', 'background-color', 'rgb(232, 232, 232)')
      .and('have.css', 'box-shadow', 'none')
      .and('have.css', 'border-bottom', '2px solid rgb(205, 205, 205)')
  })
})
