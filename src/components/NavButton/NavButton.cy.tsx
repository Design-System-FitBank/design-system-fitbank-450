import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { Icon } from '../Icon'
import { NavButton } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('NavButton Default', () => {
  const icon = <Icon name='moneyNote' width={38} height={38} />
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Default e quando instanciá-lo devo passar o ícone obrigatoriamente e um título opcional', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
      .get('[data-testid="nav-button"]')
      .should('have.css', 'width', '86px')
      .and('have.css', 'height', '86px')
      .and('have.css', 'border', '1px solid rgba(0, 0, 0, 0)')
      .and('have.css', 'box-shadow', 'rgba(0, 0, 0, 0.1) 2px 2px 4px 0px')
      .and('have.css', 'background-color', 'rgb(255, 255, 255)')
      .and('have.css', 'color', 'rgb(50, 55, 81)')
      .and('have.css', 'justify-content', 'center')
      .and('have.css', 'align-items', 'center')
      .and('have.css', 'flex-direction', 'column')
      .and('have.css', 'border-radius', '16px')

    cy.get('[data-testid="nav-button"]').click()
    cy.get('@onclick').should('have.been.calledOnce')
  })

  it('Deve ser o componente Default no estado Hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]').realHover()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(196, 196, 196)')
  })

  it('Deve ser o componente Default no estado Active', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]').realMouseDown()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(50, 55, 81)')
  })

  it('Deve ser o componente Default no estado Disabled', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} disabled={true} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
  })
})

describe('NavButton Small', () => {
  const icon = <Icon name='moneyNote' width={38} height={38} />
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Small quando passar o size small', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'small'}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
      .get('[data-testid="nav-button"]')
      .should('have.css', 'width', '54px')
      .and('have.css', 'height', '54px')
  })

  it('Deve ser o componente Small quando passar o size small no estado Hover', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'small'}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]').realHover()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(196, 196, 196)')
  })

  it('Deve ser o componente Small quando passar o size small no estado Active', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'small'}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]').realMouseDown()
    cy.get('[data-testid="nav-button"]').should('have.css', 'border', '1px solid rgb(50, 55, 81)')
  })
})
