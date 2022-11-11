import React from 'react'

import { faker } from '@faker-js/faker'
import 'cypress-real-events/support'

import { NavButton } from '.'
import { GlobalStyles, Theme, ThemeDSProvider } from '../../theme'

describe('NavButton Default', () => {
  const icon = 'moneyNote'
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {label}
        </NavButton>
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
  it('Deve ter um label para duas linhas', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')}>
          {faker.lorem.sentence(5)}
        </NavButton>
      </ThemeDSProvider>
    )
      cy.get('[data-testid="nav-button"]')
        .get('[data-testid="nav-label"]')
        .should('have.css', 'width', '80px')
        .and('have.css', 'height', '30px')
  })

  it('Deve ser a div que contém o ícone', () => {
    cy.get(`[data-testid=${icon}]`)
      .should('be.visible')
      .and('have.css', 'width', '38px')
      .and('have.css', 'height', '38px')
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
        <NavButton
          icon={icon}
          onClick={cy.stub().as('onclick')}
          disabled
        >
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'border', '1px solid rgb(196, 196, 196)')
      .and('have.css', 'color', 'rgb(196, 196, 196)')
      .and('have.css', 'box-shadow', 'none')
      .and('have.css', 'cursor', 'auto')
  })
})

describe('NavButton Small', () => {
  const icon = 'moneyNote'
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton
          icon={icon}
          onClick={cy.stub().as('onclick')}
          size={'small'}
        />
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Small quando passar o size small', () => {
    cy.get('[data-testid="nav-button"]')
      .should('have.css', 'width', '54px')
      .and('have.css', 'height', '54px')

    cy.get('[data-testid="caption"]').should('not.exist')
  })
})

describe('NavButton Large', () => {
  const icon = 'moneyNote'
  const label = faker.lorem.word()
  beforeEach(() => {
    cy.wait(100)
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'large'}>
          {label}
        </NavButton>
      </ThemeDSProvider>
    )
  })
  afterEach(() => {
    cy.wait(100)
  })
  it('Deve ser o componente Large quando passar o size large', () => {
      cy.get('[data-testid="nav-button"]')
        .should('have.css', 'width', '160px')
        .and('have.css', 'height', '56px')
        .and('have.css', 'flex-direction', 'row')
        .and('have.css', 'gap', '8px')
        .and('have.css', 'padding', '8px')
        .get('[data-testid="nav-labelLarge"]')
        .should('have.css', 'width', '96px')
        .and('have.css', 'height', '32px')
        .and('have.css', 'justify-content', 'flex-start')
  })
  it('Deve ter label com duas linhas', () => {
    cy.mount(
      <ThemeDSProvider theme={Theme}>
        <GlobalStyles />
        <NavButton icon={icon} onClick={cy.stub().as('onclick')} size={'large'}>
          {faker.lorem.sentence(5)}
        </NavButton>
      </ThemeDSProvider>
    )
      cy.get('[data-testid="nav-button"]')
        .get('[data-testid="nav-labelLarge"]')
        .should('have.css', 'width', '96px')
        .and('have.css', 'height', '32px')
        .and('have.css', 'justify-content', 'flex-start')
  })
})
